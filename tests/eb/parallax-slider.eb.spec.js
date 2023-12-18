// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/parallax-slider";

test("Parallax Slider Should load.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Parallax Slider Heading 231218").scrollIntoViewIfNeeded();

  // Middle slider text contents should be visible
  await expect(page.getByText("Middle Slider 231218")).toBeVisible();
  await expect(page.getByText("Middle Button 231218")).toBeVisible();

  // Left slider text contents should not be visible
  await expect(page.getByText("Left Slider 231218")).not.toBeVisible();
  await expect(page.getByText("Left Button 231218")).not.toBeVisible();

  // Right slider text contents should not be visible
  await expect(page.getByText("Right Slider 231218")).not.toBeVisible();
  await expect(page.getByText("Right Button 231218")).not.toBeVisible();
});

test("Parallax Slider left click should work.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Parallax Slider Heading 231218").scrollIntoViewIfNeeded();

  // Click left
  await page.locator(
    ".eb-slider-qep05st > .eb-parallax-container > .eb-parallax-slider > .eb-parallax-wrapper > .slide--previous"
  ).click();
  await page.waitForTimeout(200);

  // Left slider text contents should be visible
  await expect(page.getByText("Left Slider 231218")).toBeVisible();
  await expect(page.getByText("Left Button 231218")).toBeVisible();

  // Middle slider text contents should not be visible
  await expect(page.getByText("Middle Slider 231218")).not.toBeVisible();
  await expect(page.getByText("Middle Button 231218")).not.toBeVisible();

  // Right slider text contents should not be visible
  await expect(page.getByText("Right Slider 231218")).not.toBeVisible();
  await expect(page.getByText("Right Button 231218")).not.toBeVisible();
});

test("Parallax Slider right click should work.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Parallax Slider Heading 231218").scrollIntoViewIfNeeded();

  // Click left
  await page
    .locator(
      ".eb-slider-qep05st > .eb-parallax-container > .eb-parallax-slider > .eb-parallax-wrapper > .slide--next"
    )
    .click();
  await page.waitForTimeout(200);

  // Left slider text contents should not be visible
  await expect(page.getByText("Left Slider 231218")).not.toBeVisible();
  await expect(page.getByText("Left Button 231218")).not.toBeVisible();

  // Middle slider text contents should not be visible
  await expect(page.getByText("Middle Slider 231218")).not.toBeVisible();
  await expect(page.getByText("Middle Button 231218")).not.toBeVisible();

  // Right slider text contents should be visible
  await expect(page.getByText("Right Slider 231218")).toBeVisible();
  await expect(page.getByText("Right Button 231218")).toBeVisible();
});