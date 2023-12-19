// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/flip-box";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test flip box.", () => {
  let section_top_heading = "Flipbox Heading 231219";

  test("Flipbox section should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // check front page content
    await expect(page.getByRole("heading", { name: "Front Title 231219" })).toBeVisible();
    await expect(page.getByText("Front side content 231219")).toBeVisible();

    // check back page content
    await expect(page.getByRole("heading", { name: "Back Title 231219" })).toBeVisible();
    await expect(page.getByText("Back side content 231219")).toBeVisible();
  });

  test("Flipbox link should work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // click should properly redirect
    await page.getByRole("link", { name: "Front Title 231219" }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();
  });
});
