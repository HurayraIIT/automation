// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/tooltip";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test tooltip.", () => {
  let section_top_heading = "Tooltip Heading 231219";

  test("Tooltip should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.locator("div:nth-child(2) > .elementor-widget-container")).toBeVisible();
    await expect(page.getByRole("link", { name: "one" })).toBeVisible();
    await expect(page.getByRole("tooltip", { name: "I am the tooltip one." })).not.toBeVisible();
    await expect(page.getByText("I am the tooltip one.")).not.toBeVisible();

    await page.getByRole("link", { name: "one" }).hover();
    await page.waitForTimeout(300);
    await expect(page.getByRole("tooltip", { name: "I am the tooltip one." })).toBeVisible();
    await expect(page.getByText("I am the tooltip one.")).toBeVisible();

    await page.getByText(section_top_heading).click();
    await page.waitForTimeout(300);
    await expect(page.getByRole("tooltip", { name: "I am the tooltip one." })).not.toBeVisible();
    await expect(page.getByText("I am the tooltip one.")).not.toBeVisible();
  });

  test("Link should properly redirect.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // click and verify
    await page.getByRole("link", { name: "one" }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();
  });
});
