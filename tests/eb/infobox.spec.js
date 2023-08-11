// @ts-check
import { test, expect } from "@playwright/test";
import verifyCss from "../../utils/cssVerification.js";

const INFOBOX_DEMO_PAGE_URL = "https://essential-blocks.com/demo/infobox/";
const INFOBOX_DEMO_PAGE_TITLE =
  "Infobox | Essential Gutenberg Blocks for WordPress";

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
      transition:
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
      width: "48px",
      height: "48px",
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
        "font-family": "\"DM Sans\"",
        "font-size": "14px",
        "line-height": "26.6px", //1.9em
        "font-weight": "400",
        "padding-top": "0px",
        "padding-bottom": "20px",
        "color": "rgb(106, 114, 165)",
    }
    await verifyCss(FIRST_INFOBOX_CONTENT, CSS_FIRST_INFOBOX_CONTENT);
    
    // Verify the first infobox button and its CSS
    const FIRST_INFOBOX_BUTTON = page.locator(".infobox-btn").first();
    await expect.soft(FIRST_INFOBOX_BUTTON).toBeVisible();
    const CSS_FIRST_INFOBOX_BUTTON = {
        "font-family": "\"DM Sans\"",
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
});
