// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/post-grid";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test Post Grid.", () => {
  let section_top_heading = "Post Grid Heading 231220";

  test("Post Grid should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The items should be visible
    await page.goto("https://hurayra.resecured.io/ea/post-grid/");
    await expect(page.getByRole("heading", { name: section_top_heading })).toBeVisible();
    await expect(
      page.locator("article").filter({ hasText: "Post Four 231219" }).getByRole("link").first()
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Post Four 231219" })).toBeVisible();
    await expect(page.locator(".eael-author-avatar").first()).toBeVisible();
    await expect(page.getByRole("link", { name: "hurayra" }).first()).toBeVisible();
    await expect(page.locator("span").filter({ hasText: "December 4, 2023" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Read More231220" }).first()).toBeVisible();
    await expect(page.getByText("Post Four 231219hurayraDecember 4, 2023 Read More231220")).toBeVisible();
    await expect(
      page.locator("article").filter({ hasText: "Post One 231219" }).getByRole("link").first()
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Post One 231219" })).toBeVisible();
    await expect(page.getByText("December 1, 2023")).toBeVisible();
    await expect(page.getByRole("link", { name: "Read More231220" }).nth(1)).toBeVisible();
    await expect(
      page.locator("article").filter({ hasText: "Post Three 231219" }).getByRole("link").first()
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Post Three 231219" })).toBeVisible();
    await expect(page.getByText("December 3, 2023")).toBeVisible();
    await expect(page.getByRole("link", { name: "Read More231220" }).nth(2)).toBeVisible();
    await expect(
      page.locator("article").filter({ hasText: "Post Two 231219" }).getByRole("link").first()
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Post Two 231219" })).toBeVisible();
    await expect(page.getByText("December 2, 2023")).toBeVisible();
    await expect(page.getByRole("link", { name: "Read More231220" }).nth(3)).toBeVisible();
  });

  test("Post Grid post links should work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Post links should properly redirect
    await page.locator("article").filter({ hasText: "Post Four 231219" }).getByRole("link").first().click();
    await expect(page.locator("p").filter({ hasText: "Post Four 231219" })).toBeVisible();

    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    await page.getByRole("link", { name: "Post Four 231219" }).click();
    await expect(page.locator("p").filter({ hasText: "Post Four 231219" })).toBeVisible();

    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    await page.getByRole("link", { name: "hurayra" }).first().click();
    await expect(page.getByRole("heading", { name: "Author name: hurayra" })).toBeVisible();

    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    await page.getByRole("link", { name: "Read More231220" }).first().click();
    await expect(page.locator("p").filter({ hasText: "Post Four 231219" })).toBeVisible();
  });
});
