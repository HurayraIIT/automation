// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/dynamic-gallery";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test Dynamic Gallery", () => {
  let section_heading = "Dynamic Gallery Heading 231221";

  test("Dynamic gallery should load.", async ({ page }) => {
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Filter names should load
    await expect.soft(page.getByText("All231221")).toBeVisible();
    await expect.soft(page.getByText("Even231221")).toBeVisible();
    await expect.soft(page.getByText("Odd231221")).toBeVisible();

    // Section: All - Should load
    await page.getByRole("link", { name: "Post One" }).hover();

    await expect.soft(page.locator(".eael-magnific-link").first()).toBeVisible();
    await expect.soft(page.locator("a:nth-child(2)").first()).toBeVisible();
    await expect.soft(page.locator(".caption").first()).toBeVisible();
    await expect.soft(page.locator(".buttons").first()).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Post One" })).toBeVisible();
    await expect.soft(page.getByText("Post One 231219 DO NOT DELETE")).toBeVisible();
    await expect.soft(page.getByText("Post One 231219Post One")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Two" })).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Post Three" })).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Post Four" })).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Five" })).not.toBeVisible();
    await expect.soft(page.getByText("Post Content Five 231221")).not.toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Six" })).not.toBeVisible();
    await expect.soft(page.getByText("Post Content Six 231221")).not.toBeVisible();

    await expect.soft(page.getByRole("button", { name: "Load More231221" })).toBeVisible();

    // Section: Even231221 - Should load
    await page.getByText("Even231221").click();
    await page.waitForTimeout(1000);

    await expect.soft(page.getByRole("heading", { name: "Post Two" })).toBeVisible();
    await expect.soft(page.getByText("Post Two 231219 DO NOT DELETE")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Four" })).toBeVisible();
    await expect.soft(page.getByText("Post Four 231219 DO NOT")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Six" })).toBeVisible();
    await expect.soft(page.getByText("Post Content Six 231221")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Eight" })).toBeVisible();
    await expect.soft(page.getByText("Post Content Eight 231221")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Ten" })).toBeVisible();
    await expect.soft(page.getByText("Post Content Ten 231221")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post One" })).not.toBeVisible();
    await expect.soft(page.getByText("Post One 231219 DO NOT DELETE")).not.toBeVisible();

    // Section: Odd231221 - Should load

    await page.getByText("Odd231221").click();
    await page.waitForTimeout(1000);

    await expect.soft(page.getByRole("heading", { name: "Post One" })).toBeVisible();
    await expect.soft(page.getByText("Post One 231219 DO NOT DELETE")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Three" })).toBeVisible();
    await expect.soft(page.getByText("Post Three 231219 DO NOT")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Five" })).toBeVisible();
    await expect.soft(page.getByText("Post Content Five 231221")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Seven" })).toBeVisible();
    await expect.soft(page.getByText("Post Content Seven 231221")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Nine" })).toBeVisible();
    await expect.soft(page.getByText("Post Content Nine 231221")).toBeVisible();

    await expect.soft(page.getByRole("heading", { name: "Post Two" })).not.toBeVisible();
    await expect.soft(page.getByText("Post Two 231219 DO NOT DELETE")).not.toBeVisible();
  });

  test("Item links should work.", async ({ page }) => {
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // magnification link
    await page.getByRole("link", { name: "Post One 231219" }).hover();
    await expect.soft(page.locator(".eael-magnific-link").first()).toBeVisible();
    await expect.soft(page.locator(".caption").first()).toBeVisible();
    await page.locator(".eael-magnific-link").first().click();

    await expect.soft(page.getByLabel("/ 1").getByRole("img")).toBeVisible();
    await expect.soft(page.getByRole("button", { name: "Close (Esc)" })).toBeVisible();
    await expect.soft(page.getByLabel("Zoom", { exact: true })).toBeVisible();
    await expect.soft(page.getByLabel("Fullscreen", { exact: true })).toBeVisible();
    await expect.soft(page.getByRole("button", { name: "Share" })).toBeVisible();

    await page.getByRole('button', { name: 'Close (Esc)' }).click();

    // click icon
    await page.getByRole("link", { name: "Post One 231219" }).hover();
    await page.locator("a:nth-child(2)").first().click();
    await expect.soft(page.locator("p").filter({ hasText: "Post One 231219" })).toBeVisible();

    await page.goto(slug);
    await page.waitForTimeout(200);

    // click post name
    await page.getByRole("link", { name: "Post One 231219" }).click();
    await expect.soft(page.locator("p").filter({ hasText: "Post One 231219" })).toBeVisible();
  });
});
