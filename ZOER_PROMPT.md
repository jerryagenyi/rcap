# RCAP - Complete Design Prompt for Zoer
**Risk Communication Activity Platform - Modern UI/UX Design System**

## 🎯 Project Overview

Create a complete, modern, and sleek UI/UX design system for **RCAP** (Risk Communication Activity Platform) - a public health risk communication tracking platform designed for low-bandwidth African contexts. The design must be easy to use, visually appealing, and optimized for healthcare professionals.

**Design Philosophy**: Modern, sleek, and easy to use with a sophisticated purple and blue color theme inspired by contemporary dashboard designs.

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

## 🎨 Modern Purple & Blue Color Theme

### **Primary Color Palette** (Inspired by Modern Dashboard Design)
- **Primary Purple**: #7B2CBF or #9D4EDD - buttons, links, active states, highlights
- **Primary Blue**: #4A90E2 or #5B9BD5 - secondary actions, accents
- **Light Purple**: #C77DFF or #E0AAFF - subtle accents, hover states
- **Light Blue**: #A8D5E2 or #B8E0E4 - background gradients, subtle highlights
- **Background**: Light gradient (#F0F4F8 to #E8E0F5) - soft blue-purple gradient
- **Surface**: White (#FFFFFF) - cards, modals, elevated surfaces
- **Surface Dark**: #F8F9FA - subtle card backgrounds, alternate rows

### **Semantic Colors**
- **Success**: Green (#4CAF50) - success states, completed actions
- **Warning**: Orange (#FF9800) - warnings, pending items
- **Error**: Red (#F44336) - errors, urgent alerts
- **Info**: Blue (#2196F3) - information, notifications

### **Text Colors**
- **Text Primary**: Dark Gray (#212121) - main text, headings
- **Text Secondary**: Medium Gray (#757575) - secondary text, labels
- **Text Tertiary**: Light Gray (#B0B0B0) - disabled text, placeholders
- **Text on Purple**: White (#FFFFFF) - text on purple backgrounds

### **Border & Divider Colors**
- **Border Light**: #E0E0E0 - subtle borders, dividers
- **Border Medium**: #BDBDBD - card borders, input borders
- **Border Purple**: #7B2CBF - active borders, focus states

## 📐 Typography System

### **Font Family**
- **Primary**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Fallback**: System fonts for optimal performance

### **Type Scale**
- **H1**: 32px, SemiBold (700), #212121 - page titles
- **H2**: 24px, SemiBold (600), #212121 - section headers
- **H3**: 20px, SemiBold (600), #212121 - card titles
- **H4**: 18px, SemiBold (600), #212121 - subheaders
- **Body Large**: 16px, Regular (400), #212121 - main content
- **Body**: 14px, Regular (400), #212121 - standard text
- **Caption**: 12px, Regular (400), #757575 - metadata, labels
- **Small**: 11px, Regular (400), #757575 - fine print

### **Line Heights**
- **Headings**: 1.2 (tight, modern)
- **Body**: 1.5 (comfortable reading)
- **Tight**: 1.3 (compact lists)

## 📏 Spacing System (8px Grid)

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

## 🧩 Quasar Framework Component Mapping

### **Essential Components**
- **Buttons**: `q-btn` (primary purple, secondary blue, outline, flat)
- **Cards**: `q-card` with `q-card-section` (white background, 24px padding, 8px radius)
- **Inputs**: `q-input`, `q-select`, `q-checkbox`, `q-radio` (48px height, rounded)
- **Tables**: `q-table` with `q-td`, `q-th` (clean, modern styling)
- **Navigation**: `q-tabs`, `q-tab-panels`, `q-breadcrumbs`
- **Layout**: `q-page`, `q-header`, `q-drawer`, `q-footer`
- **Icons**: `q-icon` with Material Design Icons (mdi-*)

### **Data Display**
- **Lists**: `q-list` with `q-item`, `q-item-section`
- **Chips**: `q-chip` for tags and status indicators (purple/blue variants)
- **Badges**: `q-badge` for notifications and counts
- **Avatars**: `q-avatar` for user photos (40px standard)
- **Progress**: `q-linear-progress`, `q-circular-progress` (purple/blue theme)

### **Feedback**
- **Dialogs**: `q-dialog` for modals and confirmations
- **Notifications**: `q-notify` for toast messages
- **Loading**: `q-spinner` for loading states
- **Tooltips**: `q-tooltip` for help text

## 📱 Mobile-First Layout Principles

### **Responsive Breakpoints**
- **xs**: < 600px (mobile phones) - **PRIMARY FOCUS**
- **sm**: 600px - 1023px (tablets)
- **md**: 1024px - 1439px (small laptops)
- **lg**: 1440px - 1919px (laptops)
- **xl**: ≥ 1920px (desktops)

### **Touch Interface Guidelines**
- **Minimum touch target**: 48px × 48px
- **Comfortable spacing**: 16px between interactive elements
- **Thumb zones**: Important actions in bottom 1/3 of screen
- **Swipe gestures**: Support for common mobile interactions

### **Offline Visual Indicators**
- **Connection status**: Green dot (online), red dot (offline), yellow dot (slow)
- **Sync status**: Spinning icon (syncing), checkmark (synced)
- **Cached data**: Subtle gray background or "Cached" label
- **Pending actions**: Yellow warning icon with count badge

## 🎨 Visual Design Specifications

### **Card Design**
- **Background**: White (#FFFFFF)
- **Padding**: 24px (all sides)
- **Border Radius**: 8px (modern, rounded)
- **Shadow**: 0 2px 8px rgba(123, 44, 191, 0.1) - subtle purple-tinted shadow
- **Hover Shadow**: 0 4px 12px rgba(123, 44, 191, 0.15) - elevated on hover
- **Border**: 1px solid #E0E0E0 (optional, for definition)

### **Button Design**
- **Primary Button**: 
  - Background: Purple (#7B2CBF)
  - Text: White (#FFFFFF)
  - Height: 48px
  - Padding: 12px vertical, 24px horizontal
  - Border Radius: 8px
  - Font: Inter SemiBold 16px
  - Hover: Darker purple (#6A1B9A)
  
- **Secondary Button**:
  - Background: Blue (#4A90E2)
  - Text: White (#FFFFFF)
  - Same dimensions as primary
  
- **Outline Button**:
  - Border: 2px solid Purple (#7B2CBF)
  - Background: Transparent
  - Text: Purple (#7B2CBF)
  - Hover: Light purple background (#F3E5F5)

### **Input Design**
- **Height**: 48px
- **Padding**: 16px horizontal
- **Border**: 1px solid #E0E0E0
- **Border Radius**: 8px
- **Focus Border**: 2px solid Purple (#7B2CBF)
- **Background**: White (#FFFFFF)
- **Font**: Inter Regular 16px

### **Icon Sizes**
- **Standard**: 24px
- **Small**: 16px
- **Large**: 32px
- **Extra Large**: 48px

### **Avatar Sizes**
- **Small**: 32px
- **Standard**: 40px
- **Large**: 48px

## 📊 Dashboard Design Requirements

### **Base Dashboard Structure**

```
Dashboard Page
├── Page Header (64px height, white background)
│   ├── Breadcrumbs (q-breadcrumbs)
│   ├── Page Title + Role Badge (purple badge)
│   ├── Date/Time Display
│   └── Quick Actions (Create Activity, Export Report)
├── Top Metrics Bar (Always Visible)
│   ├── Total Activities Card (purple accent)
│   ├── Pending Approvals Card (orange accent)
│   ├── Completed This Month Card (green accent)
│   └── Team Activity Card (blue accent)
├── Main Dashboard Grid (Customizable, 12-column)
│   ├── Recent Activities Card (2x1 grid)
│   ├── Activity Status Breakdown Chart (2x1 grid)
│   ├── Activity Heatmap Calendar (2x1 grid)
│   ├── Engagement Metrics Chart (2x1 grid)
│   ├── Team Performance Card (1x2 grid)
│   ├── Upcoming Deadlines Card (1x1 grid)
│   ├── Recent Messages Card (1x2 grid)
│   └── Quick Actions Card (1x1 grid)
└── Connection Status Indicator (Bottom Right)
    └── Online/Offline/Syncing Status
```

### **Top Metrics Cards (4 Cards)**

#### **1. Total Activities Card**
- **Primary Number**: "1,247" (32px font, Inter SemiBold, #212121)
- **Label**: "Total Activities" (14px font, Inter Regular, #757575)
- **Trend Indicator**: "+12 this month" with green up arrow icon
- **Icon**: mdi-clipboard-text (24px, Purple #7B2CBF)
- **Accent**: Purple left border (4px solid) or purple icon background
- **Background**: White (#FFFFFF)
- **Padding**: 24px

#### **2. Pending Approvals Card**
- **Primary Number**: "23" (32px font, bold, Orange #FF9800)
- **Label**: "Pending Approvals" (14px font, #757575)
- **Urgency Indicator**: Orange badge with "Action Required"
- **Icon**: mdi-clock-alert (24px, Orange #FF9800)
- **Accent**: Orange left border or icon background
- **Quick Action**: "Review" button (48px height, orange background)

#### **3. Completed This Month Card**
- **Primary Number**: "342" (32px font, bold, Green #4CAF50)
- **Label**: "Completed This Month" (14px font, #757575)
- **Progress Indicator**: "↑ 8% vs last month" with green arrow
- **Icon**: mdi-check-circle (24px, Green #4CAF50)
- **Visual**: Progress bar showing 85% of monthly goal (purple/blue gradient)

#### **4. Team Activity Card**
- **Primary Number**: "89" (32px font, bold, Blue #4A90E2)
- **Label**: "Active Team Members" (14px font, #757575)
- **Trend**: "↑ 5 this week" with blue indicator
- **Icon**: mdi-account-group (24px, Blue #4A90E2)
- **Quick Action**: "View Team" link (purple color)

### **Main Dashboard Grid Cards**

All cards follow this structure:
- **Header**: Title (18px, SemiBold) + optional action link (14px, purple)
- **Content**: Main content area with 16px spacing
- **Padding**: 24px (all sides)
- **Background**: White (#FFFFFF)
- **Border Radius**: 8px
- **Shadow**: 0 2px 8px rgba(123, 44, 191, 0.1)

## 🔄 Status-Specific UI States

### **Activity Status Management**

#### **1. Draft State**
- **Visual**: Gray color scheme (#9E9E9E)
- **Badge**: "Draft" (gray background, white text, 8px padding, 4px border radius)
- **Borders**: Dashed borders (1px dashed #BDBDBD)
- **Actions**: Edit, Save Draft, Delete, Submit buttons

#### **2. Submitted State**
- **Visual**: Blue accent (#4A90E2)
- **Badge**: "Submitted" (blue background, white text)
- **Lock Icon**: mdi-lock (16px, #757575) on editable fields
- **Actions**: View only, Withdraw Submission (admin only)

#### **3. Approved State**
- **Visual**: Green success theme (#4CAF50)
- **Badge**: Checkmark badge (green background, white checkmark)
- **Accent**: Green left border (4px solid)
- **Actions**: View, Export, Archive (admin only)

#### **4. Rejected State**
- **Visual**: Red warning theme (#F44336)
- **Badge**: "Rejected" (red background, white text)
- **Accent**: Red left border (4px solid)
- **Actions**: Edit & Resubmit, View Rejection Reason

## 🌐 Low-Bandwidth Optimization States

### **Connection Status Indicators**
- **Online**: Green dot (8px circle, #4CAF50), "Online" label
- **Slow Connection**: Yellow dot (8px, #FF9800), "Slow Connection" label
- **Offline**: Red dot (8px, #F44336), "Offline" label, offline banner
- **Syncing**: Purple spinning icon (16px, #7B2CBF), "Syncing..." label

### **Offline Mode UI**
- **Offline Banner**: Persistent top banner (48px height, red background, white text)
- **Read-Only Indicators**: Lock icons on features requiring connection
- **Queue Indicators**: "3 actions waiting for sync" notification (yellow badge)
- **Cached Content**: "Cached" labels (gray badge) on available data

### **Loading & Skeleton States**
- **Skeleton Screens**: Gray placeholders (#E0E0E0) matching content structure
- **Shimmer Animation**: Subtle, low-bandwidth friendly
- **Progressive Loading**: Critical content first, secondary content after
- **Retry Mechanisms**: Failed load states with "Retry" button (purple)

## 👥 Role-Specific Dashboard Variations

### **Super Admin Dashboard (Federal Level)**
- **Layout**: 3-column grid, larger charts
- **Priority Widgets**: National Overview, State Performance Comparison, System Health Monitor, Policy Compliance Tracker, Emergency Center
- **Color Accent**: Purple primary, blue secondary

### **State Admin Dashboard (Regional Level)**
- **Layout**: 2-column grid, balanced mix
- **Priority Widgets**: Regional Overview, LGA Performance, Resource Allocation, Incident Response, Team Coordination
- **Color Accent**: Blue primary, purple secondary

### **Sub-Admin Dashboard (Local Level)**
- **Layout**: 2-column grid, activity-focused
- **Priority Widgets**: Local Performance, Activity Tracking, Field Team Management, Community Engagement, Resource Needs
- **Color Accent**: Balanced purple and blue

### **User Dashboard (Individual Level)**
- **Layout**: Single column, personal focus
- **Priority Widgets**: My Activities, Assigned Tasks, Team Updates, Performance Metrics, Learning Resources
- **Color Accent**: Purple primary for personal actions

## 📋 Complete Screen Requirements

### **1. Authentication & Onboarding (8 Screens)**
- Welcome/Splash: Logo, tagline, sign in/sign up buttons (purple primary)
- Sign In: Email/password inputs, remember me, forgot password
- Sign Up: Multi-step form with organization selection
- Email Verification: Confirmation message, resend option
- Forgot Password: Email input, send reset link
- Onboarding Tour: 5-step interactive tour
- Profile Setup: Photo upload, personal info, preferences
- Organization Selection: Hierarchical tree, search

### **2. Dashboard & Analytics (12 Screens)**
- 4 Role-Specific Dashboards (see above)
- Activity Overview: Status breakdown, recent activities
- Analytics Dashboard: Charts with purple/blue theme
- Team Performance: Team statistics
- Resource Utilization: File upload stats
- Emergency Response: Active incidents
- Time-based Analytics: Trends and patterns
- Compliance Dashboard: Compliance status
- Communication Analytics: Message volume
- System Health: Performance metrics
- Custom Dashboard Builder: Drag-and-drop interface

### **3. Activity Management (15 Screens)**
- Activity List: Search, filters, status filtering, pagination
- Activity Creation Wizard: 6-step multi-step form (purple progress indicator)
- Activity Detail: Complete info, progress tracking
- Activity Edit: Pre-filled form, change history
- Template Selection: Template library with preview
- Activity Timeline: Visual timeline with milestones
- Activity Reports: Automated report generation
- Activity Collaboration: Team management
- Activity Mobile View: Simplified interface
- Activity Analytics: Performance metrics
- Activity Archive: Historical browsing
- Activity Calendar: Monthly/weekly/daily views
- Activity Quick Actions: One-tap actions
- Activity Settings: Notification preferences

### **4. File & Evidence Management (10 Screens)**
- File Upload Center: Drag-and-drop area (purple accent border)
- File Gallery: Grid/list views, file preview
- File Detail: Full preview, file info panel
- File Organization: Folder structure, drag-and-drop
- File Sharing: Internal/external sharing
- Mobile Photo Capture: Camera interface
- File Storage Analytics: Usage breakdown
- File Version Control: Version timeline
- File Compliance: Compliance status
- File Settings: Upload preferences

### **5. Communication & Messaging (12 Screens)**
- Message Inbox: Conversation list, unread indicators (purple badges)
- Message Compose: Rich text editor, file attachments
- Message Thread: Complete history, read receipts
- Team Directory: Member directory, search/filter
- Announcement Center: Official announcements
- Emergency Alert: Critical alert display
- Notification Center: Centralized hub (purple accent)
- Communication Analytics: Message volume
- Group Communication: Team groups
- Communication Templates: Template library
- Communication Settings: Notification preferences

### **6. User & Organization Management (8 Screens)**
- User Profile: Personal info, photo management
- User Directory: Searchable directory
- User Management (Admin): User creation/editing
- Organization Structure: Hierarchical tree
- Permission Management: Role-based matrix
- Team Management: Team creation, member assignment
- Settings & Preferences: Account settings
- Help & Support: FAQ, tutorials, contact support

### **7. Reporting & Analytics (10 Screens)**
- Report Generation Wizard: Report type selection
- Report Library: Saved reports, categorization
- Custom Report Builder: Drag-and-drop designer
- Scheduled Reports: Automation setup
- Data Visualization: Interactive charts (purple/blue theme)
- Performance Metrics: KPI tracking
- Compliance Reporting: Compliance status
- Export Center: Multi-format export
- Data Insights: Automated insights
- Report Settings: Default templates

## 🎯 Design Priorities

1. **Modern & Sleek**: Clean lines, subtle shadows, smooth gradients
2. **Easy to Use**: Intuitive navigation, clear hierarchy, helpful feedback
3. **Purple & Blue Theme**: Consistent use of purple (#7B2CBF) and blue (#4A90E2) throughout
4. **Mobile-First**: Design for 375px width first, then scale up
5. **Touch-Friendly**: Large buttons (48px min), comfortable spacing (16px)
6. **Offline-Aware**: Clear visual feedback for connection states
7. **Performance**: Minimal complexity, efficient layouts, skeleton screens
8. **Accessibility**: High contrast (WCAG AA), clear hierarchy, semantic structure

## 📝 Content Guidelines

- **Use realistic public health data**: "Federal Ministry of Health", "Lagos State Health Department"
- **African context**: Organization names like "Nigerian Centre for Disease Control", "Kenya Ministry of Health"
- **Real metrics**: "247 activities this month", "85% completion rate", "12 pending approvals"
- **Practical features**: "Risk Communication Workshop", "Vaccination Campaign", "Health Education Session"

## 🚀 Implementation Instructions for Zoer

### **Step 1: Establish Color System**
1. Create color palette with purple (#7B2CBF) and blue (#4A90E2) as primary colors
2. Set up gradient backgrounds (light blue to light purple)
3. Define semantic colors (success, warning, error, info)
4. Create text color variants

### **Step 2: Build Typography System**
1. Set Inter as primary font family
2. Create type scale (12px to 32px)
3. Define line heights (1.2 for headings, 1.5 for body)
4. Set font weights (Regular 400, SemiBold 600, Bold 700)

### **Step 3: Create Component Library**
1. **Buttons**: Primary (purple), Secondary (blue), Outline, Flat variants
2. **Cards**: White background, 24px padding, 8px radius, subtle shadow
3. **Inputs**: 48px height, rounded corners, purple focus state
4. **Badges**: Status badges with color coding
5. **Icons**: Material Design Icons, 24px standard size

### **Step 4: Build Layout Structure**
1. **Header**: 64px height, white background, purple accent
2. **Sidebar**: 280px width (desktop), collapsible, purple/blue accents
3. **Main Content**: 16px padding, max-width: 1200px (centered)
4. **Footer**: Mobile navigation (bottom bar)

### **Step 5: Create Dashboard**
1. Start with base layout structure
2. Add top metrics bar (4 cards with color accents)
3. Build main dashboard grid (12-column system)
4. Add role-specific variations
5. Implement responsive breakpoints

### **Step 6: Design Key Screens**
1. **Authentication**: Login, Register (purple primary buttons)
2. **Dashboard**: Role-based dashboards (see specifications above)
3. **Activity List**: Table/list view with filters
4. **Activity Form**: Multi-step creation form (purple progress indicator)
5. **Activity Detail**: Read-only view with actions

### **Step 7: Add States & Interactions**
1. **Hover States**: Subtle elevation, color transitions
2. **Loading States**: Skeleton screens, spinners
3. **Error States**: Clear error messages, retry buttons
4. **Empty States**: Helpful illustrations, CTAs
5. **Offline States**: Connection indicators, cached labels

### **Step 8: Polish & Refine**
1. Ensure consistent spacing (8px grid)
2. Verify color contrast (WCAG AA)
3. Test touch targets (48px minimum)
4. Check responsive breakpoints
5. Add smooth transitions and animations

## ✅ Success Criteria

### **Visual Quality**
- Modern, sleek aesthetic with purple/blue theme
- Consistent visual language across all screens
- Professional healthcare application appearance
- Easy to use and intuitive navigation

### **Technical Quality**
- Mobile-first responsive design (375px+)
- Touch-optimized (48px minimum targets)
- Offline-aware (connection indicators)
- Low-bandwidth optimized (skeleton screens, progressive loading)

### **Accessibility**
- WCAG 2.1 AA compliance
- High contrast ratios (4.5:1 minimum)
- Keyboard navigation support
- Screen reader friendly

---

**Create a comprehensive, modern, sleek, and easy-to-use design system that empowers public health professionals to track risk communication activities effectively, especially in low-bandwidth African contexts. The design should feel trustworthy, professional, and contemporary with the purple and blue color theme creating a sophisticated and modern aesthetic.**

**Remember**: The design must be modern, sleek, easy to use, and visually appealing while maintaining all technical requirements for Vue 3 + Quasar, Africa-first optimization, and public health context.

