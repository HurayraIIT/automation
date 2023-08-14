// @ts-check
import { test, expect } from "@playwright/test";
import verifyCss from "../../utils/cssVerification.js";

const INFOBOX_DEMO_PAGE_URL = "https://essential-blocks.com/demo/infobox/";
const INFOBOX_DEMO_PAGE_TITLE =
  "Infobox | Essential Gutenberg Blocks for WordPress";
const INFOBOX_DOC_PAGE_URL = "https://essential-blocks.com/docs/infobox/";
const INFOBOX_DOC_PAGE_TITLE = "EB Infobox - Essential Blocks";

test.beforeEach(async ({ page }) => {
  await page.goto(INFOBOX_DEMO_PAGE_URL);
  await page.waitForLoadState();

  await expect(page).toHaveURL(INFOBOX_DEMO_PAGE_URL);
  await expect(page).toHaveTitle(INFOBOX_DEMO_PAGE_TITLE);

  const INFOBOX_DEMO_PAGE_HEADING = page.getByRole("heading", {
    name: "Infobox",
    exact: true,
  });
  await expect(INFOBOX_DEMO_PAGE_HEADING).toBeVisible();
});

test.describe("Test EB Infobox Demo Page.", () => {
  test("Test Infobox documentation should be present.", async ({ page }) => {
    // Check doc page link
    const DOC_PAGE_LINK = page.getByRole('link', { name: /Read Documentation/ });
    await DOC_PAGE_LINK.scrollIntoViewIfNeeded();
    await expect.soft(DOC_PAGE_LINK).toHaveAttribute("target", /_blank/);
    await expect.soft(DOC_PAGE_LINK).toHaveAttribute("href", INFOBOX_DOC_PAGE_URL);
    await expect.soft(DOC_PAGE_LINK).toHaveClass(/eb-button-anchor/);

    // Check if doc page is loading
    await page.goto(INFOBOX_DOC_PAGE_URL);
    const ADVANCED_SEARCH_HEADING = page.getByRole("heading", { name: /Essential Blocks Documentation/ });
    await expect.soft(ADVANCED_SEARCH_HEADING).toBeVisible();

    const DOC_HEADING = page.locator(".betterdocs-entry-title");
    await DOC_HEADING.scrollIntoViewIfNeeded();
    await expect.soft(DOC_HEADING).toHaveText(/EB Infobox/);
  });

  test("Test Infobox Preset 1.", async ({ page }) => {
    // Scroll to the preset 1 section
    const PRESET_1_HEADING = page.getByRole("heading", {
      name: "Create Infobox With Preset 1",
    });
    await PRESET_1_HEADING.scrollIntoViewIfNeeded();

    // Verify the CSS for the first infobox in preset 1 section
    const FIRST_INFOBOX_CSS_CLASS = page.locator(".eb-infobox-46vc4yo");
    const CSS_DATA_FIRST_INFOBOX_CSS_CLASS = {
      "margin-top": "0px",
      "margin-right": "15px",
      "margin-left": "15px",
      "margin-bottom": "0px",
      "padding-top": "50px",
      "padding-right": "30px",
      "padding-left": "30px",
      "padding-bottom": "50px",
      "border-radius": "5px",
      "background-color": "rgb(226, 231, 251)",
      "transition":
        "background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    };
    await verifyCss(FIRST_INFOBOX_CSS_CLASS, CSS_DATA_FIRST_INFOBOX_CSS_CLASS);

    // Verify the CSS for the media image for the first infobox
    const FIRST_INFOBOX_ICON_IMAGE_WRAPPER = page.locator(
      ".eb-infobox-46vc4yo > .infobox-wrapper-inner > .icon-img-wrapper"
    );
    const CSS_DATA_FIRST_INFOBOX_ICON_IMAGE_WRAPPER = {
      "align-self": "flex-start",
      "margin-top": "0px",
      "margin-bottom": "20px",
    };
    await verifyCss(
      FIRST_INFOBOX_ICON_IMAGE_WRAPPER,
      CSS_DATA_FIRST_INFOBOX_ICON_IMAGE_WRAPPER
    );

    const FIRST_INFOBOX_IMAGE = page.locator(
      ".eb-infobox-46vc4yo > .infobox-wrapper-inner > .icon-img-wrapper > .eb-infobox-image-wrapper > .eb-infobox-image"
    );
    const CSS_DATA_FIRST_INFOBOX_IMAGE = {
      "border-top-left-radius": "0px",
      "border-bottom-right-radius": "0px",
      "width": "48px",
      "height": "48px",
    };
    await verifyCss(FIRST_INFOBOX_IMAGE, CSS_DATA_FIRST_INFOBOX_IMAGE);

    // Verify CSS for the contents wrapper
    const CONTENTS_WRAPPER = page.locator(
      ".eb-infobox-46vc4yo > .infobox-wrapper-inner > .contents-wrapper"
    );
    const CSS_CONTENTS_WRAPPER = {
      "text-align": "left",
    };
    await verifyCss(CONTENTS_WRAPPER, CSS_CONTENTS_WRAPPER);

    // Verify first infobox title/heading and CSS
    const FIRST_INFOBOX_HEADING = page.getByRole("heading", {
      name: "Marketing Course",
    });
    await FIRST_INFOBOX_HEADING.scrollIntoViewIfNeeded();
    await expect.soft(FIRST_INFOBOX_HEADING).toBeVisible();
    const CSS_FIRST_INFOBOX_HEADING = {
      "font-size": "21px",
      "line-height": "27.3px",
      "font-weight": "500",
      "padding-top": "0px",
      "padding-bottom": "10px",
      "color": "rgb(33, 28, 112)",
    }
    await verifyCss(FIRST_INFOBOX_HEADING, CSS_FIRST_INFOBOX_HEADING);

    // Verify the first infobox description and CSS
    const FIRST_INFOBOX_CONTENT = page
      .getByText(
        "Marketing course for beginners and those who are interested in exploring the fie"
      )
      .first();
    await expect.soft(FIRST_INFOBOX_CONTENT).toBeVisible();
    const CSS_FIRST_INFOBOX_CONTENT = {
        "font-family": '"DM Sans"',
        "font-size": "14px",
        "line-height": "26.6px", //1.9em
        "font-weight": "400",
        "padding-top": "0px",
        "padding-bottom": "20px",
        "color": "rgb(106, 114, 165)",
    }
    await verifyCss(FIRST_INFOBOX_CONTENT, CSS_FIRST_INFOBOX_CONTENT);
    
    // Verify the first infobox button and its CSS
    const FIRST_INFOBOX_BUTTON = page.locator(".eb-infobox-46vc4yo> .infobox-wrapper-inner > .contents-wrapper > .eb-infobox-btn-wrapper > .infobox-btn");
    await expect.soft(FIRST_INFOBOX_BUTTON).toBeVisible();
    const CSS_FIRST_INFOBOX_BUTTON = {
        "font-family": '"DM Sans"',
        "font-size": "14px",
        "line-height": "18.2px",
        "font-weight": "500",
        "padding": "0px",
        "background-color": "rgba(226, 217, 255, 0)",
        "position": "relative",
        "overflow": "hidden",
        "z-index": "1",
        "border-radius": "0px",
        "color": "rgb(33, 28, 112)",
        "transition": "all 0.5s ease 0s, background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    };
    await verifyCss(FIRST_INFOBOX_BUTTON, CSS_FIRST_INFOBOX_BUTTON);
  });

  test("Test Infobox With Overlay.", async ({ page }) => {
    // Scroll to the infobox with overlay section
    const HEADING = page.getByRole("heading", {
      name: "Stunning Infobox With Overlay",
    });
    await HEADING.scrollIntoViewIfNeeded();

    // Verify the CSS for the first infobox in infobox with overlay section
    const FIRST_INFOBOX_CSS_CLASS = page.locator(".eb-infobox-troil88");
    const CSS_DATA_FIRST_INFOBOX_CSS_CLASS = {
      "margin-top": "0px",
      "margin-right": "15px",
      "margin-left": "15px",
      "margin-bottom": "0px",
      "padding-top": "100px",
      "padding-right": "40px",
      "padding-left": "40px",
      "padding-bottom": "90px",
      "border-radius": "0px",
      "background-image": 'url("https://static.live.templately.com/woocommerce/2022/03/image1-1.jpg")',
      "background-size": "cover",
      "background-position": "50% 50%",
      "background-repeat": "no-repeat",
      "transition":
        "background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    };
    await verifyCss(FIRST_INFOBOX_CSS_CLASS, CSS_DATA_FIRST_INFOBOX_CSS_CLASS);

    // Verify CSS for the contents wrapper
    const CONTENTS_WRAPPER = page.locator(
      ".eb-infobox-troil88 > .infobox-wrapper-inner > .contents-wrapper"
    );
    const CSS_CONTENTS_WRAPPER = {
      "text-align": "center",
    };
    await verifyCss(CONTENTS_WRAPPER, CSS_CONTENTS_WRAPPER);

    // Verify first infobox title/heading and CSS
    const FIRST_INFOBOX_HEADING = page.getByRole("heading", {
      name: "Pop Music",
    });
    await FIRST_INFOBOX_HEADING.scrollIntoViewIfNeeded();
    await expect.soft(FIRST_INFOBOX_HEADING).toBeVisible();
    const CSS_FIRST_INFOBOX_HEADING = {
      "font-family": '"DM Sans"',
      "font-size": "30px",
      "line-height": "39px",
      "font-weight": "500",
      "padding-top": "0px",
      "padding-bottom": "20px",
      "color": "rgb(255, 255, 255)",
    }
    await verifyCss(FIRST_INFOBOX_HEADING, CSS_FIRST_INFOBOX_HEADING);

    // Verify the first infobox description and CSS
    const FIRST_INFOBOX_CONTENT = page
      .getByText(
        "For Pop lovers, there is an amazing collection of soundtracks you will love to listen to anytime, anywhere."
      )
      .first();
    await expect.soft(FIRST_INFOBOX_CONTENT).toBeVisible();
    const CSS_FIRST_INFOBOX_CONTENT = {
        "font-family": '"DM Sans"',
        "font-size": "16px",
        "line-height": "27.2px", //1.7em
        "font-weight": "400",
        "padding-top": "0px",
        "padding-bottom": "47px",
        "color": "rgb(255, 255, 255)",
    }
    await verifyCss(FIRST_INFOBOX_CONTENT, CSS_FIRST_INFOBOX_CONTENT);
    
    // Verify the first infobox button and its CSS
    const FIRST_INFOBOX_BUTTON = page.locator(".eb-infobox-troil88 > .infobox-wrapper-inner > .contents-wrapper > .eb-infobox-btn-wrapper > .infobox-btn");
    await expect.soft(FIRST_INFOBOX_BUTTON).toBeVisible();
    const CSS_FIRST_INFOBOX_BUTTON = {
        "font-family": '"DM Sans"',
        "font-size": "16px",
        "line-height": "20.8px", // 1.3em
        "font-weight": "500",
        "padding-top": "15px",
        "padding-right": "32px",
        "padding-left": "32px",
        "padding-bottom": "15px",
        "background-color": "rgba(226, 217, 255, 0)",
        "position": "relative",
        "overflow": "hidden",
        "z-index": "1",
        "border-radius": "100px",
        "border-width": "2px",
        "border-color": "rgb(255, 255, 255)",
        "border-style": "solid",
        "color": "rgb(255, 255, 255)",
        "transition": "all 0.5s ease 0s, background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    };
    await verifyCss(FIRST_INFOBOX_BUTTON, CSS_FIRST_INFOBOX_BUTTON);
    // Check hover CSS
    await FIRST_INFOBOX_BUTTON.hover();
    await page.waitForTimeout(100);
    const HOVER_CSS_FIRST_INFOBOX_BUTTON = {
      "color": "rgb(33, 28, 112)",
      "border-width": "2px"
    }
    await verifyCss(FIRST_INFOBOX_BUTTON, HOVER_CSS_FIRST_INFOBOX_BUTTON);
    // Remove hover
    await FIRST_INFOBOX_HEADING.click();
  });

  test("Test Infobox Preset 2.", async ({ page }) => {
    // Scroll to the preset 2 section
    const PRESET_2_HEADING = page.getByRole("heading", {
      name: "Design Infobox With Preset 2",
    });
    await PRESET_2_HEADING.scrollIntoViewIfNeeded();

    // Verify the CSS for the first infobox in preset 2 section
    const FIRST_INFOBOX_CSS_CLASS = page.locator(".eb-infobox-yg1c6nn");
    const CSS_DATA_FIRST_INFOBOX_CSS_CLASS = {
      "margin-top": "0px",
      "margin-right": "15px",
      "margin-left": "0px",
      "margin-bottom": "30px",
      "padding-top": "40px",
      "padding-right": "20px",
      "padding-left": "20px",
      "padding-bottom": "40px",
      "border-radius": "25px",
      "background-color": "rgb(237, 242, 248)",
      "transition":
        "background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    };
    await verifyCss(FIRST_INFOBOX_CSS_CLASS, CSS_DATA_FIRST_INFOBOX_CSS_CLASS);

    // Verify the CSS for the media image for the first infobox
    const FIRST_INFOBOX_ICON_IMAGE_WRAPPER = page.locator(
      ".eb-infobox-yg1c6nn > .infobox-wrapper-inner > .icon-img-wrapper"
    );
    const CSS_DATA_FIRST_INFOBOX_ICON_IMAGE_WRAPPER = {
      "align-self": "center",
      "margin-top": "15px",
    };
    await verifyCss(
      FIRST_INFOBOX_ICON_IMAGE_WRAPPER,
      CSS_DATA_FIRST_INFOBOX_ICON_IMAGE_WRAPPER
    );

    const FIRST_INFOBOX_IMAGE = page.locator(
      ".eb-infobox-yg1c6nn > .infobox-wrapper-inner > .icon-img-wrapper > .eb-infobox-image-wrapper > .eb-infobox-image"
    );
    const CSS_DATA_FIRST_INFOBOX_IMAGE = {
      "border-radius": "0px",
      "width": "48px",
      "height": "49.5px",
    };
    await verifyCss(FIRST_INFOBOX_IMAGE, CSS_DATA_FIRST_INFOBOX_IMAGE);

    // Verify CSS for the contents wrapper
    const CONTENTS_WRAPPER = page.locator(
      ".eb-infobox-yg1c6nn > .infobox-wrapper-inner > .contents-wrapper"
    );
    const CSS_CONTENTS_WRAPPER = {
      "flex": "1 1 0%",
      "text-align": "center",
    };
    await verifyCss(CONTENTS_WRAPPER, CSS_CONTENTS_WRAPPER);

    // Verify first infobox title/heading and CSS
    const FIRST_INFOBOX_HEADING = page.getByRole("heading", {
      name: "Automated AI Chatbots",
    });
    await FIRST_INFOBOX_HEADING.scrollIntoViewIfNeeded();
    await expect.soft(FIRST_INFOBOX_HEADING).toBeVisible();
    const CSS_FIRST_INFOBOX_HEADING = {
      "font-family": '"DM Sans"',
      "font-size": "18px",
      "line-height": "23.4px", //1.3em
      "font-weight": "700",
      "padding-top": "0px",
      "padding-bottom": "10px",
      "color": "rgb(33, 28, 112)",
    }
    await verifyCss(FIRST_INFOBOX_HEADING, CSS_FIRST_INFOBOX_HEADING);

    // Verify the first infobox description and CSS
    const FIRST_INFOBOX_CONTENT = page
      .getByText(
        "Contains a high concentration of botanical, marine, and biological extracts. Has no artificial fragrances."
      )
      .first();
    await expect.soft(FIRST_INFOBOX_CONTENT).toBeVisible();
    const CSS_FIRST_INFOBOX_CONTENT = {
        "font-family": '"DM Sans"',
        "font-size": "14px",
        "line-height": "26.6px", //1.9em
        "font-weight": "400",
        "padding-top": "0px",
        "padding-bottom": "20px",
        "color": "rgb(106, 114, 165)",
    }
    await verifyCss(FIRST_INFOBOX_CONTENT, CSS_FIRST_INFOBOX_CONTENT);
    
    // Verify the first infobox button and its CSS
    const FIRST_INFOBOX_BUTTON = page.locator(".eb-infobox-yg1c6nn > .infobox-wrapper-inner > .contents-wrapper > .eb-infobox-btn-wrapper > .infobox-btn");
    await expect.soft(FIRST_INFOBOX_BUTTON).toBeVisible();
    const CSS_FIRST_INFOBOX_BUTTON = {
        "font-family": '"DM Sans"',
        "font-size": "14px",
        "line-height": "18.2px",
        "font-weight": "500",
        "padding": "0px",
        "background-color": "rgba(226, 217, 255, 0)",
        "position": "relative",
        "overflow": "hidden",
        "z-index": "1",
        "border-radius": "0px",
        "color": "rgb(106, 114, 165)",
        "transition": "all 0.5s ease 0s, background 0.5s ease 0s, border 0.5s ease 0s, border-radius 0.5s ease 0s, box-shadow 0.5s ease 0s",
    };
    await verifyCss(FIRST_INFOBOX_BUTTON, CSS_FIRST_INFOBOX_BUTTON);
  });
});
