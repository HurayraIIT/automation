// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/creative-buttons";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test creative button", () => {
  let section_top_heading = "Creative Buttons Heading 231219";

  test("Creative button should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check contents
    await expect(page.getByRole('heading', { name: 'Creative Buttons Heading' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Click 231219' })).toBeVisible();

    // Test button click
    await page.getByRole('link', { name: 'Click 231219' }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText('page loaded successfully!')).toBeVisible();
  });
});
