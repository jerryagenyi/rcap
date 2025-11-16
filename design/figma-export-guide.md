# Figma Export Guide for Vue Components

Step-by-step guide for exporting Figma designs to Vue components and wrapping them in Quasar.

## Prerequisites

1. **Figma Design File** - Complete designs in Figma Design
2. **Figma to Vue Plugin** - Install Figma to Vue export plugin
3. **Quasar Project** - Initialized Vue 3 + Quasar project
4. **Component Mapping** - Reference `figma-quasar-mapping.md`

## Export Process

### Step 1: Prepare Figma Components

1. **Organize Components**
   - Use Figma Components for reusable elements
   - Name components clearly (e.g., `Button/Primary`, `Input/Text`)
   - Set up variants for different states

2. **Set Up Auto Layout**
   - Use Auto Layout for responsive components
   - Define constraints properly
   - Test at different screen sizes

3. **Name Layers Properly**
   - Use clear, descriptive names
   - Follow naming convention: `ComponentName/State`
   - Remove unnecessary layers

### Step 2: Export from Figma

1. **Select Component**
   - Select the component or frame to export
   - Ensure all variants are included

2. **Use Figma to Vue Plugin**
   - Install "Figma to Vue" or similar plugin
   - Configure export settings:
     - Framework: Vue 3
     - Style: Composition API
     - TypeScript: Yes (if using TS)
     - CSS: Scoped

3. **Export Component**
   - Click export
   - Save to `frontend/src/components/base/` (for base components)
   - Or `frontend/src/components/forms/` (for form components)

### Step 3: Clean Up Exported Code

1. **Remove Figma-Specific Code**
   ```vue
   <!-- Remove Figma-specific classes and styles -->
   <!-- Keep only essential structure -->
   ```

2. **Update Imports**
   - Remove Figma-specific imports
   - Add Quasar imports
   - Add Pinia if needed

3. **Fix Styling**
   - Replace custom CSS with Quasar classes
   - Use design tokens from `design-system.md`
   - Ensure responsive breakpoints

### Step 4: Wrap in Quasar Components

1. **Identify Quasar Equivalents**
   - Reference `figma-quasar-mapping.md`
   - Map each Figma component to Quasar

2. **Create Wrapper Component**
   ```vue
   <template>
     <q-card class="rcap-activity-card">
       <!-- Original Figma structure -->
       <q-card-section>
         <slot />
       </q-card-section>
     </q-card>
   </template>
   ```

3. **Add Quasar Props**
   - Add Quasar component props
   - Map Figma props to Quasar props
   - Add event handlers

### Step 5: Connect to Data

1. **Add Props Interface**
   ```typescript
   interface ActivityFormProps {
     activity?: Activity;
     onSubmit: (data: ActivityFormData) => Promise<void>;
   }
   ```

2. **Connect to Pinia Stores**
   ```typescript
   import { useActivityStore } from '@/stores/useActivityStore';
   
   const store = useActivityStore();
   ```

3. **Add API Calls**
   - Reference `component-data-requirements.md`
   - Add API service calls
   - Handle loading and error states

### Step 6: Add Interactivity

1. **Form Validation**
   - Add Quasar validation rules
   - Reference API contract for validation
   - Show error messages

2. **Event Handlers**
   - Add @click, @submit handlers
   - Connect to store actions
   - Handle API responses

3. **State Management**
   - Use Pinia for component state
   - Handle loading states
   - Manage error states

## Example: Converting Button Component

### Figma Export (Before)
```vue
<template>
  <div class="button-primary">
    <span>Click Me</span>
  </div>
</template>

<style scoped>
.button-primary {
  background: #1976D2;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
}
</style>
```

### Quasar Wrapper (After)
```vue
<template>
  <q-btn
    color="primary"
    :label="label"
    :loading="loading"
    @click="handleClick"
  />
</template>

<script setup lang="ts">
interface Props {
  label: string;
  loading?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  click: [];
}>();

const handleClick = () => {
  emit('click');
};
</script>
```

## Example: Converting Form Component

### Figma Export (Before)
```vue
<template>
  <div class="form-container">
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
  </div>
</template>
```

### Quasar Wrapper (After)
```vue
<template>
  <q-form @submit="onSubmit" class="q-gutter-md">
    <q-input
      v-model="email"
      label="Email"
      type="email"
      :rules="[val => !!val || 'Email is required']"
      outlined
    />
    <q-input
      v-model="password"
      label="Password"
      type="password"
      :rules="[val => !!val || 'Password is required']"
      outlined
    />
    <q-btn
      type="submit"
      color="primary"
      label="Login"
      :loading="loading"
    />
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/useAuthStore';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;
  try {
    await authStore.login({
      email: email.value,
      password: password.value
    });
  } finally {
    loading.value = false;
  }
};
</script>
```

## Checklist

Before considering a component complete:
- [ ] Exported from Figma
- [ ] Cleaned up Figma-specific code
- [ ] Wrapped in Quasar components
- [ ] Added TypeScript types
- [ ] Connected to Pinia store (if needed)
- [ ] Added API integration
- [ ] Added form validation (if form)
- [ ] Added error handling
- [ ] Added loading states
- [ ] Tested responsive breakpoints
- [ ] Tested accessibility
- [ ] Added unit tests (if applicable)

## Common Issues & Solutions

### Issue: Figma exports custom CSS
**Solution**: Replace with Quasar classes and design tokens

### Issue: Components not responsive
**Solution**: Use Quasar responsive classes (`col-xs-12 col-md-6`)

### Issue: Styling doesn't match design
**Solution**: Use Quasar's theming system and custom CSS variables

### Issue: Components too heavy
**Solution**: Lazy load, code split, optimize images

## Best Practices

1. **Start with Base Components**
   - Export and wrap base components first (Button, Input, Card)
   - Build complex components from base components

2. **Use Quasar's Theming**
   - Don't override Quasar styles unnecessarily
   - Use CSS variables for customization
   - Follow Quasar design patterns

3. **Maintain Design System**
   - Keep design tokens consistent
   - Reference `design-system.md`
   - Update mapping document as needed

4. **Test Early and Often**
   - Test components in isolation
   - Test with real data
   - Test responsive behavior
   - Test accessibility

