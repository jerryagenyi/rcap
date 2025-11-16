import { test, expect } from '@playwright/test';

test.describe('RCAP UI/UX Analysis', () => {
  test('analyze login screen', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Take screenshot of login screen
    await page.screenshot({
      path: 'screenshots/login-screen.png',
      fullPage: true
    });

    // Analyze login form elements
    const loginForm = page.locator('form').first();
    const emailInput = page.locator('input[type="email"], input[placeholder*="email"], input[placeholder*="Email"]').first();
    const passwordInput = page.locator('input[type="password"], input[placeholder*="password"], input[placeholder*="Password"]').first();
    const loginButton = page.locator('button').filter({ hasText: /login|sign in/i }).first();

    // Check if elements exist
    console.log('Login form exists:', await loginForm.count() > 0);
    console.log('Email input exists:', await emailInput.count() > 0);
    console.log('Password input exists:', await passwordInput.count() > 0);
    console.log('Login button exists:', await loginButton.count() > 0);

    // Get visual properties
    if (await emailInput.count() > 0) {
      const emailBox = await emailInput.boundingBox();
      console.log('Email input size:', emailBox?.width, 'x', emailBox?.height);
    }

    if (await loginButton.count() > 0) {
      const buttonStyles = await loginButton.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          padding: styles.padding,
          borderRadius: styles.borderRadius,
          fontSize: styles.fontSize
        };
      });
      console.log('Login button styles:', buttonStyles);
    }
  });

  test('analyze dashboard after login', async ({ page }) => {
    await page.goto('/');

    // Try to find and click login button or navigate to dashboard
    try {
      const emailInput = page.locator('input[type="email"], input[placeholder*="email"]').first();
      if (await emailInput.count() > 0) {
        await emailInput.fill('test@example.com');

        const passwordInput = page.locator('input[type="password"], input[placeholder*="password"]').first();
        if (await passwordInput.count() > 0) {
          await passwordInput.fill('password123');
        }

        const loginButton = page.locator('button').filter({ hasText: /login|sign in/i }).first();
        if (await loginButton.count() > 0) {
          await loginButton.click();
          await page.waitForTimeout(2000);
        }
      }
    } catch (error) {
      console.log('Login attempt failed, continuing with current state');
    }

    // Check if dashboard is visible
    await page.waitForLoadState('networkidle');

    // Take screenshot of dashboard
    await page.screenshot({
      path: 'screenshots/dashboard.png',
      fullPage: true
    });

    // Analyze dashboard elements
    const metricCards = page.locator('[class*="metric"], [class*="card"]').all();
    console.log('Metric cards found:', await metricCards.then(cards => cards.length));

    // Check for purple usage
    const elementsWithPurple = await page.locator('*').filter(async (el) => {
      const styles = await el.evaluate((elem) => window.getComputedStyle(elem));
      const bgColor = styles.backgroundColor;
      const textColor = styles.color;
      return bgColor.includes('123') || bgColor.includes('44') || bgColor.includes('91') ||
             textColor.includes('123') || textColor.includes('44') || textColor.includes('91');
    }).count();

    console.log('Elements with purple color:', elementsWithPurple);

    // Check for mobile navigation
    const bottomNav = page.locator('[class*="bottom"], [class*="nav"]').last();
    console.log('Bottom navigation exists:', await bottomNav.count() > 0);
  });

  test('analyze mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone X dimensions
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Take mobile screenshot
    await page.screenshot({
      path: 'screenshots/mobile-login.png',
      fullPage: true
    });

    // Check touch target sizes (should be 48px minimum)
    const buttons = page.locator('button, [role="button"]').all();
    for (let i = 0; i < Math.min(buttons.length, 5); i++) {
      const button = buttons[i];
      const box = await button.boundingBox();
      if (box) {
        const isTouchTarget = box.height >= 44 && box.width >= 44;
        console.log(`Button ${i + 1} size: ${box.width}x${box.height}, Touch target: ${isTouchTarget}`);
      }
    }

    // Check for bottom navigation on mobile
    const bottomNav = page.locator('[class*="bottom"], [class*="nav"]').last();
    const bottomNavBox = await bottomNav.boundingBox();
    if (bottomNavBox) {
      console.log('Bottom nav height:', bottomNavBox.height, 'pixels (should be ~80px)');
    }
  });

  test('analyze color scheme and design system', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Analyze color usage
    const colorAnalysis = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      const colors = new Set();
      const purpleElements = [];

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

        // Check for purple shades (RGB values around 123, 44, 191)
        if (bgColor.includes('123') && bgColor.includes('44') && bgColor.includes('191') ||
            textColor.includes('123') && textColor.includes('44') && textColor.includes('191')) {
          purpleElements.push({
            tag: el.tagName,
            class: el.className,
            text: el.textContent?.substring(0, 50),
            bgColor: bgColor,
            textColor: textColor
          });
        }
      });

      return {
        uniqueColors: Array.from(colors),
        purpleElements: purpleElements.slice(0, 10) // Limit to first 10
      };
    });

    console.log('Unique colors found:', colorAnalysis.uniqueColors.length);
    console.log('Purple elements found:', colorAnalysis.purpleElements.length);
    colorAnalysis.purpleElements.forEach((el, i) => {
      console.log(`Purple element ${i + 1}: ${el.tag}.${el.class} - "${el.text}"`);
    });
  });

  test('analyze accessibility and typography', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check for proper heading structure
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    console.log('Headings found:', headings.length);

    for (let i = 0; i < Math.min(headings.length, 5); i++) {
      const heading = headings[i];
      const tagName = await heading.evaluate(el => el.tagName);
      const text = await heading.textContent();
      console.log(`${tagName}: ${text?.substring(0, 50)}`);
    }

    // Check contrast ratios (simplified)
    const contrastIssues = await page.evaluate(() => {
      const issues = [];
      const elements = document.querySelectorAll('button, a, [role="button"]');

      elements.forEach(el => {
        const styles = window.getComputedStyle(el);
        const bgColor = styles.backgroundColor;
        const textColor = styles.color;

        // Simple check for low contrast (very basic)
        if (bgColor.includes('255') && textColor.includes('255')) {
          issues.push({
            tag: el.tagName,
            text: el.textContent?.substring(0, 30),
            issue: 'White on white potential'
          });
        }
      });

      return issues;
    });

    console.log('Potential contrast issues:', contrastIssues.length);
    contrastIssues.forEach((issue, i) => {
      console.log(`Issue ${i + 1}: ${issue.tag} - "${issue.text}" - ${issue.issue}`);
    });
  });
});