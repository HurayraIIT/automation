// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/team-member-carousel";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test team member carousel.", () => {
  let section_top_heading = "Team Member Carousel Heading 231220";

  test("Team member carousel should load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Slide 1 contents should be present
    await page.getByLabel('Go to slide 1').click();
    await page.waitForTimeout(400);

    await expect(page.getByRole('link', { name: 'one' }).first()).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member One' }).first()).toBeInViewport();
    await expect(page.getByText('Developer One').first()).toBeInViewport();
    await expect(page.getByText('Member Description One').first()).toBeInViewport();

    await expect(page.getByRole('link', { name: 'two' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member Two' }).nth(1)).toBeInViewport();
    await expect(page.getByText('Developer Two').nth(1)).toBeInViewport();
    await expect(page.getByText('Member Description Two').nth(1)).toBeInViewport();

    await expect(page.getByRole('link', { name: 'three' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member Three' }).nth(1)).toBeInViewport();
    await expect(page.getByText('Developer Three').nth(1)).toBeInViewport();
    await expect(page.getByText('Member Description Three').nth(1)).toBeInViewport();

        await expect(page.getByRole("link", { name: "four" }).nth(1)).not.toBeInViewport();
        await expect(page.getByRole("heading", { name: "Member Four" }).nth(1)).not.toBeInViewport();

    // Slide 2 contents should be present
    await page.getByLabel('Go to slide 2').click();
    await page.waitForTimeout(400);

        await expect(page.getByRole("link", { name: "one" }).first()).not.toBeInViewport();
        await expect(page.getByRole("heading", { name: "Member One" }).first()).not.toBeInViewport();

    await expect(page.getByRole('link', { name: 'two' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member Two' }).nth(1)).toBeInViewport();
    await expect(page.getByText('Developer Two').nth(1)).toBeInViewport();
    await expect(page.getByText('Member Description Two').nth(1)).toBeInViewport();

    await expect(page.getByRole('link', { name: 'three' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member Three' }).nth(1)).toBeInViewport();

    await expect(page.getByRole('link', { name: 'four' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member Four' }).nth(1)).toBeInViewport();

    // Slide 3 contents should be present
    await page.getByLabel('Go to slide 3').click();
    await page.waitForTimeout(400);

        await expect(page.getByRole("link", { name: "two" }).nth(1)).not.toBeInViewport();
        await expect(page.getByRole("heading", { name: "Member Two" }).nth(1)).not.toBeInViewport();

    await expect(page.getByRole('link', { name: 'three' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member Three' }).nth(1)).toBeInViewport();

    await expect(page.getByRole('link', { name: 'four' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member Four' }).nth(1)).toBeInViewport();

    await expect(page.getByRole('link', { name: 'one' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member One' }).nth(1)).toBeInViewport();

    // Slide 4 contents should be present
    await page.getByLabel('Go to slide 4').click();
    await page.waitForTimeout(400);

        await expect(page.getByRole("link", { name: "three" }).nth(1)).not.toBeInViewport();
        await expect(page.getByRole("heading", { name: "Member Three" }).nth(1)).not.toBeInViewport();

    await expect(page.getByRole('link', { name: 'four' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member Four' }).nth(1)).toBeInViewport();
    await expect(page.getByText('Developer Four').nth(1)).toBeInViewport();

    await expect(page.getByRole('link', { name: 'one' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member One' }).nth(1)).toBeInViewport();

    await expect(page.getByRole('link', { name: 'two' }).nth(2)).toBeInViewport();
    await expect(page.getByText('Developer Two').nth(2)).toBeInViewport();

    // Return to slide 1
    await page.getByLabel('Go to slide 1').click();
    await page.waitForTimeout(400);

    await expect(page.getByRole('link', { name: 'one' }).first()).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member One' }).first()).toBeInViewport();

    await expect(page.getByRole('link', { name: 'two' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member Two' }).nth(1)).toBeInViewport();

    await expect(page.getByRole('link', { name: 'three' }).nth(1)).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Member Three' }).nth(1)).toBeInViewport();
  });
});
