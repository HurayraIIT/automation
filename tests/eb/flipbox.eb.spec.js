// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/flipbox";

test("Flipbox should load and flip.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Flipbox Heading 231217").scrollIntoViewIfNeeded();

  // Flipbox Front contents should be clickable
  await page.getByText("Flipbox Front 231217").click();
  await page.getByText("Flipbox Heading 231217").click();
  await page.getByText("Front Content 231217").click();
  await page.getByText("Flipbox Heading 231217").click();

  // Flipbox back contents should be clickable
  await page.getByText("Back Title 231217").click();
  await page.getByText("Back Content 231217").click();
  await expect(page.getByText("Click 231217")).toBeInViewport();

  // click
  await page.getByText("Click 231217").click();

  await expect(page).toHaveURL(/clicked/);
  await expect(page.getByText("page loaded successfully!")).toBeVisible();
});
