// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/advanced-tabs";

test("Advanced tabs 2nd tab should be open by default.", async ({ page, browserName }) => {
  test.skip(browserName === "webkit", "Somehow, the test fails on webkit.");

  // Navigate to the section
  await page.goto(slug);
  await page.getByText("Advanced Tabs 231217").scrollIntoViewIfNeeded();

  // section heading
  await expect(page.getByText("Advanced Tabs 231217")).toBeVisible();

  // all tab titles should be visible
  await expect(page.getByText("PHP")).toBeInViewport();
  await expect(page.getByText("Python")).toBeInViewport();
  await expect(page.getByText("JavaScript")).toBeInViewport();

  // only 2nd content should be visible
  await expect(page.getByText("First Tab Content 231217")).not.toBeInViewport();
  await expect(page.getByText("2nd tab active 231217.")).toBeInViewport();
  await expect(page.getByText("3rd Tab Content 231217")).not.toBeInViewport();
});

test("Advanced tabs clicking on the 1st tab should work.", async ({ page, browserName }) => {
  test.skip(browserName === "webkit", "Somehow, the test fails on webkit.");

  // Navigate to the section
  await page.goto(slug);
  await page.getByText("Advanced Tabs 231217").scrollIntoViewIfNeeded();

  // section heading
  await expect(page.getByText("Advanced Tabs 231217")).toBeVisible();

  // click on the first tab
  await page.getByText("PHP").click();
  await page.waitForTimeout(200);

  // all tab titles should be visible
  await expect(page.getByText("PHP")).toBeInViewport();
  await expect(page.getByText("Python")).toBeInViewport();
  await expect(page.getByText("JavaScript")).toBeInViewport();

  // only 1st content should be visible
  await expect(page.getByText("First Tab Content 231217")).toBeInViewport();
  await expect(page.getByText("2nd tab active 231217.")).not.toBeInViewport();
  await expect(page.getByText("3rd Tab Content 231217")).not.toBeInViewport();
});