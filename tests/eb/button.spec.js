// @ts-check
import { test, expect } from "@playwright/test";
import verifyCss from "../../utils/cssVerification.js";

const BUTTON_DEMO_PAGE_URL = "https://essential-blocks.com/demo/button/";
const BUTTON_DEMO_PAGE_TITLE = "Button | Essential Gutenberg Blocks for WordPress";

test.beforeEach(async ({ page }) => {
  await page.goto(BUTTON_DEMO_PAGE_URL);
  await page.waitForLoadState();

  await expect(page).toHaveURL(BUTTON_DEMO_PAGE_URL);
  await expect(page).toHaveTitle(BUTTON_DEMO_PAGE_TITLE);

  const BUTTON_DEMO_PAGE_HEADING = page.getByRole("heading", { name: "Button", exact: true });
  await expect(BUTTON_DEMO_PAGE_HEADING).toBeVisible();
});

test.describe("Test EB Button Documentation From Button Demo Page.", () => {
    test("Test Button documentation link should be present and should load.", async ({ page }) => {

        const DOC_PAGE_LINK = page.getByRole('link', { name: /Read Documentation/ });
        const BUTTON_DOC_PAGE_URL = "https://essential-blocks.com/docs/button";
        const BUTTON_DOC_PAGE_TITLE = "EB Button - Essential Blocks";
        const ADVANCED_SEARCH_HEADING = page.getByRole("heading", { name: /Essential Blocks Documentation/ });
        const DOC_HEADING = page.locator(".betterdocs-entry-title");
    
        // Check doc page link from demo page
        await DOC_PAGE_LINK.scrollIntoViewIfNeeded();
        await expect.soft(DOC_PAGE_LINK).toHaveAttribute("target", /_blank/);
        await expect.soft(DOC_PAGE_LINK).toHaveAttribute("href", BUTTON_DOC_PAGE_URL);
        await expect.soft(DOC_PAGE_LINK).toHaveClass(/eb-button-anchor/);
    
        // Visit doc page and check if doc page is loading
        await page.goto(BUTTON_DOC_PAGE_URL);
        await expect.soft(ADVANCED_SEARCH_HEADING).toBeVisible();
    
        await DOC_HEADING.scrollIntoViewIfNeeded();
        await expect.soft(DOC_HEADING).toHaveText(/EB Button/);
        await expect.soft(page).toHaveTitle(BUTTON_DOC_PAGE_TITLE);
    });
});

test.describe("Test EB Buttons from 'Design The Button Using Icons' section.", () => {
  test.beforeEach(async ({ page }) => {
    /* Scroll to the 'Design The Button Using Icons' section 
    * and verify the heading and description. */
    const loc_section_heading = page.getByRole('heading', { name: 'Design The Button Using Icons' });
    const loc_section_description = page.getByText('Try out the Default, Info, Success, Warning, or Danger button from the');
    await loc_section_heading.scrollIntoViewIfNeeded();
    await expect(loc_section_description).toBeInViewport();
  });

  test("Test 'Example 1' button.", async ({ page }) => {
    const widget_id = ".eb-button-ca7ijfs";

    /** Check the Example 1 button heading */
    const loc_button_heading = page.getByRole('heading', { name: 'Rectangular Shape Button' });
    await loc_button_heading.scrollIntoViewIfNeeded();
    await expect(loc_button_heading).toBeInViewport();

    /** Verify the CSS and link for Example 1 button */
    const loc_button = page.locator(`${widget_id} > .eb-button > .eb-button-anchor`);
    const css_button = {
        "background-color": "rgb(14, 99, 255)",
        "border-radius": "0px",
        "font-family": '"DM Sans"',
        "font-size": "14px",
        "font-weight": "500",
        "padding-top": "9px",
        "padding-right": "38px",
        "padding-left": "38px",
        "padding-bottom": "9px",
        "color": "rgb(255, 255, 255)",
        "transition": "all 0.3s ease 0s, background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    }
    await verifyCss(loc_button, css_button);
    await expect(loc_button).toHaveAttribute('href', 'javascript:void(0)');

    /** Verify button hover CSS */
    await loc_button.hover();
    await page.waitForTimeout(600);
    const css_hover_button = {
        "background-color": "rgb(14, 77, 190)"
    }
    await verifyCss(loc_button, css_hover_button);

    /** Verify css after removing button hover.  */
    await loc_button_heading.click();
    await page.waitForTimeout(600);
    await verifyCss(loc_button, css_button);
  });

  test("Test 'Example 2' button.", async ({ page }) => {
    const widget_id = ".eb-button-6k5pu82";

    /** Check the Example 2 button heading */
    const loc_button_heading = page.getByRole('heading', { name: 'Button With Left Icon' });
    await loc_button_heading.scrollIntoViewIfNeeded();
    await expect(loc_button_heading).toBeInViewport();

    /** Verify the CSS and link for Example 2 button */
    const loc_button = page.locator(`${widget_id} > .eb-button > .eb-button-anchor`);
    const css_button = {
        "background-color": "rgb(253, 107, 65)",
        "border-radius": "3px",
        "font-family": '"DM Sans"',
        "font-size": "14px",
        "font-weight": "500",
        "padding-top": "9px",
        "padding-right": "27px",
        "padding-left": "27px",
        "padding-bottom": "9px",
        "color": "rgb(255, 255, 255)",
        "transition": "all 0.3s ease 0s, background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    }
    await verifyCss(loc_button, css_button);
    await expect(loc_button).toHaveAttribute('href', 'javascript:void(0)');

    /** Verify button hover CSS */
    await loc_button.hover();
    await page.waitForTimeout(600);
    const css_hover_button = {
        "background-color": "rgb(218, 92, 57)"
    }
    await verifyCss(loc_button, css_hover_button);

    /** Verify css after removing button hover.  */
    await loc_button_heading.click();
    await page.waitForTimeout(600);
    await verifyCss(loc_button, css_button);

    /** Verify css and position for button icon */
    const loc_button_icon = page.locator(`${widget_id} > .eb-button > .eb-button-anchor > .eb-button-icon`);
    const css_button_icon = {
        "font-size": "14px",
        "margin-right": "8px",
    }
    await verifyCss(loc_button_icon, css_button_icon);
    await expect(loc_button_icon).toHaveClass(/eb-button-icon-left/);
  });

  test("Test 'Example 3' button.", async ({ page }) => {
    const widget_id = ".eb-button-deh3u2o";

    /** Check the Example 3 button heading */
    const loc_button_heading = page.getByRole('heading', { name: 'Button With Right Icon' });
    await loc_button_heading.scrollIntoViewIfNeeded();
    await expect(loc_button_heading).toBeInViewport();

    /** Verify the CSS and link for Example 3 button */
    const loc_button = page.locator(`${widget_id} > .eb-button > .eb-button-anchor`);
    const css_button = {
        "background-color": "rgb(141, 101, 250)",
        "border-radius": "10px",
        "font-family": '"DM Sans"',
        "font-size": "14px",
        "font-weight": "500",
        "padding-top": "9px",
        "padding-right": "27px",
        "padding-left": "27px",
        "padding-bottom": "9px",
        "color": "rgb(255, 255, 255)",
        "transition": "all 0.3s ease 0s, background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    }
    await verifyCss(loc_button, css_button);
    await expect(loc_button).toHaveAttribute('href', 'javascript:void(0)');

    /** Verify button hover CSS */
    await loc_button.hover();
    await page.waitForTimeout(600);
    const css_hover_button = {
        "background-color": "rgb(110, 73, 213)"
    }
    await verifyCss(loc_button, css_hover_button);

    /** Verify css after removing button hover.  */
    await loc_button_heading.click();
    await page.waitForTimeout(600);
    await verifyCss(loc_button, css_button);

    /** Verify css and position for button icon */
    const loc_button_icon = page.locator(`${widget_id} > .eb-button > .eb-button-anchor > .eb-button-icon`);
    const css_button_icon = {
        "font-size": "14px",
        "margin-left": "8px",
    }
    await verifyCss(loc_button_icon, css_button_icon);
    await expect(loc_button_icon).toHaveClass(/eb-button-icon-right/);
  });

  test("Test 'Example 4' button.", async ({ page }) => {
    const widget_id = ".eb-button-damlfl4";

    /** Check the Example 4 button heading */
    const loc_button_heading = page.getByRole('heading', { name: 'Rounded Shape Button' });
    await loc_button_heading.scrollIntoViewIfNeeded();
    await expect(loc_button_heading).toBeInViewport();

    /** Verify the CSS and link for Example 4 button */
    const loc_button = page.locator(`${widget_id} > .eb-button > .eb-button-anchor`);
    const css_button = {
        "background-color": "rgb(248, 63, 96)",
        "border-radius": "50px",
        "font-family": '"DM Sans"',
        "font-size": "14px",
        "font-weight": "500",
        "padding-top": "9px",
        "padding-right": "38px",
        "padding-left": "38px",
        "padding-bottom": "9px",
        "color": "rgb(255, 255, 255)",
        "transition": "all 0.3s ease 0s, background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    }
    await verifyCss(loc_button, css_button);
    await expect(loc_button).toHaveAttribute('href', 'javascript:void(0)');

    /** Verify button hover CSS */
    await loc_button.hover();
    await page.waitForTimeout(600);
    const css_hover_button = {
        "background-color": "rgb(218, 48, 79)"
    }
    await verifyCss(loc_button, css_hover_button);

    /** Verify css after removing button hover.  */
    await loc_button_heading.click();
    await page.waitForTimeout(600);
    await verifyCss(loc_button, css_button);
  });
});

test.describe("Test EB Buttons from 'Explore Gradient Color For Upbeat Look' section.", () => {
    test.beforeEach(async ({ page }) => {
      /* Scroll to the 'Explore Gradient Color For Upbeat Look' section 
      * and verify the heading and description. */
      const loc_section_heading = page.getByRole('heading', { name: 'Explore Gradient Color For Upbeat Look' });
      const loc_section_description = page.getByText('Pick gradient color mo de and make your website buttons more eye-catchy');
      await loc_section_heading.scrollIntoViewIfNeeded();
      await expect(loc_section_description).toBeInViewport();
    });
  
    test("Test 'Example 1' button.", async ({ page }) => {
      const widget_id = ".eb-button-oed99im";

      /** Verify the CSS and link for Example 1 button */
      const loc_button = page.locator(`${widget_id} > .eb-button > .eb-button-anchor`);
      await loc_button.scrollIntoViewIfNeeded();
      const css_button = {
          "background-color": "rgb(38, 115, 255)",
          "border-radius": "5px",
          "font-family": '"DM Sans"',
          "font-size": "20px",
          "font-weight": "500",
          "padding-top": "20px",
          "padding-right": "45px",
          "padding-left": "45px",
          "padding-bottom": "20px",
          "color": "rgb(255, 255, 255)",
          "transition": "all 0.3s ease 0s, background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
      }
      await verifyCss(loc_button, css_button);
      await expect(loc_button).toHaveAttribute('href', 'javascript:void(0)');
  
      /** Verify button hover CSS */
      await loc_button.hover();
      await page.waitForTimeout(600);
      const css_hover_button = {
          "background-color": "rgb(31, 100, 229)"
      }
      await verifyCss(loc_button, css_hover_button);
  
      /** Verify css after removing button hover.  */
      const loc_section_heading = page.getByRole('heading', { name: 'Explore Gradient Color For Upbeat Look' });
      await loc_section_heading.click();
      await page.waitForTimeout(600);
      await verifyCss(loc_button, css_button);
    });

    test("Test 'Example 6' button.", async ({ page }) => {
        const widget_id = ".eb-button-mcxx9vw";
  
        /** Verify the CSS and link for Example 6 button */
        const loc_button = page.locator(`${widget_id} > .eb-button > .eb-button-anchor`);
        await loc_button.scrollIntoViewIfNeeded();
        const css_button = {
            "background-image": "linear-gradient(45deg, rgb(38, 115, 255) 0%, rgb(204, 0, 255) 100%)",
            "background-color": "rgb(253, 107, 65)",
            "border-radius": "5px",
            "font-family": '"DM Sans"',
            "font-size": "18px",
            "font-weight": "500",
            "padding-top": "16px",
            "padding-right": "35px",
            "padding-left": "35px",
            "padding-bottom": "16px",
            "color": "rgb(255, 255, 255)",
            "transition": "all 0.3s ease 0s, background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
        }
        await verifyCss(loc_button, css_button);
        await expect(loc_button).toHaveAttribute('href', 'javascript:void(0)');
    
        /** Verify button hover CSS */
        await loc_button.hover();
        await page.waitForTimeout(600);
        const css_hover_button = {
            "background-image": "linear-gradient(45deg, rgb(204, 0, 255) 0%, rgb(38, 115, 255) 100%)",
            "background-color": "rgb(218, 92, 57)",
        }
        await verifyCss(loc_button, css_hover_button);
    
        /** Verify css after removing button hover.  */
        const loc_section_heading = page.getByRole('heading', { name: 'Explore Gradient Color For Upbeat Look' });
        await loc_section_heading.click();
        await page.waitForTimeout(600);
        await verifyCss(loc_button, css_button);

        /** Verify css and position for button icon */
        const loc_button_icon = page.locator(`${widget_id} > .eb-button > .eb-button-anchor > .eb-button-icon`);
        const css_button_icon = {
          "font-size": "14px",
          "margin-left": "16px",
        }
        await verifyCss(loc_button_icon, css_button_icon);
        await expect(loc_button_icon).toHaveClass(/eb-button-icon-right/);
      });
  });
