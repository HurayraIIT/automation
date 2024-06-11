// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/woo-product-list";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test("All products should load.", async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Woo Product list 240611 - Preset' })).toBeVisible();

  await expect(page.getByText('Sale240611 Add to cart Rated').first()).toBeVisible();
  await expect(page.getByText('Sale240611 Add to cart Rated').nth(1)).toBeVisible();
  await expect(page.getByText('Sale240611 Add to cart Rated').nth(2)).toBeVisible();

  await expect(page.getByRole('link', { name: 'Pro240611 Product One', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Pro240611 Product Two', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Pro240611 Product Three', exact: true })).toBeVisible();

  await expect(page.getByText('woo-product-list-').first()).toBeVisible();
  await expect(page.getByText('woo-product-list-').nth(1)).toBeVisible();
  await expect(page.getByText('woo-product-list-').nth(2)).toBeVisible();

  await expect(page.getByRole('img', { name: 'one' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'two' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'three' })).toBeVisible();
});

test("All sections of product one should load.", async ({ page }) => {
  await expect(page.getByText("Sale240611 Add to cart Rated").first()).toBeVisible();
  await expect(page.getByText("Sale240611").first()).toBeVisible();
  await expect(page.getByRole("img", { name: "one" })).toBeVisible();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^Rated 0 out of 5$/ })
      .first()
  ).toBeVisible();
  await expect(page.getByText("woo-product-list-").first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Pro240611 Product One", exact: true })).toBeVisible();
  await expect(page.getByText("This is the product one240611")).toBeVisible();
  await expect(page.getByText("111.00৳", { exact: true })).toBeVisible();
  await expect(page.getByText("123.00৳", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Add to cart: “Pro240611 Product One”" })).toBeVisible();
  await expect(page.locator("p").filter({ hasText: "240611View Product" }).first()).toBeVisible();
  await expect(page.getByText("Add to cart 240611View Product").first()).toBeVisible();

  await page.getByRole("img", { name: "one" }).hover();
  await expect(page.locator("#content").getByRole("list").getByLabel("Add to cart: “Pro240611")).toBeVisible();
  await expect(page.locator('[data-quickview-setting=\'{"widget_id":"bad8261","product_id":921,"page_id":919}\'] > i')).toBeVisible();
  await expect(page.getByRole("link", { name: "" })).toBeVisible();
  await page.locator('[data-quickview-setting=\'{"widget_id":"bad8261","product_id":921,"page_id":919}\'] > i').click();

  await expect(page.locator("div").filter({ hasText: "Sale! Pro240611 Product" }).nth(2)).toBeVisible();
  await expect(page.locator("#product-").getByRole("heading", { name: "Pro240611 Product One" })).toBeVisible();
  await expect(page.locator("#product-").getByText("123.00৳", { exact: true })).toBeVisible();
  await expect(page.locator("#product-").getByText("111.00৳", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "🔍" })).toBeVisible();
  await expect(page.getByText("Sale!")).toBeVisible();
  await expect(page.getByText("SKU: skone240611")).toBeVisible();
  await expect(page.getByText("in stock")).toBeVisible();
  await expect(page.getByLabel("Product quantity")).toBeVisible();
  await expect(page.getByRole("button", { name: "Add to cart" })).toBeVisible();
  await expect(page.getByText("SKU: skone240611")).toBeVisible();
  await expect(page.getByText("Category: woo-product-list-")).toBeVisible();
  await expect(page.getByText("Tag:")).toBeVisible();
  await expect(page.getByRole("button", { name: "" })).toBeVisible();
  await page.getByRole("button", { name: "" }).click();
});
