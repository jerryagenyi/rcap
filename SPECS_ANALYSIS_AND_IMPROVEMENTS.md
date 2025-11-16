# RCAP Specifications Analysis & Improvement Recommendations

## 📋 Executive Summary

After thoroughly analyzing all specifications in the `/specs/` directory and comparing them with our refined Zoer prompts, I've identified several critical gaps and misalignments that need to be addressed. The current specs are well-structured but lack some key requirements from our Zoer refinement process.

---

## 🎯 Key Findings

### ✅ **Strengths of Current Specs**
1. **Well-structured SpecKit format** with comprehensive documentation
2. **Clear user stories** with acceptance criteria
3. **Detailed data models** with proper relationships
4. **API specifications** with endpoints defined
5. **Good separation of concerns** across 5 epics

### ❌ **Critical Gaps Identified**

---

## 📊 Detailed Gap Analysis

### **1. Role Mismatch - CRITICAL ISSUE**

#### **Current Specs Roles:**
- Super Admin
- Admin
- Sub-admin
- User

#### **Zoer Prompt Roles (4-Tier):**
- Super Admin (Federal Level)
- State Admin (Regional Level)
- LGA Officer (Local Level)
- Field Officer (Individual Level)

#### **Impact:** MAJOR MISALIGNMENT
- The specs use generic roles while Zoer prompts use specific African public health context roles
- Database schema and permissions need updating
- Role-based dashboard specifications won't match
- User stories reference wrong role types

---

### **2. Missing Offline-First Architecture - CRITICAL**

#### **Current Specs:**
- No mention of offline functionality
- No sync queue or conflict resolution
- No service worker or IndexedDB specifications
- File uploads assume always-online connectivity

#### **Zoer Requirements:**
- **OFFLINE-FIRST IS MANDATORY** for African contexts
- Sync queue with conflict resolution
- Service Workers + IndexedDB
- Activities must work without internet
- File upload queuing system

---

### **3. Missing Mobile-First Details - IMPORTANT**

#### **Current Specs:**
- Generic "mobile-responsive" mentions
- No specific mobile gestures (pull-to-refresh, swipe actions)
- No bottom navigation specifications
- No touch target size definitions (48px minimum)

#### **Zoer Requirements:**
- **375px primary breakpoint**
- **48px minimum touch targets**
- **Bottom navigation** for mobile, sidebar for desktop
- Pull-to-refresh, swipe actions, haptic feedback

---

### **4. Color Scheme Not Specified - MEDIUM**

#### **Current Specs:**
- No color scheme defined
- No design system specifications
- No branding guidelines

#### **Zoer Requirements:**
- **Minimal purple accent** (10% of UI only)
- **90% neutral palette** (white, grays)
- Strict rules for purple usage
- Specific hex codes defined

---

### **5. Database Schema Issues - IMPORTANT**

#### **Current Schema Problems:**
```sql
-- Current roles (WRONG)
role: enum('super_admin', 'admin', 'sub_admin', 'user')

-- Should be (CORRECT)
role: enum('super_admin', 'state_admin', 'lga_officer', 'field_officer')
```

#### **Missing Tables:**
- `sync_queue` - For offline functionality
- `activity_files` - For file management (different from activity_evidence)
- `notifications` - Basic notifications table exists in communication spec
- `teams` - For team management (mentioned in Zoer but not in specs)

---

### **6. Activity Workflow Mismatch - MEDIUM**

#### **Current Specs Workflow:**
draft → submitted → approved/rejected

#### **Zoer Workflow:**
draft → submitted → approved → completed
- Missing "completed" status in current specs
- No "rejected" path handling
- Missing approval workflow details

---

### **7. File Upload Specifications - IMPORTANT**

#### **Current Specs:**
- Video: 50MB (should be REMOVED for MVP)
- Audio: 20MB (should be 5MB for MVP)
- No client-side compression requirements
- No pre-signed URL specifications

#### **Zoer Requirements:**
- NO video support for MVP
- Images: 5MB with compression
- Audio: 5MB max
- Pre-signed URLs for S3 uploads
- Client-side compression mandatory

---

## 🔧 Detailed Improvement Recommendations

### **Priority 1: Fix Role System (CRITICAL)**

#### **001-user-organisation-management/spec.md Updates:**

```markdown
### US-002: African Public Health Role-Based Access Control
- **As a** system administrator
- **I want to** assign public health roles to users
- **So that** they have appropriate permissions for African healthcare context

**Acceptance Criteria:**
- [ ] Four role levels: Super Admin (Federal), State Admin, LGA Officer, Field Officer
- [ ] Role hierarchy: Federal > State > Local > Individual
- [ ] State Admin can only manage users within their state
- [ ] LGA Officer can only manage users within their LGA
- [ ] Field Officers can only manage their own activities
- [ ] Role assignment by higher-level admins only
```

#### **Database Schema Updates:**
```sql
-- Update users table
ALTER TABLE users
MODIFY role ENUM('super_admin', 'state_admin', 'lga_officer', 'field_officer') NOT NULL;

-- Add state and lga columns
ALTER TABLE users
ADD COLUMN state VARCHAR(100) NULLABLE,
ADD COLUMN lga VARCHAR(100) NULLABLE;
```

---

### **Priority 2: Add Offline Architecture (CRITICAL)**

#### **New Spec Needed: `006-offline-sync/`**

Create entirely new epic for offline functionality:

```markdown
# Feature Specification: Offline-First Synchronization

## Overview
Implement robust offline-first architecture with intelligent sync, conflict resolution, and queue management for unreliable African internet connections.

## User Stories

### US-023: Offline Activity Creation
- **As a** field officer
- **I want to** create activities without internet
- **So that** I can work in remote areas

**Acceptance Criteria:**
- [ ] Activities saved locally using IndexedDB
- [ ] Automatic queuing for sync when online
- [ ] Conflict resolution when sync conflicts occur
- [ ] Visual indicators for sync status
- [ ] Manual sync trigger button
```

#### **New Database Tables:**
```sql
-- sync_queue table
CREATE TABLE sync_queue (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  action_type ENUM('create_activity', 'update_activity', 'upload_file') NOT NULL,
  entity_data JSON NOT NULL,
  status ENUM('pending', 'syncing', 'completed', 'failed') DEFAULT 'pending',
  retry_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  next_retry_at TIMESTAMP NULLABLE
);
```

---

### **Priority 3: Update Activity Tracking (IMPORTANT)**

#### **002-activity-tracking/spec.md Updates:**

1. **File Upload Restrictions:**
```markdown
**Acceptance Criteria:**
- [ ] Upload images, documents, audio files ONLY (NO video for MVP)
- [ ] File size limits: images (5MB), documents (10MB), audio (5MB)
- [ ] Client-side compression before upload
- [ ] Progress indicators for large uploads
- [ ] Pre-signed URLs for S3-compatible storage
```

2. **Activity Status Workflow:**
```markdown
**Acceptance Criteria:**
- [ ] Status progression: draft → submitted → approved → completed
- [ ] rejected status with reason field
- [ ] Cannot edit submitted activities (except admins)
- [ ] Completed activities locked from editing
- [ ] Status change audit trail
```

---

### **Priority 4: Add Mobile Specifications (IMPORTANT)**

#### **All Frontend Components Need Updates:**

Add mobile-specific requirements to each spec:

```markdown
### Mobile-First Requirements
- [ ] 375px primary breakpoint design
- [ ] 48px minimum touch targets
- [ ] Bottom navigation for mobile (< 768px)
- [ ] Sidebar navigation for desktop (> 768px)
- [ ] Pull-to-refresh functionality
- [ ] Swipe actions for list items
- [ ] Haptic feedback on mobile devices
```

---

### **Priority 5: Design System Integration (MEDIUM)**

#### **New Spec Needed: `007-design-system/`**

```markdown
# Feature Specification: Design System Implementation

## Overview
Implement consistent design system with minimal purple accent color scheme, responsive layouts, and accessibility compliance.

## Color System
- **Primary Purple**: #7B2CBF (10% of UI only)
- **Neutral Palette**: White, grays, black text (90% of UI)
- **Strict Usage Rules**: Purple for primary buttons, active states, focus indicators only

## Component Standards
- Card padding: 24px
- Button height: 48px
- Border radius: 8px
- Spacing: 8px grid system
```

---

## 📋 Specific File Updates Required

### **1. 001-user-organisation-management/spec.md**
- [ ] Update role definitions from generic to African public health context
- [ ] Add state/LGA fields to user management
- [ ] Update user stories to reflect new role hierarchy
- [ ] Add mobile-first requirements

### **2. 001-user-organisation-management/data-model.md**
- [ ] Update role enum values
- [ ] Add state and lga columns to users table
- [ ] Add indexes for new columns
- [ ] Update seed data examples

### **3. 002-activity-tracking/spec.md**
- [ ] Remove video file upload support
- [ ] Update file size limits
- [ ] Add client-side compression requirements
- [ ] Update activity status workflow (add "completed")
- [ ] Add offline queue requirements
- [ ] Add mobile gesture support

### **4. 002-activity-tracking/data-model.md**
- [ ] Add sync_queue table
- [ ] Update activity_evidence to activity_files
- [ ] Add completed status to activities
- [ ] Add mobile-specific metadata fields

### **5. 003-dashboards-analytics/spec.md**
- [ ] Update role-based dashboard specifications
- [ ] Add offline status indicators
- [ ] Add mobile dashboard layouts
- [ ] Add performance requirements for 3G networks

### **6. All Frontend Component Sections**
- [ ] Add mobile-specific component variations
- [ ] Add touch gesture support
- [ ] Add responsive breakpoint specifications
- [ ] Add accessibility (WCAG 2.1 AA) requirements

---

## 🚀 Implementation Priority

### **Phase 1: Foundation Fixes (Week 1)**
1. Fix role system across all specs
2. Add offline architecture spec
3. Update database schemas
4. Add mobile-first requirements

### **Phase 2: Feature Updates (Week 2)**
1. Update activity tracking with new workflow
2. Add file upload restrictions
3. Update dashboard specifications
4. Add design system requirements

### **Phase 3: Mobile & Offline (Week 3)**
1. Add mobile gestures and navigation
2. Implement sync queue specifications
3. Add conflict resolution logic
4. Update all UI components for mobile

### **Phase 4: Integration & Testing (Week 4)**
1. Ensure all specs align with Zoer prompts
2. Add performance requirements
3. Add accessibility compliance
4. Cross-reference all documentation

---

## 📊 Success Metrics

### **Specification Quality**
- [ ] 100% alignment between specs and Zoer prompts
- [ ] All mobile-first requirements documented
- [ ] Offline architecture fully specified
- [ ] African public health context reflected

### **Technical Completeness**
- [ ] Database schemas updated for all changes
- [ ] API endpoints reflect new requirements
- [ ] Frontend components have mobile variations
- [ ] Performance constraints documented

### **Documentation Quality**
- [ ] User stories updated with correct roles
- [ ] Acceptance criteria include mobile/offline
- [ ] Data models match Zoer requirements
- [ ] Implementation plans account for all changes

---

## 🎯 Next Steps

1. **Immediate**: Create `006-offline-sync/` spec epic
2. **This Week**: Update all existing specs with role changes
3. **Next Week**: Add mobile-first requirements to all specs
4. **Following**: Create `007-design-system/` spec epic

---

**Conclusion**: The current specs are well-structured but need significant updates to align with our refined Zoer requirements. The role system mismatch is the most critical issue that must be fixed immediately, followed by adding offline architecture specifications.