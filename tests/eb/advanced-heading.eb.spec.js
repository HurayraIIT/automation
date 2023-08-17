// @ts-check
import { test, expect } from "@playwright/test";
import verifyCss from "../../utils/cssVerification.js";

const DEMO_PAGE_URL = "https://essential-blocks.com/demo/advanced-heading/";
const DEMO_PAGE_TITLE = "Advanced Heading | Essential Gutenberg Blocks for WordPress";

test.beforeEach(async ({ page }) => {
  await page.goto(DEMO_PAGE_URL);
  await page.waitForLoadState();

  await expect(page).toHaveURL(DEMO_PAGE_URL);
  await expect(page).toHaveTitle(DEMO_PAGE_TITLE);

  const DEMO_PAGE_HEADING = page.getByRole("heading", { name: "Advanced Heading", exact: true });
  await expect(DEMO_PAGE_HEADING).toBeVisible();
});

test.describe("Test Advanced Heading Documentation From Demo Page.", () => {
    test("Test Advanced Heading documentation link should be present and should load.", async ({ page }) => {

        const DOC_PAGE_LINK = page.getByRole('link', { name: /Read Documentation/ });
        const DOC_PAGE_URL = "https://essential-blocks.com/docs/heading";
        const DOC_PAGE_TITLE = "EB Advanced Heading - Essential Blocks";
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
        await expect.soft(DOC_HEADING).toHaveText(/EB Advanced Heading/);
        await expect.soft(page).toHaveTitle(DOC_PAGE_TITLE);
    });
});

test.describe("Test Advanced Heading 'Default Preset' section.", () => {
    const class_advanced_heading = `.eb-advance-heading-c0tti2l`;
    let loc_advanced_heading = null;
    let loc_ah_title = null;
    let loc_ah_subtitle = null; 

    test.beforeEach(async ({ page }) => {
        /** Initialize some variables */
        loc_advanced_heading = page.locator(`${class_advanced_heading}`);
        loc_ah_title = page.locator(`${class_advanced_heading} > h2`);
        loc_ah_subtitle = page.locator(`${class_advanced_heading} > p`);
        // loc_ah_subtitle = page.getByText('We are a premium, French-style restaurant that serves whatever you enjoy about fine');

        /* Scroll to the Advanced Heading section and verify the heading. */
        await loc_advanced_heading.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await expect.soft(loc_ah_title).toBeInViewport();
    });

    test(`Test title and subtitle should match.`, async ({ page }) => {
        await expect.soft(loc_ah_title).toHaveText(/Default Preset/);
        await expect.soft(loc_ah_subtitle).toHaveText(/We are a premium, French-style restaurant that serves whatever you enjoy about fine/);
    });

    test(`Test style of the sections.`, async ({ page }) => {
        /** Verify CSS for the advanced heading section */
        const css_advanced_heading = {
            "position": "relative",
            "text-align": "left",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-left": "0px",
            "margin-bottom": "0px",
            "padding-top": "0px",
            "padding-right": "0px",
            "padding-left": "0px",
            "padding-bottom": "40px",
            "transition": "background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
        }
        await verifyCss(loc_advanced_heading, css_advanced_heading);

        /** Verify CSS for the ah title */
        const css_ah_title = {
            "text-align": "left",
            "color": "rgb(33, 28, 112)",
            "font-family": '"DM Sans"',
            "font-size": "48px",
            "line-height": "57.6px",
            "font-weight": "700",
            "font-style": "normal",
            "text-decoration": "none solid rgb(33, 28, 112)",
            "letter-spacing": "normal",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-left": "0px",
            "margin-bottom": "25px",
        }
        await verifyCss(loc_ah_title, css_ah_title);

        /** Verify CSS for the ah subtitle */
        const css_ah_subtitle = {
            "text-align": "left",
            "color": "rgb(106, 114, 165)",
            "font-family": '"DM Sans"',
            "font-size": "16px",
            "line-height": "28.8px",
            "font-weight": "400",
            "font-style": "normal",
            "text-decoration": "none solid rgb(106, 114, 165)",
            "letter-spacing": "normal",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-left": "0px",
            "margin-bottom": "0px",
        }
        await verifyCss(loc_ah_subtitle, css_ah_subtitle);
    });

});

test.describe("Test Advanced Heading 'Create Stunning Post Heading With Subtitle' section.", () => {
    const class_advanced_heading = `.eb-advance-heading-rjl1o8e`;
    let loc_advanced_heading = null;
    let loc_ah_title = null;
    let loc_ah_subtitle = null; 

    test.beforeEach(async ({ page }) => {
        /** Initialize some variables */
        loc_advanced_heading = page.locator(`${class_advanced_heading}`);
        loc_ah_title = page.locator(`${class_advanced_heading} > h2`);
        loc_ah_subtitle = page.locator(`${class_advanced_heading} > p`);
        // loc_ah_subtitle = page.getByText('We are a premium, French-style restaurant that serves whatever you enjoy about fine');

        /* Scroll to the Advanced Heading section and verify the heading. */
        await loc_advanced_heading.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await expect.soft(loc_ah_title).toBeInViewport();
    });

    test(`Test title and subtitle should match.`, async ({ page }) => {
        await expect.soft(loc_ah_title).toHaveText(/Create Stunning Post Heading With Subtitle/);
        await expect.soft(loc_ah_subtitle).toHaveText(/With the advanced Display Subtitle & Display Separator option, reveal your content in a compelling manner/);
    });

    test(`Test style of the sections.`, async ({ page }) => {
        /** Verify CSS for the advanced heading section */
        const css_advanced_heading = {
            "position": "relative",
            "text-align": "left",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-left": "0px",
            "margin-bottom": "0px",
            "padding-top": "0px",
            "padding-right": "0px",
            "padding-left": "0px",
            "padding-bottom": "72px",
            "transition": "background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
        }
        await verifyCss(loc_advanced_heading, css_advanced_heading);

        /** Verify CSS for the ah title */
        const css_ah_title = {
            "text-align": "left",
            "color": "rgb(255, 255, 255)",
            "font-family": '"DM Sans"',
            "font-size": "72px",
            "line-height": "79.2px",
            "font-weight": "500",
            "font-style": "normal",
            "text-decoration": "none solid rgb(255, 255, 255)",
            "letter-spacing": "normal",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-left": "0px",
            "margin-bottom": "25px",
        }
        await verifyCss(loc_ah_title, css_ah_title);

        /** Verify CSS for the ah subtitle */
        const css_ah_subtitle = {
            "text-align": "left",
            "color": "rgb(255, 255, 255)",
            "font-family": '"DM Sans"',
            "font-size": "16px",
            "line-height": "28.8px",
            "font-weight": "400",
            "font-style": "normal",
            "text-decoration": "none solid rgb(255, 255, 255)",
            "letter-spacing": "normal",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-left": "0px",
            "margin-bottom": "0px",
        }
        await verifyCss(loc_ah_subtitle, css_ah_subtitle);
    });

});
