// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/dual-button";

test("Dual Button click should work.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Dual Button 1st Preset 231217").scrollIntoViewIfNeeded();

  // click on the first button and validate navigation
  await page.getByText("First 231217").click();
  await expect(page).toHaveURL(/clicked/);
  await expect(page.getByText("page loaded successfully!")).toBeVisible();

  // Back to the page
  await page.goto(slug);
  await page.getByText("Dual Button 1st Preset 231217").scrollIntoViewIfNeeded();

  // click on the second button and validate navigation
  await page.getByText("Second 231217").click();
  await expect(page).toHaveURL(/clicked/);
  await expect(page.getByText("page loaded successfully!")).toBeVisible();
});

