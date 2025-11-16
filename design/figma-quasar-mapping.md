# Figma to Quasar Component Mapping

This document defines how Figma design components map to Quasar components for RCAP.

## Design Tokens

### Colors
| Figma Token | Quasar Variable | Usage |
|------------|----------------|-------|
| `primary` | `primary` | Main brand color, buttons, links |
| `secondary` | `secondary` | Secondary actions |
| `accent` | `accent` | Highlights, badges |
| `positive` | `positive` | Success states |
| `negative` | `negative` | Error states |
| `warning` | `warning` | Warning states |
| `info` | `info` | Information states |
| `dark` | `dark` | Dark mode text |
| `light` | `light` | Light backgrounds |

### Typography
| Figma Style | Quasar Class | Size | Weight |
|------------|-------------|------|--------|
| `heading-1` | `text-h1` | 2.5rem | 700 |
| `heading-2` | `text-h2` | 2rem | 600 |
| `heading-3` | `text-h3` | 1.75rem | 600 |
| `heading-4` | `text-h4` | 1.5rem | 500 |
| `body-large` | `text-body1` | 1rem | 400 |
| `body` | `text-body2` | 0.875rem | 400 |
| `caption` | `text-caption` | 0.75rem | 400 |

### Spacing
| Figma Spacing | Quasar Class | Value |
|--------------|-------------|-------|
| `xs` | `q-pa-xs` | 4px |
| `sm` | `q-pa-sm` | 8px |
| `md` | `q-pa-md` | 16px |
| `lg` | `q-pa-lg` | 24px |
| `xl` | `q-pa-xl` | 32px |

## Component Mapping

### Form Components

| Figma Component | Quasar Component | Notes |
|----------------|-----------------|-------|
| Text Input | `<q-input>` | Use `outlined` or `filled` variant |
| Text Area | `<q-input type="textarea">` | Multi-line input |
| Select/Dropdown | `<q-select>` | For single selection |
| Multi-Select | `<q-select multiple>` | For multiple selection |
| Checkbox | `<q-checkbox>` | Single checkbox |
| Radio Button | `<q-radio>` | Use with `<q-radio-group>` |
| Date Picker | `<q-date>` + `<q-input>` | Date selection |
| File Upload | `<q-uploader>` | For file uploads |
| Button Primary | `<q-btn color="primary">` | Main action button |
| Button Secondary | `<q-btn color="secondary" outline>` | Secondary action |
| Button Text | `<q-btn flat>` | Text-only button |

### Layout Components

| Figma Component | Quasar Component | Notes |
|----------------|-----------------|-------|
| Container | `<div class="q-container">` | Page container |
| Row | `<div class="row">` | Flex row |
| Column | `<div class="col">` | Flex column |
| Card | `<q-card>` | Content card |
| Card Section | `<q-card-section>` | Card content area |
| Divider | `<q-separator>` | Horizontal divider |
| Spacer | `<q-space>` | Flexible spacer |

### Navigation Components

| Figma Component | Quasar Component | Notes |
|----------------|-----------------|-------|
| App Bar | `<q-header>` | Top navigation bar |
| Drawer/Sidebar | `<q-drawer>` | Side navigation |
| Tabs | `<q-tabs>` + `<q-tab-panels>` | Tab navigation |
| Breadcrumbs | `<q-breadcrumbs>` | Breadcrumb navigation |
| Menu | `<q-menu>` | Dropdown menu |

### Data Display Components

| Figma Component | Quasar Component | Notes |
|----------------|-----------------|-------|
| Table | `<q-table>` | Data table with sorting/filtering |
| List | `<q-list>` + `<q-item>` | Item list |
| Badge | `<q-badge>` | Status badge |
| Avatar | `<q-avatar>` | User avatar |
| Chip | `<q-chip>` | Tag/chip component |
| Progress Bar | `<q-linear-progress>` | Progress indicator |
| Skeleton | `<q-skeleton>` | Loading placeholder |

### Feedback Components

| Figma Component | Quasar Component | Notes |
|----------------|-----------------|-------|
| Alert/Notification | `<q-banner>` | Information banner |
| Toast/Snackbar | `<q-notify>` | Temporary notification |
| Dialog/Modal | `<q-dialog>` | Modal dialog |
| Loading Spinner | `<q-spinner>` | Loading indicator |
| Tooltip | `<q-tooltip>` | Hover tooltip |

### Special Components

| Figma Component | Quasar Component | Notes |
|----------------|-----------------|-------|
| Timeline | Custom component | Use Quasar list + custom styling |
| Calendar Heatmap | Custom component | SVG-based calendar view |
| Chart | Chart.js wrapper | Wrap Chart.js in Quasar card |
| File Preview | Custom component | Use Quasar card + image/video |

## Naming Conventions

### Component Names
- **Figma**: `Button/Primary`, `Input/Text`, `Card/Default`
- **Vue**: `ButtonPrimary.vue`, `TextInput.vue`, `CardDefault.vue`
- **Quasar**: Use Quasar component names directly

### File Structure
```
frontend/src/
├── components/
│   ├── base/              # Base components (wrapped Quasar)
│   │   ├── RButton.vue
│   │   ├── RInput.vue
│   │   └── RCard.vue
│   ├── forms/             # Form components
│   │   ├── ActivityForm.vue
│   │   └── UserProfileForm.vue
│   └── layout/            # Layout components
│       ├── AppHeader.vue
│       └── AppDrawer.vue
```

## Responsive Breakpoints

| Breakpoint | Quasar Class | Min Width | Usage |
|-----------|-------------|-----------|-------|
| Extra Small | `xs` | 0px | Mobile portrait |
| Small | `sm` | 600px | Mobile landscape |
| Medium | `md` | 1024px | Tablet |
| Large | `lg` | 1440px | Desktop |
| Extra Large | `xl` | 1920px | Large desktop |

## Low-Bandwidth Considerations

### Image Optimization
- Use `<q-img>` with `loading="lazy"` for images
- Provide `srcset` for responsive images
- Use WebP format when possible
- Compress images before upload

### Component Loading
- Lazy load heavy components
- Use `<q-skeleton>` for loading states
- Minimize initial bundle size
- Code split by route

### Data Fetching
- Paginate lists (20 items per page)
- Lazy load data on scroll
- Cache frequently accessed data
- Minimize API calls

## Export Guidelines

### From Figma to Vue
1. Export components as Vue SFCs
2. Remove Figma-specific code
3. Replace with Quasar components
4. Add props and events
5. Connect to Pinia stores

### Component Wrapper Pattern
```vue
<template>
  <q-card class="rcap-card">
    <!-- Figma design content -->
    <q-card-section>
      <slot />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
// Component logic
</script>
```

## Design System Checklist

Before exporting from Figma, ensure:
- [ ] All colors use design tokens
- [ ] Typography uses defined scale
- [ ] Spacing uses standard values
- [ ] Components are responsive
- [ ] Low-bandwidth optimizations applied
- [ ] Accessibility (WCAG) considered
- [ ] Dark mode variants defined (if applicable)

