# RCAP - Complete Design & Implementation Prompt for Zoer
**Risk Communication Activity Platform - African Public Health MVP**

## 🎯 Executive Summary

Create a **minimal viable product (MVP)** for RCAP - a risk communication activity tracking platform designed specifically for African public health contexts. The system must work **offline-first**, support **4 distinct user roles**, and use **purple sparingly as an accent color only**.

**Core Philosophy**: Functional, reliable, and accessible over flashy. Purple accents should be used in only 10% of the UI for critical interactions and states.

---

## 🏗️ Technical Architecture

### **Tech Stack**
- **Frontend**: Vue 3 + Composition API + Quasar Framework
- **State Management**: Pinia
- **Authentication**: Role-based JWT tokens
- **Offline**: Service Workers + IndexedDB
- **Performance**: PWA capabilities, < 500KB bundle

### **Africa-First Requirements**
- **Offline-First**: Core features must work without internet
- **Mobile-First**: 375px primary breakpoint, 48px minimum touch targets
- **Low-Bandwidth**: < 3 second load on 3G networks
- **Language Ready**: Support for English, French, Arabic, Swahili

---

## 👥 User Roles & Permissions

### **4-Tier Role Hierarchy**

#### **1. Super Admin (Federal Level)**
- **Access**: All states, all users, system configuration
- **Key Features**: National overview, user management, emergency response
- **Dashboard**: National metrics, state performance, system health

#### **2. State Admin (Regional Level)**
- **Access**: Users within their state only
- **Key Features**: State oversight, team assignment, activity approval
- **Dashboard**: State metrics, LGA performance, resource allocation

#### **3. LGA Officer (Local Level)**
- **Access**: Local users, local activities
- **Key Features**: Local team management, activity approval (limited)
- **Dashboard**: Local metrics, team performance, community outreach

#### **4. Field Officer (Individual Level)**
- **Access**: Own activities, own profile
- **Key Features**: Activity submission, photo capture, basic reporting
- **Dashboard**: Personal tasks, recent activities, quick submission

---

## 🎨 Minimal Purple Color Scheme (CRITICAL)

### **Color Distribution: 90% Neutral, 10% Purple Accent**

#### **Primary Neutral Palette (90% of UI)**
- **White**: #FFFFFF (main surfaces, cards)
- **Light Gray**: #F8F9FA (secondary surfaces)
- **Medium Gray**: #E0E0E0 (borders, dividers)
- **Dark Gray**: #212121 (primary text, headings)
- **Medium Text**: #757575 (secondary text, labels)
- **Light Text**: #B0B0B0 (captions, disabled)

#### **Purple Accent (10% ONLY - Use Sparingly)**
- **Primary Purple**: #7B2CBF (active states, primary buttons)
- **Light Purple**: #F3E5F5 (hover states, selected items)
- **Purple Tint**: rgba(123, 44, 191, 0.1) (subtle backgrounds)

### **When to Use Purple (Strict Rules)**
✅ **USE PURPLE FOR**:
- Primary "Create Activity" button
- Active navigation items
- Progress indicators and loading states
- Success confirmation badges
- Focused input borders
- Selected/critical states

❌ **DO NOT USE PURPLE FOR**:
- Card backgrounds (use white/light gray)
- Large section backgrounds
- Primary text (use dark gray)
- Most borders (use light gray)
- Icons (unless active)
- Secondary buttons

---

## 📱 Mobile-First Layout Structure

### **Mobile Layout (< 768px)**
```
┌─────────────────────────────────┐
│ Header (48px): Logo | Menu | Bell │
├─────────────────────────────────┤
│ Page Content (flexible height)  │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Role-Specific Dashboard     │ │
│ │ (4 metric cards)            │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Recent Activities List      │ │
│ │ (with status badges)        │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│ Bottom Nav (60px): 5 tabs        │
│ 📊 📋 📈 👥 👤                 │
└─────────────────────────────────┘
```

### **Desktop Layout (> 768px)**
```
┌─────────────────────────────────────────────────┐
│ Header (64px): Logo | Breadcrumbs | User Menu    │
├──────────┬──────────────────────────────────────┤
│ Sidebar  │ Main Content Area                    │
│ (240px)  │                                      │
│          │ ┌──────────────────────────────────┐ │
│          │ │ Role-Specific Dashboard          │ │
│          │ └──────────────────────────────────┘ │
│          │                                      │
│          │ ┌──────────────────────────────────┐ │
│          │ │ Data Tables & Charts             │ │
│          │ └──────────────────────────────────┘ │
└──────────┴──────────────────────────────────────┘
```

---

## 📊 Dashboard Specifications by Role

### **All Dashboards Share This Structure**:
1. **Header**: Page title + role badge
2. **Top Metrics**: 4 animated metric cards
3. **Main Content**: Role-specific widgets
4. **Quick Actions**: Primary CTA buttons

### **Federal Dashboard**
```
Metric Cards:
┌─────────┬─────────┬─────────┬─────────┐
│ Total   │ Active  │ Vaccina-│ Health  │
│ Activi- │ Outbreak│ tion    │ Workers │
│ ties    │ s       │ Coverage│ Trained │
│ 1,247   │ 3       │ 67.3%   │ 15,892  │
└─────────┴─────────┴─────────┴─────────┘

Main Widgets:
- Interactive Nigeria Map (state activity distribution)
- National Performance Trends (line charts)
- Emergency Alert Center (priority notifications)
- System Health Monitor (live status)
```

### **State Dashboard**
```
Metric Cards:
┌─────────┬─────────┬─────────┬─────────┐
│ This    │ Pending │ Active  │ Community│
│ Week    │ Approv- │ Field   │ Reach   │
│ 89      │ als 23  │ Teams   │ 2.3M    │
└─────────┴─────────┴─────────┴─────────┘

Main Widgets:
- LGA Performance Table (sortable)
- Resource Allocation Donut Charts
- Field Team Status Grid
- Recent Activities Timeline
```

### **LGA/Field Officer Dashboard**
```
Metric Cards:
┌─────────┬─────────┬─────────┬─────────┐
│ My      │ Pending │ Team    │ Recent  │
│ Activi- │ Tasks   │ Members │ Updates │
│ ties    │         │         │         │
│ 34      │ 12      │ 8       │ 5       │
└─────────┴─────────┴─────────┴─────────┘

Main Widgets:
- Activity Submission Form (quick)
- My Activities List
- Team Assignment Cards
- Offline Sync Status
```

---

## 🔄 Core App Features (MVP)

### **1. Authentication & Onboarding**

#### **Login Screen**
- Email/phone + password
- "Remember me" option
- Forgot password flow
- Role-based redirect after login

#### **Onboarding (First-time Users)**
- 4-screen interactive tutorial
- Role-specific quick start guide
- Skip option, access later from settings

### **2. Activity Management**

#### **Activity List View**
- Filterable table (date, type, status, location)
- Status badges: Draft, Submitted, Approved, Rejected
- Search functionality
- Pagination with skeleton loading

#### **Activity Creation Form**
```javascript
Multi-step form with progress indicator:
Step 1: Basic Info (title, description, type)
Step 2: Location (state, LGA, specific venue)
Step 3: Date/Time + Target Population
Step 4: Resources Required
Step 5: File Upload (images/PDF)
Step 6: Review & Submit
```

#### **Activity Detail View**
- Complete information display
- Approval workflow status
- Comments/feedback section
- Edit permissions (role-based)
- Export to PDF option

### **3. File Upload System**

#### **Supported Files (MVP)**
- **Images**: JPG, PNG (max 5MB, auto-compressed)
- **Documents**: PDF (max 10MB)
- **Audio**: M4A, MP3 for voice notes (max 5MB)

#### **Upload Features**
- Drag-and-drop interface
- Progress indicators
- Preview functionality
- Offline queue capability

### **4. Data Visualization**

#### **Basic Charts (MVP)**
- **Bar Charts**: Activity trends over time
- **Donut Charts**: Activity type distribution
- **Line Graphs**: Performance metrics
- **Progress Bars**: Goal completion

#### **Dashboard Metrics**
- Animated number counters
- Trend indicators (up/down arrows)
- Percentage progress
- Color-coded status

### **5. Team & User Management**

#### **User Directory**
- Searchable member list
- Role and location filters
- Online/offline status
- Contact information

#### **Team Assignment**
- Assign activities to users
- Workload distribution view
- Bulk assignment capability
- Assignment notifications

### **6. Notifications System**

#### **Notification Center**
- Categorized: Approvals, Assignments, Alerts
- Unread badge counter
- Mark as read/unread
- Push notification settings

#### **Emergency Alerts**
- Priority alert banner
- Severity levels (High, Medium, Low)
- Quick response actions
- Alert history log

---

## 📵 Offline-First Implementation

### **Offline Capabilities (MVP)**
- View cached activities and reports
- Create new activities (stored locally)
- Capture photos (stored locally)
- Basic dashboard with cached metrics

### **Sync Mechanism**
```javascript
Sync Queue System:
1. Actions queued when offline
2. Background sync on connection restore
3. Conflict resolution interface
4. Manual sync trigger button
5. Sync status indicator
```

### **Offline UI Indicators**
- Green dot: Online, synced
- Yellow dot: Slow connection
- Red dot: Offline, queueing actions
- Purple spinner: Currently syncing

---

## 🎯 Implementation Phases

### **Phase 1: Foundation (Week 1)**
- Authentication with 4 roles
- Basic navigation (sidebar + bottom nav)
- Role-based routing
- Core layout components

### **Phase 2: Core Features (Week 2)**
- Activity list with filters
- Activity creation form
- File upload system
- Basic offline queuing

### **Phase 3: Dashboards (Week 3)**
- Role-specific dashboards
- Metric cards with animations
- Basic data visualization
- User directory

### **Phase 4: Polish (Week 4)**
- Offline sync implementation
- Notification system
- Performance optimization
- Accessibility testing

---

## 📐 Component Specifications

### **Button Component**
```css
.btn-primary {
  background: #7B2CBF; /* ONLY purple primary button */
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  height: 48px;
  font-weight: 600;
}

.btn-secondary {
  background: white;
  color: #212121;
  border: 1px solid #E0E0E0; /* Gray, not purple */
}

.btn-outline {
  background: transparent;
  color: #7B2CBF; /* Purple text only */
  border: 2px solid #7B2CBF;
}
```

### **Card Component**
```css
.card {
  background: white; /* NO purple background */
  border: 1px solid #E0E0E0; /* Gray border */
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Gray shadow */
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### **Input Component**
```css
.input-field {
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  height: 48px;
  padding: 0 16px;
  background: white;
}

.input-field:focus {
  border-color: #7B2CBF; /* Purple only on focus */
  box-shadow: 0 0 0 3px rgba(123, 44, 191, 0.1);
}
```

---

## ♿ Accessibility Requirements

### **WCAG 2.1 AA Compliance**
- Color contrast: 4.5:1 minimum (use black/white text)
- Touch targets: 48px minimum
- Keyboard navigation: Full keyboard access
- Screen readers: ARIA labels on all interactive elements
- Focus indicators: Visible focus on all interactive elements

### **High Contrast Mode Support**
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

---

## 📊 Success Metrics (MVP)

### **User Adoption**
- 80% of invited users complete onboarding within first week
- Average time to submit first activity: < 3 minutes
- 60%+ of activities logged via mobile devices

### **Technical Performance**
- 95%+ successful sync rate when connection restored
- < 3 second load time on 3G networks
- 99.9% uptime for critical features

### **User Experience**
- Net Promoter Score (NPS) > 50
- Support tickets: < 5% of active users
- User retention: 80% after 30 days

---

## 🚀 Final Implementation Instructions

### **Critical Design Principles**
1. **Purple is an accent, not a theme** - Use sparingly (10% of UI)
2. **Function over flash** - Focus on reliability and offline capability
3. **Mobile-first** - Design for 375px width, then scale up
4. **Touch-friendly** - 48px minimum touch targets
5. **Offline-aware** - All core features work without internet

### **Build Order Priority**
1. Authentication & roles
2. Basic navigation & layout
3. Activity management (list, create, detail)
4. Role-specific dashboards
5. Offline sync capability
6. File upload system
7. Basic data visualization

### **Performance Requirements**
- Total bundle size: < 500KB
- Initial load: < 3 seconds on 3G
- Animations: 60fps, GPU-accelerated
- API calls: Batch when possible

---

## 🎯 Final Design Challenge

Create a **reliable, functional, and accessible** application that empowers African public health workers to track risk communication activities effectively. The design should feel **professional and trustworthy** with **minimal purple accents** used only for critical interactions and states.

**Remember**: We're building a lifeline for healthcare workers, not a fashion statement. Every design decision should support the mission of saving lives through better communication.

---

**Ready for Zoer "Build App" phase with these specifications.**