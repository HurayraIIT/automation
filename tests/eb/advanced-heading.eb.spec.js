// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/advanced-heading";

test("Advanced heading preset 3 should load properly.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Product Development 231217").scrollIntoViewIfNeeded();

  // section heading
  await expect(page.getByText("Advanced Heading Preset 3")).toBeVisible();

  // all text contents should be visible
  await expect(page.getByText("Product Development 231217")).toBeVisible();
  await expect(page.getByText("Going Beyond The 231217")).toBeVisible();
  await expect(page.locator(".eb-advance-heading-de0pwdd > .eb-ah-separator > .fa-address-book")).toBeVisible();
});

