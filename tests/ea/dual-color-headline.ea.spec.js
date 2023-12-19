// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/dual-color-headline";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test dual color headline.", () => {
  let section_top_heading = "Dual Color Headline Heading 231219";

  test("Dual Color Headline should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.getByText('First Color Second Color This')).toBeVisible();
    await expect(page.locator('i')).toBeVisible();
    await expect(page.getByText('First Color')).toBeVisible();
    await expect(page.getByText('Second Color')).toBeVisible();
    await expect(page.getByText('This is a sub text')).toBeVisible();
  });
});
