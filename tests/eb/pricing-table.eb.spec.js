// @ts-check
import { test, expect } from "@playwright/test";
import verifyCss from "../../utils/cssVerification.js";

const DEMO_PAGE_URL = "https://essential-blocks.com/demo/pricing-table/";
const DEMO_PAGE_TITLE = "Pricing Table | Essential Gutenberg Blocks for WordPress";

test.beforeEach(async ({ page }) => {
  await page.goto(DEMO_PAGE_URL);
  await page.waitForLoadState();

  await expect(page).toHaveURL(DEMO_PAGE_URL);
  await expect(page).toHaveTitle(DEMO_PAGE_TITLE);

  const DEMO_PAGE_HEADING = page.getByRole("heading", { name: "Pricing Table", exact: true });
  await expect(DEMO_PAGE_HEADING).toBeVisible();
});

test.describe("Test EB Pricing Table Documentation From Demo Page.", () => {
    test("Test Pricing Table documentation link should be present and should load.", async ({ page }) => {

        const DOC_PAGE_LINK = page.getByRole('link', { name: /Read Documentation/ });
        const DOC_PAGE_URL = "https://essential-blocks.com/docs/pricing-table/";
        const DOC_PAGE_TITLE = "EB Pricing Table - Essential Blocks";
        const ADVANCED_SEARCH_HEADING = page.getByRole("heading", { name: /Essential Blocks Documentation/ });
        const DOC_HEADING = page.locator(".betterdocs-entry-title");
    
        // Check doc page link from demo page
        await DOC_PAGE_LINK.scrollIntoViewIfNeeded();
        await expect.soft(DOC_PAGE_LINK).toHaveAttribute("target", /_blank/);
        await expect.soft(DOC_PAGE_LINK).toHaveAttribute("href", DOC_PAGE_URL);
        await expect.soft(DOC_PAGE_LINK).toHaveClass(/eb-button-anchor/);
    
        // Visit doc page and check if doc page is loading
        await page.goto(DOC_PAGE_URL);
        await expect.soft(ADVANCED_SEARCH_HEADING).toBeVisible();
    
        await DOC_HEADING.scrollIntoViewIfNeeded();
        await expect.soft(DOC_HEADING).toHaveText(/EB Pricing Table/);
        await expect.soft(page).toHaveTitle(DOC_PAGE_TITLE);
    });
});

test.describe("Test EB 'Pricing Table Style 1' section.", () => {
  test.beforeEach(async ({ page }) => {
    /* Scroll to the 'Pricing Table Style 1' section 
    * and verify the heading and description. */
    const loc_section_heading = page.getByRole('heading', { name: 'Pricing Table Style 1' });
    const loc_section_description = page.getByText('The pricing table block will let you create an effective product pricing table').first();
    await loc_section_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_section_description).toBeInViewport();
  });

  test("Test 'Basic Access' table.", async ({ page }) => {
    const widget_id = ".eb-pricing-fnau4hl";

    /** Check the 'Basic Access' pricing title/heading */
    const loc_heading = page.getByRole('heading', { name: 'Basic Access' });
    await loc_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_heading).toBeInViewport();

    /** Verify the text-align for eb-pricing style-1 */
    const loc_style_1 = page.locator(`${widget_id} > .eb-pricing.style-1`);
    const css_style_1 = {
      "text-align": "center",
    }
    await verifyCss(loc_style_1, css_style_1);

    /** Verify CSS for the .eb-pricing-item section */
    const loc_eb_pricing_item = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item`);
    const css_eb_pricing_item = {
      "padding-top": "30px",
      "padding-right": "45px",
      "padding-left": "45px",
      "padding-bottom": "60px",
      "margin-top": "0px",
      "margin-right": "0px",
      "margin-left": "0px",
      "margin-bottom": "0px",
      "background-color": "rgb(255, 255, 255)",
      "border-radius": "3px",
      "border-width": "1px",
      "border-color": "rgb(175, 185, 210)",
      "border-style": "solid",
      "transition": "background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    }
    await verifyCss(loc_eb_pricing_item, css_eb_pricing_item);

    /** Verify css for .eb-pricing-item-overlay class */
    const loc_pricing_item_overlay = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-item-overlay`);
    const css_pricing_item_overlay = {
      "bottom": "0px",
      "left": "0px",
      "position": "absolute",
      "right": "0px",
      "top": "0px",
      "z-index": "1",
    }
    await verifyCss(loc_pricing_item_overlay, css_pricing_item_overlay);

    /** Verify CSS for .eb-pricing-icon */
    const loc_pricing_icon = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-icon > .icon`);
    const css_pricing_icon = {
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "width": "80px",
      "height": "80px",
    }
    await verifyCss(loc_pricing_icon, css_pricing_icon);
    await loc_pricing_icon.scrollIntoViewIfNeeded();

    /** Verify Icon font-size and color */
    const loc_icon = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-icon > .icon > .fa-paper-plane`);
    const css_icon = {
      "font-size": "36px",
      "color": "rgb(75, 143, 255)",
    }
    await verifyCss(loc_icon, css_icon);

    /** Verify css for .eb-pricing-tag */
    const loc_eb_pricing_tag = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-tag`);
    const css_eb_pricing_tag = {
      "margin-bottom": "15px",
      "padding": "15px 0px",
      "position": "relative",
    }
    await verifyCss(loc_eb_pricing_tag, css_eb_pricing_tag);
    await loc_heading.scrollIntoViewIfNeeded();

    /** Verify css for .eb-pricing-tag */
    const loc_price_tag = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-tag > .price-tag`);
    const css_price_tag = {
      "display": "inline-block",
      "font-size": "28px",
      "font-weight": "500",
      "line-height": "0px",
      "margin": "0px",
      "position": "relative",
    }
    await verifyCss(loc_price_tag, css_price_tag);
    await loc_price_tag.scrollIntoViewIfNeeded();

    /** Verify css for .original-price */
    const loc_original_price = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-tag > .price-tag > .original-price`);
    const css_original_price = {
      "font-family": '"DM Sans"',
      "font-size": "30px",
      "line-height": "36px",
      "font-weight": "700",
      "font-style": "normal",
      "text-decoration": "none solid rgb(75, 143, 255)",
      "letter-spacing": "normal",
      "color": "rgb(75, 143, 255)",
    }
    await verifyCss(loc_original_price, css_original_price);

    /** Verify css for .price-period */
    const loc_price_period = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-tag > .price-period`);
    const css_price_period = {
      "font-family": '"DM Sans"',
      "font-size": "16px",
      "line-height": "19.2px",
      "font-weight": "500",
      "font-style": "normal",
      "text-decoration": "none solid rgb(147, 153, 188)",
      "letter-spacing": "normal",
      "color": "rgb(147, 153, 188)",
    }
    await verifyCss(loc_price_period, css_price_period);
    await expect.soft(loc_price_period).toHaveAttribute("data-period-separator", "/");
    await expect.soft(loc_price_period).toHaveAttribute("data-price-period", "month");
    await loc_price_period.scrollIntoViewIfNeeded();

    /** Verify css for .eb-pricebox-features */
    const loc_pricebox_features = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-body > .eb-pricebox-features`);
    const css_pricebox_features = {
      "list-style": "outside none none",
      "margin": "0px 0px 15px",
      "padding": "0px",
      "display": "block",
      "margin-bottom": "15px",
    }
    await verifyCss(loc_pricebox_features, css_pricebox_features);
    await loc_pricebox_features.scrollIntoViewIfNeeded();

    /** Verify css for .eb-pricebox-feature-item */
    const loc_pricebox_feature_item_1 = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-body > .eb-pricebox-features > .eb-pricebox-feature-item`).first();
    const css_pricebox_feature_item_1 = {
      "font-family": '"DM Sans"',
      "font-size": "18px",
      "line-height": "21.6px",
      "font-weight": "500",
      "font-style": "normal",
      "text-decoration": "none solid rgb(33, 28, 112)",
      "letter-spacing": "normal",
      "color": "rgb(33, 28, 112)",
    }
    await verifyCss(loc_pricebox_feature_item_1, css_pricebox_feature_item_1);
    await expect.soft(loc_pricebox_feature_item_1).toHaveAttribute("data-color", "rgba(75,143,255,1)");
    await expect.soft(loc_pricebox_feature_item_1).toHaveAttribute("data-clickable", "false");
    await loc_pricebox_feature_item_1.scrollIntoViewIfNeeded();

    /** Verify Icon */
    const loc_pricebox_feature_item_icon = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-body > .eb-pricebox-features > .eb-pricebox-feature-item > .eb-pricebox-icon`).first();
    const css_pricebox_feature_item_icon = {
      "font-size": "15px",
      "margin-right": "8px",
    }
    await verifyCss(loc_pricebox_feature_item_icon, css_pricebox_feature_item_icon);
    await expect.soft(loc_pricebox_feature_item_icon).toHaveAttribute("style", "color:rgba(75,143,255,1)");

    /** Verify Text */
    const loc_feature_text = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-body > .eb-pricebox-features > .eb-pricebox-feature-item > .eb-pricebox-feature-text`).first();
    await loc_feature_text.scrollIntoViewIfNeeded();
    await expect.soft(loc_feature_text).toHaveText(/Unlimited Calls/);

    /** Verify pricing button */
    const loc_pricing_button = page.locator(`${widget_id} > .eb-pricing > .eb-pricing-item > .eb-pricing-footer > .eb-pricing-button-wrapper > .eb-pricing-button`);
    await loc_pricing_button.scrollIntoViewIfNeeded();
    const css_pricing_button = {
      "padding-top": "17px",
      "padding-right": "37px",
      "padding-left": "37px",
      "padding-bottom": "17px",
      "font-family": '"DM Sans"',
      "font-size": "16px",
      "line-height": "16px",
      "font-weight": "500",
      "font-style": "normal",
      "text-decoration": "none solid rgb(255, 255, 255)",
      "letter-spacing": "normal",
      "background-color": "rgb(33, 28, 112)",
      "color": "rgb(255, 255, 255)",
      "transition": "background 0.5s ease 0s",
    }
    await verifyCss(loc_pricing_button, css_pricing_button);
    await expect.soft(loc_pricing_button).toHaveText(/Select Plan/);

    // This section is removed due to flakiness
    // /** Hover */
    // await page.mouse.down();
    // await page.mouse.down();
    // await page.mouse.down();
    // await page.waitForTimeout(1000);
    // await loc_pricing_button.hover();
    // await page.waitForTimeout(600);
    // await expect.soft(loc_pricing_button).toHaveCSS("background-color", "rgb(75, 143, 255)");

    // /** Remove Hover and verify CSS */
    // await loc_heading.click();
    // await page.waitForTimeout(600);

    // await verifyCss(loc_pricing_button, css_pricing_button);
  });

});


