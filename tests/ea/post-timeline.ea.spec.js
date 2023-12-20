// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/post-timeline";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test Post Timeline.", () => {
  let section_top_heading = "Post Timeline Heading 231220";

  test("Post Timeline should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The items should be visible
    await expect(page.locator("article").filter({ hasText: "December 4, 2023 Post Four" })).toBeVisible();
    await expect(page.getByRole("link", { name: "December 4, 2023 Post Four" })).toBeVisible();
    await expect(page.locator(".eael-timeline-bullet").first()).toBeVisible();

    await expect(page.locator("article").filter({ hasText: "December 3, 2023 Post Three" })).toBeVisible();
    await expect(page.getByRole("link", { name: "December 3, 2023 Post Three" })).toBeVisible();
    await expect(page.locator("article:nth-child(2) > .eael-timeline-bullet")).toBeVisible();

    await expect(page.locator("article").filter({ hasText: "December 2, 2023 Post Two" })).toBeVisible();
    await expect(page.getByRole("link", { name: "December 2, 2023 Post Two" })).toBeVisible();
    await expect(page.locator("article:nth-child(3) > .eael-timeline-bullet")).toBeVisible();

    await expect(page.locator("article").filter({ hasText: "December 1, 2023 Post One" })).toBeVisible();
    await expect(page.getByRole("link", { name: "December 1, 2023 Post One" })).toBeVisible();
    await expect(page.locator("article:nth-child(4) > .eael-timeline-bullet")).toBeVisible();
  });

  test("Post Grid post links should work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Post links should properly redirect

    await page.getByRole("link", { name: "December 4, 2023 Post Four" }).click();
    await expect(page.locator("p").filter({ hasText: "Post Four" })).toBeVisible();

    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    await page.getByRole("link", { name: "December 3, 2023 Post Three" }).click();
    await expect(page.locator("p").filter({ hasText: "Post Three" })).toBeVisible();

    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    await page.getByRole("link", { name: "December 2, 2023 Post Two" }).click();
    await expect(page.locator("p").filter({ hasText: "Post Two" })).toBeVisible();

    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    await page.getByRole("link", { name: "December 1, 2023 Post One" }).click();
    await expect(page.locator("p").filter({ hasText: "Post One" })).toBeVisible();
  });
});
