# Critical Updates Required for RCAP Specifications

## 🚨 IMMEDIATE ACTION REQUIRED

Based on the comprehensive analysis, here are the critical updates that need to be made to align the specs with our refined Zoer requirements.

---

## 1. Role System Emergency Update

### **Current Problem**
The specs use generic roles (Admin, Sub-admin) while Zoer requires African public health context roles.

### **Solution - Update All Role References**

#### **In EVERY spec file, replace:**

```diff
- Super Admin, Admin, Sub-admin, User
+ Super Admin (Federal), State Admin, LGA Officer, Field Officer
```

#### **Database Schema Updates:**

```sql
-- 001-user-organisation-management/data-model.md
ALTER TABLE users
MODIFY role ENUM('super_admin', 'state_admin', 'lga_officer', 'field_officer') NOT NULL,
ADD COLUMN state VARCHAR(100) NULLABLE AFTER organisation_id,
ADD COLUMN lga VARCHAR(100) NULLABLE AFTER state;

-- Add new indexes
CREATE INDEX idx_users_state ON users(state);
CREATE INDEX idx_users_lga ON users(lga);
```

---

## 2. New Offline-First Specification Required

### **Create New Epic: 006-offline-sync/**

Create the following new files:

#### `006-offline-sync/spec.md`
```markdown
# Feature Specification: Offline-First Synchronization

## Overview
Implement robust offline-first architecture with intelligent sync for unreliable African internet connections.

## User Stories

### US-023: Offline Activity Creation
- **As a** field officer
- **I want to** create activities without internet
- **So that** I can work in remote areas

**Acceptance Criteria:**
- [ ] Activities saved locally using IndexedDB
- [ ] Automatic queuing for sync when online
- [ ] Conflict resolution interface for sync conflicts
- [ ] Visual sync status indicators (green/yellow/red dots)
- [ ] Manual sync trigger button

### US-024: File Upload Queue
- **As a** field officer
- **I want to** upload files offline
- **So that** evidence is captured when connectivity is poor

**Acceptance Criteria:**
- [ ] Files stored locally when offline
- [ ] Automatic upload when connection restored
- [ ] Progress indicators for queued uploads
- [ ] Ability to delete failed uploads

### US-025: Sync Conflict Resolution
- **As a** user
- **I want to** resolve sync conflicts
- **So that** data integrity is maintained

**Acceptance Criteria:**
- [ ] Manual conflict resolution interface
- [ ] Options: Keep Server, Keep Mine, Merge
- [ ] Side-by-side comparison of changes
- [ ] Automatic conflict detection
```

#### `006-offline-sync/data-model.md`
```markdown
# Data Model: Offline-First Synchronization

## sync_queue Table
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT PRIMARY | Auto increment |
| user_id | BIGINT FK | User who created action |
| action_type | ENUM | create_activity, update_activity, upload_file |
| entity_data | JSON | Complete entity state |
| status | ENUM | pending, syncing, completed, failed |
| retry_count | INT | Number of retry attempts |
| created_at | TIMESTAMP | Queue entry time |
| next_retry_at | TIMESTAMP | When to retry next |

## offline_storage Table (IndexedDB equivalent)
| Column | Type | Description |
|--------|------|-------------|
| id | VARCHAR | Client-generated UUID |
| user_id | BIGINT FK | Owner |
| entity_type | ENUM | activity, file, user_data |
| entity_data | JSON | Cached data |
| last_synced | TIMESTAMP | Last successful sync |
```

---

## 3. Mobile-First Requirements (Add to ALL Specs)

### **Add This Section to Every Feature Spec:**

```markdown
## Mobile-First Requirements

### Responsive Design
- [ ] Primary breakpoint: 375px (mobile-first)
- [ ] Secondary breakpoint: 768px (tablet)
- [ ] Desktop breakpoint: 1024px+

### Touch Interface
- [ ] Minimum touch target: 48px × 48px
- [ ] Comfortable spacing: 16px between interactive elements
- [ ] Thumb zone optimization: Important actions in bottom 1/3

### Mobile Navigation
- [ ] Bottom navigation bar for mobile (< 768px)
- [ ] 5 primary tabs: Dashboard, Activities, Reports, Team, Profile
- [ ] Haptic feedback on touch (where supported)
- [ ] Swipe gestures for list items

### Mobile Gestures
- [ ] Pull-to-refresh for data lists
- [ ] Swipe actions on activity items (edit/delete)
- [ ] Pinch-to-zoom on images and documents
- [ ] Long press for context menus

### Performance
- [ ] Initial load: < 3 seconds on 3G networks
- [ ] Bundle size: < 500KB total
- [ ] Skeleton screens during data loading
- [ ] Lazy loading for non-critical content
```

---

## 4. Design System Requirements (Add to All Specs)

### **Add This Color System Section:**

```markdown
## Design System Requirements

### Color Palette (CRITICAL: 90% Neutral, 10% Purple)

#### Neutral Colors (90% of UI)
- **White**: #FFFFFF (main surfaces, cards)
- **Light Gray**: #F8F9FA (secondary surfaces)
- **Medium Gray**: #E0E0E0 (borders, dividers)
- **Text Dark**: #212121 (primary text, headings)
- **Text Medium**: #757575 (secondary text, labels)

#### Purple Accent (10% ONLY - Use Sparingly)
- **Primary Purple**: #7B2CBF (primary buttons, active states)
- **Light Purple**: #F3E5F5 (hover states, selected items)
- **Purple Tint**: rgba(123, 44, 191, 0.1) (subtle highlights)

#### Purple Usage Rules
✅ USE FOR:
- Primary action buttons only
- Active navigation items
- Focus states (input borders)
- Selected items
- Progress indicators

❌ DO NOT USE FOR:
- Card backgrounds (use white)
- Large section backgrounds
- Text colors (use dark gray)
- Borders (use light gray)
- Secondary buttons

### Typography
- **Font**: Inter (system fonts fallback)
- **H1**: 32px, SemiBold
- **H2**: 24px, SemiBold
- **H3**: 20px, SemiBold
- **Body**: 16px, Regular
- **Caption**: 12px, Regular

### Spacing (8px Grid)
- **XS**: 4px
- **SM**: 8px (base unit)
- **MD**: 16px (default)
- **LG**: 24px (card padding)
- **XL**: 32px (section spacing)
```

---

## 5. Activity Tracking Critical Updates

### **002-activity-tracking/spec.md Updates:**

#### **File Upload Restrictions:**
```markdown
### US-006: Upload Evidence (Updated for MVP)
- **As a** field officer
- **I want to** upload evidence files
- **So that** I can support my activity reports

**Acceptance Criteria:**
- [ ] Upload images (JPG, PNG) - 5MB max with client-side compression
- [ ] Upload documents (PDF) - 10MB max
- [ ] Upload audio files (M4A, MP3) - 5MB max
- [ ] NO video support for MVP (removed for performance)
- [ ] Client-side compression before upload (images to 1920px max width)
- [ ] Pre-signed URLs for S3-compatible storage
- [ ] Offline queue for uploads when no connection
- [ ] Progress indicators and retry mechanisms
```

#### **Activity Status Workflow:**
```markdown
### Activity Status Progression
**Complete workflow**: draft → submitted → approved → completed
**Alternate path**: draft → submitted → rejected (can be resubmitted)

**Status Rules:**
- [ ] Draft: Editable by creator
- [ ] Submitted: Locked, awaiting approval
- [ ] Approved: Can proceed to completion
- [ ] Completed: Locked, activity finished
- [ ] Rejected: Can be edited and resubmitted
```

---

## 6. Dashboard Critical Updates

### **003-dashboards-analytics/spec.md Updates:**

```markdown
### US-010: Role-Based Dashboard (Updated Roles)
- **As a** user with African public health role
- **I want to** see a dashboard tailored to my role level
- **So that** I can quickly understand my responsibilities

**Acceptance Criteria:**
- [ ] Super Admin (Federal) dashboard: National overview, all states
- [ ] State Admin dashboard: State metrics, LGA performance
- [ ] LGA Officer dashboard: Local metrics, team management
- [ ] Field Officer dashboard: Personal activities, quick submission
- [ ] Mobile-optimized layout with bottom navigation
- [ ] Offline status indicators
- [ ] 48px touch targets for mobile
```

---

## 7. New Database Tables Required

### **Add to All Data Models:**

```sql
-- For offline functionality
CREATE TABLE sync_queue (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  action_type ENUM('create_activity', 'update_activity', 'upload_file') NOT NULL,
  entity_data JSON NOT NULL,
  status ENUM('pending', 'syncing', 'completed', 'failed') DEFAULT 'pending',
  retry_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  next_retry_at TIMESTAMP NULLABLE,
  INDEX idx_sync_queue_user_id (user_id),
  INDEX idx_sync_queue_status (status)
);

-- For file management (better than activity_evidence)
CREATE TABLE activity_files (
  id UUID PRIMARY KEY DEFAULT (UUID()),
  activity_id BIGINT NOT NULL,
  filename VARCHAR(255) NOT NULL,
  file_type ENUM('image', 'pdf', 'audio') NOT NULL,
  file_size BIGINT NOT NULL,
  file_url VARCHAR(500) NOT NULL,
  uploaded_by BIGINT NOT NULL,
  synced_at TIMESTAMP NULLABLE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE,
  FOREIGN KEY (uploaded_by) REFERENCES users(id)
);
```

---

## 8. API Endpoints Updates

### **Add to All API Endpoint Sections:**

```markdown
### Offline Sync Endpoints
- `GET /api/v1/sync/status` - Get sync status for current user
- `POST /api/v1/sync/trigger` - Manual sync trigger
- `GET /api/v1/sync/queue` - Get items in sync queue
- `DELETE /api/v1/sync/queue/{id}` - Remove item from queue

### Mobile-Specific Endpoints
- `POST /api/v1/activities/offline` - Create activity (offline mode)
- `POST /api/v1/files/upload-queue` - Queue file upload
- `GET /api/v1/dashboard/mobile/{role}` - Mobile-optimized dashboard data
```

---

## 🚀 Implementation Timeline

### **Day 1-2: Emergency Role Fixes**
1. Update all role references across 5 existing specs
2. Update database schemas with new roles and state/LGA fields
3. Create `006-offline-sync/` spec structure

### **Day 3-4: Mobile & Design Integration**
1. Add mobile-first requirements to all specs
2. Add design system color rules to all specs
3. Update component specifications for touch targets

### **Day 5-7: Offline Architecture**
1. Complete offline-sync specification
2. Add sync queue to all data models
3. Update activity tracking with offline file uploads

### **Day 8: Final Review**
1. Cross-check all specs against Zoer prompts
2. Verify alignment with minimal purple color scheme
3. Ensure African public health context throughout

---

## ✅ Verification Checklist

Before proceeding with Zoer "Build App":

- [ ] All role references updated to African public health context
- [ ] Offline-first architecture fully specified
- [ ] Mobile-first requirements in all specs
- [ ] Minimal purple color scheme documented
- [ ] 48px touch targets specified everywhere
- [ ] File upload restrictions match Zoer requirements
- [ ] Database schemas include sync_queue and state/LGA fields
- [ ] API endpoints reflect mobile/offline needs
- [ ] User stories reference correct roles
- [ ] Acceptance criteria include mobile/offline scenarios

---

**URGENCY**: These updates are critical before using the Zoer prompts. The current specifications will produce incorrect role systems, no offline functionality, and non-optimized mobile experiences.