// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/info-box";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test info box.", () => {
  let section_top_heading = "Infobox Heading 231219";

  test("Info box should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check contents
    await expect(page.locator("div:nth-child(2) > .elementor-widget-container")).toBeVisible();
    await expect(page.locator(".infobox-icon-wrap")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Infobox 231219" })).toBeVisible();
    await expect(page.getByText("Infobox description 231219")).toBeVisible();
    await expect(page.getByRole("link", { name: "Click 231219" })).toBeVisible();

    // click on the link
    await page.getByRole("link", { name: "Click 231219" }).click();
    await expect(page.getByText("page loaded successfully!")).toBeVisible();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();
  });
});
