// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/advanced-video/";

test("Advanced video should load properly.", async ({ page }) => {
  // Navigate to the section
  await page.goto(slug);
  await page.getByText("Advanced Video 231217").scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);

  // section heading
  await expect(page.getByText("Advanced Video 231217")).toBeVisible();

  // video modal should not be visible initially
  await expect(page.locator("#eb-modal-eb-advanced-video-ovtf6wx")).not.toBeVisible();

  // click on the video
  await page.locator(".eb-advanced-video-ovtf6wx").click();
  await page.waitForTimeout(500);

  // the video modal should be visible
  await expect(page.locator("#eb-modal-eb-advanced-video-ovtf6wx")).toBeVisible();
});
