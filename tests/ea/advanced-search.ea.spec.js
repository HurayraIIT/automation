// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/advanced-search";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test advanced search.", () => {
  let section_top_heading = "Advanced Search Heading 231220";

  test("Advanced search should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The items should be visible
    await expect(page.getByPlaceholder("Type Search Keyword")).toBeVisible();
    await expect(page.getByRole("combobox")).toBeVisible();
    await expect(page.getByRole("button", { name: "Search" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Popular Search Keys" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Post231220unique" })).toBeVisible();
  });

    test("Click on popular search keyword should generate a search.", async ({ page }) => {
      await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);

      // click on the popular search keyword
      await page.getByRole("link", { name: "Post231220unique" }).click();

      // The close icon should be visible
      await expect(page.locator('#eael-advanced-search-widget-2712c9e span').nth(1)).toBeVisible();

      // The popular search section should be visible
      await expect(page.getByRole('heading', { name: 'Popular Search Keys' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Post231220unique', exact: true })).toBeVisible();

      // The result should be visible
      await expect(page.getByText('Total 1 Results')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Post231220Unique Post231220' })).toBeVisible();
      await expect(page.locator('#eael-advanced-search-widget-2712c9e span').nth(1)).toBeVisible();

      // click on the result
      await page.getByRole('link', { name: 'Post231220Unique Post231220' }).click();
      await expect(page.getByText('Post231220 Unique content')).toBeVisible();
      await expect(page.getByText('By hurayra / December 20,')).toBeVisible();
    });
});
