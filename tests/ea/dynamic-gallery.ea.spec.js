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
    await expect(page.getByText("All231221")).toBeVisible();
    await expect(page.getByText("Even231221")).toBeVisible();
    await expect(page.getByText("Odd231221")).toBeVisible();

    // Section: All - Should load
    await page.getByRole("link", { name: "Post One" }).hover();

    await expect(page.locator(".eael-magnific-link").first()).toBeVisible();
    await expect(page.locator("a:nth-child(2)").first()).toBeVisible();
    await expect(page.locator(".caption").first()).toBeVisible();
    await expect(page.locator(".buttons").first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Post One" })).toBeVisible();
    await expect(page.getByText("Post One 231219 DO NOT DELETE")).toBeVisible();
    await expect(page.getByText("Post One 231219Post One")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Two" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post Three" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post Four" })).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Five" })).not.toBeVisible();
    await expect(page.getByText("Post Content Five 231221")).not.toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Six" })).not.toBeVisible();
    await expect(page.getByText("Post Content Six 231221")).not.toBeVisible();

    await expect(page.getByRole("button", { name: "Load More231221" })).toBeVisible();

    // Section: Even231221 - Should load
    await page.getByText("Even231221").click();
    await page.waitForTimeout(1000);

    await expect(page.getByRole("heading", { name: "Post Two" })).toBeVisible();
    await expect(page.getByText("Post Two 231219 DO NOT DELETE")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Four" })).toBeVisible();
    await expect(page.getByText("Post Four 231219 DO NOT")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Six" })).toBeVisible();
    await expect(page.getByText("Post Content Six 231221")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Eight" })).toBeVisible();
    await expect(page.getByText("Post Content Eight 231221")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Ten" })).toBeVisible();
    await expect(page.getByText("Post Content Ten 231221")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post One" })).not.toBeVisible();
    await expect(page.getByText("Post One 231219 DO NOT DELETE")).not.toBeVisible();

    // Section: Odd231221 - Should load

    await page.getByText("Odd231221").click();
    await page.waitForTimeout(1000);

    await expect(page.getByRole("heading", { name: "Post One" })).toBeVisible();
    await expect(page.getByText("Post One 231219 DO NOT DELETE")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Three" })).toBeVisible();
    await expect(page.getByText("Post Three 231219 DO NOT")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Five" })).toBeVisible();
    await expect(page.getByText("Post Content Five 231221")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Seven" })).toBeVisible();
    await expect(page.getByText("Post Content Seven 231221")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Nine" })).toBeVisible();
    await expect(page.getByText("Post Content Nine 231221")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Two" })).not.toBeVisible();
    await expect(page.getByText("Post Two 231219 DO NOT DELETE")).not.toBeVisible();
  });

  test("Item links should work.", async ({ page }) => {
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // magnification link
    await page.getByRole("link", { name: "Post One 231219" }).hover();
    await expect(page.locator(".eael-magnific-link").first()).toBeVisible();
    await expect(page.locator(".caption").first()).toBeVisible();
    await page.locator(".eael-magnific-link").first().click();

    await expect(page.getByLabel("/ 1").getByRole("img")).toBeVisible();
    await expect(page.getByLabel("Close (Esc)")).toBeVisible();
    await expect(page.getByLabel("Zoom")).toBeVisible();
    await expect(page.getByLabel("Fullscreen")).toBeVisible();
    await expect(page.getByLabel("Share")).toBeVisible();

    await page.getByLabel("Close (Esc)").click();

    // click icon
    await page.getByRole("link", { name: "Post One 231219" }).hover();
    await page.locator("a:nth-child(2)").first().click();
    await expect(page.locator("p").filter({ hasText: "Post One 231219" })).toBeVisible();

    await page.goto(slug);
    await page.waitForTimeout(200);

    // click post name
    await page.getByRole("link", { name: "Post One 231219" }).click();
    await expect(page.locator("p").filter({ hasText: "Post One 231219" })).toBeVisible();
  });
});
