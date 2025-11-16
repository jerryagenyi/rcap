# RCAP Design System Guidelines for Figma Make

**System Instructions for AI-Assisted Design Generation**

---

## General Guidelines

* Use responsive layouts with flexbox and grid by default. Only use absolute positioning when absolutely necessary (e.g., floating action buttons, tooltips)

* Refactor code as you go to keep code clean and maintainable. Extract reusable components into separate files

* Keep file sizes small. Put helper functions and components in their own files when they exceed 50 lines

* Follow the 8px grid system consistently. All spacing should be multiples of 8px (4px, 8px, 16px, 24px, 32px, 48px, 64px)

* Mobile-first approach: Design for 375px width first, then scale up to tablet (768px) and desktop (1024px+)

* Always include loading states (skeleton screens) and empty states for all data-driven components

* Ensure all interactive elements have hover, active, focus, and disabled states

* Use semantic HTML elements and proper ARIA labels for accessibility

---

## Design System Guidelines

### Color System

* **Primary Purple**: #7B2CBF - Use for primary buttons, active states, links, and key highlights
* **Primary Blue**: #4A90E2 - Use for secondary actions, accents, and supporting elements
* **Gradient Primary**: `linear-gradient(135deg, #7B2CBF 0%, #4A90E2 100%)` - Use for primary buttons and hero elements
* **Background**: Light gradient from #F0F4F8 to #E8E0F5 - Soft blue-purple gradient for page backgrounds
* **Surface**: White (#FFFFFF) - Use for cards, modals, and elevated surfaces
* **Success**: Green (#4CAF50) - Use for success states, completed actions, approved status
* **Warning**: Orange (#FF9800) - Use for warnings, pending items, alerts
* **Error**: Red (#F44336) - Use for errors, rejected status, critical alerts
* **Text Primary**: Dark Gray (#212121) - Main text and headings
* **Text Secondary**: Medium Gray (#757575) - Secondary text, labels, metadata
* **Border Light**: #E0E0E0 - Subtle borders and dividers

### Typography

* **Font Family**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
* **Base Font Size**: 16px for body text
* **Type Scale**: 
  * Hero: 48px, Bold (700), line-height: 1.1
  * H1: 32px, SemiBold (600), line-height: 1.2
  * H2: 24px, SemiBold (600), line-height: 1.3
  * H3: 20px, SemiBold (600), line-height: 1.3
  * H4: 18px, SemiBold (600), line-height: 1.3
  * Body: 16px, Regular (400), line-height: 1.6
  * Body Small: 14px, Regular (400), line-height: 1.5
  * Caption: 12px, Regular (400), line-height: 1.4, opacity: 0.8

* Date formats should always be in the format "Jan 15, 2025" or "1/15/2025" for compact displays

* Numbers should use comma separators for thousands (e.g., "1,247" not "1247")

### Spacing System

* **Card Padding**: Always 24px on all sides
* **Card Gap**: Always 16px between cards
* **Section Spacing**: 32px vertical spacing between major sections
* **Content Padding**: 16px horizontal padding for page content
* **Form Field Spacing**: 24px vertical spacing between form fields
* **Button Padding**: 12px vertical, 24px horizontal

### Shadows

* **Card Shadow**: `0 2px 8px rgba(123, 44, 191, 0.1)` - Purple-tinted shadow for cards
* **Card Hover Shadow**: `0 4px 16px rgba(123, 44, 191, 0.15)` - Elevated shadow on hover
* **Modal Shadow**: `0 8px 32px rgba(123, 44, 191, 0.2)` - Strong shadow for elevated modals

### Border Radius

* **Cards**: 16px border radius (modern, rounded)
* **Buttons**: 12px border radius
* **Inputs**: 12px border radius
* **Badges**: 12px border radius
* **Small Elements**: 8px border radius (chips, tags)

---

## Component Guidelines

### Button

The Button component is a fundamental interactive element, designed to trigger actions or navigate users through the application. It provides visual feedback and clear affordances to enhance user experience.

#### Usage

Buttons should be used for important actions that users need to take, such as form submissions, confirming choices, or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

#### Variants

* **Primary Button**
  * Purpose: Used for the main action in a section or page
  * Visual Style: Purple-blue gradient background (`linear-gradient(135deg, #7B2CBF 0%, #4A90E2 100%)`), white text, 48px height
  * Usage: One primary button per section to guide users toward the most important action
  * Hover: Slight elevation (translateY(-2px)) with increased shadow
  * Active: Scale down slightly (scale(0.98)) for press feedback
  * Ripple Effect: White ripple animation on click

* **Secondary Button**
  * Purpose: Used for alternative or supporting actions
  * Visual Style: Blue background (#4A90E2), white text, 48px height, 12px border radius
  * Usage: Can appear alongside a primary button for less important actions
  * Hover: Slight elevation with increased shadow

* **Outline Button**
  * Purpose: Used for less emphasized actions
  * Visual Style: 2px solid purple border (#7B2CBF), transparent background, purple text, 48px height
  * Usage: For actions that should be available but not emphasized
  * Hover: Light purple background (#F3E5F5)

* **Flat Button**
  * Purpose: Used for the least important actions
  * Visual Style: No border, no background, purple text (#7B2CBF)
  * Usage: For tertiary actions or text links styled as buttons
  * Hover: Light purple background (#F3E5F5)

#### Button States

All buttons must have:
* Default state
* Hover state (with smooth transition)
* Active/pressed state
* Focus state (3px purple outline, 2px offset)
* Disabled state (reduced opacity 0.5, no pointer events)

#### Button Sizes

* **Standard**: 48px height (default, for most use cases)
* **Large**: 56px height (for hero sections or prominent CTAs)
* **Small**: 40px height (for compact spaces, use sparingly)

### Card

Cards are used to group related content and actions. They provide visual separation and hierarchy.

#### Usage

Use cards to display:
* Activity items in lists
* Metric summaries on dashboards
* Form sections
* Content groups

#### Card Structure

* **Background**: White (#FFFFFF)
* **Padding**: 24px on all sides (consistent)
* **Border Radius**: 16px
* **Shadow**: `0 2px 8px rgba(123, 44, 191, 0.1)`
* **Border**: Optional 1px solid #E0E0E0 for definition

#### Card States

* **Default**: White background with subtle shadow
* **Hover**: Elevate with `translateY(-4px)` and increased shadow `0 4px 16px rgba(123, 44, 191, 0.15)`
* **Selected**: Purple border (2px solid #7B2CBF) or purple background tint
* **Interactive**: Show cursor pointer on hover

#### Card Variants

* **Metric Card**: Includes top accent bar (4px height, purple gradient), large number, label, trend indicator
* **Activity Card**: Includes checkbox, title, metadata, status badge, action buttons
* **Info Card**: Simple content display with optional header and footer

### Input Field

Input fields are used for data entry in forms. They should be clear, accessible, and provide helpful feedback.

#### Usage

Use input fields for:
* Text entry (single line)
* Email addresses
* Phone numbers
* Passwords
* Search queries

#### Input Structure

* **Height**: 48px (minimum for touch targets)
* **Padding**: 16px horizontal
* **Border**: 2px solid #E0E0E0 (default)
* **Border Radius**: 12px
* **Background**: White (#FFFFFF)
* **Font Size**: 16px (prevents zoom on iOS)

#### Input States

* **Default**: Gray border (#E0E0E0), white background
* **Focus**: Purple border (#7B2CBF) with 4px glow `0 0 0 4px rgba(123, 44, 191, 0.1)`
* **Error**: Red border (#F44336) with error message below (14px, red text)
* **Success**: Green border (#4CAF50) with checkmark icon
* **Disabled**: Gray background (#F5F5F5), reduced opacity

#### Floating Labels

* Labels start inside input field (16px from left, 16px from top)
* On focus or when input has value, label moves to top (-10px) and becomes smaller (12px)
* Label color changes to purple (#7B2CBF) when focused
* Smooth transition (0.3s ease) for label movement

#### Input Types

* **Text Input**: Standard single-line text entry
* **Textarea**: Multi-line text entry, minimum 3 rows, auto-resize
* **Select/Dropdown**: Custom styled select with purple focus state
* **Checkbox**: 24px × 24px, purple when checked
* **Radio**: 24px × 24px circle, purple when selected

### Status Badge

Status badges indicate the current state of an item (activity, user, etc.).

#### Usage

Use badges to show:
* Activity status (Draft, Submitted, Approved, Rejected)
* User status (Online, Offline)
* Priority levels
* Categories

#### Badge Variants

* **Draft**: Gray background (#9E9E9E), white text, 8px padding, 12px border radius
* **Submitted**: Blue background (#4A90E2), white text
* **Approved**: Green background (#4CAF50), white text, checkmark icon
* **Rejected**: Red background (#F44336), white text, X icon
* **Completed**: Green background (#4CAF50), white text

#### Badge Sizes

* **Standard**: 8px vertical padding, 12px horizontal padding, 12px font size
* **Large**: 10px vertical padding, 16px horizontal padding, 14px font size
* **Small**: 4px vertical padding, 8px horizontal padding, 11px font size

### Navigation

#### Bottom Navigation (Mobile)

* **Maximum Items**: 5 items (Dashboard, Activities, Reports, Team, Profile)
* **Height**: 80px total (including safe area on iOS)
* **Background**: White with glass morphism effect (rgba(255, 255, 255, 0.8), backdrop-filter: blur(10px))
* **Active State**: Purple color (#7B2CBF) with gradient accent bar (3px height, 32px width) above icon
* **Badge Notifications**: Red circle with white number, positioned top-right of icon
* **Haptic Feedback**: Subtle vibration on tap (mobile)

#### Top Navigation (Desktop)

* **Height**: 64px
* **Background**: White or purple gradient header
* **Logo**: Left side, purple gradient icon
* **Search**: Center or right, 48px height input
* **User Menu**: Right side, avatar with dropdown
* **Notification Bell**: Right side, with red badge counter

### Data Visualization

#### Charts

* **Color Palette**: 
  * Primary data: Purple (#7B2CBF)
  * Secondary data: Blue (#4A90E2)
  * Success: Green (#4CAF50)
  * Warning: Orange (#FF9800)
  * Error: Red (#F44336)

* **Animations**: 
  * Bar charts: Grow from 0 with 1s ease-out animation
  * Pie charts: Rotate in with 1s ease-out animation
  * Line charts: Draw path with 1s ease-out animation

* **Interactivity**:
  * Hover: Show tooltip with exact values
  * Click: Filter related data (if applicable)
  * Export: Button in top-right corner

#### Progress Indicators

* **Linear Progress**: 4px height, purple gradient, rounded ends
* **Circular Progress**: Purple gradient, animated rotation
* **Percentage Display**: Show percentage in center or next to progress bar

### Loading States

#### Skeleton Screens

* **Background**: Gray gradient (#f0f0f0 to #e0e0e0)
* **Animation**: Shimmer effect (1.5s infinite)
* **Structure**: Match the final content layout exactly
* **Usage**: Show during data fetch, replace with actual content when loaded

#### Spinners

* **Color**: Purple (#7B2CBF)
* **Size**: 24px (standard), 16px (small), 32px (large)
* **Animation**: Smooth rotation
* **Usage**: For inline loading states, button loading states

### Empty States

All empty states must include:
* **Illustration**: 200px height, centered, relevant icon or illustration
* **Message**: 20px, bold, #212121 (e.g., "No activities found")
* **Subtext**: 14px, #757575, helpful guidance (e.g., "Try adjusting your filters")
* **CTA Button**: Primary purple button, 48px height, centered (e.g., "Create Activity")

### Error States

All error states must include:
* **Icon**: 48px, red (#F44336), mdi-alert-circle
* **Message**: 16px, bold, #212121 (e.g., "Something went wrong")
* **Subtext**: 14px, #757575, error details
* **Retry Button**: Purple primary button, 48px height, "Retry" text

---

## Layout Guidelines

### Grid System

* Use CSS Grid for complex layouts (dashboard grids, card layouts)
* Use Flexbox for simple layouts (navigation, button groups)
* 12-column grid system for desktop (16px gutters)
* Single column for mobile (375px+)

### Responsive Breakpoints

* **Mobile**: < 600px (primary focus, design mobile-first)
* **Tablet**: 600px - 1023px
* **Desktop**: 1024px - 1439px
* **Large Desktop**: ≥ 1440px

### Page Structure

```
Header (64px height)
├── Logo/Branding (left)
├── Navigation/Search (center)
└── User Menu/Notifications (right)

Main Content (16px padding)
├── Page Title + Actions
├── Content Sections (32px vertical spacing)
└── Cards/Components (16px gap)

Footer/Bottom Nav (80px height on mobile)
└── 5 navigation items
```

---

## Interaction Guidelines

### Hover States

* All interactive elements must have hover states
* Cards: Elevate with translateY(-4px) and increased shadow
* Buttons: Slight elevation and increased shadow
* Links: Underline or color change
* Smooth transitions: 0.3s ease for all hover effects

### Focus States

* All focusable elements must have visible focus indicators
* Focus outline: 3px solid purple (#7B2CBF), 2px offset
* Border radius: 4px on focus outline
* Keyboard navigation: Tab order follows visual layout

### Touch Targets

* Minimum size: 48px × 48px for all interactive elements
* Comfortable spacing: 16px between touch targets
* Thumb zones: Important actions in bottom 1/3 of screen (mobile)

### Animations

* **Duration**: 0.3s for micro-interactions, 0.5s for page transitions
* **Easing**: cubic-bezier(0.4, 0, 0.2, 1) for smooth, natural motion
* **Reduced Motion**: Respect prefers-reduced-motion media query
* **Performance**: Use transform and opacity for animations (GPU-accelerated)

---

## Accessibility Guidelines

### WCAG 2.1 AA Compliance

* **Color Contrast**: Minimum 4.5:1 for text, 3:1 for large text
* **Focus Indicators**: Visible on all interactive elements
* **Keyboard Navigation**: All functionality accessible via keyboard
* **Screen Readers**: Proper ARIA labels, semantic HTML, alt text for images

### ARIA Labels

* All icon-only buttons must have aria-label
* Form inputs must have associated labels (use aria-labelledby if label is hidden)
* Status messages must use aria-live regions
* Navigation landmarks: Use nav, main, header, footer elements

### Form Accessibility

* All inputs must have autocomplete attributes where applicable
* Password fields: `autocomplete="current-password"` or `autocomplete="new-password"`
* Email fields: `autocomplete="email"`
* Required fields: Mark with asterisk (*) and aria-required="true"
* Error messages: Associate with inputs using aria-describedby

---

## Content Guidelines

### Realistic Data

* Use realistic public health data:
  * Organizations: "Federal Ministry of Health", "Lagos State Health Department", "NCDC", "WHO Nigeria"
  * Activities: "COVID-19 Vaccination Campaign - Phase 3", "Cholera Prevention Training Workshop"
  * Locations: "Lagos, Ikeja LGA", "Kano State", "FCT Abuja"
  * Metrics: "1,247 activities", "67.3% coverage", "15,892 workers trained"

### Error Messages

* Be helpful and specific: "Email address is required" not "Error"
* Provide recovery suggestions: "Try a different email address"
* Use friendly, professional tone

### Empty State Messages

* Be encouraging: "No activities yet" not "Empty"
* Provide clear next steps: "Create your first activity to get started"
* Include helpful CTAs

---

## Performance Guidelines

### Image Optimization

* Lazy load images below the fold
* Use appropriate image formats (WebP when possible)
* Compress images (aim for < 100KB per image)
* Provide alt text for all images

### Code Optimization

* Minimize bundle size (target < 500KB)
* Use code splitting for routes
* Lazy load components that aren't immediately visible
* Optimize animations (use transform/opacity)

### Loading Strategy

* Show skeleton screens immediately (perceived performance)
* Load critical content first (above the fold)
* Progressive enhancement for secondary content
* Optimistic UI updates when possible

---

## Mobile-Specific Guidelines

### Bottom Navigation

* Maximum 5 items (preferably 4)
* Never use floating action button (FAB) with bottom navigation
* Active state must be clearly visible (purple color + accent bar)
* Badge notifications on relevant tabs

### Touch Gestures

* Pull to refresh: Implement on list views
* Swipe actions: Reveal edit/delete on list items (swipe left)
* Long press: Show context menu
* Pinch to zoom: On images and charts

### Form Inputs

* Use appropriate input types (email, tel, number)
* Show numeric keypad for number inputs
* Add "Next" button on keyboard for multi-field forms
* Auto-focus first input when form loads

---

## Do's and Don'ts

### Do's

* ✅ Use purple-blue gradient for primary actions
* ✅ Maintain 48px minimum touch targets
* ✅ Include loading and empty states
* ✅ Use consistent spacing (8px grid)
* ✅ Provide clear visual feedback on interactions
* ✅ Test on mobile devices
* ✅ Ensure accessibility compliance
* ✅ Use realistic, contextual data

### Don'ts

* ❌ Don't use more than 5 items in bottom navigation
* ❌ Don't use FAB with bottom navigation
* ❌ Don't use dropdowns for 2 or fewer options (use buttons/radios)
* ❌ Don't use absolute positioning unless necessary
* ❌ Don't skip loading states
* ❌ Don't use placeholder text as labels
* ❌ Don't use color alone to convey information
* ❌ Don't create components smaller than 48px for touch targets

---

## Testing Checklist

Before considering a component complete:

- [ ] Responsive on mobile (375px), tablet (768px), desktop (1024px+)
- [ ] All interactive elements have hover, focus, active states
- [ ] Touch targets are minimum 48px × 48px
- [ ] Loading states implemented (skeleton screens)
- [ ] Empty states implemented (with helpful CTAs)
- [ ] Error states implemented (with retry mechanisms)
- [ ] Accessibility: ARIA labels, keyboard navigation, screen reader friendly
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Animations respect reduced motion preference
- [ ] Performance: Lazy loading, optimized images, code splitting

---

**Remember**: Every design decision should serve the mission of empowering African public health professionals. The purple-blue gradient should inspire confidence, interactions should feel smooth and responsive, and the overall experience should make complex public health management feel effortlessly simple.

