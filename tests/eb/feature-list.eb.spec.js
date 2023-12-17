// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/feature-list";

test("Feature list should load with all sections.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Feature List Heading 231217").scrollIntoViewIfNeeded();

  // feature title text contents
  await expect(page.getByText("First Feature 231217")).toBeVisible();
  await expect(page.getByText("Second Item Link 231217")).toBeVisible();
  await expect(page.getByText("Feature Item Third 231217")).toBeVisible();

  // feature details text contents
  await expect(page.getByText("Lorem First ipsum dolor sit amet feature list 231217")).toBeVisible();
  await expect(page.getByText("Second Feature Lore dolor sit amet, adipisi 231217")).toBeVisible();
  await expect(page.getByText("Lorem ipsum dolor sit amet, consectetur 231217 third")).toBeVisible();
});

test("Second feature title should be clickable.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Feature List Heading 231217").scrollIntoViewIfNeeded();

  // click on the second feature title and validate navigation
  await page.getByText("Second Item Link 231217").click();
  await expect(page).toHaveURL(/clicked/);
  await expect(page.getByText("page loaded successfully!")).toBeVisible();
});
