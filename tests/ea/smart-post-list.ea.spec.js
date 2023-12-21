// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/smart-post-list";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test Smart Post List", () => {
  let section_heading = "Smart Post List Heading 231221";

  test("Smart Post List should load.", async ({ page }) => {
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Filter names should load
    await expect(page.getByRole("heading", { name: "Recent Posts231221" })).toBeVisible();
    await expect(page.getByRole("link", { name: "All231221" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Even231221" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Odd231221" })).toBeVisible();

    // Section: All - Should load
    await expect(page.locator(".eael-post-list-post").first()).toBeVisible();
    await expect(page.getByRole("img", { name: "one" })).toBeVisible();
    await expect(page.getByRole("link", { name: "DONOTDELETE" }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post One" })).toBeVisible();
    await expect(page.getByText("DONOTDELETEPost One 231219")).toBeVisible();
    await expect(page.getByText("December 1,")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post Two" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Post Three" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post Four" })).toBeVisible();

    await expect(page.getByRole("img", { name: "five" })).not.toBeVisible();
    await expect(page.getByText("DONOTDELETEPost Five 231221")).not.toBeVisible();
    await expect(page.getByText("December 5, 2023")).not.toBeVisible();

    await expect(page.getByRole("img", { name: "six" })).not.toBeVisible();
    await expect(page.getByText("DONOTDELETEPost Six 231221")).not.toBeVisible();
    await expect(page.getByText("December 6, 2023")).not.toBeVisible();

    // Section: Even231221 - Should load
    await page.locator("#post-nav-next-4280cbc").click();
    await expect(page.locator("#post-nav-next-4280cbc")).toBeVisible();
    await page.getByRole("link", { name: "Even231221" }).click();
    await expect(page.getByRole("img", { name: "six" })).toBeVisible();
    await expect(page.getByText("DONOTDELETEPost Six 231221")).toBeVisible();
    await expect(page.getByText("December 6, 2023")).toBeVisible();

    await expect(page.getByRole("img", { name: "five" })).not.toBeVisible();
    await expect(page.getByText("DONOTDELETEPost Five 231221")).not.toBeVisible();
    await expect(page.getByText("December 5, 2023")).not.toBeVisible();

    // Section: Odd231221 - Should load
    await page.getByRole("link", { name: "Odd231221" }).click();
    await expect(page.getByRole("img", { name: "five" })).toBeVisible();
    await expect(page.getByText("DONOTDELETEPost Five 231221")).toBeVisible();
    await expect(page.getByText("December 5, 2023")).toBeVisible();

    await expect(page.getByRole("img", { name: "six" })).not.toBeVisible();
    await expect(page.getByText("DONOTDELETEPost Six 231221")).not.toBeVisible();
    await expect(page.getByText("December 6, 2023")).not.toBeVisible();
  });

  test("Item links should work.", async ({ page }) => {
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    await page.getByRole("link", { name: "DONOTDELETE" }).first().click();
    await expect(page.getByRole("heading", { name: "DONOTDELETE" })).toBeVisible();

    await page.goto(slug);
    await page.waitForTimeout(200);

    await page.getByRole("link", { name: "Post One" }).click();
    await expect(page.getByText("Post One 231219 DO NOT DELETE")).toBeVisible();
  });
});
