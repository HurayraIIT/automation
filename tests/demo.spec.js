import { test } from '@playwright/test';

test('Page Screenshot', async ({ page }) => {
  await page.goto('https://app.smevai.com/');
  await page.screenshot({ path: `example.png` });
});