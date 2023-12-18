// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/toggle-content";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("First Toggle Content", () => {
    let section_heading = "Toggle Content Heading 231218";

    let toggle_class = ".eb-toggle-20e5ite";

    let first_button = "First 231218";
    let second_button = "Second 231218";
    let first_content = "First Content 231218";
    let second_content = "Second Content 231218";

    test("Toggle Content should load.", async ({ page }) => {
      await page.getByText(section_heading).scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);

      // Only the first content should be visible
      await expect(page.getByRole("heading", { name: first_content })).toBeInViewport();
      await expect(page.getByRole("heading", { name: second_content })).not.toBeInViewport();

      // click on the toggle
      await page.getByText('Second').first().click();
      await page.waitForTimeout(200);

      // Only the second content should be visible
      await expect(page.getByRole("heading", { name: first_content })).not.toBeInViewport();
      await expect(page.getByRole("heading", { name: second_content })).toBeInViewport();
    });
});
