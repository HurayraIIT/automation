// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/content-ticker";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test content ticker.", () => {
  let section_top_heading = "Content Ticker Heading 231220";

  test("Content ticker should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The items should be visible
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: section_top_heading })).toBeVisible();
    await expect(page.getByText('Trending Today231220')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Post One 231219' })).toBeVisible();
    await expect(page.getByLabel('Next slide')).toBeVisible();

    // all slides should be visible
    await page.getByLabel('Next slide').click();
    await page.waitForTimeout(100);
    await expect(page.getByRole('link', { name: 'Post Two 231219' })).toBeVisible();
    await page.getByLabel('Next slide').click();
    await page.waitForTimeout(100);
    await expect(page.getByRole('link', { name: 'Post Three 231219' })).toBeVisible();
    await page.getByLabel('Next slide').click();
    await page.waitForTimeout(100);
    await expect(page.getByRole('link', { name: 'Post Four 231219' })).toBeVisible();
    await page.getByLabel('Previous slide').click();
    await page.waitForTimeout(100);
    await expect(page.getByRole('link', { name: 'Post Three 231219' })).toBeVisible();
    await page.getByLabel('Previous slide').click();
    await page.waitForTimeout(100);
    await expect(page.getByRole('link', { name: 'Post Two 231219' })).toBeVisible();
    await page.getByLabel('Previous slide').click();
    await page.waitForTimeout(100);
    await expect(page.getByRole('link', { name: 'Post One 231219' })).toBeVisible();
  });
});
