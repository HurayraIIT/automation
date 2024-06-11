// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/wrapper-link";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test wrapper link.", () => {
  let section_top_heading = "Wrapper link 240611";

  test("The Link should properly work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await expect(page.getByRole('heading', { name: 'Wrapper link' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Subtitle240611' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'C2A Heading' })).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('heading', { name: 'C2A Heading' }).click();
    const page1 = await page1Promise;
    await expect(page1.getByRole('heading', { name: 'clicked (DONOTDELETE)' })).toBeVisible();
    await expect(page1.getByText('page loaded successfully!')).toBeVisible();
  });

  test("The custom attribute should be present.", async ({ page }) => {
    await expect(page.locator('[data-id="38027a0"]')).toHaveAttribute(
      "data-eael-wrapper-link",
      '{"url":"\\/clicked","is_external":"on","nofollow":"on"}'
    );

    //TODO: Add assertion for custom attribute
  });
});
