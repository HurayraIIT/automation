// @ts-check
import { test, expect } from "@playwright/test";
import verifyCss from "../../utils/cssVerification.js";

const PAGE_URL = "https://automation.s3-tastewp.com/betterdocs-elementor-widgets/betterdocs-faq-modern-layout/";
const PAGE_TITLE = "BetterDocs FAQ Modern Layout – Automation";

test.beforeEach(async ({ page }) => {
  await page.goto(PAGE_URL);
  await page.waitForLoadState();

  await expect(page).toHaveURL(PAGE_URL);
  await expect(page).toHaveTitle(PAGE_TITLE);

  const PAGE_HEADING = page.getByRole("heading", { name: "Elementor Widget - BetterDocs FAQ - Modern Layout", exact: true });
  await PAGE_HEADING.scrollIntoViewIfNeeded();
  await expect(PAGE_HEADING).toBeVisible();
});

test.describe("Test FAQ Widget.", () => {
    test("Test betterdocs-faq-section-title.", async ({ page }) => {
        const loc_faq_section_title = page.getByRole('heading', { name: "Commonly Asked Questions" });
        await loc_faq_section_title.scrollIntoViewIfNeeded();
        const css_faq_section_title = {
            "border-bottom-color": "rgb(255, 0, 0)",
            "border-bottom-style": "none",
            "border-bottom-width": "0px",
            "border-image-outset": "0",
            "border-image-repeat": "stretch",
            "border-image-slice": "100%",
            "border-image-source": "none",
            "border-image-width": "1",
            "border-left-color": "rgb(255, 0, 0)",
            "border-left-style": "none",
            "border-left-width": "0px",
            "border-right-color": "rgb(255, 0, 0)",
            "border-right-style": "none",
            "border-right-width": "0px",
            "border-top-color": "rgb(255, 0, 0)",
            "border-top-style": "none",
            "border-top-width": "0px",
            "box-sizing": "border-box",
            "clear": "both",
            "color": "rgb(255, 0, 0)",
            "display": "block",
            "font-family": "Ubuntu, sans-serif",
            "font-size": "44px",
            "font-style": "italic",
            "font-weight": "400",
            "letter-spacing": "0.4px",
            "line-height": "44px",
            "margin-block-end": "20px",
            "margin-block-start": "20px",
            "margin-bottom": "20px",
            "margin-inline-end": "0px",
            "margin-inline-start": "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            "margin-top": "20px",
            "outline-color": "rgb(255, 0, 0)",
            "outline-style": "none",
            "outline-width": "0px",
            "padding-bottom": "0px",
            "padding-left": "0px",
            "padding-right": "0px",
            "padding-top": "0px",
            "text-align": "center",
            "text-decoration-color": "rgb(255, 0, 0)",
            "text-decoration-line": "overline",
            "text-decoration-style": "solid",
            "text-decoration-thickness": "auto",
            "text-transform": "uppercase",
            "vertical-align": "baseline",
            "word-spacing": "4px",
        }
        await verifyCss(loc_faq_section_title, css_faq_section_title);
    });

    test("Test BetterDocs First FAQ Title.", async ({ page }) => {
        const loc_faq_title = page.getByRole('heading', { name: "FAQ For Elementor Widget 01" });
        await loc_faq_title.scrollIntoViewIfNeeded();
        const css_faq_title = {
            "border-bottom-color": "rgb(244, 0, 252)",
            "border-bottom-style": "none",
            "border-bottom-width": "0px",
            "border-image-outset": "0",
            "border-image-repeat": "stretch",
            "border-image-slice": "100%",
            "border-image-source": "none",
            "border-image-width": "1",
            "border-left-color": "rgb(244, 0, 252)",
            "border-left-style": "none",
            "border-left-width": "0px",
            "border-right-color": "rgb(244, 0, 252)",
            "border-right-style": "none",
            "border-right-width": "0px",
            "border-top-color": "rgb(244, 0, 252)",
            "border-top-style": "none",
            "border-top-width": "0px",
            "box-sizing": "border-box",
            "clear": "both",
            "color": "rgb(244, 0, 252)",
            "display": "block",
            "font-family": "Tahoma, sans-serif",
            "font-size": "24px",
            "font-style": "italic",
            "font-weight": "400",
            "letter-spacing": "1.4px",
            "line-height": "14px",
            "margin-block-end": "0px",
            "margin-block-start": "0px",
            "margin-bottom": "0px",
            "margin-inline-end": "0px",
            "margin-inline-start": "0px",
            "margin-left": "0px",
            "margin-right": "0px",
            "margin-top": "0px",
            "outline-color": "rgb(244, 0, 252)",
            "outline-style": "none",
            "outline-width": "0px",
            "padding-bottom": "20px",
            "padding-left": "20px",
            "padding-right": "20px",
            "padding-top": "20px",
            "text-decoration-color": "rgb(244, 0, 252)",
            "text-decoration-line": "underline",
            "text-decoration-style": "solid",
            "text-decoration-thickness": "auto",
            "text-size-adjust": "100%",
            "text-transform": "lowercase",
            "vertical-align": "baseline",
            "word-spacing": "4px"
        }
        await verifyCss(loc_faq_title, css_faq_title);
    });

    test("Test BetterDocs First Post Name.", async ({ page }) => {
        const loc_faq_post_name = page.getByText('01 Where to find questions for FAQ?');
        await loc_faq_post_name.scrollIntoViewIfNeeded();
        const css_faq_post_name = {
            "box-sizing": "border-box",
            "color": "rgb(0, 0, 255)",
            "cursor": "pointer",
            "font-family": "Tahoma, sans-serif",
            "font-size": "18px",
            "font-style": "normal",
            "font-weight": "500",
            "letter-spacing": "0.4px",
            "line-height": "24px",
            "list-style-image": "none",
            "list-style-position": "outside",
            "list-style-type": "none",
            "text-align": "left",
            "text-decoration-color": "rgb(0, 0, 255)",
            "text-decoration-line": "none",
            "text-decoration-style": "solid",
            "text-decoration-thickness": "auto",
            "text-indent": "0px",
            "text-size-adjust": "100%",
            "text-transform": "capitalize",
            "word-spacing": "4px"
        }
        await verifyCss(loc_faq_post_name, css_faq_post_name);
    });
});
