// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/advanced-menu";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test advanced menu.", () => {
  let section_top_heading = "Advanced Menu Heading 231219";

  test("Advanced menu should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The menu items should be visible
    await expect(page.getByRole("link", { name: "clicked (DONOTDELETE)" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Post One 231219" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Post Three 231219" })).toBeVisible();

    // Sub items should not be visible
    await expect(page.getByRole("link", { name: "Post Two 231219" })).not.toBeVisible();
    await expect(page.getByRole("link", { name: "Post Four 231219" })).not.toBeVisible();

    // hover over the post one, post two should become visible
    await page.getByRole("link", { name: "Post One 231219" }).hover();
    await expect(page.getByRole("link", { name: "Post Two 231219" })).toBeVisible();

    // hover over the post three, post four should become visible
    await page.getByRole("link", { name: "Post Three 231219" }).hover();
    await expect(page.getByRole("link", { name: "Post Four 231219" })).toBeVisible();

    // Click on a link
    await expect(page.getByRole("link", { name: "clicked (DONOTDELETE)" })).toBeVisible();
    await page.getByRole("link", { name: "clicked (DONOTDELETE)" }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();

    // go back
    await page.goto(slug);
    await page.waitForTimeout(200);
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();

    // Click on another menu item
    await page.getByRole("link", { name: "Post One 231219" }).hover();
    await page.getByRole("link", { name: "Post Two 231219" }).click();
    await expect(page.locator("p").filter({ hasText: "Post Two 231219" })).toBeVisible();
  });
});
