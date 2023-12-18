// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/testimonial-slider";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("First Testimonial Slider", () => {
    let section_heading = "Testimonial Slider 231218 Heading";

    test("Testimonial slider should load.", async ({ page }) => {
      await page.getByText(section_heading).scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);

      // Only the first testimonial should be visible
      await expect(page.getByText("First Author")).toBeInViewport();
      await expect(page.getByRole("heading", { name: "First Testimonial" })).toBeInViewport();

      await expect(page.getByText("Second Author")).not.toBeInViewport();
      await expect(page.getByRole("heading", { name: "Second Testimonial" })).not.toBeInViewport();

      await expect(page.getByText("Third Author")).not.toBeInViewport();
      await expect(page.getByRole("heading", { name: "Third Testimonial" })).not.toBeInViewport();

      // click on the next arrow
      await page.locator(".slick-next").click();
      await page.waitForTimeout(600);

      // now the second testimonial should be visible
      await expect(page.getByText("First Author")).not.toBeInViewport();
      await expect(page.getByRole("heading", { name: "First Testimonial" })).not.toBeInViewport();

      await expect(page.getByText("Second Author")).toBeInViewport();
      await expect(page.getByRole("heading", { name: "Second Testimonial" })).toBeInViewport();

      await expect(page.getByText("Third Author")).not.toBeInViewport();
      await expect(page.getByRole("heading", { name: "Third Testimonial" })).not.toBeInViewport();

      // click on the next arrow
      await page.locator(".slick-next").click();
      await page.waitForTimeout(600);

      // now the third testimonial should be visible
      await expect(page.getByText("First Author")).not.toBeInViewport();
      await expect(page.getByRole("heading", { name: "First Testimonial" })).not.toBeInViewport();

      await expect(page.getByText("Second Author")).not.toBeInViewport();
      await expect(page.getByRole("heading", { name: "Second Testimonial" })).not.toBeInViewport();

      await expect(page.getByText("Third Author")).toBeInViewport();
      await expect(page.getByRole("heading", { name: "Third Testimonial" })).toBeInViewport();
    });
});
