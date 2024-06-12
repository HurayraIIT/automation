// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/eb-advanced-search";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test advanced search.", () => {
  let section_top_heading = "Advanced Search240612";

  test("All sections should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.getByRole('heading', { name: 'Advanced Search240612' })).toBeVisible();
    await expect(page.locator('.eb-wrapper-outer')).toBeVisible();
    await expect(page.getByPlaceholder("Search ....240612")).toBeVisible();
    await expect(page.getByText('All Tags240612Even-240612Odd-240612 Search')).toBeVisible();
    await expect(page.getByRole('combobox')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Popular Keywords240612' })).toBeVisible();
    await expect(page.getByRole('link', { name: '240612' })).toBeVisible();
  });
});
