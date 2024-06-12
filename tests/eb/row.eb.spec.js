// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/row";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test row.", () => {
  let section_top_heading = "Row Test240612";

  test("The row should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.locator(".eb-row-6c08d")).toBeVisible();
    await expect(page.locator(".eb-row-6c08d > .eb-row-wrapper > .eb-row-inner")).toBeVisible();

    await expect(page.locator('.eb-wrapper-outer')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Row Left240612' })).toBeVisible();
    await expect(page.getByText('Content Left240612')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Row Heading Right240612' })).toBeVisible();
  });
});
