import { test, expect } from '@playwright/test';

test.describe('Figma Make RCAP Site Comprehensive Analysis', () => {
  test('analyze spacing and layout issues', async ({ page }) => {
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    // Take screenshot for visual reference
    await page.screenshot({
      path: 'figma-site-screenshot.png',
      fullPage: true
    });

    // Analyze section spacing
    const sections = await page.evaluate(() => {
      const cards = document.querySelectorAll('[class*="card"], section, [class*="section"]');
      const spacingData = [];

      for (let i = 1; i < cards.length; i++) {
        const prevCard = cards[i - 1];
        const currentCard = cards[i];

        const prevBox = prevCard.getBoundingClientRect();
        const currentBox = currentCard.getBoundingClientRect();

        const spacing = currentBox.top - (prevBox.bottom);
        spacingData.push({
          index: i,
          spacing: Math.round(spacing),
          expected: 32,
          prevElement: prevCard.tagName + '.' + prevCard.className,
          currentElement: currentCard.tagName + '.' + currentCard.className
        });
      }

      return spacingData;
    });

    console.log('=== SECTION SPACING ANALYSIS ===');
    const spacingIssues = sections.filter(s => Math.abs(s.spacing - s.expected) > 4);
    console.log('Total sections analyzed:', sections.length);
    console.log('Spacing issues found:', spacingIssues.length);

    spacingIssues.forEach(issue => {
      console.log(`❌ Section ${issue.index}: ${issue.spacing}px (should be ${issue.expected}px)`);
      console.log(`   From: ${issue.prevElement}`);
      console.log(`   To: ${issue.currentElement}`);
    });

    // Analyze card gaps
    const cardGapAnalysis = await page.evaluate(() => {
      const grids = document.querySelectorAll('[class*="grid"]');
      const flexes = document.querySelectorAll('[class*="flex"]');
      const gapData = [];

      [...grids, ...flexes].forEach((container, index) => {
        const styles = window.getComputedStyle(container);
        const gap = styles.gap || styles.gridGap || '0px';
        gapData.push({
          index,
          element: container.tagName + '.' + container.className,
          gap: gap,
          expected: '16px'
        });
      });

      return gapData;
    });

    console.log('\n=== CARD GAP ANALYSIS ===');
    cardGapAnalysis.forEach(gap => {
      if (gap.gap !== '0px' && gap.gap !== gap.expected) {
        console.log(`❌ Container ${gap.index}: gap="${gap.gap}" (should be "${gap.expected}")`);
        console.log(`   Element: ${gap.element}`);
      }
    });

    // Analyze card padding
    const paddingAnalysis = await page.evaluate(() => {
      const cards = document.querySelectorAll('[class*="card"]');
      const paddingData = [];

      cards.forEach((card, index) => {
        const styles = window.getComputedStyle(card);
        paddingData.push({
          index,
          element: card.tagName + '.' + card.className,
          padding: {
            top: styles.paddingTop,
            right: styles.paddingRight,
            bottom: styles.paddingBottom,
            left: styles.paddingLeft
          },
          expected: '24px'
        });
      });

      return paddingData;
    });

    console.log('\n=== CARD PADDING ANALYSIS ===');
    paddingAnalysis.forEach(padding => {
      const hasIssue = Object.values(padding.padding).some(p => !p.includes('24px'));
      if (hasIssue) {
        console.log(`❌ Card ${padding.index}: padding=${JSON.stringify(padding.padding)} (should be 24px all around)`);
        console.log(`   Element: ${padding.element}`);
      }
    });
  });

  test('analyze missing pages and navigation', async ({ page }) => {
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    // Get current page content
    const pageContent = await page.content();

    // Check navigation structure
    const navigationAnalysis = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a, button, [role="button"]'));
      return links.map(link => ({
        text: link.textContent?.trim(),
        href: link.getAttribute('href'),
        type: link.tagName,
        className: link.className
      }));
    });

    console.log('\n=== NAVIGATION ANALYSIS ===');
    console.log('Navigation items found:', navigationAnalysis.length);
    navigationAnalysis.forEach(item => {
      console.log(`- ${item.type}: "${item.text}" (${item.className})`);
    });

    // Check for role-specific dashboards
    const roleDashboards = {
      'federal': pageContent.includes('Federal') || pageContent.includes('National'),
      'state': pageContent.includes('State') || pageContent.includes('Regional'),
      'lga': pageContent.includes('LGA') || pageContent.includes('Local'),
      'field': pageContent.includes('Field') || pageContent.includes('Officer')
    };

    console.log('\n=== ROLE DASHBOARD ANALYSIS ===');
    Object.entries(roleDashboards).forEach(([role, exists]) => {
      console.log(`${role.charAt(0).toUpperCase() + role.slice(1)} dashboard: ${exists ? '✅' : '❌ Missing'}`);
    });

    // Check for core pages
    const corePages = {
      'Login': pageContent.includes('Login') || pageContent.includes('Sign In'),
      'Dashboard': pageContent.includes('Dashboard') || pageContent.includes('Overview'),
      'Activities': pageContent.includes('Activities') || pageContent.includes('Activity List'),
      'Create Activity': pageContent.includes('Create') && pageContent.includes('Activity'),
      'Reports': pageContent.includes('Reports') || pageContent.includes('Analytics'),
      'Team': pageContent.includes('Team') || pageContent.includes('Users'),
      'Profile': pageContent.includes('Profile') || pageContent.includes('Settings')
    };

    console.log('\n=== CORE PAGES ANALYSIS ===');
    Object.entries(corePages).forEach(([page, exists]) => {
      console.log(`${page}: ${exists ? '✅' : '❌ Missing'}`);
    });
  });

  test('analyze form validation and accessibility', async ({ page }) => {
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    // Check form elements
    const formAnalysis = await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input, textarea, select'));
      return inputs.map(input => ({
        type: input.type || input.tagName.toLowerCase(),
        placeholder: input.placeholder,
        hasAutocomplete: input.hasAttribute('autocomplete'),
        autocompleteValue: input.getAttribute('autocomplete'),
        hasAriaLabel: input.hasAttribute('aria-label'),
        ariaLabelValue: input.getAttribute('aria-label'),
        hasLabel: !!document.querySelector(`label[for="${input.id}"]`) || input.hasAttribute('aria-labelledby'),
        required: input.hasAttribute('required'),
        className: input.className
      }));
    });

    console.log('\n=== FORM ANALYSIS ===');
    console.log('Form inputs found:', formAnalysis.length);

    formAnalysis.forEach((input, index) => {
      console.log(`\nInput ${index + 1}:`);
      console.log(`  Type: ${input.type}`);
      console.log(`  Autocomplete: ${input.hasAutocomplete ? input.autocompleteValue : '❌ Missing'}`);
      console.log(`  ARIA Label: ${input.hasAriaLabel ? input.ariaLabelValue : '❌ Missing'}`);
      console.log(`  Has Label: ${input.hasLabel ? '✅' : '❌ Missing'}`);
      console.log(`  Required: ${input.required ? '✅' : '❌'}`);

      if (input.type === 'password' && !input.autocompleteValue) {
        console.log(`  ⚠️  Password field missing autocomplete attribute`);
      }
    });

    // Check for validation states
    const validationAnalysis = await page.evaluate(() => {
      const errorElements = Array.from(document.querySelectorAll('[class*="error"], [class*="invalid"], [class*="validation"]'));
      const successElements = Array.from(document.querySelectorAll('[class*="success"], [class*="valid"]'));

      return {
        errorCount: errorElements.length,
        successCount: successElements.length,
        hasValidation: errorElements.length > 0 || successElements.length > 0
      };
    });

    console.log('\n=== VALIDATION ANALYSIS ===');
    console.log('Error elements found:', validationAnalysis.errorCount);
    console.log('Success elements found:', validationAnalysis.successCount);
    console.log('Validation system present:', validationAnalysis.hasValidation ? '✅' : '❌ Missing');
  });

  test('analyze color usage and design system compliance', async ({ page }) => {
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    // Analyze color usage
    const colorAnalysis = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      const colors = new Map();
      let purpleCount = 0;
      let totalElements = 0;

      allElements.forEach(el => {
        const styles = window.getComputedStyle(el);
        const bgColor = styles.backgroundColor;
        const textColor = styles.color;

        // Count total styled elements
        if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          colors.set(bgColor, (colors.get(bgColor) || 0) + 1);
          totalElements++;
        }

        if (textColor !== 'rgba(0, 0, 0, 0)') {
          colors.set(textColor, (colors.get(textColor) || 0) + 1);
        }

        // Check for purple shades (RGB values around 123, 44, 191 or variants)
        const isPurple = bgColor.includes('123') || bgColor.includes('44') || bgColor.includes('191') ||
                          bgColor.includes('91') || bgColor.includes('2CBF') ||
                          textColor.includes('123') || textColor.includes('44') || textColor.includes('191') ||
                          textColor.includes('91') || textColor.includes('2CBF');

        if (isPurple) {
          purpleCount++;
        }
      });

      return {
        uniqueColors: colors.size,
        purpleCount,
        totalElements,
        purplePercentage: totalElements > 0 ? (purpleCount / totalElements) * 100 : 0
      };
    });

    console.log('\n=== COLOR ANALYSIS ===');
    console.log('Unique colors found:', colorAnalysis.uniqueColors);
    console.log('Purple elements found:', colorAnalysis.purpleCount);
    console.log('Total styled elements:', colorAnalysis.totalElements);
    console.log('Purple usage percentage:', `${colorAnalysis.purplePercentage.toFixed(1)}%`);

    if (colorAnalysis.purplePercentage > 15) {
      console.log(`❌ Purple overused (${colorAnalysis.purplePercentage.toFixed(1)}% > 10% requirement)`);
    } else if (colorAnalysis.purplePercentage < 5) {
      console.log(`⚠️  Purple underused (${colorAnalysis.purplePercentage.toFixed(1)}% < ~10% expectation)`);
    } else {
      console.log(`✅ Purple usage appropriate (${colorAnalysis.purplePercentage.toFixed(1)}%)`);
    }

    // Check for button styling consistency
    const buttonAnalysis = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      return buttons.map(button => ({
        text: button.textContent?.trim(),
        className: button.className,
        styles: {
          backgroundColor: window.getComputedStyle(button).backgroundColor,
          color: window.getComputedStyle(button).color,
          padding: window.getComputedStyle(button).padding,
          borderRadius: window.getComputedStyle(button).borderRadius,
          height: window.getComputedStyle(button).height,
          minHeight: window.getComputedStyle(button).minHeight
        }
      }));
    });

    console.log('\n=== BUTTON ANALYSIS ===');
    console.log('Buttons found:', buttonAnalysis.length);

    buttonAnalysis.forEach((button, index) => {
      const hasCorrectHeight = button.styles.height === '48px' || button.styles.minHeight === '48px';
      console.log(`Button ${index + 1}: "${button.text}" - Height: ${button.styles.height} - ${hasCorrectHeight ? '✅' : '❌'}`);
    });
  });

  test('check for missing functionality and components', async ({ page }) => {
    await page.goto('https://modify-myrtle-94601086.figma.site/');
    await page.waitForLoadState('networkidle');

    const pageContent = await page.content();

    // Comprehensive missing functionality check
    const missingFeatures = [];

    // Core functionality checks
    const requiredFeatures = {
      'Search functionality': pageContent.includes('Search') || pageContent.includes('Filter') || pageContent.includes('search'),
      'File upload system': pageContent.includes('Upload') || pageContent.includes('File') || pageContent.includes('Choose file'),
      'Loading states': pageContent.includes('Loading') || pageContent.includes('loading') || pageContent.includes('spinner') || pageContent.includes('skeleton'),
      'Error states': pageContent.includes('Error') || pageContent.includes('error') || pageContent.includes('Something went wrong'),
      'Empty states': pageContent.includes('No data') || pageContent.includes('No activities') || pageContent.includes('No results'),
      'Offline indicators': pageContent.includes('Offline') || pageContent.includes('Connection') || pageContent.includes('Sync'),
      'Notification system': pageContent.includes('Notification') || pageContent.includes('Alert') || pageContent.includes('Toast'),
      'User profile/settings': pageContent.includes('Profile') || pageContent.includes('Settings') || pageContent.includes('Account'),
      'Help/Documentation': pageContent.includes('Help') || pageContent.includes('Documentation') || pageContent.includes('Guide'),
      'Export functionality': pageContent.includes('Export') || pageContent.includes('Download') || pageContent.includes('CSV') || pageContent.includes('PDF'),
      'Team management': pageContent.includes('Team') || pageContent.includes('Users') || pageContent.includes('Members'),
      'Activity templates': pageContent.includes('Template') || pageContent.includes('Template'),
      'Activity approval workflow': pageContent.includes('Approve') || pageContent.includes('Approval') || pageContent.includes('Pending'),
      'Status tracking': pageContent.includes('Status') || pageContent.includes('Draft') || pageContent.includes('Submitted'),
      'Data visualization': pageContent.includes('Chart') || pageContent.includes('Graph') || pageContent.includes('Progress')
    };

    console.log('\n=== MISSING FUNCTIONALITY ANALYSIS ===');
    Object.entries(requiredFeatures).forEach(([feature, exists]) => {
      if (!exists) {
        missingFeatures.push(feature);
        console.log(`❌ ${feature}`);
      } else {
        console.log(`✅ ${feature}`);
      }
    });

    // Check for modal/dialog functionality
    const modalAnalysis = await page.evaluate(() => {
      const modals = document.querySelectorAll('[class*="modal"], [class*="dialog"], [role="dialog"]');
      const overlays = document.querySelectorAll('[class*="overlay"], [class*="backdrop"]');
      return {
        modalCount: modals.length,
        overlayCount: overlays.length,
        hasModalSystem: modals.length > 0 || overlays.length > 0
      };
    });

    console.log('\n=== MODAL ANALYSIS ===');
    console.log('Modals found:', modalAnalysis.modalCount);
    console.log('Overlays found:', modalAnalysis.overlayCount);
    console.log('Modal system present:', modalAnalysis.hasModalSystem ? '✅' : '❌ Missing');

    // Generate comprehensive missing features report
    console.log('\n=== MISSING FEATURES SUMMARY ===');
    console.log(`Total missing features: ${missingFeatures.length}`);

    if (missingFeatures.length > 0) {
      console.log('\nMissing features list:');
      missingFeatures.forEach((feature, index) => {
        console.log(`${index + 1}. ${feature}`);
      });
    }
  });
});