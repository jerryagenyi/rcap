# RCAP - Complete Design & Functional Requirements for Zoer
**Risk Communication Activity Platform - MVP Design System & Functional Specifications**

---

## 🎯 Project Overview & Vision

Create a **world-class, revolutionary design system and fully functional MVP** for RCAP (Risk Communication Activity Platform) that transforms how African public health professionals track, manage, and report risk communication activities. This isn't just another dashboard - it's a lifeline for healthcare workers saving lives across the continent.

### **Design Philosophy**
- **Empowering**: Make every user feel like a hero in their public health mission
- **Effortless**: Complex operations should feel simple and intuitive
- **Beautiful**: World-class aesthetics that inspire confidence and pride
- **Resilient**: Works flawlessly even with challenging connectivity
- **Modern & Sleek**: Contemporary design with sophisticated purple-blue gradient theme
- **Easy to Use**: Intuitive navigation, clear hierarchy, helpful feedback

### **Brand Identity & Personality**

**Visual Essence**: Modern, sophisticated, and trustworthy with a vibrant purple-blue gradient that speaks to:
- **Purple (#7B2CBF)**: Wisdom, dignity, leadership in healthcare
- **Blue (#4A90E2)**: Reliability, clarity, communication
- **Gradient Flow**: Seamless integration of technology and humanity

**Brand Voice**:
- **Tone**: Professional yet warm, authoritative yet approachable
- **Language**: Clear, direct, action-oriented
- **Feeling**: "I'm in control and making a difference"

---

## 🏗️ Technical Architecture

### **Tech Stack**
- **Frontend**: Vue 3 + Composition API + TypeScript + Pinia (state management)
- **UI Framework**: Quasar Framework (Material Design 3 components)
- **Backend**: Laravel 10 + PHP 8.2 + Sanctum API authentication
- **Database**: PostgreSQL 15+
- **Storage**: S3-compatible (MinIO dev, AWS S3 prod)
- **Infrastructure**: Docker Compose
- **Testing**: Vitest (frontend) + PHPUnit (backend)

### **Africa-First Design Philosophy**
- **Offline-First**: Core features work without internet
- **Mobile-First**: 60%+ mobile users, 375px primary breakpoint
- **Low-Bandwidth**: < 500KB bundle, < 3s load on 3G networks
- **Touch-Optimized**: 48px minimum touch targets
- **Public Health Context**: Healthcare professional workflows
- **Enterprise-Ready**: Multi-tenant, hierarchical organization structure

### **Quasar Framework Component Mapping**

**Essential Components**:
- **Buttons**: `q-btn` (primary purple, secondary blue, outline, flat)
- **Cards**: `q-card` with `q-card-section` (white background, 24px padding, 8px radius)
- **Inputs**: `q-input`, `q-select`, `q-checkbox`, `q-radio` (48px height, rounded)
- **Tables**: `q-table` with `q-td`, `q-th` (clean, modern styling)
- **Navigation**: `q-tabs`, `q-tab-panels`, `q-breadcrumbs`
- **Layout**: `q-page`, `q-header`, `q-drawer`, `q-footer`
- **Icons**: `q-icon` with Material Design Icons (mdi-*)

**Data Display**:
- **Lists**: `q-list` with `q-item`, `q-item-section`
- **Chips**: `q-chip` for tags and status indicators (purple/blue variants)
- **Badges**: `q-badge` for notifications and counts
- **Avatars**: `q-avatar` for user photos (40px standard)
- **Progress**: `q-linear-progress`, `q-circular-progress` (purple/blue theme)

**Feedback**:
- **Dialogs**: `q-dialog` for modals and confirmations
- **Notifications**: `q-notify` for toast messages
- **Loading**: `q-spinner` for loading states
- **Tooltips**: `q-tooltip` for help text

---

## 🎨 Complete Design System

### **Purple-Blue Color Theme**

**Primary Color Palette**:
- **Primary Purple**: #7B2CBF or #9D4EDD - buttons, links, active states, highlights
- **Primary Blue**: #4A90E2 or #5B9BD5 - secondary actions, accents
- **Light Purple**: #C77DFF or #E0AAFF - subtle accents, hover states
- **Light Blue**: #A8D5E2 or #B8E0E4 - background gradients, subtle highlights
- **Background**: Light gradient (#F0F4F8 to #E8E0F5) - soft blue-purple gradient
- **Surface**: White (#FFFFFF) - cards, modals, elevated surfaces
- **Surface Dark**: #F8F9FA - subtle card backgrounds, alternate rows

**Semantic Colors**:
- **Success**: Green (#4CAF50) - success states, completed actions
- **Warning**: Orange (#FF9800) - warnings, pending items
- **Error**: Red (#F44336) - errors, urgent alerts
- **Info**: Blue (#2196F3) - information, notifications

**Text Colors**:
- **Text Primary**: Dark Gray (#212121) - main text, headings
- **Text Secondary**: Medium Gray (#757575) - secondary text, labels
- **Text Tertiary**: Light Gray (#B0B0B0) - disabled text, placeholders
- **Text on Purple**: White (#FFFFFF) - text on purple backgrounds

**Border & Divider Colors**:
- **Border Light**: #E0E0E0 - subtle borders, dividers
- **Border Medium**: #BDBDBD - card borders, input borders
- **Border Purple**: #7B2CBF - active borders, focus states

**Gradient System**:
```css
/* Primary Gradients */
--gradient-primary: linear-gradient(135deg, #7B2CBF 0%, #4A90E2 100%);
--gradient-hero: linear-gradient(135deg, #9D4EDD 0%, #5B9BD5 50%, #4A90E2 100%);
--gradient-subtle: linear-gradient(135deg, rgba(123, 44, 191, 0.05) 0%, rgba(74, 144, 226, 0.05) 100%);

/* Glass Morphism Effects */
--glass-surface: rgba(255, 255, 255, 0.8);
--glass-border: rgba(255, 255, 255, 0.2);
--glass-shadow: 0 8px 32px rgba(123, 44, 191, 0.1);

/* Purple-Tinted Shadows */
--shadow-soft: 0 2px 8px rgba(123, 44, 191, 0.1);
--shadow-medium: 0 4px 16px rgba(123, 44, 191, 0.15);
--shadow-strong: 0 8px 32px rgba(123, 44, 191, 0.2);
```

### **Typography System**

**Font Family**:
- **Primary**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Fallback**: System fonts for optimal performance

**Type Scale**:
- **Hero**: 48px, Bold (700), line-height: 1.1, letter-spacing: -0.02em
- **H1**: 32px, SemiBold (600), line-height: 1.2 - page titles
- **H2**: 24px, SemiBold (600), line-height: 1.3 - section headers
- **H3**: 20px, SemiBold (600), line-height: 1.3 - card titles
- **H4**: 18px, SemiBold (600), line-height: 1.3 - subheaders
- **Body Large**: 16px, Regular (400), line-height: 1.6 - main content
- **Body**: 14px, Regular (400), line-height: 1.5 - standard text
- **Caption**: 12px, Regular (400), line-height: 1.4, opacity: 0.8 - metadata, labels
- **Small**: 11px, Regular (400) - fine print

### **Spacing System (8px Grid)**

Apply spacing consistently using the 8px grid system:
- **XS**: 4px (0.25rem) - tight spacing, icon padding
- **SM**: 8px (0.5rem) - small spacing, compact layouts
- **MD**: 16px (1rem) - **default spacing (base unit)**
- **LG**: 24px (1.5rem) - large spacing, card padding
- **XL**: 32px (2rem) - extra large spacing, section spacing
- **2XL**: 48px (3rem) - section spacing, large gaps
- **3XL**: 64px (4rem) - page spacing, major sections

**Critical Spacing Rules**:
- Card padding: **24px** (all sides)
- Card gap: **16px** (between cards)
- Section spacing: **32px** vertical
- Content padding: **16px** horizontal
- Button padding: 12px vertical, 24px horizontal

### **Component Specifications**

#### **1. Button System with Micro-interactions**

**Primary Action Button**:
```css
.btn-primary {
  background: linear-gradient(135deg, #7B2CBF 0%, #4A90E2 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  height: 48px;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(123, 44, 191, 0.1);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(123, 44, 191, 0.15);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(123, 44, 191, 0.1);
}

/* Ripple Effect */
.btn-primary::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-primary:active::after {
  width: 300px;
  height: 300px;
}
```

**Secondary Button**: Blue (#4A90E2) background, white text, same dimensions
**Outline Button**: 2px solid Purple border, transparent background, purple text
**Flat Button**: No background, purple text, hover: light purple background

#### **2. Card Component with Glass Morphism**

```css
.card-elevated {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(123, 44, 191, 0.1);
  transition: all 0.3s ease;
}

.card-elevated:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(123, 44, 191, 0.15);
  border-color: rgba(123, 44, 191, 0.3);
}
```

**Metric Card with Accent**:
```css
.metric-card {
  position: relative;
  overflow: hidden;
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(123, 44, 191, 0.1);
}

.metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #7B2CBF 0%, #4A90E2 100%);
}

.metric-card .metric-value {
  font-size: 32px;
  font-weight: 700;
  color: #212121;
  margin: 12px 0 8px 0;
  animation: countUp 1s ease-out;
}

@keyframes countUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

#### **3. Input Fields with Floating Labels**

```css
.input-field {
  position: relative;
  margin-bottom: 24px;
}

.input-field input {
  width: 100%;
  height: 48px;
  padding: 16px;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
}

.input-field input:focus {
  border-color: #7B2CBF;
  box-shadow: 0 0 0 4px rgba(123, 44, 191, 0.1);
  outline: none;
}

.input-field label {
  position: absolute;
  left: 16px;
  top: 16px;
  background: white;
  padding: 0 4px;
  color: #757575;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-field input:focus + label,
.input-field input:not(:placeholder-shown) + label {
  top: -10px;
  font-size: 12px;
  color: #7B2CBF;
  font-weight: 600;
}
```

**Input States**:
- **Default**: Gray border (#E0E0E0)
- **Focus**: Purple border (#7B2CBF) with purple glow
- **Error**: Red border (#F44336) with error message below
- **Success**: Green border (#4CAF50) with checkmark icon
- **Disabled**: Gray background, reduced opacity

#### **4. Status Badges**

```css
.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-draft {
  background: #9E9E9E;
  color: white;
}

.status-submitted {
  background: #4A90E2;
  color: white;
}

.status-approved {
  background: #4CAF50;
  color: white;
}

.status-rejected {
  background: #F44336;
  color: white;
}
```

### **Responsive Breakpoints**

- **xs**: < 600px (mobile phones) - **PRIMARY FOCUS**
- **sm**: 600px - 1023px (tablets)
- **md**: 1024px - 1439px (small laptops)
- **lg**: 1440px - 1919px (laptops)
- **xl**: ≥ 1920px (desktops)

### **Mobile-First Navigation**

**Bottom Navigation Bar (Mobile)**:
```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  transition: all 0.3s ease;
  color: #757575;
}

.nav-item.active {
  color: #7B2CBF;
}

.nav-item.active::before {
  content: '';
  position: absolute;
  top: -8px;
  width: 32px;
  height: 3px;
  background: linear-gradient(135deg, #7B2CBF 0%, #4A90E2 100%);
  border-radius: 2px;
}
```

**Five Primary Tabs**: Dashboard, Activities, Reports, Team, Profile
**Active State**: Purple gradient accent bar above icon, purple color
**Badge Notifications**: Red circle with white number on relevant tabs
**Haptic Feedback**: Subtle vibration on tap

### **Touch Interface Guidelines**

- **Minimum touch target**: 48px × 48px
- **Comfortable spacing**: 16px between interactive elements
- **Thumb zones**: Important actions in bottom 1/3 of screen
- **Swipe gestures**: Support for common mobile interactions
- **Haptic Feedback**: Subtle vibration on button taps
- **Visual Feedback**: Ripple effects, scale animations

**Gesture Patterns**:
- **Pull to Refresh**: Spinner with purple-blue gradient
- **Swipe Actions**: Reveal edit/delete options on list items
- **Pinch to Zoom**: On images and charts
- **Long Press**: Context menus with haptic feedback

### **Offline Visual Indicators**

- **Online**: Green dot (8px circle, #4CAF50), "Online" label (12px, #4CAF50)
- **Slow Connection**: Yellow dot (8px, #FF9800), "Slow Connection" label
- **Offline**: Red dot (8px, #F44336), "Offline" label, offline banner
- **Syncing**: Purple spinning icon (16px, #7B2CBF), "Syncing..." label, progress bar

**Offline Banner**:
- Persistent top banner (48px height, red background #F44336, white text)
- "You're offline. Some features may be limited." message
- "Retry Connection" button (white text, red border)

**Cached Content Indicators**:
- "Cached" labels (gray badge, 8px padding, 4px radius) on available data
- "Last synced: [time]" timestamp (12px, #757575)
- Gray overlay (50% opacity) on disabled features requiring connection

### **Loading & Skeleton States**

```css
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Progressive Loading**:
- Critical content loads first (metrics, recent activities)
- Secondary content loads after (charts, detailed lists)
- Loading priority indicators
- Retry mechanisms with "Retry" button (purple, 48px height)

### **Animations & Transitions**

**Page Transitions**:
```css
.page-enter {
  opacity: 0;
  transform: translateX(20px);
}

.page-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.5s ease;
}
```

**Chart Animations**:
```css
.chart-bar {
  animation: growBar 1s ease-out forwards;
}

@keyframes growBar {
  from { height: 0; }
  to { height: var(--bar-height); }
}

.chart-pie {
  animation: rotateIn 1s ease-out forwards;
}

@keyframes rotateIn {
  from { transform: rotate(-90deg); }
  to { transform: rotate(0); }
}
```

**Success Celebrations**:
```css
@keyframes celebrate {
  0% { transform: scale(0) rotate(0deg); }
  50% { transform: scale(1.2) rotate(180deg); }
  100% { transform: scale(1) rotate(360deg); }
}
```

### **Accessibility Features**

**WCAG 2.1 AA+ Compliance**:
```css
/* High Contrast Mode */
@media (prefers-contrast: high) {
  :root {
    --text-primary: #000000;
    --text-secondary: #333333;
    --bg-primary: #ffffff;
    --border-color: #000000;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus Management */
.focus-visible {
  outline: 3px solid #7B2CBF;
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Screen Reader Support**:
- Semantic HTML structure
- ARIA labels and descriptions
- Live regions for dynamic content
- Skip navigation links
- Alt text for all images
- Keyboard navigation support
- Adjustable font size settings

### **Dark Mode Support**

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #121212;
    --bg-surface: #1e1e1e;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --border-color: #333333;
  }

  .card-elevated {
    background: rgba(30, 30, 30, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
  }
}
```

---

## 📋 Complete Functional Requirements

### **1. Authentication & Onboarding**

#### **a. Secure Login Interface**
- **Email/Phone Authentication**: Email address or phone number input field (48px height, purple focus state)
- **Password Field**: Secure password input with show/hide toggle
- **Remember Me**: Checkbox option with secure token storage (localStorage with encryption)
- **Password Reset**: "Forgot Password" link below login form
  - Email/SMS verification code
  - New password entry with strength indicator
  - Success confirmation screen
- **Role-Based Redirect**: After successful login, redirect based on user role:
  - Federal Level → National Overview Dashboard
  - State Level → State Dashboard
  - LGA Level → LGA Dashboard
  - Field Officer → Field Officer Dashboard

#### **b. First-Time User Onboarding**
- **Interactive Tutorial**: 3-4 screen walkthrough highlighting key features
  - Screen 1: Welcome message with app purpose
  - Screen 2: Dashboard overview and navigation
  - Screen 3: Activity creation workflow
  - Screen 4: Offline mode and sync features
- **Role-Specific Quick Start Guide**: 
  - Federal: National metrics and reporting
  - State: State management and team coordination
  - LGA: Local activity tracking
  - Field Officer: Mobile activity submission
- **Skip Option**: "Skip Tutorial" button in top right, accessible later from settings
- **Progress Indicator**: Purple progress dots at bottom of tutorial screens

### **2. Role-Based Dashboard (Home Screen)**

#### **a. Federal Level Dashboard (Super Admin)**

**Layout Structure**:
```
┌─────────────────────────────────────────────────────────┐
│ Header: National Overview │ User Profile │ Settings    │
├─────────────────────────────────────────────────────────┤
│ 📊 Real-time National Metrics (4 animated cards)       │
├─────────────────────────────────────────────────────────┤
│ 🗺️ Interactive Map │ 📈 Performance Trends          │
│   (State-wise)     │   (Animated charts)             │
├─────────────────────────────────────────────────────────┤
│ ⚡ Emergency Center │ 📋 System Health │ 👥 Teams    │
└─────────────────────────────────────────────────────────┘
```

**Four Animated Metric Cards**:
1. **Total Activities Card**:
   - Primary Number: "1,247" (32px font, Inter SemiBold, #212121)
   - Label: "Total Activities" (14px font, Inter Regular, #757575)
   - Trend Indicator: "+12% this month" with green up arrow icon
   - Icon: mdi-clipboard-text (24px, Purple #7B2CBF)
   - Accent: Purple left border (4px solid) or purple icon background
   - Animation: Count-up animation on load

2. **Active Outbreaks Card**:
   - Primary Number: "3" (32px font, bold, Orange #FF9800)
   - Label: "Active Outbreaks" (14px font, #757575)
   - Status: "2 under control, 1 active" (12px, #757575)
   - Icon: mdi-alert-circle (24px, Orange #FF9800)
   - Accent: Orange left border or icon background
   - Quick Action: "View Details" link (purple)

3. **Vaccination Coverage Card**:
   - Primary Number: "67.3%" (32px font, bold, Green #4CAF50)
   - Label: "Vaccination Coverage" (14px font, #757575)
   - Progress: "Target: 70%" with progress bar (purple/blue gradient)
   - Icon: mdi-needle (24px, Green #4CAF50)
   - Visual: Circular progress indicator

4. **Healthcare Workers Trained Card**:
   - Primary Number: "15,892" (32px font, bold, Blue #4A90E2)
   - Label: "Healthcare Workers Trained" (14px font, #757575)
   - Trend: "↑ 1,234 this quarter" with blue indicator
   - Icon: mdi-account-group (24px, Blue #4A90E2)
   - Quick Action: "View Training Programs" link

**Interactive National Map**:
- State-wise activity distribution visualization
- Color-coded by activity volume (light blue = low, dark blue = high)
- Click state to filter activities
- Hover shows state name and activity count
- No GIS/mapping libraries - data visualization only

**Real-Time Performance Trend Charts**:
- Line/bar graphs showing trends over time
- Animated chart bars with purple/blue gradient
- Interactive hover states showing exact values
- Time period selector: Week, Month, Quarter, Year
- Export chart as image button

**Emergency Alert Center**:
- Priority notifications banner (red background for critical)
- Active emergencies list with severity levels
- Quick response action buttons
- Alert history log

**Quick Action Buttons**:
- "Create Activity" (purple gradient button, 48px height)
- "View Reports" (blue outline button)
- "Manage Teams" (purple outline button)

#### **b. State Level Dashboard (State Admin)**

**Layout Structure**:
```
┌─────────────────────────────────────────────────────────┐
│ Header: Lagos State │ Quick Actions │ Notifications   │
├─────────────────────────────────────────────────────────┤
│ 📊 State Performance Metrics (4 color-coded cards)     │
├─────────────────────────────────────────────────────────┤
│ 🏥 LGA Performance │ 📊 Resource Allocation          │
│   (Interactive)     │   (Donut charts)                │
├─────────────────────────────────────────────────────────┤
│ 👥 Field Teams │ 📢 Communications │ 🎯 Activities   │
└─────────────────────────────────────────────────────────┘
```

**Four Color-Coded Metric Cards**:
1. **Activities This Week**: "89" (purple accent)
2. **Pending Approvals**: "23" (orange accent, action required)
3. **Active Field Teams**: "45/52" (blue accent)
4. **Community Reach**: "2.3M people" (green accent)

**LGA Performance Comparison Table**:
- Sortable columns: LGA Name, Activities, Completion Rate, Team Size
- Color-coded rows by performance (green = high, yellow = medium, red = low)
- Click LGA to view detailed dashboard
- Export to Excel/PDF button

**Resource Allocation Donut Charts**:
- Visual breakdown of resources by category
- Interactive hover showing exact values
- Purple/blue gradient color scheme

**Field Team Status Indicators**:
- Live updates showing team locations and status
- Online/offline indicators
- Activity count per team
- Quick contact buttons

**Quick Action Buttons**:
- "Approve Activities" (orange button for pending items)
- "Assign Teams" (purple button)
- "Generate Reports" (blue button)

#### **c. LGA/Field Officer Dashboard**

**Layout Structure**:
```
┌─────────────────────────────────────────────────────────┐
│ Header: Local Dashboard │ Sync Status │ Profile        │
├─────────────────────────────────────────────────────────┤
│ 📊 My Metrics (4 simplified cards)                      │
├─────────────────────────────────────────────────────────┤
│ 📅 Activity Timeline/Calendar View                      │
├─────────────────────────────────────────────────────────┤
│ 📝 Quick Activity Submission Form                       │
├─────────────────────────────────────────────────────────┤
│ 📱 Recent Updates │ 📋 Assigned Tasks                  │
└─────────────────────────────────────────────────────────┘
```

**Simplified Metric Cards**:
1. **My Activities**: Personal activity count with status breakdown
2. **Pending Tasks**: Tasks assigned by supervisor
3. **Team Members**: Team member list with contact info
4. **Recent Updates**: Latest messages and notifications

**Activity Timeline/Calendar View**:
- Monthly/weekly/daily views toggle
- Color-coded by activity status
- Click date to view activities
- Quick add activity button (purple FAB on mobile)

**Quick Activity Submission Form**:
- Simplified form for rapid data entry
- Auto-save draft functionality
- Offline queue indicator
- Photo capture integration (mobile)

**Offline Sync Status Indicator**:
- Visual indicator in header (green/yellow/red dot)
- "Last synced: [time]" timestamp
- Manual sync button
- Pending actions count badge

**Quick Action Buttons**:
- "Log Activity" (purple gradient, primary action)
- "Upload Evidence" (blue button)
- "View Assignments" (outline button)

### **3. Activity Management**

#### **a. Activity List View**

**Filterable and Searchable Table**:
- **Search Bar**: Top of page (48px height, purple focus state)
  - Search by title, description, location, organization
  - Real-time search results
- **Filters**: 
  - Status filter (Draft, Submitted, Approved, Rejected, Completed)
  - Date range picker
  - Activity type dropdown
  - Location filter (State/LGA)
  - Organization filter
- **Sort Options**: 
  - Date (newest/oldest)
  - Status
  - Title (A-Z)
  - Organization

**Status Badges**:
- **Draft**: Gray (#9E9E9E) badge with "Draft" text
- **Submitted**: Blue (#4A90E2) badge with "Submitted" text
- **Approved**: Green (#4CAF50) badge with checkmark icon
- **Rejected**: Red (#F44336) badge with "Rejected" text
- **Completed**: Green (#4CAF50) badge with "Completed" text

**Table Columns**:
- Activity Title (clickable, opens detail view)
- Status Badge
- Organization
- Location (State/LGA)
- Date Created
- Last Modified
- Actions Menu (3 dots icon)

**Bulk Action Capabilities**:
- Checkbox selection for multiple activities
- Bulk actions dropdown:
  - Approve (admin only)
  - Export to PDF/Excel
  - Assign to team/user
  - Change status
  - Delete (with confirmation)

**Pagination**:
- Items per page selector (10, 25, 50, 100)
- Page navigation (Previous/Next buttons)
- Page number display
- Total count: "Showing 1-25 of 1,247 activities"

**Skeleton Loading States**:
- Gray placeholder rows matching table structure
- Shimmer animation during data fetch
- Loading spinner in table header

**Empty State**:
- Illustration (200px height, centered)
- Message: "No activities found" (20px, bold, #212121)
- Subtext: "Try adjusting your filters or create a new activity" (14px, #757575)
- "Create Activity" button (purple, 48px height, centered)

#### **b. Create/Edit Activity Form**

**Multi-Step Form with Progress Indicator**:
- **Progress Bar**: Top of form showing current step (purple gradient)
- **Steps**: 
  1. Basic Information
  2. Details & Description
  3. Location & Date
  4. Target Population
  5. Resources Required
  6. Evidence & Attachments
  7. Review & Submit

**Form Fields**:

**Step 1: Basic Information**:
- Activity Type (dropdown, required):
  - Vaccination Campaign
  - Health Education
  - Emergency Response
  - Disease Surveillance
  - Community Outreach
  - Training Workshop
- Title (text input, required, max 200 chars)
- Short Description (textarea, required, max 500 chars)

**Step 2: Details & Description**:
- Full Description (rich text editor, required)
- Objectives (bullet list input)
- Expected Outcomes (textarea)

**Step 3: Location & Date**:
- State (dropdown, required)
- LGA (dropdown, required, depends on state)
- Specific Location (text input, optional)
- Start Date/Time (date-time picker, required)
- End Date/Time (date-time picker, required)
- Duration (auto-calculated, display only)

**Step 4: Target Population**:
- Target Population Size (number input)
- Age Groups (multi-select checkboxes)
- Demographics (multi-select checkboxes)

**Step 5: Resources Required**:
- Personnel Count (number input)
- Budget Estimate (currency input)
- Equipment Needed (multi-select)
- Materials Required (textarea)

**Step 6: Evidence & Attachments**:
- File Upload Area:
  - Drag-and-drop zone (200px height, dashed purple border)
  - "Choose Files" button (purple)
  - Supported formats: PDF, DOC, DOCX, JPG, PNG, MP4 (max 50MB each)
  - File preview thumbnails
  - Upload progress bars
  - Remove file button (red X icon)
- Photo Capture (mobile): Camera integration button

**Step 7: Review & Submit**:
- Summary of all entered information
- Edit button for each section
- Tags selector (multi-select with create new option)
- Template selection (optional, if using template)
- Submit for Approval button (green, 48px height)
- Save as Draft button (gray outline, 48px height)

**Auto-Save Draft Functionality**:
- Auto-save indicator: "Saved" (green checkmark) or "Saving..." (spinner)
- Auto-save every 30 seconds or on field blur
- "Last saved: [time]" timestamp
- Resume draft option on form re-entry

**Validation with Inline Error Messages**:
- Real-time validation on field blur
- Error message below field (14px, red #F44336)
- Error icon (mdi-alert-circle, 16px, red) before message
- Success state: Green border with checkmark icon
- Form-level error banner at top if submission fails

**Template Selection (Optional)**:
- "Use Template" button at top of form
- Template library modal:
  - Grid of template cards (3 columns desktop, 1 column mobile)
  - Template preview thumbnail
  - Title and description
  - Usage count badge
  - "Use Template" button (purple)
- Selected template pre-fills form fields
- "Skip Template" option

**Tag Management**:
- Multi-select tag dropdown with search
- Tag categories: Metric (blue), Theme (green), Audience (orange), Other (gray)
- Recent tags section at top
- "+ Create Tag" option in dropdown
- Selected tags shown as chips above input

#### **c. Activity Detail View**

**Complete Activity Information Display**:
- **Header Section**:
  - Activity Title (32px, bold, #212121)
  - Status Badge (large, prominent)
  - Organization and Location (14px, #757575)
  - Created by and date (12px, #757575)
- **Content Sections** (collapsible):
  - Basic Information
  - Full Description
  - Location & Schedule
  - Target Population
  - Resources
  - Evidence & Attachments (file gallery with preview)
  - Tags
  - Comments/Feedback Section

**Approval Workflow Status Tracker**:
- Visual progress indicator showing current status
- Status history timeline:
  - Draft → Submitted → Under Review → Approved/Rejected
- Each status shows:
  - Status name and badge
  - Timestamp
  - User who performed action
  - Comments (if any)

**Comments/Feedback Section**:
- Comment input field (textarea, 48px min height)
- "Add Comment" button (purple, 48px height)
- Comments list:
  - User avatar (40px circle)
  - User name and role (14px, bold)
  - Comment text (14px, #212121)
  - Timestamp (12px, #757575)
  - Reply button (optional)

**Edit/Delete Options (Role-Based Permissions)**:
- **Draft Status**: Full edit access, delete button (red)
- **Submitted Status**: View only, "Withdraw Submission" (admin only)
- **Approved Status**: View only, "Export" button enabled
- **Rejected Status**: "Edit & Resubmit" button (orange, 48px height)

**Export to PDF Functionality**:
- "Export PDF" button (blue, 48px height) in header
- Generates formatted PDF with all activity information
- Includes evidence thumbnails
- Download starts automatically

**Related Activities Section**:
- "Related Activities" card showing similar activities
- Filtered by same organization, location, or type
- Click to navigate to related activity

### **4. Data Visualization & Reports**

#### **a. Interactive Charts & Graphs**

**Animated Bar Charts for Activity Trends**:
- Time period selector: Week, Month, Quarter, Year
- X-axis: Time periods
- Y-axis: Activity count
- Animated bars with purple/blue gradient
- Interactive hover showing exact values
- Click bar to filter activities by period
- Export chart as PNG/SVG button

**Donut/Pie Charts for Activity Type Distribution**:
- Visual breakdown of activities by type
- Color-coded segments (purple, blue, green, orange, red)
- Interactive hover showing type name and count
- Legend below chart
- Percentage display in center (optional)
- Export chart as image

**Line Graphs for Performance Metrics**:
- Multiple metrics on same graph (different colored lines)
- Metrics: Activities Created, Completed, Approved, Rejected
- Interactive hover showing all metric values at point
- Time period selector
- Trend indicators (up/down arrows)
- Export chart as image

**Heatmap for Geographic Activity Distribution**:
- State-wise or LGA-wise activity heatmap
- Color intensity indicates activity volume
- Light blue = low activity, dark blue = high activity
- Hover shows exact count
- Click to filter activities by location
- No GIS libraries - data visualization only

**Exportable Chart Images**:
- "Export" button on each chart (icon button, top right)
- Export formats: PNG, SVG, PDF
- High-resolution export option
- Download starts automatically

#### **b. Report Generation**

**Pre-Built Report Templates**:
- **Weekly Report**: Activities created this week, status breakdown, top performers
- **Monthly Report**: Monthly summary, trends, comparisons
- **Quarterly Report**: Quarterly overview, year-over-year comparison
- **Custom Report**: User-defined template

**Custom Date Range Selection**:
- Date range picker (start date and end date)
- Preset options: Today, This Week, This Month, This Quarter, This Year, Last Year
- Custom range validation (end date must be after start date)

**Filter Options**:
- Filter by location (State/LGA)
- Filter by activity type
- Filter by team/user
- Filter by status
- Filter by organization
- Multiple filters can be combined

**Export Options**:
- **PDF Export**: 
  - Formatted report with charts and tables
  - Includes cover page with report metadata
  - Table of contents (for long reports)
  - Page numbers and date stamp
- **Excel Export**:
  - Raw data in spreadsheet format
  - Multiple sheets for different data types
  - Formatted tables with headers
- **CSV Export**:
  - Comma-separated values for data analysis
  - Includes all selected fields

**Scheduled Report Delivery**:
- "Schedule Report" button in report generation screen
- Schedule configuration:
  - Frequency: Daily, Weekly, Monthly, Quarterly
  - Day of week/month selection
  - Time of day
  - Recipients (email addresses)
  - Report format (PDF/Excel)
- "Save Schedule" button
- Scheduled reports list with edit/delete options

#### **c. Real-Time Analytics**

**Live Activity Counter with Animations**:
- Animated number counter on dashboard
- Updates in real-time (if WebSocket enabled)
- Smooth count-up animation
- Purple/blue gradient background

**Performance Comparison Widgets**:
- Current period vs. previous period comparison
- Percentage change indicator (green up arrow, red down arrow)
- Side-by-side metric cards
- Visual bar comparison

**Goal Progress Indicators**:
- Circular progress indicator
- Goal percentage display
- Remaining amount to reach goal
- Visual feedback with color coding (green = on track, yellow = at risk, red = behind)

**Top Performers Leaderboard**:
- Ranked list of top performers
- Metrics: Activities created, completion rate, team size
- User avatars (40px circles)
- Performance badges (gold, silver, bronze)
- "View Profile" link for each user

### **5. Team & User Management**

#### **a. Team Directory**

**Searchable List of Team Members**:
- Search bar at top (48px height, purple focus)
- Search by name, email, phone, role, location
- Real-time search results

**Profile Cards Display**:
- Grid layout (3 columns desktop, 1 column mobile)
- Card includes:
  - User avatar (48px circle, purple border when active)
  - Name (16px, bold, #212121)
  - Role and organization (14px, #757575)
  - Location (14px, #757575)
  - Contact information (email, phone icons)
  - Activity count badge (purple circle with number)
  - Online/offline status indicator (green/red dot)

**Role and Location Filters**:
- Filter dropdowns:
  - Role: Super Admin, Admin, Sub-Admin, User
  - Location: State, LGA
  - Organization
- Multiple filters can be combined
- Active filter chips shown above list

**Contact Information**:
- Email address (clickable, opens email client)
- Phone number (clickable, initiates call on mobile)
- Office location (if available)

**Activity Assignment History**:
- "View Activity History" link on profile card
- Opens modal showing:
  - Activities assigned to user
  - Activities created by user
  - Completion statistics
  - Timeline view

**Online/Offline Status Indicators**:
- Green dot (8px circle) = Online
- Red dot (8px circle) = Offline
- Yellow dot (8px circle) = Away
- Last seen timestamp (12px, #757575)

#### **b. User Profile Management**

**Editable Profile Information**:
- **Photo Upload**:
  - Current photo display (80px circle)
  - "Change Photo" button (purple outline)
  - Image crop tool (square, 1:1 ratio)
  - Preview before save
- **Personal Information**:
  - Full Name (text input, required)
  - Email Address (email input, required, validated)
  - Phone Number (tel input, required)
  - Job Title (text input)
  - Bio (textarea, optional, max 500 chars)
- **Save Changes** button (purple, 48px height)

**Role and Permission Display**:
- Current role badge (purple/blue/green/orange based on role)
- Permission list (read-only, shows what user can do)
- "Request Permission Change" link (if user wants different permissions)

**Activity History and Statistics**:
- Personal dashboard showing:
  - Total activities created
  - Activities by status
  - Completion rate
  - Recent activity timeline
- Charts showing personal performance trends

**Notification Preferences**:
- Toggle switches for:
  - Email notifications
  - SMS notifications
  - Push notifications
  - Activity assignments
  - Approval requests
  - System updates
- Save preferences button

**Password Change Functionality**:
- "Change Password" section (collapsible)
- Current password input (required)
- New password input (with strength indicator)
- Confirm new password input
- Password requirements displayed:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one number
  - At least one special character
- "Update Password" button (purple, 48px height)

#### **c. Team Assignment (Admin Only)**

**Assign Activities to Specific Users/Teams**:
- Activity assignment modal:
  - Activity title and details preview
  - User/team search and selection
  - Assignment date (default: today)
  - Due date picker
  - Priority level selector (Low, Medium, High, Urgent)
  - Notes/instructions textarea
  - "Assign" button (purple, 48px height)

**Workload Distribution View**:
- Visual chart showing:
  - Activities per user (bar chart)
  - Pending vs. completed (stacked bars)
  - Overloaded users highlighted (red)
  - Underutilized users highlighted (green)
- Click user to see detailed workload

**Bulk Assignment Capabilities**:
- Select multiple activities (checkboxes)
- "Assign Selected" button
- Bulk assignment modal:
  - Assign to user or team
  - Same assignment date and due date for all
  - Priority level for all
  - "Assign All" button

**Assignment Notification System**:
- Email notification sent to assigned user
- Push notification (if enabled)
- In-app notification badge
- Notification includes:
  - Activity title
  - Assigner name
  - Due date
  - Priority level
  - "View Activity" link

### **6. Notifications & Alerts**

#### **a. Notification Center**

**Categorized Notifications**:
- **Approvals**: Activity approval requests, status changes
- **Assignments**: New activity assignments, task updates
- **Alerts**: System alerts, emergency notifications
- **System Updates**: Platform updates, maintenance notices

**Notification List Display**:
- List of notifications with:
  - Icon (color-coded by category)
  - Title (16px, bold, #212121)
  - Description/preview (14px, #757575, truncated)
  - Timestamp (12px, #757575)
  - Unread indicator (purple dot, left side)
- Click notification to view details
- Mark as read/unread on click

**Unread Badge Counter**:
- Red circle badge with white number
- Top right of notification bell icon
- Updates in real-time
- Shows total unread count

**Mark as Read/Unread Functionality**:
- Click notification toggles read/unread status
- "Mark All as Read" button (top of list, purple outline)
- Bulk selection with "Mark Selected as Read" option

**Clear All Option**:
- "Clear All" button (top right, red text)
- Confirmation dialog: "Are you sure you want to clear all notifications?"
- Clears all read notifications
- Unread notifications remain

**Push Notification Settings**:
- Toggle switches for:
  - Enable push notifications
  - Sound alerts
  - Vibration
  - Notification categories (select which to receive)
- Save settings button

#### **b. Emergency Alert System**

**Priority Alert Banner on Dashboard**:
- **Critical Alert**: 
  - Red banner (full width, 64px height, #F44336 background, white text)
  - Non-dismissible until acknowledged
  - Requires action button (48px, white background, red text)
  - Sound alert (optional, browser notification)
  - Pulsing animation to draw attention
- **High Priority**: 
  - Orange banner (#FF9800 background, white text)
  - Can dismiss after reading
  - "Acknowledge" button required
- **Medium Priority**: 
  - Yellow banner (#FFC107 background, dark text)
  - Standard dismissible
  - X button in top right
- **Low Priority**: 
  - Blue banner (#2196F3 background, white text)
  - Informational only
  - Auto-dismiss after 5 seconds

**Outbreak/Emergency Notifications**:
- Alert includes:
  - Severity level badge
  - Title (20px, bold, white)
  - Description (14px, white)
  - Affected locations
  - Response actions required
  - Contact information
- "View Details" button (white, 48px height)
- "Acknowledge" button (required for critical/high priority)

**Quick Response Action Buttons**:
- "Create Response Activity" (purple, 48px height)
- "Contact Team" (blue, 48px height)
- "View Emergency Plan" (outline, 48px height)

**Alert History Log**:
- "View Alert History" link
- Chronological list of all alerts
- Filter by severity level
- Search functionality
- Export alert history (PDF/Excel)

### **7. Offline Mode & Sync**

#### **a. Offline Functionality**

**Local Data Caching**:
- Recent activities cached locally (last 30 days)
- User profile and preferences cached
- Team directory cached
- Dashboard metrics cached
- Cache size indicator in settings

**Offline Activity Submission Queue**:
- Activities created offline stored in local queue
- Queue indicator badge showing count: "3 pending"
- Queue list accessible from header
- Queue items show:
  - Activity title
  - Created date/time
  - Status: "Pending Sync"
  - Retry button (if sync failed)

**Visual Indicator of Offline Status**:
- Connection status in header:
  - Green dot + "Online" (when connected)
  - Red dot + "Offline" (when disconnected)
  - Yellow dot + "Slow Connection" (when connection is slow)
- Offline banner at top of screen (when offline):
  - Red background (#F44336)
  - White text: "You're offline. Some features may be limited."
  - "Retry Connection" button

**Background Sync When Connection Restored**:
- Automatic sync when connection detected
- Sync progress indicator:
  - "Syncing..." message
  - Progress bar (purple gradient)
  - Item count: "Syncing 3 of 5 items..."
- Success notification when sync complete
- Error notification if sync fails (with retry option)

#### **b. Sync Management**

**Manual Sync Trigger Button**:
- "Sync Now" button in header (when offline or slow connection)
- Purple button with sync icon
- Click to manually trigger sync
- Loading spinner during sync
- Success/error feedback

**Sync Status Display**:
- "Last synced: [time]" timestamp in header (12px, #757575)
- Updates after successful sync
- "Never" if never synced

**Pending Items Indicator**:
- Badge showing count of pending items
- Click to view pending items list
- List shows:
  - Item type (Activity, Comment, etc.)
  - Item title/description
  - Created date/time
  - Status: "Pending" or "Failed"
  - Retry button for failed items

**Conflict Resolution Interface**:
- Modal dialog when conflicts detected
- Shows:
  - Local version (what user has)
  - Server version (what's on server)
  - Side-by-side comparison
  - Options:
    - "Use Local Version" button
    - "Use Server Version" button
    - "Merge Changes" button (if possible)
- User selects resolution method
- "Resolve" button applies choice

**Sync Progress Indicator**:
- Progress bar during sync (purple gradient)
- Percentage complete: "45%"
- Item count: "Syncing item 3 of 7..."
- Cancel sync button (optional)

### **8. Settings & Configuration**

#### **a. Application Settings**

**Theme Toggle (Light/Dark Mode)**:
- Toggle switch in settings
- "Light Mode" / "Dark Mode" labels
- Preview of theme colors
- Saves preference automatically
- Applies immediately on toggle

**Language Selection**:
- Dropdown menu with languages:
  - English (default)
  - French
  - Arabic
  - Swahili
  - Portuguese
- "Change Language" button
- Confirmation: "Language will change on next page load"
- App restarts to apply language

**Notification Preferences**:
- **Email Notifications**:
  - Toggle: Enable/disable
  - Frequency: Immediate, Daily Digest, Weekly Digest
  - Categories: Select which to receive
- **SMS Notifications**:
  - Toggle: Enable/disable
  - Phone number verification required
  - Categories: Select which to receive
- **Push Notifications**:
  - Toggle: Enable/disable
  - Browser permission request
  - Categories: Select which to receive
- Save preferences button

**Data Usage Settings**:
- "Auto-sync on WiFi Only" toggle
- "Download Images Automatically" toggle
- "Cache Size Limit" slider (100MB - 1GB)
- "Clear Cache" button (with confirmation)
- "Data Usage This Month" display (if available)

**Accessibility Settings**:
- "High Contrast Mode" toggle
- "Reduce Motion" toggle (for animations)
- "Font Size" slider (12px - 20px)
- "Screen Reader Optimized" toggle
- Save preferences button

#### **b. Help & Support**

**Searchable FAQ Section**:
- Search bar at top (48px height)
- FAQ categories:
  - Getting Started
  - Activities
  - Reports
  - Teams
  - Troubleshooting
- Expandable FAQ items
- "Was this helpful?" feedback buttons (Yes/No)

**Interactive Tutorial Replay**:
- "Replay Tutorial" button
- Same 3-4 screen walkthrough as onboarding
- Can skip at any time
- Progress saved if interrupted

**Contact Support Form**:
- Form fields:
  - Subject (dropdown: Bug Report, Feature Request, Question, Other)
  - Description (textarea, required)
  - Attach Screenshot (file upload, optional)
  - Contact Email (pre-filled from profile)
- "Submit" button (purple, 48px height)
- Success message: "Support request submitted. We'll respond within 24 hours."

**System Status Page**:
- Current system status indicators:
  - API Status: Green/Yellow/Red
  - Database Status: Green/Yellow/Red
  - Storage Status: Green/Yellow/Red
- Recent incidents log
- Maintenance schedule (if any)
- "Report Issue" link

**Version Information**:
- Current version number displayed
- "Check for Updates" button
- Update notification if new version available
- "What's New" link showing changelog

### **9. Mobile-Optimized Navigation**

#### **a. Bottom Navigation Bar (Mobile)**

**Five Primary Tabs**:
1. **Dashboard**: Home icon, shows role-based dashboard
2. **Activities**: Clipboard icon, shows activity list
3. **Reports**: Chart icon, shows reports and analytics
4. **Team**: Users icon, shows team directory
5. **Profile**: User icon, shows user profile and settings

**Active State Indicators**:
- Active tab: Purple color (#7B2CBF)
- Purple gradient accent bar above icon (3px height, 32px width)
- Icon slightly larger (24px vs 20px)
- Label bold font weight

**Haptic Feedback on Tap**:
- Subtle vibration when tapping navigation items
- Smooth transition animation
- Immediate visual feedback

**Badge Notifications on Relevant Tabs**:
- Red circle badge with white number
- Top right of icon
- Shows unread count for:
  - Activities tab: Pending approvals
  - Reports tab: New reports available
  - Team tab: New messages/updates
  - Profile tab: Notifications

#### **b. Responsive Header**

**Collapsible Menu on Mobile**:
- Hamburger menu icon (3 lines) on left
- Opens side drawer with:
  - User profile section (avatar, name, role)
  - Navigation links
  - Quick actions
  - Settings link
  - Logout button
- Overlay background (dark, 50% opacity)
- Swipe to close gesture

**Quick Search Functionality**:
- Search icon in header (desktop: search bar, mobile: icon opens search modal)
- Search modal (mobile):
  - Full-screen overlay
  - Search input at top (48px height)
  - Recent searches below
  - Search results list
  - Close button (X icon)

**Notification Bell with Badge Counter**:
- Bell icon in header (right side)
- Red badge with unread count
- Click opens notification dropdown (desktop) or full-screen (mobile)
- Badge updates in real-time

**User Profile Dropdown**:
- User avatar in header (right side)
- Click opens dropdown menu:
  - Profile link
  - Settings link
  - Help & Support link
  - Logout button
- Mobile: Opens profile page directly

### **10. Accessibility & Performance**

#### **a. Accessibility Features**

**High Contrast Mode Toggle**:
- Settings toggle
- Increases contrast ratios:
  - Text: Black on white (or white on black)
  - Borders: Solid black
  - Buttons: High contrast colors
- Applies immediately

**Screen Reader Compatibility**:
- ARIA labels on all interactive elements
- Semantic HTML structure
- Live regions for dynamic content updates
- Alt text for all images
- Descriptive link text

**Keyboard Navigation Support**:
- Tab order follows visual layout
- Enter/Space to activate buttons
- Arrow keys for navigation in lists/tables
- Escape to close modals
- Focus indicators: Purple outline (3px, #7B2CBF)

**Adjustable Font Size Settings**:
- Font size slider in settings (12px - 20px)
- Applies to all text (except headings, which scale proportionally)
- Saves preference
- Applies immediately

**Focus Indicators on Interactive Elements**:
- Purple outline (3px solid, #7B2CBF)
- 2px offset from element
- Visible on keyboard navigation
- Respects reduced motion preferences

#### **b. Performance Optimization**

**Lazy Loading for Images and Charts**:
- Images load as user scrolls
- Placeholder shown until image loads
- Charts load after initial page render
- Progressive enhancement approach

**Skeleton Screens During Data Fetch**:
- Gray placeholder matching content structure
- Shimmer animation
- Replaces with actual content when loaded
- Reduces perceived load time

**Optimistic UI Updates**:
- Immediate visual feedback on user actions
- Updates UI before server confirmation
- Rolls back if server error occurs
- Shows success/error notification

**Progressive Web App (PWA) Capabilities**:
- Install prompt for mobile devices
- Offline access to cached content
- App-like experience (full-screen, no browser UI)
- Push notification support
- Service worker for background sync

**Image Compression and Caching**:
- Automatic image compression on upload
- Thumbnail generation for gallery views
- Cached images stored locally
- Cache size management
- Clear cache option in settings

---

## 📊 Status-Specific UI States

### **Activity Status Management**

#### **1. Draft State**
- **Visual**: 
  - Gray color scheme (#9E9E9E)
  - "Draft" badge (gray background, white text, 8px padding, 4px border radius)
  - Dashed borders (1px dashed #BDBDBD) on editable sections
- **Actions**: 
  - "Edit" button (48px height, purple primary)
  - "Save Draft" button (48px height, gray outline)
  - "Delete" button (48px height, red outline)
  - "Submit" button (48px height, green primary)
- **Indicators**: 
  - "Last edited: 2 hours ago" (12px, #757575)
  - Auto-save status: "Saved" (green checkmark) or "Saving..." (spinner)
- **Permissions**: Full editing enabled, all fields editable

#### **2. Submitted State**
- **Visual**: 
  - Blue accent (#4A90E2)
  - "Submitted" badge (blue background, white text)
  - Lock icon (mdi-lock, 16px, #757575) on editable fields
- **Actions**: 
  - "View" only mode (read-only)
  - "Withdraw Submission" option (orange button, admin only)
  - Admin review status indicator
- **Indicators**: 
  - "Submitted on: [date]" (14px, #4A90E2)
  - "Under review by: [Admin Name]" (14px, #757575)
- **Permissions**: Read-only for creator, admin actions visible

#### **3. Approved State**
- **Visual**: 
  - Green success theme (#4CAF50)
  - Checkmark badge (green background, white checkmark icon)
  - Green accent borders (2px solid #4CAF50) on key sections
- **Actions**: 
  - "View" button
  - "Export" button (48px, blue)
  - "Archive" option (admin only)
- **Indicators**: 
  - "Approved by: [Admin Name]" (14px, #4CAF50)
  - Approval timestamp (12px, #757575)
- **Permissions**: Locked editing, export enabled

#### **4. Rejected State**
- **Visual**: 
  - Red warning theme (#F44336)
  - "Rejected" badge (red background, white text)
  - Red accent borders (2px solid #F44336) on key sections
- **Actions**: 
  - "Edit & Resubmit" button (48px, orange primary)
  - "View Rejection Reason" expandable section
- **Indicators**: 
  - Rejection reason display (red background, white text, 16px padding)
  - Rejected timestamp (12px, #757575)
- **Permissions**: Edit allowed for resubmission

---

## 🎯 Success Metrics for MVP

### **User Adoption**
- **Target**: 80% of invited users complete onboarding within first week
- **Measurement**: Onboarding completion rate tracked in analytics
- **UI Indicator**: Onboarding progress shown in tutorial

### **Activity Submission**
- **Target**: Average time to submit activity < 3 minutes
- **Measurement**: Time tracking from form start to submission
- **UI Optimization**: Streamlined form, auto-save, template support

### **Mobile Usage**
- **Target**: 60%+ of activities logged via mobile devices
- **Measurement**: Device type tracking in analytics
- **UI Optimization**: Mobile-first design, touch-optimized, offline support

### **Offline Reliability**
- **Target**: 95%+ successful sync rate when connection restored
- **Measurement**: Sync success/failure tracking
- **UI Optimization**: Clear sync status, conflict resolution, retry mechanisms

### **User Satisfaction**
- **Target**: Net Promoter Score (NPS) > 50
- **Measurement**: User feedback surveys, in-app rating prompts
- **UI Optimization**: Intuitive design, helpful error messages, smooth interactions

---

## 🚀 Implementation Guidelines for Zoer

### **Step 1: Establish Design Foundation**
1. Create color palette with purple (#7B2CBF) and blue (#4A90E2) as primary colors
2. Set up gradient system (primary, hero, subtle gradients)
3. Define typography scale (Inter font, 12px to 48px)
4. Create spacing system (8px grid, 16px base unit)
5. Set up component base styles (buttons, inputs, cards)

### **Step 2: Build Core Components**
1. **Buttons**: Primary (purple gradient), Secondary (blue), Outline, Flat variants
2. **Cards**: White background, 24px padding, 8px radius, glass morphism effect
3. **Inputs**: 48px height, rounded corners, purple focus state, floating labels
4. **Badges**: Status badges with color coding (draft, submitted, approved, rejected)
5. **Icons**: Material Design Icons, 24px standard size

### **Step 3: Create Layout Structure**
1. **Header**: 64px height, white background, purple accent, responsive
2. **Sidebar**: 280px width (desktop), collapsible, purple/blue accents
3. **Main Content**: 16px padding, max-width: 1200px (centered)
4. **Footer**: Mobile navigation (bottom bar with 5 tabs)

### **Step 4: Build Authentication Screens**
1. **Login**: Email/password inputs, remember me, forgot password link
2. **Register**: Multi-step form with organization selection
3. **Onboarding**: 3-4 screen tutorial with purple progress indicator
4. **Password Reset**: Email verification, new password entry

### **Step 5: Create Role-Based Dashboards**
1. **Federal Dashboard**: National metrics, interactive map, performance trends
2. **State Dashboard**: State metrics, LGA performance, resource allocation
3. **LGA Dashboard**: Local metrics, activity timeline, quick submission
4. **Field Officer Dashboard**: Personal metrics, assigned tasks, mobile-optimized

### **Step 6: Build Activity Management**
1. **Activity List**: Searchable, filterable table with status badges
2. **Activity Form**: Multi-step form with progress indicator, auto-save
3. **Activity Detail**: Complete information display, approval workflow, comments
4. **Template System**: Template library, selection modal, template builder (admin)

### **Step 7: Implement Data Visualization**
1. **Charts**: Bar charts, donut charts, line graphs, heatmaps
2. **Animations**: Count-up animations, chart growth animations
3. **Interactivity**: Hover states, click to filter, export options
4. **Color Scheme**: Purple/blue gradient for primary data, semantic colors for status

### **Step 8: Add Advanced Features**
1. **Offline Mode**: Connection indicators, cached content labels, sync management
2. **Notifications**: Notification center, categorized notifications, push settings
3. **Team Management**: Team directory, user profiles, assignment system
4. **Reports**: Report generation, templates, scheduled delivery

### **Step 9: Mobile Optimizations**
1. **Bottom Navigation**: 5 primary tabs with active states and badges
2. **Responsive Header**: Collapsible menu, search modal, notification bell
3. **Touch Gestures**: Pull to refresh, swipe actions, long press menus
4. **Mobile Forms**: Simplified layouts, large touch targets, camera integration

### **Step 10: Polish & Accessibility**
1. **Animations**: Smooth transitions, micro-interactions, loading states
2. **Accessibility**: ARIA labels, keyboard navigation, screen reader support
3. **Performance**: Lazy loading, skeleton screens, image compression
4. **Error States**: Helpful error messages, empty states, retry mechanisms

---

## ✨ Final Design Challenge

Create a design system that makes a healthcare worker in rural Nigeria feel empowered, connected, and effective. Every pixel should serve the mission of saving lives through better communication. The purple-blue gradient should inspire confidence, the micro-interactions should delight, and the overall experience should make complex public health management feel effortlessly simple.

**Remember: We're not just building an app - we're building a lifeline for public health heroes across Africa.**

The design must be:
- **Modern & Sleek**: Contemporary aesthetic with sophisticated gradients
- **Easy to Use**: Intuitive navigation, clear hierarchy, helpful feedback
- **Beautiful**: World-class visuals that inspire confidence
- **Resilient**: Works flawlessly even with challenging connectivity
- **Accessible**: WCAG 2.1 AA+ compliance for all users
- **Performant**: Fast loading, smooth animations, efficient rendering

---

**Complete Prompt Created For: Zoer Design Tool**
**Target Audience: African Public Health Professionals**
**Design Goal: World-class, empowering, life-saving technology**
**Technical Stack: Vue 3 + Quasar Framework + Laravel**
**Design Theme: Modern Purple-Blue Gradient**

