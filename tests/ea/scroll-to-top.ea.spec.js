// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/scroll-to-top";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test Scroll To Top Feature", () => {
  let section_top_heading = "Top Heading 231218";
  let section_bottom_heading = "Bottom Heading 231218";

  test("Scroll to top should work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // verify page is at top
    await expect(page.getByText(section_top_heading)).toBeInViewport();
    await expect(page.getByText(section_bottom_heading)).not.toBeInViewport();

    // go to bottom
    await page.getByText(section_bottom_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // verify page is at bottom
    await expect(page.getByText(section_top_heading)).not.toBeInViewport();
    await expect(page.getByText(section_bottom_heading)).toBeInViewport();

    // Scroll to top
    await page.locator('.eael-ext-scroll-to-top-button').click();

    // verify page is at top
    await expect(page.getByText(section_top_heading)).toBeInViewport();
    await expect(page.getByText(section_bottom_heading)).not.toBeInViewport();
  });
});