// @ts-check
import { test, expect } from "@playwright/test";
import verifyCss from "../../utils/cssVerification.js";

const DEMO_PAGE_URL = "https://essential-blocks.com/demo/accordion/";
const DEMO_PAGE_TITLE = "Accordion | Essential Gutenberg Blocks for WordPress";

test.beforeEach(async ({ page }) => {
  await page.goto(DEMO_PAGE_URL);
  await page.waitForLoadState();

  await expect(page).toHaveURL(DEMO_PAGE_URL);
  await expect(page).toHaveTitle(DEMO_PAGE_TITLE);

  const DEMO_PAGE_HEADING = page.getByRole("heading", { name: "Accordion", exact: true });
  await expect(DEMO_PAGE_HEADING).toBeVisible();
});

test.describe("Test Accordion Documentation From Demo Page.", () => {
    test("Test Accordion documentation link should be present and should load.", async ({ page }) => {

        const DOC_PAGE_LINK = page.getByRole('link', { name: /Read Documentation/ });
        const DOC_PAGE_URL = "https://essential-blocks.com/docs/accordion";
        const DOC_PAGE_TITLE = "EB Accordion - Essential Blocks";
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
        await expect.soft(DOC_HEADING).toHaveText(/EB Accordion/);
        await expect.soft(page).toHaveTitle(DOC_PAGE_TITLE);
    });
});

test.describe("Test EB 'Present Accordion With Versatile Style' section.", () => {
    const class_accordion = ".eb-accordion-lrs9fip";
    let loc_accordion = null;

    const class_item_1 = ".eb-accordion-item-9skirus";
    const class_item_2 = ".eb-accordion-item-3mxf4i1";
    const class_item_3 = ".eb-accordion-item-itkel6z";
    const class_item_4 = ".eb-accordion-item-wkef0zu";

    let loc_item_1_heading = null;
    let loc_item_1_content = null;
    let loc_item_1_icon = null;

    let loc_item_2_heading = null;
    let loc_item_2_content = null;
    let loc_item_2_icon = null;

    let loc_item_3_heading = null;
    let loc_item_3_content = null;
    let loc_item_3_icon = null;

    let loc_item_4_heading = null;
    let loc_item_4_content = null;
    let loc_item_4_icon = null;

  test.beforeEach(async ({ page }) => {
    /* Scroll to the 'Present Accordion With Versatile Style' section 
    * and verify the heading. */
    const loc_section_heading = page.getByRole('heading', { name: 'Present Accordion With Versatile Style' });
    await loc_section_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_section_heading).toBeInViewport();

    // Initialize some variables
    loc_accordion = page.locator(`${class_accordion}`);

    loc_item_1_heading = page.locator(`${class_item_1} > .eb-accordion-title-wrapper > .eb-accordion-title`);
    loc_item_1_content = page.locator(`${class_item_1} > .eb-accordion-content-wrapper > .eb-accordion-content > p`);
    loc_item_1_icon = page.locator(`${class_item_1} > .eb-accordion-title-wrapper > .eb-accordion-icon-wrapper > .eb-accordion-icon`);

    loc_item_2_heading = page.locator(`${class_item_2} > .eb-accordion-title-wrapper > .eb-accordion-title`);
    loc_item_2_content = page.locator(`${class_item_2} > .eb-accordion-content-wrapper > .eb-accordion-content > p`);
    loc_item_2_icon = page.locator(`${class_item_2} > .eb-accordion-title-wrapper > .eb-accordion-icon-wrapper > .eb-accordion-icon`);

    loc_item_3_heading = page.locator(`${class_item_3} > .eb-accordion-title-wrapper > .eb-accordion-title`);
    loc_item_3_content = page.locator(`${class_item_3} > .eb-accordion-content-wrapper > .eb-accordion-content`);
    loc_item_3_icon = page.locator(`${class_item_3} > .eb-accordion-title-wrapper > .eb-accordion-icon-wrapper > .eb-accordion-icon`);

    loc_item_4_heading = page.locator(`${class_item_4} > .eb-accordion-title-wrapper > .eb-accordion-title`);
    loc_item_4_content = page.locator(`${class_item_4} > .eb-accordion-content-wrapper > .eb-accordion-content`);
    loc_item_4_icon = page.locator(`${class_item_4} > .eb-accordion-title-wrapper > .eb-accordion-icon-wrapper > .eb-accordion-icon`);
  });

  test("Test Accordion text title to be visible and content to be hidden.", async ({ page }) => {

    /** The title should be visible and the content should be hidden. */

    // First item
    await loc_item_1_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_1_heading).toHaveText(`List of easy-to-care-for indoor plants`);
    await expect.soft(loc_item_1_heading).toBeVisible();
    await expect.soft(loc_item_1_content).toHaveText(`Plants are a simple way to add color, energy, and transformation to your home, but which one is right for you? The perfect plant for you will be determined by your personal style preferences, the size of your room, and the location in which you live or work.`);
    await expect.soft(loc_item_1_content).not.toBeInViewport();
    await expect.soft(loc_item_1_icon).toHaveClass(/fa-plus/);
    
    // Second Item
    await loc_item_2_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_2_heading).toHaveText(`The right plants for your home`);
    await expect.soft(loc_item_2_heading).toBeVisible();
    await expect.soft(loc_item_2_content).toHaveText(`Plants are a simple way to add color, energy, and transformation to your home, but which one is right for you? The perfect plant for you will be determined by your personal style preferences, the size of your room, and the location in which you live or work.`);
    await expect.soft(loc_item_2_content).not.toBeInViewport();
    await expect.soft(loc_item_2_icon).toHaveClass(/fa-plus/);
    
    // Third item.
    await loc_item_3_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_3_heading).toHaveText(`The right plants for your office`);
    await expect.soft(loc_item_3_heading).toBeVisible();
    await expect.soft(loc_item_3_content).toHaveText(`Plants are a simple way to add color, energy, and transformation to your home, but which one is right for you? The perfect plant for you will be determined by your personal style preferences, the size of your room, and the location in which you live or work.`);
    await expect.soft(loc_item_3_content).not.toBeInViewport();
    await expect.soft(loc_item_3_icon).toHaveClass(/fa-plus/);
    
    // Fourth item.
    await loc_item_4_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_4_heading).toHaveText(`Do you offer any care tips for plants?`);
    await expect.soft(loc_item_4_heading).toBeVisible();
    await expect.soft(loc_item_4_content).toHaveText(`Plants are a simple way to add color, energy, and transformation to your home, but which one is right for you? The perfect plant for you will be determined by your personal style preferences, the size of your room, and the location in which you live or work.`);
    await expect.soft(loc_item_4_content).not.toBeInViewport();
    await expect.soft(loc_item_4_icon).toHaveClass(/fa-plus/);
  });

  test("Test Accordion first item expand should work properly.", async ({ page }) => {
    // Click the item and verify that only this one is expanded.

    await loc_item_1_heading.click();
    await loc_item_1_heading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await expect.soft(loc_item_1_heading).toBeVisible();
    await expect.soft(loc_item_1_content).toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_1}`)).not.toHaveClass(`eb-accordion-hidden`);
    await expect.soft(loc_item_1_icon).toHaveClass(/fa-minus/);

    await loc_item_2_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_2_heading).toBeVisible();
    await expect.soft(loc_item_2_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_2}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_2_icon).toHaveClass(/fa-plus/);

    await loc_item_3_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_3_heading).toBeVisible();
    await expect.soft(loc_item_3_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_3}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_3_icon).toHaveClass(/fa-plus/);
    
    await loc_item_4_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_4_heading).toBeVisible();
    await expect.soft(loc_item_4_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_4}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_4_icon).toHaveClass(/fa-plus/);
  });

  test("Test Accordion second item expand should work properly.", async ({ page }) => {
    // Click the item and verify that only this one is expanded.

    await loc_item_2_heading.click();
    await loc_item_2_heading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await expect.soft(loc_item_2_heading).toBeVisible();
    await expect.soft(loc_item_2_content).toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_2}`)).not.toHaveClass(`eb-accordion-hidden`);
    await expect.soft(loc_item_2_icon).toHaveClass(/fa-minus/);

    await loc_item_1_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_1_heading).toBeVisible();
    await expect.soft(loc_item_1_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_1}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_1_icon).toHaveClass(/fa-plus/);

    await loc_item_3_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_3_heading).toBeVisible();
    await expect.soft(loc_item_3_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_3}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_3_icon).toHaveClass(/fa-plus/);
    
    await loc_item_4_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_4_heading).toBeVisible();
    await expect.soft(loc_item_4_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_4}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_4_icon).toHaveClass(/fa-plus/);
  });

  test("Test Accordion third item expand should work properly.", async ({ page }) => {
    // Click the item and verify that only this one is expanded.

    await loc_item_3_heading.click();
    await loc_item_3_heading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await expect.soft(loc_item_3_heading).toBeVisible();
    await expect.soft(loc_item_3_content).toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_3}`)).not.toHaveClass(`eb-accordion-hidden`);
    await expect.soft(loc_item_3_icon).toHaveClass(/fa-minus/);

    await loc_item_1_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_1_heading).toBeVisible();
    await expect.soft(loc_item_1_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_1}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_1_icon).toHaveClass(/fa-plus/);

    await loc_item_2_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_2_heading).toBeVisible();
    await expect.soft(loc_item_2_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_2}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_2_icon).toHaveClass(/fa-plus/);
    
    await loc_item_4_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_4_heading).toBeVisible();
    await expect.soft(loc_item_4_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_4}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_4_icon).toHaveClass(/fa-plus/);
  });

  test("Test Accordion fourth item expand should work properly.", async ({ page }) => {
    // Click the item and verify that only this one is expanded.

    await loc_item_4_heading.click();
    await loc_item_4_heading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await expect.soft(loc_item_4_heading).toBeVisible();
    await expect.soft(loc_item_4_content).toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_4}`)).not.toHaveClass(`eb-accordion-hidden`);
    await expect.soft(loc_item_4_icon).toHaveClass(/fa-minus/);

    await loc_item_1_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_1_heading).toBeVisible();
    await expect.soft(loc_item_1_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_1}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_1_icon).toHaveClass(/fa-plus/);

    await loc_item_2_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_2_heading).toBeVisible();
    await expect.soft(loc_item_2_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_2}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_2_icon).toHaveClass(/fa-plus/);
    
    await loc_item_3_heading.scrollIntoViewIfNeeded();
    await expect.soft(loc_item_3_heading).toBeVisible();
    await expect.soft(loc_item_3_content).not.toBeInViewport();
    await expect.soft(page.locator(`${class_accordion} > .eb-accordion-inner > ${class_item_3}`)).toHaveClass(/eb-accordion-hidden/);
    await expect.soft(loc_item_3_icon).toHaveClass(/fa-plus/);
  });

  test("Test Accordion style should be valid.", async ({ page }) => {
    /** Verify CSS for accordion item title */
    const css_item_1_heading = {
        "box-sizing": "border-box",
        "clear": "both",
        "color": "rgb(255, 255, 255)",
        "cursor": "pointer",
        "display": "block",
        "flex-basis": "0%",
        "flex-grow": "1",
        "flex-shrink": "1",
        "font-family": '"DM Sans"',
        "font-size": "22px",
        "font-weight": "500",
        "height": "28.5938px",
        "line-height": "28.6px",
        "margin-block-end": "0px",
        "margin-block-start": "0px",
        "margin-bottom": "0px",
        "margin-inline-end": "0px",
        "margin-inline-start": "0px",
        "margin-left": "0px",
        "margin-right": "0px",
        "margin-top": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
        "padding-top": "0px",
        "scroll-behavior": "smooth",
        "text-align": "left",
        "text-size-adjust": "100%",
        "text-transform": "none",
    }
    await verifyCss(loc_item_1_heading, css_item_1_heading);

    /** Verify CSS for accordion item content. */
    const css_item_1_content = {
        "box-sizing": "border-box",
        "color": "rgb(254, 254, 254)",
        "display": "block",
        "font-family": /.Open Sans.*/,
        "font-size": "18px",
        "font-weight": "400",
        "line-height": "25.2px",
        "margin-block-end": "0px",
        "margin-block-start": "0px",
        "margin-bottom": "0px",
        "margin-inline-end": "0px",
        "margin-inline-start": "0px",
        "margin-left": "0px",
        "margin-right": "0px",
        "margin-top": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
        "padding-top": "0px",
        "scroll-behavior": "smooth",
        "text-align": "left",
        "text-transform": "none",
        "visibility": "visible",
    };
    await verifyCss(loc_item_1_content, css_item_1_content);

    /** Verify CSS for the EB accordion title wrapper */
    const class_item_1_title_wrapper = page.locator(`${class_item_1} > .eb-accordion-title-wrapper`);
    const css_item_1_title_wrapper = {
        "cursor": "pointer",
        "display": "flex",
        "align-items": "center",
        "flex-direction": "row-reverse",
        "background-color": "rgb(134, 114, 255)",
        "padding-top": "17px",
        "padding-right": "30px",
        "padding-left": "30px",
        "padding-bottom": "17px",
        "border-top-width": "0px",
        "border-right-width": "0px",
        "border-left-width": "0px",
        "border-bottom-width": "1px",
        "border-color": "rgba(255, 255, 255, 0.2)",
        "border-style": "solid",
        "transition": "background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    }
    await verifyCss(class_item_1_title_wrapper, css_item_1_title_wrapper);

    /** Verify CSS for the EB accordion content */
    const class_item_1_accordion_content = page.locator(`${class_item_1} > .eb-accordion-content-wrapper > .eb-accordion-content`);
    const css_item_1_accordion_content = {
        "color": "rgb(254, 254, 254)",
        "text-align": "left",
        "font-family": '"DM Sans"',
        "font-size": "18px",
        "line-height": "32.4px",
        "font-weight": "400",
        "margin-top": "20px",
        "padding": "20px",
        "border-width": "0px",
        "border-color": "rgba(255, 255, 255, 0)",
        "border-style": "solid",
        "transition": "border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s, background 0.5s ease 0s",
    }
    await verifyCss(class_item_1_accordion_content, css_item_1_accordion_content);

    /** Verify CSS for the EB accordion icon wrapper */
    const class_item_1_accordion_icon_wrapper = page.locator(`${class_item_1} > .eb-accordion-title-wrapper > .eb-accordion-icon-wrapper`);
    const css_item_1_accordion_icon_wrapper = {
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "transition": "background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    }
    await verifyCss(class_item_1_accordion_icon_wrapper, css_item_1_accordion_icon_wrapper);

    /** Verify CSS for the EB accordion icon */
    const class_item_1_accordion_icon = page.locator(`${class_item_1} > .eb-accordion-title-wrapper > .eb-accordion-icon-wrapper > .eb-accordion-icon`);
    const css_item_1_accordion_icon = {
        "text-align": "center",
        "color": "rgb(255, 255, 255)",
        "font-size": "14px",
        "width": "14px",
    }
    await verifyCss(class_item_1_accordion_icon, css_item_1_accordion_icon);
  });
});


