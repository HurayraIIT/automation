// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/data-table";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test data table.", () => {
  let section_top_heading = "Data Table Heading 231220";

  test("Data table should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The items should be visible

    await expect(page.getByLabel("Employee231220: No sort").locator("div")).toBeVisible();
    await expect(page.getByLabel("Designation231220: No sort").locator("div")).toBeVisible();
    await expect(page.getByLabel("Salary231220: No sort applied").locator("div")).toBeVisible();

    await expect(page.getByRole("gridcell", { name: "Dave Smith231220" }).locator("div")).toBeVisible();
    await expect(page.getByText("Terry Byol231220")).toBeVisible();
    await expect(page.getByText("Ryan Rester231220")).toBeVisible();
    await expect(page.getByText("Nathan None231220")).toBeVisible();

    await expect(page.getByText("Test Knight231220")).toBeVisible();
    await expect(page.getByText("Test Boy231220")).toBeVisible();
    await expect(page.getByText("Postman Master231220")).toBeVisible();
    await expect(page.getByText("Automation Tester231220")).toBeVisible();

    await expect(page.getByText("999231220")).toBeVisible();
    await expect(page.getByText("88231220")).toBeVisible();
    await expect(page.getByText("320231220")).toBeVisible();
    await expect(page.getByText("989231220")).toBeVisible();
  });

  test("Link in data should properly work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    await page.getByRole("link", { name: "Dave Smith231220" }).click();
    await expect(page.getByText("page loaded successfully!")).toBeVisible();
  });
});
