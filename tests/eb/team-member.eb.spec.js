// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/team-member";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test team member.", () => {
  let section_top_heading = "Team Member Heading240612";

  test("All sections should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.getByRole('heading', { name: 'Team Member Heading240612' })).toBeVisible();

    // member 1
    await expect(page.getByRole('link', { name: 'one' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Guy One240612' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Software Engineer240612' })).toBeVisible();
    await expect(page.getByText('Lorem ipsum One240612')).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();

    await expect(page.locator('[href="https://facebook.com/one240612"]')).toBeVisible();
    await expect(page.locator('[href="https://x.com/one240612"]')).toBeVisible();
    await expect(page.locator('[href="https://linkedin.com/in/one240612"]')).toBeVisible();

    // Member 2
    await expect(page.getByRole('link', { name: 'two' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Guy Two240612' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Software Engineer Two240612' })).toBeVisible();
    await expect(page.getByText('Lorem ipsum Two240612')).toBeVisible();
    await expect(page.locator('[href="https://facebook.com/two240612"]')).toBeVisible();
    await expect(page.locator('[href="https://x.com/two240612"]')).toBeVisible();
    await expect(page.locator('[href="https://linkedin.com/in/two240612"]')).toBeVisible();

    // Member 3
    await expect(page.getByRole('link', { name: 'three' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Guy three240612' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Software Engineer Three240612' })).toBeVisible();
    await expect(page.getByText('Lorem ipsum Three240612')).toBeVisible();
    await expect(page.locator('[href="https://facebook.com/three240612"]')).toBeVisible();
    await expect(page.locator('[href="https://x.com/three240612"]')).toBeVisible();
    await expect(page.locator('[href="https://linkedin.com/in/three240612"]')).toBeVisible();

    await page.getByRole('link', { name: 'one' }).click();
    await expect(page.getByRole('heading', { name: 'clicked (DONOTDELETE)' })).toBeVisible();
  });
});
