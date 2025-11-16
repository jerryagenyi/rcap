# RCAP - Dashboard Design Prompt for Figma Make
**Role-Based Public Health Dashboards**

## 📋 Prerequisites
**CRITICAL**: Copy and paste the entire `FIGMA_MAKE_MASTER_PROMPT.md` content first, then add this dashboard-specific prompt.

**Reference Design**: Study and replicate the exact spacing, padding, and component proportions from https://pookie-blinders-777.figma.site/

## 🎯 Dashboard Overview

Create a **role-based customizable dashboard** with drag-and-drop widgets, real-time metrics, and mobile-first design. The dashboard serves as the main hub for public health officials at different organizational levels.

**Reference Design**: Study spacing, padding, and component proportions from https://pookie-blinders-777.figma.site/ and replicate those exact measurements.

## 📊 First Step: Build Base Dashboard Structure

**START HERE - DO THIS FIRST**: Create the base dashboard layout with these exact specifications. Do not proceed to cards until this foundation is complete.

1. **Page Container**: Full viewport height, light gray background (#FAFAFA)
2. **Header Section**: 64px height, white background, 16px horizontal padding
3. **Top Metrics Bar**: 4 cards in a row (desktop) or horizontal scroll (mobile), 24px gap between cards
4. **Main Dashboard Grid**: CSS Grid layout, 12-column system, 16px gap
5. **Card Component**: White background, 24px padding, 8px border radius, subtle shadow

**Exact Spacing to Apply** (from reference design):
- Card padding: 24px (all sides)
- Card gap: 16px
- Section spacing: 32px vertical
- Content padding: 16px horizontal
- Button padding: 12px vertical, 24px horizontal

## 📐 Dashboard Layout Structure

```
Dashboard Page
├── Page Header (64px height)
│   ├── Breadcrumbs (q-breadcrumbs)
│   ├── Page Title + Role Badge
│   ├── Date/Time Display
│   └── Quick Actions (Create Activity, Export Report)
├── Top Metrics Bar (Always Visible)
│   ├── Total Activities Card
│   ├── Pending Approvals Card
│   ├── Completed This Month Card
│   └── Team Activity Card
├── Main Dashboard Grid (Customizable)
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

## 🎨 Specific Card Requirements

### **Top Metrics Bar (4 Cards - Always Visible)**

#### **1. Total Activities Card**
- **Size**: 1x1 grid unit (responsive: full width on mobile)
- **Padding**: 24px (from reference design)
- **Primary Number**: "1,247" (32px font, Inter SemiBold, #212121)
- **Label**: "Total Activities" (14px font, Inter Regular, #757575)
- **Trend Indicator**: "+12 this month" with green up arrow icon
- **Icon**: mdi-clipboard-text (24px, #1976D2)
- **Background**: White (#FFFFFF)
- **Border**: 1px solid #E0E0E0
- **Border Radius**: 8px
- **Shadow**: 0 2px 4px rgba(0,0,0,0.1)

#### **2. Pending Approvals Card**
- **Size**: 1x1 grid unit
- **Padding**: 24px
- **Primary Number**: "23" (32px font, bold, #FF9800)
- **Label**: "Pending Approvals" (14px font, #757575)
- **Urgency Indicator**: Orange badge with "Action Required"
- **Icon**: mdi-clock-alert (24px, #FF9800)
- **Quick Action**: "Review" button (48px height, orange background)

#### **3. Completed This Month Card**
- **Size**: 1x1 grid unit
- **Padding**: 24px
- **Primary Number**: "342" (32px font, bold, #4CAF50)
- **Label**: "Completed This Month" (14px font, #757575)
- **Progress Indicator**: "↑ 8% vs last month" with green arrow
- **Icon**: mdi-check-circle (24px, #4CAF50)
- **Visual**: Progress bar showing 85% of monthly goal

#### **4. Team Activity Card**
- **Size**: 1x1 grid unit
- **Padding**: 24px
- **Primary Number**: "89" (32px font, bold, #1976D2)
- **Label**: "Active Team Members" (14px font, #757575)
- **Trend**: "↑ 5 this week" with blue indicator
- **Icon**: mdi-account-group (24px, #1976D2)
- **Quick Action**: "View Team" link

### **Main Dashboard Grid (8 Customizable Cards)**

#### **1. Recent Activities Card (2x1 grid)**
- **Size**: 2 columns × 1 row (responsive: full width on mobile)
- **Padding**: 24px
- **Header**: "Recent Activities" (18px font, SemiBold) + "View All" link (14px, #1976D2)
- **Content**: 5 activity rows with:
  - Activity title (16px, bold)
  - Status badge (draft/submitted/approved/rejected)
  - Date and organization (14px, #757575)
  - Quick action menu (3 dots icon)
- **Spacing**: 16px between rows
- **Footer**: "5 new activities today" (12px, #757575)

#### **2. Activity Status Breakdown Chart (2x1 grid)**
- **Size**: 2 columns × 1 row
- **Padding**: 24px
- **Header**: "Activity Status" (18px, SemiBold) + time period selector
- **Content**: Donut chart showing:
  - Draft: 45% (gray)
  - Submitted: 30% (blue)
  - Approved: 20% (green)
  - Rejected: 5% (red)
- **Legend**: Color-coded labels below chart
- **Interactive**: Hover to show exact numbers

#### **3. Activity Heatmap Calendar (2x1 grid)**
- **Size**: 2 columns × 1 row
- **Padding**: 24px
- **Header**: "Activity Timeline" (18px, SemiBold) + month/year selector
- **Content**: Calendar grid view with:
  - Date cells (7×5 grid)
  - Color intensity indicates activity count
  - Hover shows exact count for date
  - Click to filter activities by date
- **Color Scale**: Light blue (low) → Dark blue (high)

#### **4. Engagement Metrics Chart (2x1 grid)**
- **Size**: 2 columns × 1 row
- **Padding**: 24px
- **Header**: "Engagement Trends" (18px, SemiBold) + "View Report" link
- **Content**: Line chart showing:
  - 12-week engagement data
  - Multiple metrics (reach, feedback, attendance)
  - Trend lines with different colors
  - Interactive hover states
- **Footer**: Average engagement rate and peak period

#### **5. Team Performance Card (1x2 grid)**
- **Size**: 1 column × 2 rows
- **Padding**: 24px
- **Header**: "Team Performance" (18px, SemiBold) + "Manage Team" button
- **Content**: Team member list with:
  - Avatar (40px circle)
  - Name and role (16px, bold)
  - Activity count and completion rate
  - Performance indicator (progress bar)
- **Spacing**: 16px between team members

#### **6. Upcoming Deadlines Card (1x1 grid)**
- **Size**: 1 column × 1 row
- **Padding**: 24px
- **Header**: "Upcoming Deadlines" (18px, SemiBold)
- **Content**: 3 upcoming deadlines with:
  - Deadline date (bold, color-coded by urgency)
  - Activity title
  - Days remaining indicator
  - "View" link
- **Urgency Colors**: Red (< 3 days), Orange (3-7 days), Blue (> 7 days)

#### **7. Recent Messages Card (1x2 grid)**
- **Size**: 1 column × 2 rows
- **Padding**: 24px
- **Header**: "Recent Messages" (18px, SemiBold) + unread count badge
- **Content**: 5 latest messages with:
  - Sender avatar and name
  - Message preview (truncated)
  - Timestamp (14px, #757575)
  - Unread indicator (blue dot)
- **Action**: "View All Messages" button at bottom

#### **8. Quick Actions Card (1x1 grid)**
- **Size**: 1 column × 1 row
- **Padding**: 24px
- **Header**: "Quick Actions" (18px, SemiBold)
- **Content**: 4 primary action buttons in 2×2 grid:
  - "Create Activity" (mdi-plus-circle, #1976D2)
  - "Upload Evidence" (mdi-upload, #26A69A)
  - "Send Message" (mdi-message, #FF6B35)
  - "Generate Report" (mdi-file-document, #1976D2)
- **Button Size**: 48px height, full width, 16px gap between buttons

## 📱 Mobile Adaptations (375px width)

### **Mobile Layout Specifications**
- **Top Metrics**: Horizontal scroll container, 4 cards side-by-side, 16px gap
- **Main Grid**: Single column, stacked cards, full width
- **Card Sizing**: Full width, auto height based on content
- **Touch Targets**: Minimum 48px for all interactive elements
- **Swipe Gestures**: Horizontal swipe for metrics, vertical scroll for main content
- **Bottom Navigation**: Fixed bottom bar with 4-5 primary navigation items

### **Mobile-Specific Adjustments**
- Reduce card padding to 16px on mobile
- Stack chart legends vertically
- Collapse sidebar into hamburger menu
- Use bottom sheet for filters and actions
- Floating action button for primary action

## 🎛️ Customization Features

### **Drag-and-Drop Interface**
- **Edit Mode Toggle**: "Customize Dashboard" button in header
- **Visual Feedback**: 
  - Drag handles appear on hover (6px gray dots)
  - Drop zones highlighted with dashed border
  - Cards slightly elevated when dragging
- **Card Sizing**: Resize handles for supported cards (2x1, 1x2, 2x2)
- **Save/Cancel**: Clear action buttons (48px height, 16px gap)

### **Role-Based Default Layouts**

#### **Super Admin Dashboard**
- **Priority Cards**: National Overview, State Comparison, System Health
- **Default Layout**: 3 columns, larger charts
- **Special Features**: Policy Compliance widget, Emergency Center access

#### **State Admin Dashboard**
- **Priority Cards**: Regional Overview, LGA Performance, Resource Allocation
- **Default Layout**: 2 columns, balanced mix
- **Special Features**: Incident Response widget, Team Coordination

#### **Sub-Admin Dashboard**
- **Priority Cards**: Local Performance, Activity Tracking, Field Team
- **Default Layout**: 2 columns, activity-focused
- **Special Features**: Community Engagement metrics, Resource Requests

#### **User Dashboard**
- **Priority Cards**: My Activities, Assigned Tasks, Team Updates
- **Default Layout**: Single column, personal focus
- **Special Features**: Personal Performance, Learning Resources

## 🔧 Technical Requirements

### **Component Specifications**
- **Grid System**: CSS Grid with 12-column layout, 16px gap
- **Card Component**: q-card with 24px padding, 8px border radius, white background
- **Responsive Behavior**: 
  - Mobile (xs): 1 column
  - Tablet (sm): 2 columns
  - Desktop (md+): 3-4 columns
- **Loading States**: Skeleton screens matching card structure
- **Error States**: Fallback content with retry button

### **Interaction States**
- **Hover**: Card elevation increases (shadow: 0 4px 8px rgba(0,0,0,0.15))
- **Active**: Slight scale down (0.98) for press feedback
- **Loading**: Shimmer effect on skeleton screens
- **Empty**: Helpful empty states with illustration and CTA
- **Offline**: Gray overlay with "Cached" label

### **Accessibility**
- **Keyboard Navigation**: Tab order follows visual layout
- **Screen Readers**: Proper ARIA labels for all cards and charts
- **High Contrast**: Ensure 4.5:1 contrast ratio for all text
- **Touch Accessibility**: 48px minimum touch targets, 16px spacing

## 🎨 Visual Design Specifications

### **Exact Measurements (from reference design)**
- **Card Border Radius**: 8px
- **Card Shadow**: 0 2px 4px rgba(0,0,0,0.1)
- **Card Gap**: 16px
- **Section Spacing**: 32px vertical
- **Button Height**: 48px
- **Input Height**: 48px
- **Icon Size**: 24px (standard), 16px (small), 32px (large)
- **Avatar Size**: 40px (standard), 32px (small), 48px (large)

### **Typography Scale**
- **H1**: 32px, SemiBold, #212121 (page titles)
- **H2**: 24px, SemiBold, #212121 (section headers)
- **H3**: 20px, SemiBold, #212121 (card titles)
- **H4**: 18px, SemiBold, #212121 (subheaders)
- **Body**: 16px, Regular, #212121 (main content)
- **Body Small**: 14px, Regular, #757575 (secondary text)
- **Caption**: 12px, Regular, #757575 (metadata)

### **Color Usage**
- **Primary Actions**: #1976D2 (blue)
- **Success States**: #4CAF50 (green)
- **Warning States**: #FF9800 (orange)
- **Error/Urgent**: #F44336 (red)
- **Text Primary**: #212121 (dark gray)
- **Text Secondary**: #757575 (medium gray)
- **Borders**: #E0E0E0 (light gray)
- **Backgrounds**: #FAFAFA (light gray), #FFFFFF (white)

## 🚀 Implementation Instructions

**Step 1**: Create the base layout structure with exact spacing from reference design
**Step 2**: Build the 4 top metric cards with consistent styling
**Step 3**: Create the main dashboard grid with 8 customizable cards
**Step 4**: Add responsive breakpoints (mobile first, then scale up)
**Step 5**: Implement drag-and-drop functionality for customization
**Step 6**: Add loading states (skeleton screens) for all cards
**Step 7**: Create empty states with helpful CTAs
**Step 8**: Add offline indicators and connection status

**Use realistic public health data**: "Federal Ministry of Health", "247 activities", "23 pending approvals", "Lagos State Health Department"

---

**Use this prompt with the master prompt to create comprehensive dashboard designs that align with RCAP technical architecture and public health professional needs.**

