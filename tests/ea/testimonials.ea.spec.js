// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/testimonials";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test testimonials.", () => {
  let section_top_heading = "Testimonials Heading 231219";

  test("Testimonial section should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.getByRole('heading', { name: 'Testimonials Heading 231219' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'study' })).toBeVisible();
    await expect(page.locator('#eael-testimonial-7e6253a span')).toBeVisible();
    await expect(page.getByText('Testimonial Description 231219')).toBeVisible();
    await expect(page.locator('#eael-testimonial-7e6253a').getByRole('list')).toBeVisible();
    await expect(page.getByText('User 231219')).toBeVisible();
    await expect(page.getByText('Company 231219')).toBeVisible();
    await expect(page.getByRole('figure')).toBeVisible();
  });
});
