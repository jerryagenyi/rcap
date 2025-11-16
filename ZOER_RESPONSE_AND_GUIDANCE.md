# RCAP - Zoer Implementation Guidance & Clarifications

## 🎯 Answers to Zoer's Clarification Questions

### 1. **Role-Based Access & Permissions**

**Implement a granular 4-tier role system** (not just Schema User/Admin):

#### **Role Hierarchy** (Most to Least Privileged)
- **Super Admin (Federal Level)**: Full system access, manages all users, national oversight
- **State Admin**: Manages users within their state, approves state-level activities
- **LGA/Field Officer**: Creates activities, manages local teams, limited approval rights
- **Field Officer**: Basic activity submission, view own data, limited editing

**Technical Implementation**:
```javascript
// Role-based permissions matrix
const ROLES = {
  SUPER_ADMIN: ['users.*', 'activities.*', 'reports.*', 'system.*'],
  STATE_ADMIN: ['users.state', 'activities.state.*', 'reports.state'],
  LGA_OFFICER: ['activities.lga.*', 'teams.lga', 'reports.lga'],
  FIELD_OFFICER: ['activities.own', 'reports.own', 'profile.own']
};
```

**Admin-Level Access**:
- **Super Admins**: Full user management across all states
- **State Admins**: User management within their state only
- **LGA Officers**: Can approve local activities (limited scope)

### 2. **Offline Functionality Priority**

**OFFLINE-FIRST FOR MVP - This is critical for African contexts**

**Must-have offline features for MVP**:
- View existing activities and reports
- Create new activities (stored locally)
- Capture images/evidence (stored locally)
- Basic dashboard with cached metrics

**Sync Strategy**:
- Queue all actions when offline
- Auto-sync when connection restored
- Conflict resolution interface for data discrepancies

**Implementation Note**: Start with service workers for basic caching, then expand.

### 3. **Navigation Structure**

**Desktop**: Left sidebar navigation (traditional)
- Collapsible for space efficiency
- Persistent main navigation
- Quick access to key functions

**Mobile**: Bottom navigation bar
- 5 main tabs: Dashboard, Activities, Reports, Team, Profile
- Haptic feedback on tap
- Slide-up panels for secondary actions

**Responsive breakpoint**: Show sidebar on desktop (>1024px), bottom nav on mobile.

### 4. **Data Storage Priority for MVP**

**Critical First (Phase 1 MVP)**:
1. **Activities** (core functionality)
2. **User Profiles** (authentication and role management)
3. **Team Assignments** (basic organization structure)

**Phase 2** (if time permits):
4. **Notifications** (basic push notifications)
5. **Reports** (simple reporting features)

**Data Models**:
```javascript
// Core Activity Model
Activity = {
  id, title, description, type, location, date,
  createdBy, status, attachments, approvals
}

// User Model
User = {
  id, name, email, phone, role, state, lga,
  avatar, lastLogin, preferences
}
```

### 5. **File Upload Specifications**

**Supported File Types** (MVP):
- **Images**: JPG, PNG (max 5MB each)
- **Documents**: PDF (max 10MB)
- **Audio**: M4A, MP3 for voice notes (max 5MB)

**NOT supported initially**:
- Videos (too large for MVP)
- ZIP/Archive files
- Office documents (DOC, XLS)

**Technical Notes**:
- Image compression before upload (reduce to 1920px max width)
- PDF preview generation
- Progressive upload with resume capability
- Local storage for offline queue

---

## 🎨 CRITICAL: Minimal Purple Color Scheme

Based on your reference image, use purple **SPARINGLY** as an accent color only:

### **Color Distribution (90% neutral, 10% accent)**

#### **Primary Neutral Palette (90% of UI)**
- **White**: #FFFFFF (main surfaces)
- **Light Gray**: #F8F9FA (secondary surfaces)
- **Medium Gray**: #E0E0E0 (borders, dividers)
- **Text Dark**: #212121 (primary text)
- **Text Medium**: #757575 (secondary text)
- **Text Light**: #B0B0B0 (disabled, captions)

#### **Purple Accent (10% of UI - USE SPARINGLY)**
- **Primary Purple**: #7B2CBF (use ONLY for: primary buttons, active states, progress indicators)
- **Light Purple**: #F3E5F5 (use ONLY for: hover states, selected items, subtle highlights)
- **Purple Tint**: rgba(123, 44, 191, 0.1) (use ONLY for: subtle backgrounds, borders)

#### **When to Use Purple (Strict Rules)**
- ✅ Primary "Create Activity" button
- ✅ Active navigation items
- ✅ Progress indicators (loading bars, spinners)
- ✅ Success checkmarks
- ✅ Selected/focused states
- ✅ Important badges (notifications)

#### **When NOT to Use Purple**
- ❌ Card backgrounds (use white/light gray)
- ❌ Large sections (too overwhelming)
- ❌ Text colors (use dark/medium gray)
- ❌ Borders (use light gray)
- ❌ Icons (use dark gray unless active)

### **Visual Examples**

```css
/* CORRECT: Minimal purple usage */
.button-primary {
  background: #7B2CBF; /* Only place purple is prominent */
  color: white;
}

.nav-item.active {
  color: #7B2CBF; /* Small accent for active state */
}

.card {
  background: white; /* NO purple */
  border: 1px solid #E0E0E0; /* Gray, not purple */
}

.text-primary {
  color: #212121; /* Gray text, not purple */
}

/* INCORRECT: Overuse of purple */
.card {
  background: #F3E5F5; /* Don't colorize large areas */
  border: 2px solid #7B2CBF; /* Too much purple */
}
```

---

## 🚀 Additional Implementation Guidance

### **Phase 1: MVP Features (Weeks 1-4)**

#### **Week 1: Foundation**
- Set up authentication with 4 roles
- Create basic navigation structure
- Implement role-based routing
- Build core layout components

#### **Week 2: Activity Management**
- Create activity list with filters
- Build activity creation form (multi-step)
- Implement file upload (images/PDF)
- Add offline data queue

#### **Week 3: Dashboard & Data**
- Build role-specific dashboards
- Implement basic charts (using Chart.js)
- Add metric cards with animations
- Create user profile pages

#### **Week 4: Polish & Testing**
- Implement sync mechanism
- Add notification system
- Test offline functionality
- Optimize performance

### **Technical Implementation Priority**

#### **1. Start With Authentication**
```javascript
// Implement this first
const authConfig = {
  roles: ['super_admin', 'state_admin', 'lga_officer', 'field_officer'],
  permissions: {
    super_admin: '*',
    state_admin: ['state_*', 'users_state'],
    lga_officer: ['lga_*', 'activities_create'],
    field_officer: ['activities_own', 'profile']
  }
};
```

#### **2. Build Offline Service Worker**
```javascript
// Critical for African contexts
const offlineConfig = {
  cache: {
    activities: true,
    users: true,
    dashboard: true
  },
  syncQueue: {
    activities: true,
    files: true,
    profile: false
  }
};
```

#### **3. Mobile-First Development**
```css
/* Start with mobile styles, then add desktop */
@media (max-width: 767px) {
  /* Mobile-first styles */
}

@media (min-width: 768px) {
  /* Desktop enhancements */
}
```

### **Performance Requirements**

#### **Network Optimization**
- Bundle size: < 500KB total
- Image optimization: WebP format, lazy loading
- API calls: Batch requests when possible
- Caching: Service worker for static assets

#### **Mobile Performance**
- Initial load: < 3 seconds on 3G
- JavaScript execution: < 100ms for interactions
- Animations: 60fps, GPU-accelerated

### **Accessibility Requirements**

#### **WCAG 2.1 AA Compliance**
- Color contrast: 4.5:1 minimum (black/white text is safest)
- Touch targets: 48px minimum
- Keyboard navigation: Full keyboard access
- Screen readers: ARIA labels on all interactive elements

#### **High Contrast Mode**
```css
@media (prefers-contrast: high) {
  :root {
    --text-primary: #000000;
    --text-secondary: #333333;
    --bg-primary: #FFFFFF;
    --border-color: #000000;
  }
}
```

### **Success Metrics for MVP**

#### **User Adoption**
- 80% of invited users complete onboarding within first week
- Average time to submit first activity: < 3 minutes
- Mobile usage: 60%+ of activities via mobile

#### **Technical Performance**
- 95%+ sync success rate
- < 3 second load time on 3G networks
- 99.9% uptime for critical features

#### **User Experience**
- Net Promoter Score (NPS) > 50
- Support tickets: < 5% of active users
- User retention: 80% after 30 days

---

## 📋 Final Implementation Checklist

### **Before Starting Development**
- [ ] Confirm purple accent usage guidelines
- [ ] Set up development environment with Vue 3 + Quasar
- [ ] Configure build for production deployment
- [ ] Set up analytics and error tracking

### **During Development**
- [ ] Test offline functionality regularly
- [ ] Verify role-based permissions
- [ ] Check mobile responsiveness daily
- [ ] Test on actual 3G networks

### **Before Launch**
- [ ] Security audit and penetration testing
- [ ] Load testing with simulated slow networks
- [ ] Accessibility testing with screen readers
- [ ] User testing with target audience (healthcare workers)

---

**Remember**: The key to success is keeping purple as a minimal accent color (10% or less of the UI) while focusing on functionality that works offline-first for African healthcare contexts. The design should feel professional and trustworthy, not overly colorful or complex.

**Next Step**: Proceed with "Build App" phase using these specifications and the minimal purple accent guidelines.