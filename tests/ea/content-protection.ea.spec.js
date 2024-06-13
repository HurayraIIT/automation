// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/content-protection";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test content protection.", () => {
  let section_top_heading = "Content Protection Page240612";

  test("Content protection section should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check if every section or text has loaded properly
    await expect(page.getByRole("heading", { name: "Content Protection Page240612" })).toBeVisible();
    await expect(page.getByText("You do not have permission240612")).toBeVisible();
    await expect(page.getByPlaceholder("Enter Password 240612")).toBeVisible();
    await expect(page.getByRole("button", { name: "Submit240612" })).toBeVisible();
    await expect(
      page.getByText("Content Protection Page240612 You do not have permission240612 Submit240612")
    ).toBeVisible();
  });

  test("Wrong password should not work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Enter an empty or wrong password, the error message will be shown
    await expect(page.getByRole("heading", { name: "Content Protection Page240612" })).toBeVisible();
    await page.getByRole("button", { name: "Submit240612" }).click();
    await expect(page.getByText("Password does not match240612.")).toBeVisible();

    await page.getByPlaceholder("Enter Password").click();
    await page.getByPlaceholder("Enter Password").fill("123456");
    await page.getByRole("button", { name: "Submit240612" }).click();
    await expect(page.getByText("Password does not match240612.")).toBeVisible();
  });

  test("Correct password should work.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Enter the correct password, the secret content will be shown
    await expect(page.getByRole("heading", { name: "Content Protection Page240612" })).toBeVisible();

    await page.getByPlaceholder("Enter Password").click();
    await page.getByPlaceholder("Enter Password").fill("240612");
    await page.getByRole("button", { name: "Submit240612" }).click();

    await expect(page.getByRole("heading", { name: "Secret info240612" })).toBeVisible();
    await expect(page.getByText("Secret Description240612")).toBeVisible();

    // TODO: Fixme
    // Secret content should be visible after a Reload
    // await page.waitForTimeout(200);
    // await page.waitForLoadState("networkidle");
    // await page.goto(slug);

    // await expect.soft(page.getByRole("heading", { name: "Secret info240612" })).toBeVisible();
    // await expect.soft(page.getByText("Secret Description240612")).toBeVisible();
  });
});
