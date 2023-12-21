// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/content-timeline";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test content timeline.", () => {
  let section_top_heading = "Content Timeline 231221";

  test("Content Timeline should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The items should be visible
    await page.goto("https://hurayra.resecured.io/ea/content-timeline/");
    await expect(page.getByRole("heading", { name: "Content Timeline" })).toBeVisible();
    await expect(page.getByText("Post One 231219Post One")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post One 231219" })).toBeVisible();
    await expect(page.getByText("Post One 231219 DO NOT DELETE")).toBeVisible();
    await expect(page.getByRole("link", { name: "More231221" }).first()).toBeVisible();
    await expect(page.locator(".eael-content-timeline-img").first()).toBeVisible();
    await expect(page.getByText("December 1, 2023")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Two" })).toBeVisible();
    await expect(page.getByText("Post Two 231219 DO NOT DELETE")).toBeVisible();
    await expect(page.getByRole("link", { name: "More231221" }).nth(1)).toBeVisible();
    await expect(page.getByText("December 2,")).toBeVisible();
    await expect(page.locator("div:nth-child(2) > .eael-content-timeline-img")).toBeVisible();

    await expect(page.getByRole("heading", { name: "Post Three" })).toBeVisible();
    await expect(page.getByText("Post Three 231219 DO NOT")).toBeVisible();
    await expect(page.getByRole("link", { name: "More231221" }).nth(2)).toBeVisible();
    await expect(page.getByText("December 3,")).toBeVisible();
    await expect(page.locator("div:nth-child(3) > .eael-content-timeline-img")).toBeVisible();

    await expect(page.getByText("Post Four 231219Post Four")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Post Four" })).toBeVisible();
    await expect(page.getByText("Post Four 231219 DO NOT")).toBeVisible();
    await expect(page.getByRole("link", { name: "More231221" }).nth(3)).toBeVisible();
    await expect(page.getByText("December 4,")).toBeVisible();
    await expect(page.locator("div:nth-child(4) > .eael-content-timeline-img")).toBeVisible();
  });

  test("Content timeline post links should work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Post links should properly redirect
    await expect(page.getByRole("heading", { name: "Post One" })).toBeVisible();
    await page.getByRole("link", { name: "Post One" }).click();
    await expect(page.getByText("Post One 231219 DO NOT DELETE")).toBeVisible();

    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    await expect(page.getByRole("link", { name: "More231221" }).first()).toBeVisible();
    await page.getByRole("link", { name: "More231221" }).first().click();
    await expect(page.getByText("Post One 231219 DO NOT DELETE")).toBeVisible();
  });
});
