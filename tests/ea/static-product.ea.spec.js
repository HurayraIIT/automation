// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/static-product";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test static product.", () => {
  let section_top_heading = "Static Product Heading 231219";

  test("Static product should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The first product sections should be present
    await expect(page.getByRole("img", { name: "one" })).toBeVisible();
    await expect(
      page.locator("#eael-static-product-c872749 div").filter({ hasText: "Product One 231219 $11.1 (1.1" }).nth(1)
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Product One" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Product One" })).toBeVisible();
    await expect(page.getByText("$11.1")).toBeVisible();
    await expect(page.getByText("(1.1 REVIEWS)")).toBeVisible();
    await expect(page.getByText("Product One Description")).toBeVisible();
    await expect(page.getByRole("link", { name: "View Details One" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Add To Cart One" })).toBeVisible();

    // The second product sections should be visible
    await expect(page.getByRole("img", { name: "two" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Product Two" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Product Two" })).toBeVisible();
    await expect(page.getByText("$22.2")).toBeVisible();
    await expect(page.getByText("(2.2 REVIEWS)")).toBeVisible();
    await expect(page.getByText("Product Two Description")).toBeVisible();
    await expect(page.getByRole("link", { name: "View Details Two" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Add To Cart Two" })).toBeVisible();
  });

  test("Static product view details link should work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // click on the view details link
    await page.getByRole("heading", { name: "Product One" }).hover();
    await page.getByRole("link", { name: "View Details Two" }).click();

    // verify the redirection
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();
  });
});
