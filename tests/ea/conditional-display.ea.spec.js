// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/conditional-display";

// test.beforeEach(async ({ page }) => {
//   await page.goto(slug);
// });

let section_top_heading = "Conditional Display Heading 240611";

test.describe("Test conditional display - Query String.", () => {

  test("Section should be visible if query string is present.", async ({ page }) => {
    await page.goto(`${slug}?box-one=one240611`);
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.locator('.infobox-icon-wrap')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Infobox-one-' })).toBeVisible();
    await expect(page.getByText('Infobox-content-one-')).toBeVisible();
  });

  test("Section should not be visible if query string is absent.", async ({ page }) => {
    await page.goto(`${slug}`);
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should not be visible
    await expect(page.locator(".infobox-icon-wrap")).not.toBeVisible();
    await expect(page.getByRole("heading", { name: "Infobox-one-" })).not.toBeVisible();
    await expect(page.getByText("Infobox-content-one-")).not.toBeVisible();
  });

  test("Section should not be visible if query string is wrong.", async ({ page }) => {
    await page.goto(`${slug}?box-one=one`);
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should not be visible
    await expect(page.locator(".infobox-icon-wrap")).not.toBeVisible();
    await expect(page.getByRole("heading", { name: "Infobox-one-" })).not.toBeVisible();
    await expect(page.getByText("Infobox-content-one-")).not.toBeVisible();
  });
});

//TODO: Need to cover other logics