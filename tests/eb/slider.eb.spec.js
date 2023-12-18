// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/eb/slider";

test("Slider next arrow should work.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Slider Heading 231218").scrollIntoViewIfNeeded();

  // one should be visible
  await expect(page.getByText("one 231218")).toBeInViewport();
  await expect(page.getByText("one subtitle 231218")).toBeInViewport();
  await expect(page.getByText("one button 231218")).toBeInViewport();

  // two should not be visible
  await expect(page.getByText("two 231218")).not.toBeInViewport();
  await expect(page.getByText("two subtitle 231218")).not.toBeInViewport();
  await expect(page.getByText("two button 231218")).not.toBeInViewport();

  // three should not be visible
  await expect(page.getByText("three 231218")).not.toBeInViewport();
  await expect(page.getByText("three subtitle 231218")).not.toBeInViewport();
  await expect(page.getByText("three button 231218")).not.toBeInViewport();

  // four should not be visible
  await expect(page.getByText("four 231218")).not.toBeInViewport();
  await expect(page.getByText("four subtitle 231218")).not.toBeInViewport();
  await expect(page.getByText("four button 231218")).not.toBeInViewport();

  /////// Click next arrow
  await page.locator(".eb-slider-ggbnxze > .slick-slider > .slick-next").click();
  await page.waitForTimeout(200);

  // one should not be visible
  await expect(page.getByText("one 231218")).not.toBeInViewport();
  await expect(page.getByText("one subtitle 231218")).not.toBeInViewport();
  await expect(page.getByText("one button 231218")).not.toBeInViewport();

  // two should be visible
  await expect(page.getByText("two 231218")).toBeInViewport();
  await expect(page.getByText("two subtitle 231218")).toBeInViewport();
  await expect(page.getByText("two button 231218")).toBeInViewport();

  // three should not be visible
  await expect(page.getByText("three 231218")).not.toBeInViewport();
  await expect(page.getByText("three subtitle 231218")).not.toBeInViewport();
  await expect(page.getByText("three button 231218")).not.toBeInViewport();

  // four should not be visible
  await expect(page.getByText("four 231218")).not.toBeInViewport();
  await expect(page.getByText("four subtitle 231218")).not.toBeInViewport();
  await expect(page.getByText("four button 231218")).not.toBeInViewport();

  /////// Click next arrow
  await page.locator(".eb-slider-ggbnxze > .slick-slider > .slick-next").click();
  await page.waitForTimeout(200);

  // one should not be visible
  await expect(page.getByText("one 231218")).not.toBeInViewport();
  await expect(page.getByText("one subtitle 231218")).not.toBeInViewport();
  await expect(page.getByText("one button 231218")).not.toBeInViewport();

  // two should not be visible
  await expect(page.getByText("two 231218")).not.toBeInViewport();
  await expect(page.getByText("two subtitle 231218")).not.toBeInViewport();
  await expect(page.getByText("two button 231218")).not.toBeInViewport();

  // three should be visible
  await expect(page.getByText("three 231218")).toBeInViewport();
  await expect(page.getByText("three subtitle 231218")).toBeInViewport();
  await expect(page.getByText("three button 231218")).toBeInViewport();

  // four should not be visible
  await expect(page.getByText("four 231218")).not.toBeInViewport();
  await expect(page.getByText("four subtitle 231218")).not.toBeInViewport();
  await expect(page.getByText("four button 231218")).not.toBeInViewport();
});
