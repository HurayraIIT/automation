// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/table-of-content";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test table of content.", () => {
  let section_top_heading = "Page Start240612";
  let section_bottom_heading = "Page End240612";

  test("Table of content should properly load.", async ({ page }) => {
    await page.getByRole('heading', {name: section_top_heading}).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Go into position
    await page.getByRole("heading", { name: "First Heading240612 h2" }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    
    await expect(page.getByRole('heading', { name: 'First Heading240612 h2' })).toBeVisible();
    await expect(page.getByText('First Content240612')).toBeVisible();
    await expect(page.getByRole('button', { name: ' Table of Contents240612' })).toBeVisible();

    // Expand the toc
    await page.getByRole('button', { name: ' Table of Contents240612' }).click();
    await page.waitForTimeout(200);
    await expect(page.getByText('×')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Table of Contents240612' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Page Start240612' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'First Heading240612 h2' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'First Subheading240612 H3' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'First Sub Sub Heading240612 H4' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: /^Second Sub Sub Heading240612 H4$/ })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Second Subheading240612 H3' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Second Heading240612 H2' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Last Sub Heading240612 H3' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Page End240612' })).toBeVisible();
    
    // Click and verify scroll
    
    await page.waitForTimeout(200);
    await page.getByRole('link', { name: 'First Heading240612 h2' }).click();
    await expect(page.getByRole('heading', { name: 'First Heading240612 h2' })).toBeVisible();
    
    await page.waitForTimeout(200);
    await page.getByRole('link', { name: 'First Subheading240612 H3' }).click();
    await expect(page.getByRole('heading', { name: 'First Subheading240612 H3' })).toBeVisible();
    
    await page.waitForTimeout(200);
    await page.getByRole('link', { name: 'First Sub Sub Heading240612 H4' }).click();
    await expect(page.getByRole('heading', { name: 'First Sub Sub Heading240612 H4' })).toBeVisible();
    
    await page.waitForTimeout(200);
    await page.getByRole('link', { name: 'Second Sub Sub Heading240612' }).click();
    await expect(page.getByRole('heading', { name: 'Second Sub Sub Heading240612' })).toBeVisible();
    
    await page.waitForTimeout(200);
    await page.getByRole('link', { name: 'Second Subheading240612 H3' }).click();
    await expect(page.getByRole('heading', { name: 'Second Subheading240612 H3' })).toBeVisible();
    
    await page.waitForTimeout(200);
    await page.getByRole('link', { name: 'Second Heading240612 H2' }).click();
    await expect(page.getByRole('heading', { name: 'Second Heading240612 H2' })).toBeVisible();
    
    await page.waitForTimeout(200);
    await page.getByRole('link', { name: 'Last Sub Heading240612 H3' }).click();
    await expect(page.getByRole('heading', { name: 'Last Sub Heading240612 H3' })).toBeVisible();
    
    await page.waitForTimeout(200);
    await page.getByRole('link', { name: 'Page End240612' }).click();
    await expect(page.getByRole('heading', { name: 'Page End240612' })).toBeVisible();

    // Go back up
    await page.getByRole('link', { name: 'First Heading240612 h2' }).click();

    // Close the toc
    await page.getByText('×').click();
  });
});
