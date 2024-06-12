// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/wrapper";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test wrapper.", () => {
  let section_top_heading = "Wrapper Heading240612";

  test("All sections should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.getByRole("heading", { name: "Amazing Wrapper240612" })).toBeVisible();
    await expect(page.getByText("A very detailed wrapper240612")).toBeVisible();
    await expect(page.getByText("Save240612 20%")).toBeVisible();
    await expect(page.getByText("Free shipping240612 on all")).toBeVisible();

    // All 3 wrappers should be present
    await expect(page.locator(".eb-wrapper-2u4zf")).toBeVisible();
    await expect(page.locator(".eb-wrapper-2u4zf > .eb-shape-divider-top")).toBeVisible();
    await expect(page.locator(".eb-wrapper-2u4zf > .eb-shape-divider-top")).toBeVisible();

    await expect(page.locator(".eb-wrapper-eyqk4")).toBeVisible();
    await expect(page.locator(".eb-wrapper-5cek6")).toBeVisible();
  });
});
