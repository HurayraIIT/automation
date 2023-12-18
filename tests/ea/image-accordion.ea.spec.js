// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/image-accordion";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("First image accordion", () => {
  let section_heading = "Image Accordion Heading 231218";

  test("Image accordion should work.", async ({ page }) => {
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // All sections should load
    await expect(page.getByRole("heading", { name: "Image Accordion Heading" })).toBeVisible();

    // 1
    await page.getByText("ImageAccordion1 Image").click();
    await expect(page.getByRole("link", { name: "ImageAccordion1" })).toBeVisible();
    await expect(page.getByText("Image Accordion Content1")).toBeVisible();

    await expect(page.getByRole("link", { name: "ImageAccordion2" })).not.toBeVisible();
    await expect(page.getByText("Image Accordion Content2")).not.toBeVisible();

    // 2
    await page.getByText("ImageAccordion2 Image").click();
    await expect(page.getByRole("link", { name: "ImageAccordion2" })).toBeVisible();
    await expect(page.getByText("Image Accordion Content2")).toBeVisible();

    await expect(page.getByRole("link", { name: "ImageAccordion1" })).not.toBeVisible();
    await expect(page.getByText("Image Accordion Content1")).not.toBeVisible();

    // 3
    await page.getByText("ImageAccordion3 Image").click();
    await expect(page.getByRole("link", { name: "ImageAccordion3" })).toBeVisible();
    await expect(page.getByText("Image Accordion Content3")).toBeVisible();

    await expect(page.getByRole("link", { name: "ImageAccordion1" })).not.toBeVisible();
    await expect(page.getByText("Image Accordion Content1")).not.toBeVisible();

    await expect(page.getByRole("link", { name: "ImageAccordion2" })).not.toBeVisible();
    await expect(page.getByText("Image Accordion Content2")).not.toBeVisible();

    // 1
    await page.getByText("ImageAccordion1 Image").click();
    await expect(page.getByRole("link", { name: "ImageAccordion1" })).toBeVisible();
    await expect(page.getByText("Image Accordion Content1")).toBeVisible();

    await expect(page.getByRole("link", { name: "ImageAccordion3" })).not.toBeVisible();
    await expect(page.getByText("Image Accordion Content3")).not.toBeVisible();
  });

  // https://trello.com/c/uSSy7Sqo
  test("Image accordion (link) should work.", async ({ page }) => {
    await page.getByText(section_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Click test - 1
    await page.getByRole("link", { name: "ImageAccordion1" }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();

    await page.goto(slug);
    await page.getByText(section_heading).scrollIntoViewIfNeeded();

    // Click test - 2
    await page.getByText("ImageAccordion2 Image").click();

    await page.getByRole("link", { name: "ImageAccordion2" }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();

    await page.goto(slug);
    await page.getByText(section_heading).scrollIntoViewIfNeeded();

    // Click test - 3
    await page.getByText("ImageAccordion3 Image").click();

    await page.getByRole("link", { name: "ImageAccordion3" }).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();
  });
});
