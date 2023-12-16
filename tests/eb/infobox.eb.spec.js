// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/infobox";

test.describe.configure({ mode: "parallel" });

test("Infobox should load with proper text.", async ({ page }) => {
  await page.goto(slug);

  // section heading
  await expect(page.locator("h2")).toContainText("Infobox Preset 01 Clickable");

  // infobox text contents
  await expect(page.locator("h3")).toContainText("End To End Testing Is Awesome!");
  await expect(page.locator("h4")).toContainText("Is this an e2e test?");
  await expect(page.getByText("Well, it might be. Maybe it is. Maybe it is not.")).toBeVisible();
});

test("Clickable infobox should work.", async ({ page }) => {
  await page.goto(slug);

  // scroll to the section
  await page.getByText("End To End Testing Is Awesome!").scrollIntoViewIfNeeded();

  // click on the box and validate navigation
  await page.getByText("Is this an e2e test?").click();
  await expect(page).toHaveURL(/clicked/);
  await expect(page.getByText("page loaded successfully!")).toBeVisible();
});

test("Infobox background color should work.", async ({ page }) => {
    const infobox = page.locator(".eb-infobox-e6bq16p");
    await page.goto(slug);
    await page.getByText("End To End Testing Is Awesome!").scrollIntoViewIfNeeded();

    // validate the BG color
    await expect(infobox).toHaveCSS("background-color", "rgb(242, 18, 18)");

    // hover over the element
    await infobox.hover();
    await page.waitForTimeout(200);

    // validate the hover BG color
    await expect(infobox).toHaveCSS("background-color", "rgb(228, 225, 167)");
});
