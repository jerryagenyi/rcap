# Figma Make Quick Start Guide for RCAP

## 🎯 How to Use These Prompts

### Recommended Approach (Best Results)

1. **Start Fresh**: Create a new Figma Make file
2. **Copy Master Prompt**: Paste entire `FIGMA_MAKE_MASTER_PROMPT.md` first
3. **Add Specific Prompt**: Then add `FIGMA_MAKE_DASHBOARD_PROMPT.md` for dashboards OR `FIGMA_MAKE_DESIGN_PROMPT.md` for complete system
4. **Reference Design**: Keep https://pookie-blinders-777.figma.site/ open in another tab
5. **Start Building**: Follow the "First Step" instructions in each prompt

### Prompt Order for Best Results

#### For Dashboard Only:
```
1. FIGMA_MAKE_MASTER_PROMPT.md (foundation)
2. FIGMA_MAKE_DASHBOARD_PROMPT.md (dashboard-specific)
```

#### For Complete System:
```
1. FIGMA_MAKE_MASTER_PROMPT.md (foundation)
2. FIGMA_MAKE_DESIGN_PROMPT.md (complete system)
```

## 📋 Key Tips from Successful Projects

### 1. Front-Load Your Prompt
- Include ALL context in the first prompt
- Don't rely on follow-up prompts to fix things
- Be extremely specific about measurements

### 2. Reference Design Strategy
When prompting, say:
```
"Study the spacing, padding, and component proportions from https://pookie-blinders-777.figma.site/ and apply those exact measurements to all components in this design."
```

### 3. Break Down Complex Requests
Instead of: "Create the entire dashboard"
Say: "First, create the base layout structure with header (64px height) and main content area (16px padding). Then add the top metrics bar with 4 cards (24px padding each, 16px gap between)."

### 4. Use Specific Measurements
Instead of: "Add some spacing"
Say: "Add 16px gap between cards, 24px padding inside cards, 32px vertical spacing between sections"

### 5. Specify Component Details
Instead of: "Create a button"
Say: "Create a primary button: 48px height, 24px horizontal padding, #1976D2 background, white text, 8px border radius, Inter SemiBold 16px font"

## 🔧 Troubleshooting

### If Figma Make Struggles:

1. **Start Smaller**: 
   - Create just the login screen first
   - Then add dashboard
   - Build incrementally

2. **Be More Specific**:
   - Add exact pixel values
   - Specify exact colors (hex codes)
   - Define exact spacing

3. **Reference the Design**:
   - Say: "Make the spacing match exactly what you see at https://pookie-blinders-777.figma.site/"
   - Point to specific elements: "The card padding should match the cards on the reference site"

4. **Use Point-and-Edit**:
   - After generation, use point-and-edit tool
   - Adjust spacing manually
   - Tweak colors directly

5. **Access Code Tab**:
   - For spacing: Edit CSS padding/margin values
   - For colors: Edit hex color values
   - For animations: Adjust timing functions

## ✅ Success Checklist

Before considering a screen complete:
- [ ] Spacing matches reference design (measure and compare)
- [ ] Typography scale is consistent
- [ ] Colors use exact hex values from design system
- [ ] Touch targets are 48px minimum
- [ ] Responsive breakpoints work (375px, 768px, 1024px)
- [ ] Loading states implemented (skeleton screens)
- [ ] Error states implemented (helpful messages)
- [ ] Empty states implemented (with CTAs)
- [ ] Offline indicators visible
- [ ] Accessibility: High contrast, keyboard navigation

## 🎨 Quick Reference: Exact Measurements

**Apply these consistently:**
- Card padding: 24px
- Card gap: 16px
- Section spacing: 32px vertical
- Button height: 48px
- Input height: 48px
- Icon size: 24px (standard)
- Border radius: 8px (cards), 4px (buttons)
- Shadow: 0 2px 4px rgba(0,0,0,0.1)

**Reference these from pookie-blinders-777.figma.site:**
- Exact spacing between elements
- Typography line heights
- Component proportions
- Color contrast ratios

---

**Remember**: Quality over speed. Build one screen perfectly, then replicate the patterns to others.

