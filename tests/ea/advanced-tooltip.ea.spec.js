// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/advanced-tooltip";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test advanced tooltip.", () => {
  let section_top_heading = "Advanced Tooltip Heading240611";

  test("Advanced tooltip should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.getByRole("tooltip", { name: "Tooltip Content240611" })).not.toBeVisible();
    await expect(page.getByText("Tooltip Content240611")).not.toBeVisible();

    await page.getByText("Pro240611 Product One").hover();
    await page.waitForTimeout(300);

    await expect(page.getByRole("tooltip", { name: "Tooltip Content240611" })).toBeVisible();
    await expect(page.getByText("Tooltip Content240611")).toBeVisible();

    await page.getByText(section_top_heading).click();
    await page.waitForTimeout(300);
    await expect(page.getByRole("tooltip", { name: "Tooltip Content240611" })).not.toBeVisible();
    await expect(page.getByText("Tooltip Content240611")).not.toBeVisible();
  });

  // TODO:
//   test("Verify advacned tooltip style.", async ({ page }) => {
//     //
//   });
});
