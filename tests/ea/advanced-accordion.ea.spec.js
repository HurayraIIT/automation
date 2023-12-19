// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/advanced-accordion";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test advanced accordion.", () => {
  let section_top_heading = "Advanced Accordion Heading 231219";

  test("Advanced accordion contents should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all Titles should be visible
    await expect(page.getByText("Accordion Tab Title1")).toBeVisible();
    await expect(page.getByText("Accordion Tab Title2")).toBeVisible();
    await expect(page.getByText("Accordion Tab Title3")).toBeVisible();

    // Check all contents should not be visible
    await expect(page.getByText("Accordion Tab Content1")).not.toBeVisible();
    await expect(page.getByText("Accordion Tab Content2")).not.toBeVisible();
    await expect(page.getByText("Accordion Tab Content3")).not.toBeVisible();

    // Click on 1st accordion
    await page.getByText("Accordion Tab Title1").click();
    await page.waitForTimeout(200);
    await expect(page.getByText("Accordion Tab Content1")).toBeVisible();
    await expect(page.getByText("Accordion Tab Content2")).not.toBeVisible();
    await expect(page.getByText("Accordion Tab Content3")).not.toBeVisible();

    // Click on 2nd accordion
    await page.getByText("Accordion Tab Title2").click();
    await page.waitForTimeout(200);
    await expect(page.getByText("Accordion Tab Content1")).not.toBeVisible();
    await expect(page.getByText("Accordion Tab Content2")).toBeVisible();
    await expect(page.getByText("Accordion Tab Content3")).not.toBeVisible();

    // Click on 3rd accordion
    await page.getByText("Accordion Tab Title3").click();
    await page.waitForTimeout(200);
    await expect(page.getByText("Accordion Tab Content1")).not.toBeVisible();
    await expect(page.getByText("Accordion Tab Content2")).not.toBeVisible();
    await expect(page.getByText("Accordion Tab Content3")).toBeVisible();

    // again click on 3rd, all should close
    await page.getByText("Accordion Tab Title3").click();
    await page.waitForTimeout(200);
    await expect(page.getByText("Accordion Tab Content1")).not.toBeVisible();
    await expect(page.getByText("Accordion Tab Content2")).not.toBeVisible();
    await expect(page.getByText("Accordion Tab Content3")).not.toBeVisible();
  });
});
