// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/eb-openverse";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test openverse.", () => {
  let section_top_heading = "Openverse Test240612";

  test("All sections should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.locator(".eb-openverse-u1soy")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Openverse Test240612" })).toBeVisible();
    await expect(page.getByRole("img", { name: "Monterey Ocean" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Monterey Ocean" })).toBeVisible();
    await expect(page.getByRole("link", { name: "schlissm" })).toBeVisible();
    await expect(page.getByText("Is licensed under by-nc 2.0")).toBeVisible();
    await expect(page.getByRole("link", { name: "by-nc" })).toBeVisible();
    await expect(page.getByText("Monterey Ocean By schlissm Is")).toBeVisible();
  });
});
