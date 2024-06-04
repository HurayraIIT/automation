// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/post-block";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test post block.", () => {
  let section_top_heading = "Post Block Heading 231221";

  test("Post block should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // all sections should be present
    await expect(
      page.locator("article").filter({ hasText: "Post One 231219 Post One" }).getByRole("link").first()
    ).toBeVisible();
    await expect(page.getByText("Post One 231219 Post One")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post One 231219" })).toBeVisible();
    await expect(page.getByText("Post One 231219 DO NOT DELETE")).toBeVisible();
    await expect(page.getByText("Post One 231219 Post One")).toBeVisible();
    await expect(page.getByRole("link", { name: "Read More" }).first()).toBeVisible();
    await expect(
      page.locator("#eael-post-block-2120adb div").filter({ hasText: "hurayraDecember 1," }).nth(3)
    ).toBeVisible();
    await expect(
      page
        .locator("div")
        .filter({ hasText: /^hurayra$/ })
        .first()
    ).toBeVisible();
    await expect(page.getByText("December 1, 2023")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Two 231219" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post Three 231219" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post Four 231219" })).toBeVisible();
  });

  test("Post link should work.", async ({ page }) => {
        await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
        await page.waitForTimeout(200);

        await page.getByRole("link", { name: "Post Two 231219" }).click();
        await page.waitForTimeout(200);
        await expect(page.getByText("Post Two 231219 DO NOT DELETE")).toBeVisible();
  });
});
