// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/notice";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test notice.", () => {
  let section_top_heading = "Notice Test240612";

  test("All notices should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.getByRole("heading", { name: "Default Notice240612" })).toBeVisible();
    await expect(page.getByText("Default240612 20%Default240612 shipping on all orders")).toBeVisible();
    await expect(page.getByText("Default240612 20%")).toBeVisible();
    await expect(page.getByText("Default240612 shipping on all")).toBeVisible();
    await expect(page.locator(".eb-notice-dismiss").first()).toBeVisible();

    await expect(page.getByRole("heading", { name: "Success Notice240612" })).toBeVisible();
    await expect(page.getByText("Success240612 20%Success240612 shipping on all orders")).toBeVisible();
    await expect(page.getByText("Success240612 20%")).toBeVisible();
    await expect(page.getByText("Success240612 shipping on all")).toBeVisible();
    await expect(
      page.locator(
        "div:nth-child(3) > div > .eb-wrapper-outer > .eb-wrapper-inner > .eb-wrapper-inner-blocks > .wp-block-essential-blocks-notice > .eb-parent-wrapper > .eb-notice-wrapper > .eb-notice-dismiss"
      )
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Info Notice240612" })).toBeVisible();
    await expect(page.getByText("Info240612 20%Info240612")).toBeVisible();
    await expect(page.getByText("Info240612 20%")).toBeVisible();
    await expect(page.getByText("Info240612 shipping on all")).toBeVisible();
    await expect(
      page.locator(
        "div:nth-child(4) > div > .eb-wrapper-outer > .eb-wrapper-inner > .eb-wrapper-inner-blocks > .wp-block-essential-blocks-notice > .eb-parent-wrapper > .eb-notice-wrapper > .eb-notice-dismiss"
      )
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Warning Notice240612" })).toBeVisible();
    await expect(page.getByText("Warning240612 20%Warning240612 shipping on all orders")).toBeVisible();
    await expect(page.getByText("Warning240612 20%")).toBeVisible();
    await expect(page.getByText("Warning240612 shipping on all")).toBeVisible();
    await expect(
      page.locator(
        "div:nth-child(5) > div > .eb-wrapper-outer > .eb-wrapper-inner > .eb-wrapper-inner-blocks > .wp-block-essential-blocks-notice > .eb-parent-wrapper > .eb-notice-wrapper > .eb-notice-dismiss"
      )
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Danger Notice240612" })).toBeVisible();
    await expect(page.getByText("Danger240612 20%Danger240612")).toBeVisible();
    await expect(page.getByText("Danger240612 20%")).toBeVisible();
    await expect(page.getByText("Danger240612 shipping on all")).toBeVisible();
    await expect(
      page.locator(
        "div:nth-child(6) > div > .eb-wrapper-outer > .eb-wrapper-inner > .eb-wrapper-inner-blocks > .wp-block-essential-blocks-notice > .eb-parent-wrapper > .eb-notice-wrapper > .eb-notice-dismiss"
      )
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Show After Dismiss" })).toBeVisible();
    await expect(page.getByText("Show240612 20%Show240612")).toBeVisible();
    await expect(page.getByText("Show240612 20%")).toBeVisible();
    await expect(page.getByText("Show240612 shipping on all")).toBeVisible();
    await expect(
      page.locator(
        "div:nth-child(7) > div > .eb-wrapper-outer > .eb-wrapper-inner > .eb-wrapper-inner-blocks > .wp-block-essential-blocks-notice > .eb-parent-wrapper > .eb-notice-wrapper > .eb-notice-dismiss"
      )
    ).toBeVisible();
  });

  test("Notices should be dismissible.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.getByRole('heading', { name: 'Default Notice240612' })).toBeVisible();
    await expect(page.getByText('Default240612 20%Default240612 shipping on all orders')).toBeVisible();
    await expect(page.getByText('Default240612 20%')).toBeVisible();
    await expect(page.getByText('Default240612 shipping on all')).toBeVisible();

    // Dismiss
    await page.locator('.eb-notice-dismiss').first().click();
    await page.waitForTimeout(200);

    // Content should not be visible now
    await expect(page.getByText("Default240612 20%Default240612 shipping on all orders")).not.toBeVisible();
    await expect(page.getByText("Default240612 20%")).not.toBeVisible();
    await expect(page.getByText("Default240612 shipping on all")).not.toBeVisible();
  });

  test("Show after dismiss notices should show after dismiss.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Dismiss all notices
    await expect(page.getByText('Default240612 20%')).toBeVisible();
    await page.locator('.eb-notice-dismiss').first().click();
    await expect(page.getByText("Default240612 20%")).not.toBeVisible();

    await expect(page.getByText('Success240612 20%')).toBeVisible();
    await page.locator('#content span').first().click();
    await expect(page.getByText("Success240612 20%")).not.toBeVisible();

    await expect(page.getByText('Info240612 20%')).toBeVisible();
    await page.locator('#content span').first().click();
    await expect(page.getByText("Info240612 20%")).not.toBeVisible();

    await expect(page.getByText('Warning240612 20%')).toBeVisible();
    await page.locator('#content span').first().click();
    await expect(page.getByText("Warning240612 20%")).not.toBeVisible();

    await expect(page.getByText('Danger240612 20%')).toBeVisible();
    await page.locator('#content span').first().click();
    await expect(page.getByText("Danger240612 20%")).not.toBeVisible();

    await expect(page.getByText('Show240612 20%')).toBeVisible();
    await page.locator('#content span').click();
    await expect(page.getByText("Show240612 20%")).not.toBeVisible();

    // Reload the page
    await page.reload();

    // Only the last one should be visible
    await expect(page.getByText("Default240612 20%")).not.toBeVisible();
    await expect(page.getByText("Success240612 20%")).not.toBeVisible();
    await expect(page.getByText("Info240612 20%")).not.toBeVisible();
    await expect(page.getByText("Warning240612 20%")).not.toBeVisible();
    await expect(page.getByText("Danger240612 20%")).not.toBeVisible();
    await expect(page.getByText("Show240612 20%")).toBeVisible();
  });
});
