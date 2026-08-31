import { expect, test } from '@playwright/test';

test('@ac:WRK-BLUE:AC-001 @ac:WRK-BLUE:AC-002 renders the primary background as #2563EB', async ({ page }) => {
  await page.goto('/');

  const backgroundColor = await page.locator('.app-frame').evaluate(
    element => getComputedStyle(element).backgroundColor
  );

  expect(backgroundColor).toBe('rgb(37, 99, 235)');
});