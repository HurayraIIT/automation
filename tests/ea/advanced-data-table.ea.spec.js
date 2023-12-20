// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/advanced-data-table";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test advanced data table.", () => {
  let section_top_heading = "Heading Advanced Data Table 231220";

  test("Advanced Data table should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The items should be visible
    await expect(page.getByRole('cell', { name: 'Name-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Designation-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Favourite-color-231220' })).toBeVisible();

    await expect(page.getByRole('cell', { name: 'John-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Alice-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Bob-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Emily-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Charlie-231220' })).toBeVisible();

    await expect(page.getByRole('cell', { name: 'Manager-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Engineer-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Analyst-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Coordinator-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Director-231220' })).toBeVisible();

    await expect(page.getByRole('cell', { name: 'Blue-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Green-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Red-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Yellow-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Orange-231220' })).toBeVisible();

    await expect(page.locator('.ea-advanced-data-table-search-wrap')).toBeVisible();
    await expect(page.getByPlaceholder('Search231220')).toBeVisible();

    await expect(page.getByRole('link', { name: '«' })).toBeVisible();
    await expect(page.getByRole('link', { name: '1' })).toBeVisible();
    await expect(page.getByRole('link', { name: '2' })).toBeVisible();
    await expect(page.getByRole('link', { name: '3' })).toBeVisible();
    await expect(page.getByRole('link', { name: '»' })).toBeVisible();
  });

  test("Table Pagination should work properly.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Page 1
    await expect(page.getByRole('cell', { name: 'John-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Manager-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Blue-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Charlie-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Director-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Orange-231220' })).toBeVisible();

    await expect(page.getByRole("cell", { name: "Sophia-231220" })).not.toBeVisible();
    await expect(page.getByRole("cell", { name: "Ethan-231220" })).not.toBeVisible();

    // Page 2
    await page.getByRole('link', { name: '2' }).click();
    await expect(page.getByRole('cell', { name: 'Sophia-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Developer-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Purple-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Ava-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Technician-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Gray-231220' })).toBeVisible();

    await expect(page.getByRole("cell", { name: "John-231220" })).not.toBeVisible();
    await expect(page.getByRole("cell", { name: "Ethan-231220" })).not.toBeVisible();

    // Page 3
    await page.getByRole('link', { name: '3' }).click();
    await expect(page.getByRole('cell', { name: 'Ethan-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Consultant-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Brown-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Emma-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Coordinator-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Teal-231220' })).toBeVisible();

    await expect(page.getByRole("cell", { name: "John-231220" })).not.toBeVisible();
    await expect(page.getByRole("cell", { name: "Sophia-231220" })).not.toBeVisible();
  });

  test("Table sorting should work properly.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // column 1
    
    await expect(page.getByRole('cell', { name: 'John-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Manager-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Blue-231220' })).toBeVisible();

    await page.getByRole('cell', { name: 'Name-231220' }).click();

    await expect(page.getByRole('cell', { name: 'Alice-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Engineer-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Green-231220' })).toBeVisible();

    await page.getByRole('cell', { name: 'Name-231220' }).click();

    await expect(page.getByRole('cell', { name: 'Sophia-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Developer-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Purple-231220' })).toBeVisible();

    // Column 2

    await page.getByRole('cell', { name: 'Designation-231220' }).click();

    await expect(page.getByRole('cell', { name: 'Bob-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Analyst-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Red-231220' })).toBeVisible();

    await page.getByRole('cell', { name: 'Designation-231220' }).click();
    
    await expect(page.getByRole('cell', { name: 'Ava-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Technician-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Gray-231220' })).toBeVisible();

    // Column 3

    await page.getByRole('cell', { name: 'Favourite-color-231220' }).click();

    await expect(page.getByRole('cell', { name: 'Olivia-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Supervisor-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Black-231220' })).toBeVisible();

    await page.getByRole('cell', { name: 'Favourite-color-231220' }).click();

    await expect(page.getByRole('cell', { name: 'Emily-231220' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Coordinator-231220' }).first()).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Yellow-231220' })).toBeVisible();
  });

  test("Table search should work properly.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Search Teal-231220
    await expect(page.getByPlaceholder("Search231220")).toBeVisible();
    await page.getByPlaceholder("Search231220").click();
    await page.getByPlaceholder("Search231220").fill("Teal-231220");

    await page.getByText(section_top_heading).click();

    await expect(page.getByRole("cell", { name: "Emma-231220" })).toBeVisible();
    await expect(page.getByRole("cell", { name: "Coordinator-231220" })).toBeVisible();
    await expect(page.getByRole("cell", { name: "Teal-231220" })).toBeVisible();
  });
});
