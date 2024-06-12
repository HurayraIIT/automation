// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/testimonial";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test testimonial.", () => {
  let section_top_heading = "Testimonial Test240612";

  test("All sections should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.locator('[data-id="eb-testimonial-ruia1"]')).toBeVisible();
    await expect(page.locator('.eb-avatar-container')).toBeVisible();
    await expect(page.locator('.image-container')).toBeVisible();
    await expect(page.locator('.eb-avatar-style')).toBeVisible();
    await expect(page.locator('#content path')).toBeVisible();
    await expect(page.locator('[class="eb-testimonial-rating rating-3"]')).toBeVisible();
    await expect(page.getByText('Definitely not the best240612')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^Definitely not the best240612!!$/ })).toBeVisible();
    await expect(page.getByText('John Doe240612')).toBeVisible();
    await expect(page.getByText('Company Name240612')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^Definitely not the best240612!!John Doe240612Company Name240612$/ }).nth(2)).toBeVisible();
  });
});
