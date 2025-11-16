import { test, expect } from '@playwright/test';

test.describe('Figma Make RCAP Site Analysis', () => {
  test('analyze spacing issues on dashboard', async ({ page }) => {
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    // Take full page screenshot
    await page.screenshot({
      path: 'figma-analysis/dashboard-full.png',
      fullPage: true
    });

    // Analyze section spacing
    const sections = page.locator('div[class*="card"], section, [class*="section"]').all();
    console.log('Total sections found:', sections.length);

    // Get spacing between sections
    const spacingIssues = [];
    for (let i = 1; i < sections.length; i++) {
      const prevSection = sections[i - 1];
      const currentSection = sections[i];

      const prevBox = await prevSection.boundingBox();
      const currentBox = await currentSection.boundingBox();

      if (prevBox && currentBox) {
        const spacing = currentBox.y - (prevBox.y + prevBox.height);
        console.log(`Section ${i} spacing: ${spacing}px (should be 32px)`);

        if (Math.abs(spacing - 32) > 4) { // Allow 4px tolerance
          spacingIssues.push({
            section: i,
            actual: spacing,
            expected: 32,
            issue: spacing > 32 ? 'Too much space' : 'Too little space'
          });
        }
      }
    }

    console.log('Spacing issues found:', spacingIssues.length);
    spacingIssues.forEach(issue => {
      console.log(`Section ${issue.section}: ${issue.actual}px (${issue.issue})`);
    });

    // Analyze card gaps
    const cardContainers = page.locator('[class*="grid"], [class*="flex"]').all();
    console.log('Card containers found:', cardContainers.length);

    for (let i = 0; i < Math.min(cardContainers.length, 5); i++) {
      const container = cardContainers[i];
      const gap = await container.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return styles.gap || styles.gridGap || '0px';
      });
      console.log(`Container ${i + 1} gap: ${gap} (should be 16px)`);
    }

    // Check card padding
    const cards = page.locator('[class*="card"]').all();
    for (let i = 0; i < Math.min(cards.length, 3); i++) {
      const card = cards[i];
      const padding = await card.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return {
          top: styles.paddingTop,
          right: styles.paddingRight,
          bottom: styles.paddingBottom,
          left: styles.paddingLeft
        };
      });
      console.log(`Card ${i + 1} padding:`, padding, '(should be 24px all around)');
    }
  });

  test('analyze form and input validation', async ({ page }) => {
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    // Look for form inputs
    const inputs = page.locator('input, textarea, select').all();
    console.log('Form inputs found:', inputs.length);

    for (let i = 0; i < Math.min(inputs.length, 5); i++) {
      const input = inputs[i];
      const inputType = await input.getAttribute('type');
      const placeholder = await input.getAttribute('placeholder');
      const hasAutocomplete = await input.getAttribute('autocomplete');

      console.log(`Input ${i + 1}: type=${inputType}, autocomplete=${hasAutocomplete}`);

      // Check validation states
      const styles = await input.evaluate(el => {
        const computed = window.getComputedStyle(el);
        return {
          borderColor: computed.borderColor,
          outline: computed.outline,
          boxShadow: computed.boxShadow
        };
      });

      console.log(`Input ${i + 1} styles:`, styles);
    }

    // Check for validation error messages
    const errorMessages = page.locator('[class*="error"], [class*="invalid"]').all();
    console.log('Error messages found:', errorMessages.length);

    // Check for focus indicators
    await page.locator('input').first().focus();
    const focusedInput = page.locator('input:focus').first();
    const focusStyles = await focusedInput.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        outline: styles.outline,
        outlineColor: styles.outlineColor,
        boxShadow: styles.boxShadow
      };
    });
    console.log('Focus styles:', focusStyles);
  });

  test('analyze navigation and missing pages', async ({ page }) => {
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    // Check current navigation structure
    const navLinks = page.locator('a, [role="button"]').all();
    console.log('Navigation links found:', navLinks.length);

    const navTexts = [];
    for (let i = 0; i < Math.min(navLinks.length, 10); i++) {
      const text = await navLinks[i].textContent();
      navTexts.push(text);
    }
    console.log('Navigation items:', navTexts);

    // Look for bottom navigation
    const bottomNav = page.locator('[class*="bottom"], [class*="nav"]').last();
    const bottomNavExists = await bottomNav.count() > 0;
    console.log('Bottom navigation exists:', bottomNavExists);

    if (bottomNavExists) {
      const bottomNavHeight = await bottomNav.evaluate(el => el.offsetHeight);
      console.log('Bottom navigation height:', bottomNavHeight, 'px (should be 80px)');
    }

    // Check for missing role-specific dashboards
    const pageContent = await page.content();
    const hasStateDashboard = pageContent.includes('State') || pageContent.includes('state');
    const hasLGADashboard = pageContent.includes('LGA') || pageContent.includes('local');
    const hasFieldDashboard = pageContent.includes('Field') || pageContent.includes('officer');

    console.log('Role dashboards found:');
    console.log('- State Admin dashboard:', hasStateDashboard);
    console.log('- LGA Officer dashboard:', hasLGADashboard);
    console.log('- Field Officer dashboard:', hasFieldDashboard);

    // Look for Create Activity page
    const hasCreateActivity = pageContent.includes('Create') && pageContent.includes('Activity');
    console.log('Create Activity functionality found:', hasCreateActivity);

    // Look for modals
    const modals = page.locator('[class*="modal"], [class*="dialog"], [role="dialog"]').all();
    console.log('Modals found:', modals.length);
  });

  test('analyze mobile responsiveness and touch targets', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    await page.screenshot({
      path: 'figma-analysis/mobile-view.png',
      fullPage: true
    });

    // Check touch target sizes
    const touchTargets = page.locator('button, [role="button"], input, a').all();
    console.log('Touch targets found:', touchTargets.length);

    const smallTargets = [];
    for (let i = 0; i < Math.min(touchTargets.length, 10); i++) {
      const target = touchTargets[i];
      const box = await target.boundingBox();

      if (box) {
        const isTouchTarget = box.height >= 44 && box.width >= 44;
        if (!isTouchTarget) {
          smallTargets.push({
            index: i,
            width: box.width,
            height: box.height
          });
        }
      }
    }

    console.log('Touch targets too small (<44px):', smallTargets.length);
    smallTargets.forEach(target => {
      console.log(`Target ${target.index}: ${target.width}x${target.height}`);
    });
  });

  test('analyze color usage and accessibility', async ({ page }) => {
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    // Analyze color usage
    const colorAnalysis = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      const colors = new Set();
      const purpleElements = [];
      const contrastIssues = [];

      allElements.forEach(el => {
        const styles = window.getComputedStyle(el);
        const bgColor = styles.backgroundColor;
        const textColor = styles.color;

        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          colors.add(bgColor);
        }

        if (textColor && textColor !== 'rgba(0, 0, 0, 0)') {
          colors.add(textColor);
        }

        // Check for purple shades
        if (bgColor.includes('123') || bgColor.includes('44') || bgColor.includes('91') ||
            textColor.includes('123') || textColor.includes('44') || textColor.includes('91')) {
          purpleElements.push({
            tag: el.tagName,
            class: el.className,
            text: el.textContent?.substring(0, 30),
            bgColor: bgColor,
            textColor: textColor
          });
        }

        // Check for potential contrast issues
        if (bgColor.includes('255') && textColor.includes('255')) {
          contrastIssues.push({
            tag: el.tagName,
            text: el.textContent?.substring(0, 20),
            issue: 'White on white potential'
          });
        }
      });

      return {
        uniqueColors: Array.from(colors),
        purpleElements: purpleElements.slice(0, 10),
        contrastIssues: contrastIssues.slice(0, 5)
      };
    });

    console.log('Unique colors found:', colorAnalysis.uniqueColors.length);
    console.log('Purple elements found:', colorAnalysis.purpleElements.length);
    console.log('Potential contrast issues:', colorAnalysis.contrastIssues.length);

    colorAnalysis.purpleElements.forEach((el, i) => {
      console.log(`Purple element ${i + 1}: ${el.tag}.${el.class} - "${el.text}"`);
    });
  });

  test('check for missing functionality', async ({ page }) => {
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    const pageContent = await page.content();

    // Check for critical missing functionality
    const missingFeatures = [];

    // Check for offline indicators
    if (!pageContent.includes('Offline') && !pageContent.includes('Connection')) {
      missingFeatures.push('Offline status indicators');
    }

    // Check for loading states
    if (!pageContent.includes('Loading') && !pageContent.includes('skeleton')) {
      missingFeatures.push('Loading states/skeleton screens');
    }

    // Check for error states
    if (!pageContent.includes('Error') && !pageContent.includes('Something went wrong')) {
      missingFeatures.push('Error states');
    }

    // Check for empty states
    if (!pageContent.includes('No data') && !pageContent.includes('No activities')) {
      missingFeatures.push('Empty states');
    }

    // Check for search functionality
    if (!pageContent.includes('Search') && !pageContent.includes('Filter')) {
      missingFeatures.push('Search and filter functionality');
    }

    // Check for file upload
    if (!pageContent.includes('Upload') && !pageContent.includes('File')) {
      missingFeatures.push('File upload functionality');
    }

    // Check for notifications
    if (!pageContent.includes('Notification') && !pageContent.includes('Alert')) {
      missingFeatures.push('Notification system');
    }

    // Check for user profile
    if (!pageContent.includes('Profile') && !pageContent.includes('Settings')) {
      missingFeatures.push('User profile/settings');
    }

    console.log('Missing features identified:', missingFeatures.length);
    missingFeatures.forEach(feature => {
      console.log(`- ${feature}`);
    });
  });
});