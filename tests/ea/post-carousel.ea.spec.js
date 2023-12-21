// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/post-carousel";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test post carousel.", () => {
  let section_top_heading = "Post Carousel Heading 231221";

  test("Post carousel should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Slide 1 contents should be present
    await expect(page.getByText("01DecemberPost One 231219").first()).toBeVisible();
    await expect(page.getByText("01December").first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post One" }).first()).toBeVisible();
    await expect(page.getByText("Post One 231219 DO NOT DELETE").first()).toBeVisible();

    // Slide 2 contents should be present
    await page.getByLabel("Go to slide 2").click();
    await page.waitForTimeout(350);
    await expect(page.locator("span").filter({ hasText: "02December" }).nth(1)).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post Two" }).nth(1)).toBeVisible();
    await expect(page.getByText("Post Two 231219 DO NOT DELETE").nth(1)).toBeVisible();

    // Slide 3 contents should be present
    await page.getByLabel("Go to slide 3").click();
    await page.waitForTimeout(350);
    await expect(page.locator("span").filter({ hasText: "03December" }).nth(1)).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post Three" }).nth(1)).toBeVisible();
    await expect(page.getByText("Post Three 231219 DO NOT").nth(1)).toBeVisible();

    // Slide 4 contents should be present
    await page.getByLabel("Go to slide 4").click();
    await page.waitForTimeout(350);
    await expect(page.locator("span").filter({ hasText: "04December" }).nth(1)).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post Four" }).nth(1)).toBeVisible();
    await expect(page.getByText("Post Four 231219 DO NOT").nth(1)).toBeVisible();

    // Slide 1 contents should be present
    await page.getByLabel("Go to slide 1").click();
    await page.waitForTimeout(350);
    await expect(page.getByRole("heading", { name: "Post One" }).first()).toBeVisible();
  });
});
