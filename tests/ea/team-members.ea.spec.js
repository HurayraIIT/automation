// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/team-members";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test team members.", () => {
  let section_top_heading = "Team Members Heading 231219";

  test("Team member should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check contents
    await expect(page.getByRole("heading", { name: section_top_heading })).toBeVisible();

    // Check all contents
    await expect(page.getByRole("img", { name: "study" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Member 231219" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Engineer" })).toBeVisible();
    await expect(page.locator("#eael-team-member-ef53150").getByRole("link").first()).toBeVisible();
    await expect(page.locator("#eael-team-member-ef53150").getByRole("link").nth(1)).toBeVisible();
    await expect(page.locator("#eael-team-member-ef53150").getByRole("link").nth(2)).toBeVisible();
    await expect(page.getByText("Member Description")).toBeVisible();
  });

  test("Team member social icon links should work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // click link 1
    await page.locator("#eael-team-member-ef53150").getByRole("link").first().click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();

    await page.goto(slug);
    await page.waitForTimeout(200);
    await page.waitForLoadState("networkidle");
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();

    // click link 2
    await page.locator("#eael-team-member-ef53150").getByRole("link").nth(1).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();

    await page.goto(slug);
    await page.waitForTimeout(200);
    await page.waitForLoadState("networkidle");
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();

    // click link 3
    await page.locator("#eael-team-member-ef53150").getByRole("link").nth(2).click();
    await expect(page).toHaveURL(/clicked/);
    await expect(page.getByText("page loaded successfully!")).toBeVisible();
  });
});
