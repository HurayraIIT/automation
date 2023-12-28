// @ts-check
import { test, expect } from "@playwright/test";

let URL = process.env.STORESEO_URL + "";
let PASSWORD = process.env.STORESEO_PASSWORD + "";

let CLICKED_URL = URL + "/pages/clicked231228";
let SITEMAP_URL = URL + "/a/sitemap";

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");

  expect(page.url()).toContain("password");

  await expect(page.getByText("Enter store password")).toBeVisible();
  await page.getByLabel("Enter store password").click();
  await page.getByLabel("Enter store password").fill(PASSWORD);
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "Enter" }).click();

  await expect(page.getByRole("heading", { name: "hurayra-automation-donotdelete" }).getByRole("link")).toBeVisible();
});

test.describe("Test page loads.", () => {
  test("The site should properly load.", async ({ page }) => {
    await page.goto(CLICKED_URL);
    await page.waitForTimeout(200);
    await expect(page.getByRole('heading', { name: 'Clicked231228' })).toBeVisible();
    await expect(page.getByText('success231228')).toBeVisible();
  });
});

test.describe("Test sitemap page loads.", () => {
  test("The sitemap page should properly load.", async ({ page }) => {
    await page.goto(SITEMAP_URL);
    await page.waitForTimeout(200);

    await expect(page.getByRole('heading', { name: 'Sitemap231228' })).toBeVisible();
    await expect(page.getByText('Review Our sitemap for a list')).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pages' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Blogs' })).toBeVisible();
    
    await expect(page.getByRole('link', { name: 'View more' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'View more' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'View more' }).nth(2)).toBeVisible();
  });
});
