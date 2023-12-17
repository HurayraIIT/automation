// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/button";

test("Button click should work.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Essential Blocks Button 231217").scrollIntoViewIfNeeded();

  // click on the button and validate navigation
  await page.getByText("click 231217!").click();
  await expect(page).toHaveURL(/clicked/);
  await expect(page.getByText("page loaded successfully!")).toBeVisible();
});

