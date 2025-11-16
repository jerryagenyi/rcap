# RCAP - Figma Make Master Prompt
**Essential Context for All Figma Make Sessions**

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

## 🎨 Design System Foundation

### **Reference Design System**
**IMPORTANT**: Study and replicate the spacing, padding, typography scale, and component proportions from: https://pookie-blinders-777.figma.site/

**Key Elements to Borrow:**
- Spacing system (padding, margins, gaps)
- Typography scale and line heights
- Component sizing and proportions
- Card layouts and shadows
- Button styles and sizes
- Form input styling
- Color contrast ratios
- Border radius values

### **RCAP Color Palette**
- **Primary**: Healthcare Blue (#1976D2) - buttons, links, active states
- **Secondary**: Teal (#26A69A) - secondary actions
- **Accent**: Orange (#FF6B35) - urgent alerts, highlights
- **Background**: Light Gray (#FAFAFA) - main app background
- **Surface**: White (#FFFFFF) - cards, modals, elevated surfaces
- **Text Primary**: Dark Gray (#212121) - main text
- **Text Secondary**: Medium Gray (#757575) - secondary text
- **Success**: Green (#4CAF50) - success states
- **Warning**: Orange (#FF9800) - warnings
- **Error**: Red (#F44336) - errors, urgent alerts
- **Info**: Blue (#2196F3) - information

### **Typography**
- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, sans-serif
- **Headings**: Inter SemiBold (32px, 24px, 20px, 18px)
- **Body**: Inter Regular (16px, 14px)
- **Captions**: Inter Regular (12px)
- **Line Height**: 1.5 for body, 1.2 for headings

### **Spacing System (8px Grid)**
- **XS**: 4px (0.25rem) - tight spacing
- **SM**: 8px (0.5rem) - small spacing
- **MD**: 16px (1rem) - default spacing (base unit)
- **LG**: 24px (1.5rem) - large spacing
- **XL**: 32px (2rem) - extra large spacing
- **2XL**: 48px (3rem) - section spacing
- **3XL**: 64px (4rem) - page spacing

**Apply spacing consistently**: Use 16px (MD) as base unit. Cards should have 24px padding. Sections should have 32px vertical spacing.

## 🧩 Quasar Framework Component Mapping

### **Essential Components**
- **Buttons**: `q-btn` (primary, secondary, outline, flat)
- **Cards**: `q-card` with `q-card-section`
- **Inputs**: `q-input`, `q-select`, `q-checkbox`, `q-radio`
- **Tables**: `q-table` with `q-td`, `q-th`
- **Navigation**: `q-tabs`, `q-tab-panels`, `q-breadcrumbs`
- **Layout**: `q-page`, `q-header`, `q-drawer`, `q-footer`
- **Icons**: `q-icon` with Material Design Icons (mdi-*)

### **Data Display**
- **Lists**: `q-list` with `q-item`, `q-item-section`
- **Chips**: `q-chip` for tags and status indicators
- **Badges**: `q-badge` for notifications and counts
- **Avatars**: `q-avatar` for user photos
- **Progress**: `q-linear-progress`, `q-circular-progress`

### **Feedback**
- **Dialogs**: `q-dialog` for modals and confirmations
- **Notifications**: `q-notify` for toast messages
- **Loading**: `q-spinner` for loading states
- **Tooltips**: `q-tooltip` for help text

## 📱 Mobile-First Layout Principles

### **Responsive Breakpoints**
- **xs**: < 600px (mobile phones) - PRIMARY FOCUS
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

## 🎯 Figma Make Instructions

### **Component Naming Convention**
Use semantic, hierarchical naming:
- **Layout**: `layout/header`, `layout/sidebar`, `layout/main`
- **Forms**: `form/login`, `form/activity-create`, `form/evidence-upload`
- **Cards**: `card/activity`, `card/metric`, `card/message`
- **Buttons**: `btn/primary`, `btn/secondary`, `btn/danger`
- **Navigation**: `nav/main`, `nav/breadcrumb`, `nav/tabs`

### **Layout Structure**
```
App Layout
├── Header (q-header)
│   ├── Logo + App Name
│   ├── Navigation (q-tabs) [Desktop]
│   ├── Search Bar [Desktop]
│   └── User Menu + Notifications
├── Sidebar (q-drawer) [Desktop]
│   ├── Main Navigation
│   ├── Organization Selector
│   └── Quick Actions
├── Main Content (q-page)
│   ├── Page Header (Breadcrumbs + Title + Actions)
│   ├── Content Area
│   └── Floating Action Button [Mobile]
└── Bottom Navigation (q-footer) [Mobile]
    └── Tab Navigation (4-5 primary items)
```

### **Design Priorities**
1. **Mobile-first**: Design for 375px width first, then scale up
2. **Touch-friendly**: Large buttons (48px min), comfortable spacing (16px)
3. **Offline-aware**: Clear visual feedback for connection states
4. **Performance**: Minimal complexity, efficient layouts, skeleton screens
5. **Accessibility**: High contrast (WCAG AA), clear hierarchy, semantic structure

### **Content Guidelines**
- **Use realistic public health data**: "Federal Ministry of Health", "Lagos State Health Department"
- **African context**: Organization names like "Nigerian Centre for Disease Control", "Kenya Ministry of Health"
- **Real metrics**: "247 activities this month", "85% completion rate", "12 pending approvals"
- **Practical features**: "Risk Communication Workshop", "Vaccination Campaign", "Health Education Session"

## 🚀 Quick Start Checklist

Before creating any screen:
- [ ] Identify target screen size (mobile-first: 375px)
- [ ] Choose appropriate Quasar components
- [ ] Use semantic component naming
- [ ] Include offline/connection indicators
- [ ] Design for touch interaction (48px targets)
- [ ] Consider public health context
- [ ] Apply spacing system (16px base unit)
- [ ] Reference design system from pookie-blinders-777.figma.site for proportions

## 📋 Output Requirements

### **Design Specifications**
- **Clean, semantic structure** ready for Vue/Quasar implementation
- **Proper component hierarchy** matching Quasar Framework
- **Responsive behavior** documented (mobile → tablet → desktop)
- **Interaction states** defined (default, hover, active, disabled, loading, error)
- **Accessibility considerations** included (ARIA labels, semantic HTML, keyboard navigation)

### **Handoff Preparation**
- **Component names** match Quasar conventions
- **Layout logic** clearly defined
- **Spacing system** consistent (8px grid, 16px base unit)
- **Content structure** ready for real data
- **Technical constraints** respected (low-bandwidth, offline-first)

---

**Copy this entire prompt into Figma Make before starting any screen creation. This provides the essential context for creating RCAP designs that align with our technical architecture and design philosophy.**

