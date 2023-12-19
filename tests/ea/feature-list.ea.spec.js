// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/feature-list";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test feature list.", () => {
  let section_top_heading = "Feature List Heading 231219";

  test("Feature list contents should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all Titles should be visible
    await expect(page.locator("li").filter({ hasText: "Feature Item One Feature" }).locator("i")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Feature Item One" })).toBeVisible();
    await expect(page.getByText("Feature Content One")).toBeVisible();

    await expect(page.locator("li").filter({ hasText: "Feature Item Two Feature" }).locator("i")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Feature Item Two" })).toBeVisible();
    await expect(page.getByText("Feature Content Two")).toBeVisible();
    
    await expect(page.locator("li").filter({ hasText: "Feature Item Three Feature" }).locator("i")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Feature Item Three" })).toBeVisible();
    await expect(page.getByText("Feature Content Three")).toBeVisible();
  });
});
