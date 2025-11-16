# RCAP - Technical Clarifications for Zoer Implementation

## 📋 Specific Answers to Technical Questions

### 1. **Database Schema Confirmation**

#### **Core Tables Structure**
```sql
-- Users Table
Users {
  id: UUID (PK)
  email: VARCHAR (unique)
  password_hash: VARCHAR
  name: VARCHAR
  phone: VARCHAR
  role: ENUM('super_admin', 'state_admin', 'lga_officer', 'field_officer')
  state: VARCHAR (for state_admin+ roles)
  lga: VARCHAR (for lga_officer+ roles)
  avatar_url: VARCHAR
  last_login: TIMESTAMP
  created_at: TIMESTAMP
  updated_at: TIMESTAMP
}

-- Activities Table (Primary Entity)
Activities {
  id: UUID (PK)
  title: VARCHAR
  description: TEXT
  type: ENUM('vaccination', 'health_education', 'emergency_response', 'disease_surveillance', 'other')
  status: ENUM('draft', 'submitted', 'approved', 'rejected', 'completed')
  location_state: VARCHAR
  location_lga: VARCHAR
  location_venue: TEXT
  target_population: INTEGER
  actual_population: INTEGER
  activity_date: DATE
  created_by: UUID (FK → Users.id)
  approved_by: UUID (FK → Users.id, nullable)
  approval_date: TIMESTAMP (nullable)
  rejection_reason: TEXT (nullable)
  created_at: TIMESTAMP
  updated_at: TIMESTAMP
  synced_at: TIMESTAMP (nullable)
}

-- Teams Table
Teams {
  id: UUID (PK)
  name: VARCHAR
  state: VARCHAR
  lga: VARCHAR
  leader_id: UUID (FK → Users.id)
  created_at: TIMESTAMP
}

-- Team Members (Join Table)
TeamMembers {
  id: UUID (PK)
  team_id: UUID (FK → Teams.id)
  user_id: UUID (FK → Users.id)
  role: ENUM('leader', 'member')
  joined_at: TIMESTAMP
}

-- Activity Files Table
ActivityFiles {
  id: UUID (PK)
  activity_id: UUID (FK → Activities.id)
  filename: VARCHAR
  file_type: ENUM('image', 'pdf', 'audio')
  file_size: INTEGER
  file_url: VARCHAR
  uploaded_by: UUID (FK → Users.id)
  uploaded_at: TIMESTAMP
  synced_at: TIMESTAMP (nullable)
}

-- Notifications Table
Notifications {
  id: UUID (PK)
  user_id: UUID (FK → Users.id)
  title: VARCHAR
  message: TEXT
  type: ENUM('approval', 'assignment', 'alert', 'system')
  priority: ENUM('high', 'medium', 'low')
  read: BOOLEAN (default false)
  created_at: TIMESTAMP
  read_at: TIMESTAMP (nullable)
}

-- Sync Queue Table (Offline Support)
SyncQueue {
  id: UUID (PK)
  user_id: UUID (FK → Users.id)
  action_type: ENUM('create_activity', 'update_activity', 'upload_file', 'mark_notification_read')
  entity_id: UUID (reference to local entity)
  entity_data: JSON (store complete entity state)
  retry_count: INTEGER (default 0)
  created_at: TIMESTAMP
  next_retry_at: TIMESTAMP
  status: ENUM('pending', 'syncing', 'completed', 'failed')
}

-- Activity Comments Table
ActivityComments {
  id: UUID (PK)
  activity_id: UUID (FK → Activities.id)
  user_id: UUID (FK → Users.id)
  comment: TEXT
  created_at: TIMESTAMP
}
```

#### **Approval Workflow Path**
YES - Activities follow this exact path:
1. **Draft** (local/offline, not submitted yet)
2. **Submitted** (waiting for approval)
3. **Approved** (accepted, can proceed to completion)
4. **Rejected** (denied, needs revision)
5. **Completed** (activity finished and reported)

**Role-based Approval Rules**:
- Field Officer: Can only create and submit activities
- LGA Officer: Can approve activities within their LGA
- State Admin: Can approve activities within their state
- Super Admin: Can approve any activity

---

### 2. **Offline Sync Strategy**

#### **Sync Priority Order**
```javascript
const SYNC_PRIORITY = {
  1: 'create_activity',      // Highest: New activities
  2: 'update_activity',      // High: Activity updates
  3: 'upload_file',          // Medium: File uploads
  4: 'mark_notification_read' // Low: Notification status
};
```

#### **Conflict Resolution Strategy**
Use **(b) Manual User Selection** with smart defaults:

```javascript
// Conflict Resolution Logic
if (serverTimestamp > localTimestamp) {
  // Show conflict UI with options:
  // 1. Keep Server Version
  // 2. Keep My Version
  // 3. Merge (if applicable)
  // 4. Review Changes Side-by-Side
}

// Default behavior for non-critical fields:
const MERGE_STRATEGY = {
  'title': 'ask_user',
  'description': 'ask_user',
  'target_population': 'take_latest', // Last write wins
  'actual_population': 'take_latest',
  'activity_date': 'ask_user'
};
```

#### **Sync Implementation Details**
```javascript
// Sync Queue Processing
class SyncManager {
  async processQueue() {
    const pendingItems = await SyncQueue.getPending();

    for (const item of pendingItems.sortByPriority()) {
      try {
        await this.syncItem(item);
        await item.markAsCompleted();
      } catch (error) {
        await item.incrementRetry();
        if (item.retryCount > 3) {
          await item.markAsFailed();
          // Notify user of persistent sync failure
        }
      }
    }
  }
}
```

---

### 3. **File Upload Integration**

#### **Upload Strategy**
YES - Use Zoer's built-in file upload with pre-signed URLs for ALL file types:

```javascript
// Upload Configuration
const UPLOAD_CONFIG = {
  allowedTypes: {
    'image': ['jpg', 'jpeg', 'png'],
    'pdf': ['pdf'],
    'audio': ['m4a', 'mp3']
  },
  maxFileSize: {
    'image': 5 * 1024 * 1024, // 5MB
    'pdf': 10 * 1024 * 1024,  // 10MB
    'audio': 5 * 1024 * 1024  // 5MB
  }
};

// Client-side compression BEFORE upload
const COMPRESSION_CONFIG = {
  images: {
    maxWidth: 1920,
    maxHeight: 1920,
    quality: 0.8,
    format: 'jpeg'
  },
  audio: {
    bitrate: '128k',
    format: 'm4a'
  }
};
```

#### **Upload Process**
```javascript
// Step 1: Client-side compression
const compressedFile = await compressFile(file, type);

// Step 2: Generate pre-signed URL from server
const uploadUrl = await getPresignedUrl(filename, type);

// Step 3: Upload directly to storage
const result = await uploadToStorage(compressedFile, uploadUrl);

// Step 4: Record in database (create SyncQueue item for offline)
await ActivityFiles.create({
  activity_id,
  filename: compressedFile.name,
  file_type: type,
  file_size: compressedFile.size,
  file_url: result.url
});
```

---

### 4. **Authentication & Session**

#### **JWT Token Structure**
```javascript
// JWT Payload Structure
const JWTPayload = {
  sub: userId,           // User ID
  email: user.email,
  name: user.name,
  role: user.role,       // CRITICAL: Include role for client-side checks
  state: user.state,
  lga: user.lga,
  permissions: getRolePermissions(user.role),
  iat: timestamp,        // Issued at
  exp: timestamp + (24 * 60 * 60), // 24 hours
  jti: tokenId          // Unique token ID
};

// Client-side permission checking
const hasPermission = (user, action, resource) => {
  return user.permissions.includes(`${resource}.${action}`) ||
         user.permissions.includes('*');
};
```

#### **Session Management**
```javascript
const SESSION_CONFIG = {
  // 24 hours for regular session
  accessTokenExpiry: 24 * 60 * 60, // 24 hours

  // 7 days for refresh token
  refreshTokenExpiry: 7 * 24 * 60 * 60, // 7 days

  // Idle timeout (inactivity)
  idleTimeout: 30 * 60 * 1000, // 30 minutes

  // Warning before timeout
  warningTimeout: 25 * 60 * 1000, // 25 minutes
};

// Session flow
1. User logs in → JWT access token + refresh token
2. Access token expires → Use refresh token silently
3. Idle timeout → Show warning, then logout
4. Refresh token expires → Full re-login required
```

---

### 5. **Purple Accent Implementation**

#### **10% Purple Rule - EXACT Guidelines**
YES - Purple accents should be used **ONLY** for:

✅ **PURPLE ACCENT USAGE (10% of UI)**:
- Primary action buttons: "Create Activity", "Submit", "Approve"
- Active navigation items: Currently selected menu item
- Focus states: Input field borders, focused buttons
- Success badges: Checkmarks, completion indicators
- Progress indicators: Loading spinners, progress bars
- Selected states: Selected table rows, active filters
- Critical alerts: Emergency notifications
- Interactive hover states: Primary button hover

❌ **NO PURPLE USAGE (90% of UI)**:
- Card backgrounds: Use white (#FFFFFF)
- Section backgrounds: Use light gray (#F8F9FA)
- Borders: Use light gray (#E0E0E0)
- Secondary buttons: Use white with gray border
- Text: Use dark gray (#212121) for primary text
- Icons: Use medium gray (#757575) unless active
- Large areas: Never colorize backgrounds with purple

#### **Visual Examples**
```css
/* CORRECT: Minimal purple */
.btn-primary {
  background: #7B2CBF; /* Only prominent purple */
}

.nav-item.active {
  color: #7B2CBF; /* Small accent */
}

.input:focus {
  border-color: #7B2CBF; /* Focus state only */
}

.card {
  background: white; /* NO purple */
  border: 1px solid #E0E0E0; /* Gray border */
}

/* INCORRECT: Overuse */
.card {
  background: #F3E5F5; /* Don't colorize large areas */
}
```

---

### 6. **MVP Scope Confirmation**

#### **Phase 1 (Week 1) - Core Foundation**
YES - Focus EXACTLY on:
1. **Login System**: Email/password with role detection
2. **Role-based Redirect**: Correct dashboard for each role
3. **Basic Navigation**: Sidebar (desktop) + bottom nav (mobile)
4. **Placeholder Dashboards**: Static metric cards with fake data
5. **Authentication Guards**: Route protection by role

**NOT in Phase 1**:
- Real data fetching
- Offline functionality
- File uploads
- Real-time sync
- Complex charts

#### **Real-time Features Placement**
**Phase 2+ (Weeks 3-4)** for real-time features:
- Live sync: Week 3
- Emergency alerts: Week 4
- Real-time collaboration: Post-MVP
- Live notifications: Week 3

#### **Phase Breakdown**
```
Week 1: Foundation
- Login/Logout system
- Role-based routing
- Basic navigation components
- Static dashboards (4 role variations)

Week 2: Core Functionality
- Activity list page
- Activity creation form
- Basic data models
- Local state management

Week 3: Offline & Data
- Offline queue implementation
- Sync mechanism
- File upload system
- Real notifications

Week 4: Polish
- Real-time features
- Advanced dashboards
- Performance optimization
- Accessibility testing
```

---

## 🚀 Final Technical Specifications

### **Technology Stack Confirmation**
- **Frontend**: Vue 3 + Composition API + Quasar Framework
- **State Management**: Pinia stores for offline-first data
- **Database**: PostgreSQL with UUID primary keys
- **File Storage**: S3-compatible with pre-signed URLs
- **Authentication**: JWT with refresh tokens
- **Offline**: Service Workers + IndexedDB

### **Performance Requirements**
- Bundle size: < 500KB total
- First load: < 3 seconds on 3G
- API calls: Batch operations when possible
- Images: Client-side compression before upload

### **Accessibility Requirements**
- WCAG 2.1 AA compliance
- 4.5:1 color contrast (use black/white text)
- 48px minimum touch targets
- Full keyboard navigation
- Screen reader support

---

## ✅ Ready to Build

You have all technical specifications needed to proceed with the "Build App" phase. The database schema, sync strategy, authentication flow, and design constraints are clearly defined.

**Next Step**: Generate the complete prototype with all these technical specifications implemented.