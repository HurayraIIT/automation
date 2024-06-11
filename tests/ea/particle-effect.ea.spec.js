// @ts-check
import { test, expect } from "@playwright/test";

let slug = "/ea/particle-effect";

test.beforeEach(async ({ page }) => {
  await page.goto(slug);
  await page.waitForTimeout(200);
  await page.waitForLoadState("networkidle");
});

test.describe("Test particle effect.", () => {
  let section_top_heading = "Particle Effect Heading240611";

  test("Particle effect properly load.", async ({ page }) => {
    await page.getByText(section_top_heading).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Check all contents should be visible
    await expect(page.locator("#eael-section-particles-dccb28d")).toBeVisible();
    await expect(page.locator("#eael-section-particles-dccb28d")).toHaveAttribute(
      "data-settings",
      '{"background_background":"classic"}'
    );
    await expect(page.locator("#eael-section-particles-dccb28d")).toHaveAttribute(
      "data-particle-mobile-disabled",
      "false"
    );
    await expect(page.locator("#eael-section-particles-dccb28d")).toHaveAttribute("data-particle_speed", "7");
    await expect(page.locator("#eael-section-particles-dccb28d")).toHaveAttribute("data-particle_opacity", "0.51");
    await expect(page.locator("#eael-section-particles-dccb28d")).toHaveAttribute("data-preset_theme", "snow");
    await expect(page.locator("#eael-section-particles-dccb28d")).toHaveAttribute("data-particle_enable", "true");
    await expect(page.locator("#eael-section-particles-dccb28d")).toHaveAttribute("data-eael_ptheme_source", "presets");

    await expect(page.locator("#eael-section-particles-dccb28d > .e-con-inner")).toBeVisible();
    await expect(page.locator("#eael-section-particles-dccb28d > .particles-js-canvas-el")).toBeVisible();
    await expect(page.locator("#eael-section-particles-dccb28d > .particles-js-canvas-el")).toHaveAttribute(
      "width",
      "1140"
    );
    await expect(page.locator("#eael-section-particles-dccb28d > .particles-js-canvas-el")).toHaveAttribute(
      "height",
      "501"
    );
    await expect(page.locator("#eael-section-particles-dccb28d > .particles-js-canvas-el")).toHaveAttribute(
      "style",
      "width: 100%; height: 100%;"
    );
  });
});
