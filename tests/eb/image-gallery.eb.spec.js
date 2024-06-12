// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/image-gallery";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test image gallery.", () => {
  let section_top_heading = "Image Gallery Test240612";

  test("All sections should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.getByRole("heading", { name: "Image Gallery Test240612" })).toBeVisible();
    await expect(page.getByText("All240612")).toBeVisible();
    await expect(page.getByText("Even240612")).toBeVisible();
    await expect(page.getByText("Odd240612")).toBeVisible();
    await expect(page.getByRole("link", { name: "one one240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "two two240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "three three240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "four four240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "five five240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "six six240612" })).toBeVisible();
  });

  test("Tab filter should work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    await expect(page.getByRole("heading", { name: "Image Gallery Test240612" })).toBeVisible();

    // All Tab
    await page.getByText("All240612").click();
    await page.waitForTimeout(300);
    await expect(page.getByRole("link", { name: "one one240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "two two240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "three three240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "four four240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "five five240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "six six240612" })).toBeVisible();

    // Even Tab
    await page.getByText("Even240612").click();
    await page.waitForTimeout(300);
    await expect(page.getByRole("link", { name: "one one240612" })).not.toBeVisible();
    await expect(page.getByRole("link", { name: "two two240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "three three240612" })).not.toBeVisible();
    await expect(page.getByRole("link", { name: "four four240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "five five240612" })).not.toBeVisible();
    await expect(page.getByRole("link", { name: "six six240612" })).toBeVisible();

    // Odd Tab
    await page.getByText("Odd240612").click();
    await page.waitForTimeout(300);
    await expect(page.getByRole("link", { name: "one one240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "two two240612" })).not.toBeVisible();
    await expect(page.getByRole("link", { name: "three three240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "four four240612" })).not.toBeVisible();
    await expect(page.getByRole("link", { name: "five five240612" })).toBeVisible();
    await expect(page.getByRole("link", { name: "six six240612" })).not.toBeVisible();
  });
});
