// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/ea-parallax-scrolling";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test parallax scrolling.", () => {
  let section_top_heading = "Parallax Top240612";
  let section_bottom_heading = "Parallax Bottom240612";

  test("Parallax section should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.getByRole('heading', { name: 'Parallax Top240612' })).toBeVisible();
    await expect(page.locator('#jarallax-container-0')).toBeVisible();

    // await expect(page.locator("#jarallax-container-0 > div")).toHaveAttribute(
    //   "style",
    //   "background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: linear-gradient(rgb(19, 68, 230) 0%, rgb(242, 41, 91) 100%); position: absolute; top: 0px; left: 0px; width: 1265px; height: 5377.12px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; will-change: transform, opacity; margin-top: -2328.56px; transform: translate3d(0px, 1"
    // );

    // Scroll to bottom
    
    await page.getByText(section_bottom_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    await expect(page.getByRole('heading', { name: 'Parallax Bottom240612' })).toBeVisible();
    await expect(page.locator('#jarallax-container-0')).toBeVisible();
    // await expect(page.locator("#jarallax-container-0 > div")).toHaveAttribute(
    //   "style",
    //   "background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: linear-gradient(rgb(19, 68, 230) 0%, rgb(242, 41, 91) 100%); position: absolute; top: 0px; left: 0px; width: 1265px; height: 5377.12px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; will-change: transform, opacity; margin-top: -2328.56px; transform: translate3d(0px, -1"
    // );
  });
});