// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/sticky-video";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test sticky video.", () => {
  let section_top_heading = "Sticky Video Heading 231220";
  let section_bottom_heading = "Bottom Line 231220";
  let section_mid_heading = "This is an icon box";

  test("The video should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // On top, Video iframe should load
    await expect(page.locator(".eaelsv-overlay")).toBeVisible();
    await expect(page.locator("i").first()).toBeVisible();

    // Scroll to bottom
    await page.getByRole("heading", { name: section_mid_heading }).scrollIntoViewIfNeeded();
    await page.getByRole("heading", { name: section_bottom_heading }).scrollIntoViewIfNeeded();

    // On bottom, sticky video should not be visible
    await expect(
      page
        .frameLocator(
          'iframe[title="Player for Essential Addons for Elementor\\: Most Popular Addons \\& Widgets for Elementor"]'
        )
        .locator("video")
    ).not.toBeInViewport();
    await expect(page.locator(".eaelsv-sticky-player-close")).not.toBeInViewport();
    await expect(page.locator("#videobox i")).not.toBeInViewport();
  });

  test("Video play/pause should toggle the sticky video.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Play the video
    await page.locator(".eaelsv-overlay").click();
    await page.waitForTimeout(2000);

    // Scroll to the bottom
    await page.getByRole("heading", { name: section_mid_heading }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.getByRole("heading", { name: section_bottom_heading }).scrollIntoViewIfNeeded();

    // Sticky Video should be visible
    await expect(
      page
        .frameLocator(
          'iframe[title="Player for Essential Addons for Elementor\\: Most Popular Addons \\& Widgets for Elementor"]'
        )
        .locator("video")
    ).not.toBeInViewport();
    await expect(page.locator(".eaelsv-sticky-player-close")).toBeInViewport();
    await expect(page.locator("#videobox i")).toBeInViewport();

    // Scroll to the top
    await page.getByRole("heading", { name: section_mid_heading }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();

    // Pause the video
    await page.waitForTimeout(500);
    await page.getByRole("button", { name: "Pause" }).click();

    // Scroll to the bottom
    await page.getByRole("heading", { name: section_mid_heading }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.getByRole("heading", { name: section_bottom_heading }).scrollIntoViewIfNeeded();

    // Sticky video should disappear
    await expect(
      page
        .frameLocator(
          'iframe[title="Player for Essential Addons for Elementor\\: Most Popular Addons \\& Widgets for Elementor"]'
        )
        .locator("video")
    ).not.toBeInViewport();
    await expect(page.locator(".eaelsv-sticky-player-close")).not.toBeInViewport();
    await expect(page.locator("#videobox i")).not.toBeInViewport();
  });
});
