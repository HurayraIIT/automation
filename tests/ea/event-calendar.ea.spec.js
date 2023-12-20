// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/event-calendar";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test event calendar.", () => {
  let section_top_heading = "Event Calendar Heading 231220";

  test("Event calendar should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // All sections should load
    await expect(page.getByRole('button', { name: 'today' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Dec 28, 2025 – Jan 3,' })).toBeVisible();
    await expect(page.getByRole('button', { name: ' day' })).toBeVisible();
    await expect(page.getByRole('button', { name: ' week' })).toBeVisible();
    await expect(page.getByRole('button', { name: ' month' })).toBeVisible();
    await expect(page.getByRole('button', { name: ' list' })).toBeVisible();
    await expect(page.getByText('all-day')).toBeVisible();
    await expect(page.getByLabel('December 28,')).toBeVisible();
    await expect(page.getByLabel('December 29,')).toBeVisible();
    await expect(page.getByLabel('December 30,')).toBeVisible();
    await expect(page.getByLabel('December 31,')).toBeVisible();
    await expect(page.getByLabel('January 1,')).toBeVisible();
    await expect(page.getByLabel('January 2,')).toBeVisible();
    await expect(page.getByLabel('January 3,')).toBeVisible();
    await expect(page.getByRole('link', { name: '07:00 - 09:00 Event Title' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^7am$/ }).first()).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^8am$/ }).first()).toBeVisible();
    await page.getByRole('link', { name: '07:00 - 09:00 Event Title' }).click();
    await expect(page.getByText('Event Title 231220 Jan 1st 7:00 - 9:00 Event Details')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Event Title' })).toBeVisible();
    await expect(page.getByText('Jan 1st 7:')).toBeVisible();
    await expect(page.getByText('- 9:')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Event Details' })).toBeVisible();
    await expect(page.locator('#eaelecModal div').filter({ hasText: 'Event Title 231220 Jan 1st 7:00 - 9:00 Event Details' }).locator('div').nth(1)).toBeVisible();
    await page.locator('#eaelecModal div').filter({ hasText: 'Event Title 231220 Jan 1st 7:00 - 9:00 Event Details' }).locator('div').nth(1).click();
    await page.getByRole('button', { name: ' day' }).click();
    await expect(page.getByText('Thursday')).toBeVisible();
    await expect(page.getByRole('link', { name: '07:00 - 09:00 Event Title' })).toBeVisible();
    await expect(page.getByRole('button', { name: ' month' })).toBeVisible();
    await page.getByRole('button', { name: ' month' }).click();
    await expect(page.getByRole('heading', { name: 'January' })).toBeVisible();
    await expect(page.getByRole('link', { name: ':00 Event Title 231220' })).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Sunday' }).locator('div')).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Thursday' }).locator('div')).toBeVisible();
    await page.getByRole('button', { name: ' list' }).click();
    await expect(page.getByText('January 1, 2026Thursday')).toBeVisible();
    await expect(page.getByRole('cell', { name: ':00 - 09:00' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Event Title' })).toBeVisible();
    await page.getByRole('link', { name: 'Event Title' }).click();
    await page.getByRole('link', { name: 'Event Details' }).click();
    await expect(page.getByText('page loaded successfully!')).toBeVisible();
  });
});
