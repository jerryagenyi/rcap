# RCAP UI/UX Design Prompt for Figma Make
**Complete Design System & Prototype Generation**

## 📋 Prerequisites
**CRITICAL**: Before starting, copy and paste these prompts in this exact order:
1. **First**: `FIGMA_MAKE_MASTER_PROMPT.md` (establishes foundation - REQUIRED)
2. **Then**: `FIGMA_MAKE_DASHBOARD_PROMPT.md` (for dashboard screens - if building dashboards)
3. **Finally**: This prompt (complete system)

**IMPORTANT**: Always start with the Master Prompt. It provides essential context that Figma Make needs to generate proper designs.

## 🎯 Design Mission

Create a complete, modern UI/UX design system and **fully functional prototype** for **RCAP** (Risk Communication Activity Platform) - a public health risk communication tracking platform designed for low-bandwidth African contexts.

**Reference Design System**: Study and replicate spacing, padding, typography scale, component proportions, and visual hierarchy from: **https://pookie-blinders-777.figma.site/**

**CRITICAL INSTRUCTION FOR FIGMA MAKE:**
Before generating any design, you MUST:
1. Visit and study https://pookie-blinders-777.figma.site/
2. Extract and measure these exact values:
   - Card padding (measure the white space inside cards)
   - Gap between cards (measure space between card elements)
   - Button heights and widths
   - Input field heights and padding
   - Typography sizes and line heights
   - Border radius values
   - Shadow values (blur, spread, opacity)
3. Apply these EXACT measurements to all RCAP components
4. If you cannot access the reference, use these default values:
   - Card padding: 24px
   - Card gap: 16px
   - Button height: 48px
   - Input height: 48px
   - Border radius: 8px
   - Section spacing: 32px vertical

**Key Elements to Extract and Apply:**
- Exact spacing values (padding, margins, gaps) - MEASURE FROM REFERENCE
- Typography scale and line heights - MATCH EXACTLY
- Component sizing and proportions - REPLICATE PRECISELY
- Card layouts, shadows, and borders - COPY STYLING
- Button styles, sizes, and states - MATCH VISUALLY
- Form input styling and validation states - REPLICATE STYLING
- Color contrast ratios - ENSURE ACCESSIBILITY
- Border radius values - MATCH EXACTLY
- Icon sizes and positioning - REPLICATE SPACING

## 🏥 Platform Context

### Primary Users
- **Federal Health Officials**: Oversee national programs, view analytics, coordinate responses
- **State Health Administrators**: Manage regional programs, coordinate responses, track compliance
- **Local Health Officers**: On-the-ground implementation, field data collection, evidence upload
- **NGO Partners**: Collaborative response coordination, resource sharing

### Technical Constraints
- **Low-bandwidth environments**: Progressive Web App (PWA) optimized, < 500KB bundle
- **Mobile-first design**: 60%+ users on mobile devices, 375px primary breakpoint
- **Offline capability**: Critical functions work without internet, cached data support
- **Accessibility**: WCAG 2.1 AA compliance for diverse users, 48px touch targets

## 🎨 Design System Requirements

### Visual Identity
- **Primary Colors**: Professional healthcare blues (#1976D2 primary, #1565C0 dark)
- **Secondary Colors**: Teal (#26A69A), Orange accent (#FF6B35)
- **Semantic Colors**: Success green (#4CAF50), Warning orange (#FF9800), Error red (#F44336), Info blue (#2196F3)
- **Typography**: Inter font family (clean, readable, optimized for mobile)
- **Iconography**: Material Design Icons (mdi-*) - clear, universal healthcare symbols

### Design Tokens (Apply from Reference Design)
```json
{
  "colors": {
    "primary": "#1976D2",
    "secondary": "#26A69A",
    "accent": "#FF6B35",
    "success": "#4CAF50",
    "warning": "#FF9800",
    "error": "#F44336",
    "info": "#2196F3",
    "background": "#FAFAFA",
    "surface": "#FFFFFF",
    "textPrimary": "#212121",
    "textSecondary": "#757575"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px"
  },
  "typography": {
    "fontFamily": "Inter, sans-serif",
    "scale": [12, 14, 16, 18, 20, 24, 32],
    "lineHeight": {
      "headings": 1.2,
      "body": 1.5
    }
  },
  "borderRadius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px"
  },
  "shadows": {
    "sm": "0 2px 4px rgba(0,0,0,0.1)",
    "md": "0 4px 8px rgba(0,0,0,0.15)",
    "lg": "0 8px 16px rgba(0,0,0,0.2)"
  }
}
```

## 🔄 CRITICAL: Status-Specific UI States

### Activity Status Management (Epic 002)
Design distinct visual and interactive states for each activity status with exact specifications:

#### 1. Draft State
- **Visual**: 
  - Gray color scheme (#9E9E9E)
  - "Draft" badge (gray background, white text, 8px padding, 4px border radius)
  - Dashed borders (1px dashed #BDBDBD)
- **Actions**: 
  - "Edit" button (48px height, blue primary)
  - "Save Draft" button (48px height, gray outline)
  - "Delete" button (48px height, red outline)
  - "Submit" button (48px height, green primary)
- **Indicators**: 
  - "Last edited: 2 hours ago" (12px, #757575)
  - Auto-save status: "Saved" (green checkmark) or "Saving..." (spinner)
- **Permissions**: Full editing enabled, all fields editable

#### 2. Submitted State
- **Visual**: 
  - Blue accent (#1976D2)
  - "Submitted" badge (blue background, white text)
  - Lock icon (mdi-lock, 16px, #757575) on editable fields
- **Actions**: 
  - "View" only mode
  - "Withdraw Submission" option (orange button, admin only)
  - Admin review status indicator
- **Indicators**: 
  - "Submitted on: [date]" (14px, #1976D2)
  - "Under review by: [Admin Name]" (14px, #757575)
- **Permissions**: Read-only for creator, admin actions visible

#### 3. Approved State
- **Visual**: 
  - Green success theme (#4CAF50)
  - Checkmark badge (green background, white checkmark icon)
  - Green accent borders (2px solid #4CAF50)
- **Actions**: 
  - "View" button
  - "Export" button (48px, blue)
  - "Archive" option (admin only)
- **Indicators**: 
  - "Approved by: [Admin Name]" (14px, #4CAF50)
  - Approval timestamp (12px, #757575)
- **Permissions**: Locked editing, export enabled

#### 4. Rejected State
- **Visual**: 
  - Red warning theme (#F44336)
  - "Rejected" badge (red background, white text)
  - Red accent borders (2px solid #F44336)
- **Actions**: 
  - "Edit & Resubmit" button (48px, orange primary)
  - "View Rejection Reason" expandable section
- **Indicators**: 
  - Rejection reason display (red background, white text, 16px padding)
  - Rejected timestamp (12px, #757575)
- **Permissions**: Edit allowed for resubmission

## 🌐 CRITICAL: Low-Bandwidth Optimization States

### Connection Status Indicators
- **Online**: Green dot (8px circle, #4CAF50), "Online" label (12px, #4CAF50)
- **Slow Connection**: Yellow dot (8px, #FF9800), "Slow Connection" label, reduced features
- **Offline**: Red dot (8px, #F44336), "Offline" label, offline mode banner
- **Syncing**: Blue spinning icon (16px, #1976D2), "Syncing..." label, progress bar

### Offline Mode UI
- **Offline Banner**: 
  - Persistent top banner (48px height, red background #F44336, white text)
  - "You're offline. Some features may be limited." message
  - "Retry Connection" button (white text, red border)
- **Read-Only Indicators**: 
  - Lock icons (mdi-lock, 16px, #757575) on features requiring connection
  - Gray overlay (50% opacity) on disabled features
- **Queue Indicators**: 
  - "3 actions waiting for sync" notification (yellow badge, bottom right)
  - Sync queue list (expandable, shows pending actions)
- **Cached Content**: 
  - "Cached" labels (gray badge, 8px padding, 4px radius) on available data
  - "Last synced: [time]" timestamp (12px, #757575)

### Loading & Skeleton States
- **Skeleton Screens**: 
  - Gray placeholders (#E0E0E0) matching content structure
  - Shimmer animation (subtle, low-bandwidth friendly)
  - Exact dimensions matching final content
- **Progressive Loading**: 
  - Critical content loads first (metrics, recent activities)
  - Secondary content loads after (charts, detailed lists)
  - Loading priority indicators
- **Retry Mechanisms**: 
  - Failed load states with "Retry" button (48px, blue)
  - Error message: "Failed to load. Check your connection." (14px, #F44336)
- **Data Freshness**: 
  - "Last updated: [time]" timestamps (12px, #757575)
  - Refresh button (icon only, 24px, #1976D2)

## 📋 CRITICAL: Template & Tag Management System

### Report Template Management (Epic 002)

#### Template Library Screen
- **Layout**: Grid of template cards (3 columns desktop, 1 column mobile)
- **Template Cards**: 
  - Preview thumbnail (120px height, rounded corners)
  - Title (16px, bold, #212121)
  - Description (14px, #757575, 2 lines max)
  - Usage count badge (12px, blue, "Used 45 times")
  - Actions: "Preview", "Use Template", "Edit" (admins only)
- **Search & Filter**: 
  - Search bar (48px height, 16px padding, rounded 8px)
  - Filter chips: Organization, Type, Popularity
- **Categories**: 
  - Tab navigation: Emergency, Routine, Campaign, Assessment
  - Category badges with counts

#### Template Selection (During Activity Creation)
- **Modal**: 
  - Full-screen on mobile, centered modal on desktop (max-width: 800px)
  - Template grid (2 columns, 16px gap)
  - "Skip Template" option at bottom
- **Template Preview**: 
  - Selected template highlighted (blue border, 2px)
  - Preview panel showing template fields
  - "Apply Template" button (48px, green primary)

#### Template Builder Screen (Admin Only)
- **Layout**: 
  - Left panel: Field library (draggable fields)
  - Center: Template canvas (drop zone)
  - Right panel: Field configuration (properties)
- **Drag-and-Drop**: 
  - Fields from library to canvas
  - Reorder fields by dragging
  - Delete fields with trash icon
- **Field Types**: 
  - Text input, Number input, Date picker, File upload, Dropdown, Checkbox
  - Each field type has distinct icon and color
- **Field Configuration**: 
  - Required/optional toggle
  - Validation rules input
  - Help text textarea
  - Default value input

### Tag Management System (Epic 002)

#### Tag Selector Component
- **Multi-Select Dropdown**: 
  - Searchable input (48px height)
  - Dropdown list (max-height: 300px, scrollable)
  - Selected tags shown as chips above input
- **Tag Categories**: 
  - Color-coded: Metric (blue), Theme (green), Audience (orange), Other (gray)
  - Category filter tabs
- **Recent Tags**: 
  - "Recently Used" section at top
  - Quick-select chips (32px height, 8px padding)
- **Create New Tag**: 
  - "+ Create Tag" button in dropdown
  - Inline form: Name input, Category select, "Create" button

#### Tag Management Screen (Admin Only)
- **Layout**: 
  - Table view: Tag name, Category, Usage count, Actions
  - Search and filter bar at top
- **Tag Library**: 
  - All tags with usage statistics
  - Sortable columns (name, category, usage)
- **Bulk Operations**: 
  - Checkbox selection
  - Bulk actions: Merge, Delete, Recategorize
  - "Apply to Selected" button

## 👥 CRITICAL: Role-Specific Dashboard Variations

### Super Admin Dashboard (Federal Level)
- **Layout**: 3-column grid, larger charts
- **Priority Widgets**: 
  1. National Overview (large map-style visualization, no GIS - just data visualization)
  2. State Performance Comparison (bar chart, all states)
  3. System Health Monitor (real-time metrics)
  4. Policy Compliance Tracker (compliance status by state)
  5. Emergency Center (active emergencies, response status)
- **Metrics**: Country-wide statistics, all states aggregated
- **Special Features**: System-wide analytics, user activity monitoring

### State Admin Dashboard (Regional Level)
- **Layout**: 2-column grid, balanced mix
- **Priority Widgets**: 
  1. Regional Overview (state-wide statistics)
  2. LGA Performance (Local Government Area comparisons)
  3. Resource Allocation (distributed resources tracker)
  4. Incident Response (regional emergency management)
  5. Team Coordination (state-level team management)
- **Metrics**: State-wide statistics, all LGAs aggregated
- **Special Features**: Regional analytics, team performance

### Sub-Admin Dashboard (Local Level)
- **Layout**: 2-column grid, activity-focused
- **Priority Widgets**: 
  1. Local Performance (facility/district statistics)
  2. Activity Tracking (local activity status and progress)
  3. Field Team Management (field officers and volunteers)
  4. Community Engagement (local outreach metrics)
  5. Resource Needs (request and track local resources)
- **Metrics**: Local statistics, team activities
- **Special Features**: Field team coordination, community metrics

### User Dashboard (Individual Level)
- **Layout**: Single column, personal focus
- **Priority Widgets**: 
  1. My Activities (personal activity list and status)
  2. Assigned Tasks (tasks from supervisors)
  3. Team Updates (team member activities and messages)
  4. Performance Metrics (personal performance indicators)
  5. Learning Resources (training materials and guides)
- **Metrics**: Personal statistics, task completion
- **Special Features**: Personal performance tracking, learning hub

## ⚠️ CRITICAL: Error & Empty States

### Form Validation Errors
- **Field-Level Errors**: 
  - Red border (2px solid #F44336) on input
  - Error message below field (14px, #F44336, 8px top margin)
  - Error icon (mdi-alert-circle, 16px, #F44336) before message
- **Form-Level Errors**: 
  - Error banner at top of form (red background, white text, 16px padding)
  - Summary of all errors with links to fields
- **Real-Time Validation**: 
  - Immediate feedback on blur (not on every keystroke)
  - Success state: Green border, checkmark icon
- **Recovery Suggestions**: 
  - Help text below error (12px, #757575)
  - Example: "Email must be in format: name@example.com"

### API Error States
- **Network Errors**: 
  - Full-screen error state (centered, max-width: 400px)
  - Icon: mdi-wifi-off (48px, #F44336)
  - Message: "Connection failed. Please check your internet." (16px, #212121)
  - "Retry" button (48px, blue primary)
- **Permission Errors**: 
  - Lock icon (48px, #FF9800)
  - Message: "You don't have permission to access this." (16px)
  - "Contact Administrator" link (blue, underlined)
- **Server Errors**: 
  - Error icon (48px, #F44336)
  - Message: "Something went wrong. Please try again." (16px)
  - "Report Issue" button (outline, 48px)

### Empty States
- **No Activities**: 
  - Illustration (200px height, centered)
  - Message: "No activities yet" (20px, bold, #212121)
  - Subtext: "Create your first activity to get started" (14px, #757575)
  - "Create Activity" button (48px, blue primary, centered)
- **No Search Results**: 
  - Search icon (48px, #BDBDBD)
  - Message: "No results found" (18px, #212121)
  - Suggestions: "Try different keywords" or "Clear filters"
  - "Clear Filters" button (outline, 48px)

## 🚨 CRITICAL: Emergency Alert System

### Alert Priority Levels
- **Critical Alert**: 
  - Red banner (full width, 64px height, #F44336 background, white text)
  - Non-dismissible until acknowledged
  - Requires action button (48px, white background, red text)
  - Sound alert (optional, browser notification)
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

### Alert Display Patterns
- **Top Banner**: Persistent, full-width, above header
- **Modal Overlay**: 
  - Full-screen on mobile, centered modal on desktop (max-width: 600px)
  - Dark overlay (50% opacity black)
  - Requires action to dismiss
- **Toast Notification**: 
  - Bottom right corner (desktop), bottom center (mobile)
  - Auto-dismiss after 5 seconds (except critical)
  - Stack multiple toasts vertically

## 📱 Complete Screen Requirements (75+ Screens)

### 1. Authentication & Onboarding (8 Screens)
**Reference spacing from pookie-blinders-777.figma.site for form layouts**

- **Welcome/Splash**: Logo, tagline, sign in/sign up buttons (48px height, 16px gap)
- **Sign In**: Email/password inputs (48px height, 24px vertical gap), remember me checkbox, forgot password link
- **Sign Up**: Multi-step form with organization selection, role verification
- **Email Verification**: Confirmation message, resend option
- **Forgot Password**: Email input, send reset link button
- **Onboarding Tour**: 5-step interactive tour with Driver.js-style highlights
- **Profile Setup**: Photo upload, personal info, notification preferences
- **Organization Selection**: Hierarchical tree, search functionality

### 2. Dashboard & Analytics (12 Screens)
**See FIGMA_MAKE_DASHBOARD_PROMPT.md for detailed specifications**

- **4 Role-Specific Dashboards**: Super Admin, State Admin, Sub-Admin, User
- **Activity Overview**: Status breakdown, recent activities, quick actions
- **Analytics Dashboard**: Charts, trends, engagement metrics
- **Team Performance**: Team statistics, collaboration patterns
- **Resource Utilization**: File upload stats, storage usage
- **Emergency Response**: Active incidents, response team status
- **Time-based Analytics**: Daily/weekly/monthly trends
- **Compliance Dashboard**: Compliance status, audit trail
- **Communication Analytics**: Message volume, response rates
- **System Health**: Performance metrics, error reporting
- **Custom Dashboard Builder**: Drag-and-drop widget interface

### 3. Activity Management (15 Screens)
**Apply form spacing from reference design (24px padding, 16px gaps)**

- **Activity List**: Search, filters, status-based filtering, sort options, pagination
- **Activity Creation Wizard**: 6-step multi-step form with progress indicator
- **Activity Detail**: Complete info, progress tracking, team assignments, file gallery
- **Activity Edit**: Pre-filled form, change history, collaboration indicators
- **Template Selection**: Template library with preview, search, categories
- **Activity Timeline**: Visual timeline with milestones, drag-and-drop rescheduling
- **Activity Reports**: Automated report generation, custom builder, export options
- **Activity Collaboration**: Team management, permissions, communication history
- **Activity Mobile View**: Simplified interface, offline capture, photo integration
- **Activity Analytics**: Performance metrics, engagement statistics
- **Activity Archive**: Historical browsing, advanced search, bulk restore
- **Activity Calendar**: Monthly/weekly/daily views, color coding
- **Activity Quick Actions**: One-tap actions, voice commands, gestures
- **Activity Settings**: Notification preferences, privacy settings

### 4. File & Evidence Management (10 Screens)
**Use exact upload component styling from reference design**

- **File Upload Center**: Drag-and-drop area (200px height, dashed border, 16px padding), progress indicators, batch upload
- **File Gallery**: Grid/list views, file preview, metadata display, bulk selection
- **File Detail**: Full preview, file info panel, version history, sharing permissions
- **File Organization**: Folder structure, drag-and-drop organization, tag management
- **File Sharing**: Internal/external sharing, permission levels, expiration dates
- **Mobile Photo Capture**: Camera interface, annotation tools, GPS tagging
- **File Storage Analytics**: Usage breakdown, file type distribution, optimization recommendations
- **File Version Control**: Version timeline, comparison tools, rollback functionality
- **File Compliance**: Compliance status, required metadata checklist, validation results
- **File Settings**: Upload preferences, auto-organization rules, backup configurations

### 5. Communication & Messaging (12 Screens)
**Apply message bubble styling from reference design**

- **Message Inbox**: Conversation list, unread indicators, priority highlighting, search/filter
- **Message Compose**: Rich text editor, file attachments, recipient selection, priority setting
- **Message Thread**: Complete history, read receipts, attachment gallery, reply/forward
- **Team Directory**: Member directory, search/filter, role indicators, online status
- **Announcement Center**: Official announcements, priority highlighting, acknowledgment tracking
- **Emergency Alert**: Critical alert display, action required, confirmation system
- **Notification Center**: Centralized hub, type filtering, preference management, history
- **Communication Analytics**: Message volume, response times, channel effectiveness
- **Group Communication**: Team groups, group threads, file sharing, permission management
- **Communication Templates**: Template library, creation wizard, variable insertion
- **Communication Settings**: Notification preferences, privacy controls, integration settings

### 6. User & Organization Management (8 Screens)
**Use table and form spacing from reference design**

- **User Profile**: Personal info, photo management, contact info, activity history
- **User Directory**: Searchable directory, advanced filters, user status, quick actions
- **User Management (Admin)**: User creation/editing, permission assignment, role management
- **Organization Structure**: Hierarchical tree, detail views, user assignment, metrics
- **Permission Management**: Role-based matrix, custom permissions, inheritance rules, audit trail
- **Team Management**: Team creation, member assignment, performance metrics, collaboration analytics
- **Settings & Preferences**: Account settings, notifications, privacy, accessibility, data management
- **Help & Support**: FAQ, tutorials, contact support, system status, feedback form

### 7. Reporting & Analytics (10 Screens)
**Apply chart and export styling from reference design**

- **Report Generation Wizard**: Report type selection, data source configuration, filter settings
- **Report Library**: Saved reports, categorization, search/filter, sharing options
- **Custom Report Builder**: Drag-and-drop designer, visualization options, chart selection
- **Scheduled Reports**: Automation setup, schedule configuration, distribution lists
- **Data Visualization**: Interactive charts, filter/drill-down, export visualization
- **Performance Metrics**: KPI tracking, trend analysis, benchmarking, goal setting
- **Compliance Reporting**: Compliance status, regulation tracking, audit reports
- **Export Center**: Multi-format export, batch export, history tracking, download management
- **Data Insights**: Automated insights, pattern recognition, predictive analytics
- **Report Settings**: Default templates, export preferences, sharing configurations

## 🎨 Component Library Requirements

### Status Indicators
- **Status Badges**: 
  - Draft: Gray (#9E9E9E), 8px padding, 4px radius
  - Submitted: Blue (#1976D2), white text
  - Approved: Green (#4CAF50), white text
  - Rejected: Red (#F44336), white text
- **Progress Indicators**: 
  - Multi-stage progress (horizontal, 4px height)
  - Current step highlighted (blue, 8px height)
  - Completed steps (green), pending (gray)

### Data Entry Components
- **Smart Forms**: 
  - Progressive disclosure (show fields as needed)
  - Conditional logic (show/hide based on selections)
  - Auto-save indicator (top right, "Saved" or "Saving...")
- **Validation States**: 
  - Default: Gray border (#E0E0E0)
  - Focus: Blue border (#1976D2, 2px)
  - Error: Red border (#F44336, 2px)
  - Success: Green border (#4CAF50, 2px)

### Communication Components
- **Message Bubbles**: 
  - Sent: Blue background (#1976D2), white text, right-aligned
  - Received: Gray background (#E0E0E0), dark text, left-aligned
  - Read receipts: "Read by [Name]" (12px, #757575, below message)
- **Notification Bells**: 
  - Badge counter (red circle, white number, top right)
  - Dropdown panel (300px width, max-height: 400px, scrollable)
  - Priority indicators (red dot for urgent)

## 🔄 Enhanced User Flows

### Activity Lifecycle Flow
1. **Create**: Template selection modal → Multi-step form → Auto-save drafts
2. **Collaborate**: Real-time editing indicators → Team feedback → Conflict resolution
3. **Submit**: Review process → Status change → Admin notification
4. **Approve/Reject**: Admin actions → Status update → User notification
5. **Archive**: Historical access → Compliance reporting → Searchable archive

### Emergency Response Flow
1. **Alert Received**: Critical alert modal → Immediate action required
2. **Situation Assessment**: Data collection forms → Team mobilization → Resource allocation
3. **Response Coordination**: Real-time communication → Status updates → Progress tracking
4. **Resolution Documentation**: After-action reports → Lessons learned → Archive

### Offline Collaboration Flow
1. **Offline Work**: Cached data access → Continue working → Action queuing
2. **Action Queuing**: Queue changes → Sync pending indicator → Conflict detection
3. **Data Synchronization**: Auto-sync when online → Progress indicator → Success notification

## 🎯 Success Criteria

### Usability Requirements
- **95% task completion** for core workflows
- **< 3 seconds load time** for critical screens (on 3G)
- **90% user satisfaction** with interface design
- **Full WCAG 2.1 AA compliance** for accessibility

### Performance Requirements
- **Offline functionality** for 80% of features
- **Progressive loading** for slow connections
- **Bandwidth optimization** (< 500KB bundle)
- **Battery efficiency** for mobile field use

### Design Quality Requirements
- **Consistent visual language** across all 75+ screens
- **Exact spacing replication** from reference design
- **Intuitive navigation** with minimal learning curve
- **Professional healthcare aesthetic** appropriate for government use

## 🚀 Final Instructions for Figma Make

**CRITICAL FIRST STEPS (Follow in Exact Order):**

### Step 1: Study and Replicate Reference Design
**BEFORE creating anything**, study https://pookie-blinders-777.figma.site/ and extract:
- **Exact spacing values**: Measure padding (likely 16px, 24px), margins, gaps between elements
- **Typography scale**: Font sizes, line heights, font weights
- **Component proportions**: Button heights, input heights, card padding
- **Border radius**: Exact corner rounding values
- **Shadows**: Shadow blur, spread, opacity values
- **Color usage**: How colors are applied, contrast ratios

**Apply these exact measurements to all RCAP components.**

### Step 2: Build Design System Foundation
Create these foundational elements FIRST:
1. **Color Palette**: Apply RCAP colors with exact hex values
2. **Spacing System**: Use 8px grid (4, 8, 16, 24, 32, 48, 64px)
3. **Typography Scale**: Inter font, sizes 12, 14, 16, 18, 20, 24, 32px
4. **Component Base**: Buttons (48px height), inputs (48px height), cards (24px padding)
5. **Layout Grid**: 12-column system, 16px gutters

### Step 3: Create Base Layout Structure
Build the app shell with exact spacing:
- **Header**: 64px height, 16px horizontal padding
- **Sidebar**: 280px width (desktop), collapsible
- **Main Content**: 16px padding, max-width: 1200px (centered)
- **Card Component**: 24px padding, 8px border radius, white background
- **Card Gap**: 16px between cards

### Step 4: Implement Screens Incrementally
**Start with simplest, build to complex:**
1. **Authentication** (2-3 screens): Login, Register, Forgot Password
2. **Dashboard** (use dashboard prompt): Role-based dashboards
3. **Activity List** (1 screen): Table/list view with filters
4. **Activity Form** (1 screen): Multi-step creation form
5. **Activity Detail** (1 screen): Read-only view with actions
6. Continue with remaining screens one at a time

### Step 5: Apply Best Practices from Figma Blog
- **Front-load details**: This prompt has all details upfront
- **Break into steps**: Implement one screen at a time, refine before moving on
- **Use point-and-edit**: For quick spacing/color adjustments
- **Access code tab**: For animation speeds, timing functions
- **Realistic data**: Use "Federal Ministry of Health", "247 activities", etc.

### Step 6: Test and Refine
After each screen:
- Check spacing matches reference design
- Verify touch targets are 48px minimum
- Test responsive breakpoints (375px, 768px, 1024px)
- Ensure offline states are visible
- Verify error/empty states are helpful

**Create a comprehensive, modern, and professional UI/UX design system and fully functional prototype that serves public health professionals working in bandwidth-constrained environments.**

**Priority**: Complete user experience over visual effects
**Focus**: Mobile-first design (375px) with desktop enhancements
**Constraint**: Bandwidth and connectivity limitations
**Goal**: Empower public health professionals to save lives through better communication tracking

The design should feel like a professional healthcare application that public health officials can trust with critical communication data during emergencies, especially in low-bandwidth African contexts.

**Use realistic data**: "Federal Ministry of Health", "Lagos State Health Department", "247 activities", "23 pending approvals", "Nigerian Centre for Disease Control"
