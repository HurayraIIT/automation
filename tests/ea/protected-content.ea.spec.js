// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/protected-content";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test protected content.", () => {
  let section_top_heading = "Protected Content Heading 240104";

  test("Protected Content section should properly work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check if every section or text has loaded properly
    await expect(page.getByRole('heading', { name: 'Protected Content Heading' })).toBeVisible();
    await expect(page.getByText('You do not have permission240104')).toBeVisible();
    await expect(page.getByPlaceholder('Enter Password240104')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Submit240104' })).toBeVisible();

    // Enter a wrong password, the error message will be shown
    await page.getByPlaceholder('Enter Password240104').click();
    await page.waitForTimeout(300);
    await page.getByPlaceholder('Enter Password240104').fill('wrongpass');
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: 'Submit240104' }).click();
    await page.waitForTimeout(200);
    await expect(page.getByText('Password does not match240104')).toBeVisible();

    // Enter the correct password, the secret content will be shown
    await page.getByPlaceholder('Enter Password240104').click();
    await page.waitForTimeout(200);
    await page.getByPlaceholder('Enter Password240104').fill('240104');
    await page.waitForTimeout(200);
    await page.getByRole('button', { name: 'Submit240104' }).click();
    await page.waitForTimeout(200);
    await expect(page.getByText('SECRET Content')).toBeVisible();
  });
});
