// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/content-toggle";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test content toggle.", () => {
  let section_top_heading = "Content Toggle Heading 231219";

  test("Content toggle should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The items should be visible, one should be visible, two hidden
    await expect(page.getByText("Primary")).toBeVisible();
    await expect(page.getByText("Secondary")).toBeVisible();
    await expect(page.locator("#eael-toggle-container-4b27db7 span")).toBeVisible();
    await expect(page.getByRole("img", { name: "one" })).toBeVisible();
    await expect(page.getByRole("img", { name: "two" })).not.toBeVisible();

    // Perform toggle action, two should become visible and one should be hidden
    await page.locator("#eael-toggle-container-4b27db7 span").click();
    await expect(page.getByRole("img", { name: "two" })).toBeVisible();
    await expect(page.getByRole("img", { name: "one" })).not.toBeVisible();

    // toggle again / reset toggle
    await page.locator("#eael-toggle-container-4b27db7 span").click();
    await expect(page.getByRole("img", { name: "one" })).toBeVisible();
    await expect(page.getByRole("img", { name: "two" })).not.toBeVisible();
  });
});
