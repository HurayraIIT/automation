// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/reading-progress-bar";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test Reading Progress Bar.", () => {
  let section_top_heading_1 = "Progress Bar Heading240611Top";
  let section_top_heading_2 = "Progress Bar Heading240611Second";
  let section_top_heading_3 = "Progress Bar Heading240611third";
  let section_top_heading_4 = "Progress Bar Heading240611Bottom";

  test("Progress Bar should properly work while scrolling.", async ({ page }) => {
    const progress_bar = page.locator(
      "#eael-reading-progress-995 > .eael-reading-progress-top > .eael-reading-progress-fill"
    );

    // Bottom should be 100%
    await page.getByText(section_top_heading_4).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    await expect(progress_bar).toHaveAttribute("style", /width: 10/);

    // Top should be 0%
    await page.getByText(section_top_heading_1).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    await expect(progress_bar).toHaveAttribute("style", /width: 0/);

    // 2nd should be around 30%
    await page.getByText(section_top_heading_2).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    await expect(progress_bar).toHaveAttribute("style", /width: 3/);

    // 3rd should be around 60%
    await page.getByText(section_top_heading_3).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    await expect(progress_bar).toHaveAttribute("style", /width: 6/);
  });
});
