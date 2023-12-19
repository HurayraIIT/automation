// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/advanced-tabs";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test advanced tabs.", () => {
  let section_top_heading = "Advanced Tabs Heading 231219";

  test("Advanced tabs contents should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all Titles should be visible
    await expect(page.getByText("Tab Title One")).toBeVisible();
    await expect(page.getByText("Tab Title Two")).toBeVisible();
    await expect(page.getByText("Tab Title Three")).toBeVisible();

    // by default only the 2nd tab should be open
    await expect(page.getByText("Tab Content One")).not.toBeVisible();
    await expect(page.getByText("Tab Content Two")).toBeVisible();
    await expect(page.getByText("Tab Content Three")).not.toBeVisible();

    // Click on 1st tab
    await page.getByText("Tab Title One").click();
    await page.waitForTimeout(200);
    await expect(page.getByText("Tab Content One")).toBeVisible();
    await expect(page.getByText("Tab Content Two")).not.toBeVisible();
    await expect(page.getByText("Tab Content Three")).not.toBeVisible();

    // Click on 2nd tab
    await page.getByText("Tab Title Two").click();
    await page.waitForTimeout(200);
    await expect(page.getByText("Tab Content One")).not.toBeVisible();
    await expect(page.getByText("Tab Content Two")).toBeVisible();
    await expect(page.getByText("Tab Content Three")).not.toBeVisible();

    // Click on 3rd tab
    await page.getByText("Tab Title Three").click();
    await page.waitForTimeout(200);
    await expect(page.getByText("Tab Content One")).not.toBeVisible();
    await expect(page.getByText("Tab Content Two")).not.toBeVisible();
    await expect(page.getByText("Tab Content Three")).toBeVisible();
  });
});
