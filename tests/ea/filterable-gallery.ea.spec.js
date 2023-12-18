// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/filterable-gallery";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("First Filterable Gallery", () => {
  let section_heading = "Filterable Gallery Heading 231218";

  test("Filterable gallery should work.", async ({ page }) => {
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Filter names should load
    await expect(page.getByText("All", { exact: true })).toBeVisible();
    await expect(page.getByText("Odd")).toBeVisible();
    await expect(page.getByText("Even")).toBeVisible();

    // Section: All - Should load
    await expect(page.getByRole("link", { name: "one" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Item1" })).toBeVisible();
    await expect(page.getByText("Item content1")).toBeVisible();

    await expect(page.getByRole("link", { name: "two" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Item2" })).toBeVisible();
    await expect(page.getByText("Item content2")).toBeVisible();

    await expect(page.getByRole("link", { name: "three" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Item3" })).toBeVisible();
    await expect(page.getByText("Item content3")).toBeVisible();

    await expect(page.getByRole("link", { name: "four" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Item4" })).toBeVisible();
    await expect(page.getByText("Item content4")).toBeVisible();

    await expect(page.getByRole("link", { name: "Load More" })).toBeVisible();

    // Section: Odd - Should load
    await page.getByText("Odd").click();

    await expect(page.getByRole("link", { name: "one" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Item1" })).toBeVisible();
    await expect(page.getByText("Item content1")).toBeVisible();

    await expect(page.getByRole("link", { name: "three" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Item3" })).toBeVisible();
    await expect(page.getByText("Item content3")).toBeVisible();

    await expect(page.getByRole("link", { name: "five" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Item5" })).toBeVisible();
    await expect(page.getByText("Item content5")).toBeVisible();

    await expect(page.getByRole("link", { name: "two" })).not.toBeVisible();
    await expect(page.getByRole("link", { name: "Item2" })).not.toBeVisible();
    await expect(page.getByText("Item content2")).not.toBeVisible();

    // Section: Even - Should load

    await page.getByText("Even").click();
    await expect(page.getByRole("link", { name: "two" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Item2" })).toBeVisible();
    await expect(page.getByText("Item content2")).toBeVisible();

    await expect(page.getByRole("link", { name: "four" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Item4" })).toBeVisible();
    await expect(page.getByText("Item content4")).toBeVisible();

    await expect(page.getByRole("link", { name: "six" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Item6" })).toBeVisible();
    await expect(page.getByText("Item content6")).toBeVisible();

    await expect(page.getByRole("link", { name: "one" })).not.toBeVisible();
    await expect(page.getByRole("link", { name: "Item1" })).not.toBeVisible();
    await expect(page.getByText("Item content1")).not.toBeVisible();
  });

  test("Full image action (link) should work.", async ({ page }) => {
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Click test - ALL
    await page.getByRole("link", { name: "one" }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();

    await page.goto(slug);
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    await page.getByRole("link", { name: "Item1" }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();

    await page.goto(slug);
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Click test - ODD
    await page.getByText("Odd").click();
    await page.getByRole("link", { name: "five" }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();

    await page.goto(slug);
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Click test - EVEN
    await page.getByText("Even").click();
    await page.getByRole("link", { name: "six" }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();
  });
});
