// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/advanced-image/";

test("Advanced image link should work.", async ({ page }) => {
  // Navigate to the section
  await page.goto(slug);
  await page.getByText("Advanced Image 231217").scrollIntoViewIfNeeded();

  // click on the image
  await page.locator(".eb-advanced-image-egiozkw > .image-wrapper > .eb-advimg-link").click();

  await expect(page).toHaveURL(/clicked/);
  await expect(page.getByText("page loaded successfully!")).toBeVisible();
});

test("Advanced image caption should be present.", async ({ page }) => {
  // Navigate to the section
  await page.goto(slug);
  await page.getByText("Advanced Image 231217").scrollIntoViewIfNeeded();

  await expect(page.getByText("Hard Work 231217")).toBeVisible();
});

