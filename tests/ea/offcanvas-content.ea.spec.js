// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/offcanvas-content";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test offcanvas content.", () => {
  let section_top_heading = "Offcanvas Content Heading 231219";

  test("Offcanvas content should properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // The toggle button should be visible
    await expect(page.locator(".eael-offcanvas-toggle")).toBeVisible();
    await expect(page.getByText("Click 231219")).toBeVisible();

    // The offcanvas content should not be visible
    await expect(page.getByRole("heading", { name: "Offcanvas Title" })).not.toBeVisible();
    await expect(page.getByRole("heading", { name: "Box One" })).not.toBeVisible();
    await expect(page.getByText("Box Description One")).not.toBeVisible();
    await expect(page.getByRole("heading", { name: "Box Two" })).not.toBeVisible();
    await expect(page.getByText("Box Description Two")).not.toBeVisible();
    await expect(page.getByRole("button")).not.toBeVisible();

    // Click the toggle button
    await page.getByText("Click 231219").click();
    await page.waitForTimeout(300);

    // The offcanvas button should be visible now
    await expect(page.getByRole("heading", { name: "Offcanvas Title" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Box One" })).toBeVisible();
    await expect(page.getByText("Box Description One")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Box Two" })).toBeVisible();
    await expect(page.getByText("Box Description Two")).toBeVisible();
    await expect(page.getByRole("button")).toBeVisible();

    // click on the offcanvas close button
    await page.getByRole("button").click();
    await page.waitForTimeout(300);

    // The offcanvas content should not be visible
    await expect(page.getByRole("heading", { name: "Offcanvas Title" })).not.toBeVisible();
    await expect(page.getByRole("heading", { name: "Box One" })).not.toBeVisible();
    await expect(page.getByText("Box Description One")).not.toBeVisible();
    await expect(page.getByRole("heading", { name: "Box Two" })).not.toBeVisible();
    await expect(page.getByText("Box Description Two")).not.toBeVisible();
    await expect(page.getByRole("button")).not.toBeVisible();
  });
});
