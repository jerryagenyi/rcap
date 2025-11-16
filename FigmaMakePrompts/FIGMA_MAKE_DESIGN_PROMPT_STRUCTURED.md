# RCAP - Structured Figma Make Design Prompt
**Build Complete UI/UX System - Step by Step**

## 📋 REQUIRED - Use This Exact Process

**STEP 1: Foundation First** (Copy this exact order into Figma Make):
1. `FIGMA_MAKE_MASTER_PROMPT.md` - Technical foundation (REQUIRED)
2. `FIGMA_MAKE_DASHBOARD_PROMPT.md` - Dashboard screens (if building dashboards)
3. This structured prompt - All remaining screens

**CRITICAL**: Always start with the Master Prompt. Do not skip this step or the design will fail.

## 🎯 Mission

Create a **complete, modern UI/UX design system** for **RCAP** (Risk Communication Activity Platform) - a public health risk communication tracking platform for low-bandwidth African contexts.

**Reference Design**: Study https://pookie-blinders-777.figma.site/ and replicate EXACT spacing, padding, proportions, and visual hierarchy.

## 📚 SCREENS TO BUILD (Build in This Order)

### **PHASE 1: Foundation Screens (Start Here)**
1. **Authentication Flow** - Login, Register, Forgot Password
2. **Onboarding Tour** - 5-step interactive introduction
3. **Main Layout** - Navigation, sidebar, content area

### **PHASE 2: Core Functionality**
4. **Activity Management** - List, Create, Detail, Edit, Timeline
5. **File Upload System** - Drag-and-drop, gallery, management
6. **User Profiles** - Profile editing, settings

### **PHASE 3: Advanced Features**
7. **Communication System** - Inbox, compose, threads
8. **Team Management** - Directory, permissions, roles
9. **Reporting System** - Reports, export, analytics

### **PHASE 4: Specialized Screens**
10. **Template Management** - Library, builder, selection
11. **Tag Management** - Categories, selection, filtering
12. **Settings & Help** - Preferences, documentation

## 🎨 STEP-BY-STEP BUILDING INSTRUCTIONS

### **SCREEN 1: Login Page (Build This First)**
```
Layout Requirements:
- Mobile: 375px width, full viewport height
- Desktop: Centered modal (max-width: 400px)
- Reference: Study login form at pookie-blinders-777.figma.site/

Components (Use Quasar mapping):
- q-card for form container
- q-input for email/password (48px height)
- q-btn for login button (48px height)
- q-checkbox for "Remember me"
- q-link for "Forgot password"

Exact Measurements (from reference):
- Card padding: 32px (24px mobile)
- Input height: 48px
- Button height: 48px
- Gap between elements: 16px
- Logo size: 48px height
```

### **SCREEN 2: Activity List Page**
```
Layout Requirements:
- Header: Page title + Search + Filter buttons
- Main: Activity list with cards
- Mobile: Single column list
- Desktop: 2-3 column grid

Activity Card Structure:
- q-card with 24px padding
- Activity title (18px, bold)
- Status badge (draft/submitted/approved)
- Organization (14px, #757575)
- Date/time (12px, #9E9E9E)
- Action menu (3 dots)
- Priority indicator (colored dot)

Status Badge Colors:
- Draft: #9E9E9E
- Submitted: #1976D2
- Approved: #4CAF50
- Rejected: #F44336
```

### **SCREEN 3: Activity Create Form**
```
Multi-Step Form Structure:
- Progress indicator (top)
- Form content (center)
- Navigation buttons (bottom)

Step 1: Basic Information
- Title input (48px height)
- Description textarea
- Priority selector (q-select)
- Category selector (q-select)

Step 2: Organization & Team
- Organization dropdown
- Team member selector
- Permission settings

Step 3: Timeline & Deadlines
- Date/time pickers
- Milestone builder
- Reminder settings

Form Field Specifications:
- All inputs: 48px height
- Labels: 14px, #212121, 8px bottom margin
- Required: Red asterisk
- Validation: Red border + error message
```

### **SCREEN 4: Dashboard (4 Variants)**
```
Build ONE dashboard structure, then adapt for each role:

Super Admin Dashboard:
- National metrics (large numbers)
- State comparison chart
- System health monitor
- Policy compliance tracker

State Admin Dashboard:
- Regional metrics
- LGA performance charts
- Resource allocation
- Team coordination

Sub-Admin Dashboard:
- Local performance metrics
- Field team management
- Community engagement
- Resource requests

User Dashboard:
- Personal activity tracking
- Assigned tasks
- Team updates
- Performance metrics
```

### **SCREEN 5: File Upload System**
```
Upload Component:
- Drop zone: 200px height, dashed border
- Drag text: "Drop files here or click to browse"
- File list: 100px height each file
- Progress bars for uploads

File Gallery:
- Grid view: 3 columns desktop, 1 column mobile
- File cards: Image preview + metadata
- Action buttons: View, Download, Delete

Reference: Copy exact upload styling from pookie-blinders-777.figma.site/
```

## 🎨 VISUAL DESIGN REQUIREMENTS

### **Exact Measurements to Apply (From Reference)**
- **Card Padding**: 24px (16px mobile)
- **Button Height**: 48px (minimum touch target)
- **Input Height**: 48px
- **Gap Between Elements**: 16px
- **Section Spacing**: 32px vertical
- **Border Radius**: 8px (standard), 12px (large)
- **Shadow**: 0 2px 4px rgba(0,0,0,0.1)

### **Color System**
```json
{
  "primary": "#1976D2",
  "secondary": "#26A69A",
  "accent": "#FF6B35",
  "success": "#4CAF50",
  "warning": "#FF9800",
  "error": "#F44336",
  "background": "#FAFAFA",
  "surface": "#FFFFFF",
  "textPrimary": "#212121",
  "textSecondary": "#757575"
}
```

### **Typography**
```json
{
  "fontFamily": "Inter, sans-serif",
  "scale": {
    "h1": 32,
    "h2": 24,
    "h3": 20,
    "h4": 18,
    "body": 16,
    "small": 14,
    "caption": 12
  }
}
```

## 🔄 INTERACTION STATES

### **Button States**
- **Default**: Normal appearance
- **Hover**: Darker color, slight elevation
- **Pressed**: Scale to 0.98, darker color
- **Disabled**: Gray background, #BDBDBD text
- **Loading**: Spinner icon, disabled state

### **Input States**
- **Default**: Gray border (#E0E0E0)
- **Focus**: Blue border (#1976D2), blue shadow
- **Error**: Red border (#F44336), error message below
- **Success**: Green border (#4CAF50), checkmark icon

### **Card States**
- **Default**: White background, subtle shadow
- **Hover**: Elevated shadow (0 4px 8px rgba(0,0,0,0.15))
- **Selected**: Blue border, highlighted background
- **Loading**: Skeleton screen shimmer

## 📱 RESPONSIVE BREAKPOINTS

### **Mobile (< 600px)**
- Width: 375px (primary focus)
- Layout: Single column
- Navigation: Bottom tab bar
- Touch targets: Minimum 48px
- Spacing: Reduced (use 16px as base)

### **Tablet (600px - 1023px)**
- Width: 768px
- Layout: 2-column grid
- Navigation: Hamburger menu + sidebar
- Spacing: Standard (use 24px as base)

### **Desktop (≥ 1024px)**
- Width: 1200px max-width, centered
- Layout: 3-4 columns
- Navigation: Full header + sidebar
- Spacing: Standard (use 24px as base)

## 🚀 BUILDING STRATEGY

### **Step 1: Foundation First**
1. Study reference design thoroughly
2. Create component library (buttons, inputs, cards)
3. Build base layout structure
4. Test spacing and measurements

### **Step 2: Screen by Screen**
1. Build authentication flow (3 screens)
2. Create main dashboard (1 screen, 4 variants)
3. Add activity management (4 screens)
4. Implement remaining features (5 screens)

### **Step 3: Polish & Refine**
1. Add loading states (skeleton screens)
2. Create empty states with helpful CTAs
3. Add error states and recovery options
4. Implement hover and focus states
5. Test responsive behavior

### **Step 4: Interactive Prototype**
1. Link screens together with navigation
2. Add micro-interactions and transitions
3. Test user flows end-to-end
4. Validate accessibility and performance

## ✅ QUALITY CHECKLIST

For Each screen, verify:
- [ ] Exact spacing matches reference design
- [ ] Touch targets are 48px minimum
- [ ] Colors follow brand guidelines
- [ ] Typography is consistent
- [ ] States (hover, focus, disabled) are clear
- [ ] Empty states are helpful
- [ ] Error states provide recovery options
- [ ] Responsive layout works on all breakpoints

## 🎯 SUCCESS CRITERIA

- **Professional Healthcare Aesthetic**: Clean, trustworthy, authoritative
- **Public Health Context**: Uses realistic healthcare data and terminology
- **Mobile-First**: Optimized for 375px width, scales up beautifully
- **Low-Bandwidth Ready**: Efficient layouts, minimal visual complexity
- **Accessibility Compliant**: WCAG 2.1 AA, keyboard navigation, screen reader friendly
- **Implementation Ready**: Component names match Quasar conventions

---

**Use this structured approach with the master prompt foundation to create a complete, professional RCAP design system that serves public health professionals effectively.**

**Remember: Reference design is your guide - measure and replicate exact spacing, proportions, and visual hierarchy for best results.**