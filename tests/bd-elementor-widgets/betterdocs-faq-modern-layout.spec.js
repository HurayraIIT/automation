import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://automation.s3-tastewp.com/betterdocs-elementor-widgets/betterdocs-faq-modern-layout/"
  );
});

const faq = {
  group_01: {
    title: "FAQ For Elementor Widget 01",
    faq_01: {
      post_title: "01 Where to find questions for FAQ?",
      post_content:
        "Where do you start writing your questions? Let your audience tell you.",
    },
    faq_02: {
      post_title: "02 What Are The FAQ Best Practices?",
      post_content:
        "As you consider compiling a set of questions, it might not be immediately clear where to start.",
    },
  },
  group_02: {
    title: "FAQ 02 For Elementor Widget",
    faq_01: {
      post_title:
        "01 How to find questions for FAQs with a keyword research tool",
      post_content:
        "The Keyword Magic tool can help you to find questions to answer for your FAQs.",
    },
    faq_02: {
      post_title: "02 Where Did Everyone Go?",
      post_content:
        "For example: if we search for email marketing software, most of the keywords are service-based and not what we need.",
    },
  },
  group_03: {
    title: "03 FAQ For Elementor Widget",
    faq_01: {
      post_title: "01 What is the meaning of life?",
      post_content: "Nothing Really!",
    },
    faq_02: {
      post_title: "02 Is an FAQ section the same as a knowledge base?",
      post_content:
        "FAQ sections usually consist of a series of categories and questions with concise answers across one or a few pages. A knowledge base is usually an extensive directory with comprehensive articles accessed by a search facility.",
    },
  },
};

test.describe("Elementor Widget - BetterDocs FAQ - Modern Layout", () => {
  test("Test if page is properly loaded.", async ({ page }) => {
    // Expects the URL to contain "betterdocs-faq-modern-layout".
    await expect.soft(page).toHaveURL(/.*betterdocs-faq-modern-layout/);

    // Expects the page to contain title "BetterDocs FAQ – Modern Layout – automation".
    await expect.soft(page).toHaveTitle(
      /.*BetterDocs FAQ – Modern Layout – automation/
    );

    // Expects the heading 'Elementor Widget - BetterDocs FAQ - Modern Layout' to be visible.
    await expect.soft(
      page.getByRole("heading", {
        name: "Elementor Widget - BetterDocs FAQ - Modern Layout",
      })
    ).toBeVisible();

    // Expects the FAQ Section Title to be visible
    await expect.soft(
      page.getByRole("heading", { name: "Commonly Asked Questions" })
    ).toBeVisible();
  });

  test("Test Layout options: All faq should be displayed properly.", async ({
    page,
  }) => {});

  test("Test Style: FAQ Section Title controls should be applied.", async ({
    page,
  }) => {
    /* FAQ Section Title
    // 
      color: #FF0000;
      font-family: "Ubuntu";
      font-size: 40px;
      font-weight: 400;
      text-transform: uppercase;
      font-style: italic;
      text-decoration: overline;
      line-height: 40px;
      letter-spacing: 0.4px;
      word-spacing: 4px;
    */

    const faq_section_title = page.getByRole("heading", {
      name: "Commonly Asked Questions",
    });

    // Text Color
    await expect.soft(faq_section_title).toHaveCSS("color", "rgb(255, 0, 0)");

    // Typography
    await expect.soft(faq_section_title).toHaveCSS("font-family", /Ubuntu/);
    await expect.soft(faq_section_title).toHaveCSS("font-size", "40px");
    await expect.soft(faq_section_title).toHaveCSS("font-weight", "400");
    await expect.soft(faq_section_title).toHaveCSS("text-transform", "uppercase");
    await expect.soft(faq_section_title).toHaveCSS("font-style", "italic");
    await expect.soft(faq_section_title).toHaveCSS("text-decoration", /overline/);
    await expect.soft(faq_section_title).toHaveCSS("line-height", "40px");
    await expect.soft(faq_section_title).toHaveCSS("letter-spacing", "0.4px");
    await expect.soft(faq_section_title).toHaveCSS("word-spacing", "4px");
  });

  test("Test Style: FAQ List controls should be applied.", async ({ page }) => {
    const betterdocs_faq_post = page.locator(".betterdocs-faq-post").first();
    const betterdocs_faq_post_name = page
      .locator(".betterdocs-faq-post-name")
      .first();

    /*
    padding: 21px 21px 21px 21px;
margin: 22px 22px 22px 22px;
border-style: solid;
border-width: 3px 3px 3px 3px;
border-color: #58C467;
background-color: #DDDDDD;
*/

    await expect.soft(betterdocs_faq_post).toHaveCSS("padding", "21px");
    await expect.soft(betterdocs_faq_post).toHaveCSS("margin", "22px");

    // Border Styles
    await expect.soft(betterdocs_faq_post).toHaveCSS("border-style", /solid/);
    await expect.soft(betterdocs_faq_post).toHaveCSS("border-width", "3px");
    await expect.soft(betterdocs_faq_post).toHaveCSS(
      "border-color",
      "rgba(88, 196, 103, 0.92)"
    );
    await expect.soft(betterdocs_faq_post).toHaveCSS(
      "background-color",
      "rgba(221, 221, 221, 0.96)"
    );

    // Border Hover Styles
    await betterdocs_faq_post.hover();
    await page.waitForTimeout(100);
    await expect.soft(betterdocs_faq_post).toHaveCSS("border-style", /dashed/);
    await expect.soft(betterdocs_faq_post).toHaveCSS("border-width", "4px");
    await expect.soft(betterdocs_faq_post).toHaveCSS(
      "border-color",
      "rgba(226, 84, 84, 0.92)"
    );
    await expect.soft(betterdocs_faq_post).toHaveCSS(
      "background-color",
      "rgba(205, 153, 206, 0.85)"
    );

    await page
      .getByRole("heading", { name: "Commonly Asked Questions" })
      .click();
    await page.waitForTimeout(100);

    /*Typography
font-family: "Tahoma", Sans-serif;
font-size: 18px;
font-weight: 500;
text-transform: capitalize;
font-style: normal;
text-decoration: none;
line-height: 19px;
letter-spacing: 0.3px;
word-spacing: 2px;
color: #0000FF; rgba(0, 0, 255, 1)
      */
    await expect.soft(betterdocs_faq_post_name).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(betterdocs_faq_post_name).toHaveCSS("font-size", "18px");
    await expect.soft(betterdocs_faq_post_name).toHaveCSS("font-weight", "500");
    await expect.soft(betterdocs_faq_post_name).toHaveCSS(
      "text-transform",
      "capitalize"
    );
    await expect.soft(betterdocs_faq_post_name).toHaveCSS("font-style", "normal");
    await expect.soft(betterdocs_faq_post_name).toHaveCSS("text-decoration", "none solid rgb(0, 0, 255)");
    await expect.soft(betterdocs_faq_post_name).toHaveCSS("line-height", "19px");
    await expect.soft(betterdocs_faq_post_name).toHaveCSS("letter-spacing", "0.3px");
    await expect.soft(betterdocs_faq_post_name).toHaveCSS("word-spacing", "2px");
    await expect.soft(betterdocs_faq_post_name).toHaveCSS("color", "rgb(0, 0, 255)");
  });

  test("Test Style: FAQ List Title controls should be applied.", async ({
    page,
  }) => {
    // Title Color - rgba(244, 0, 252, 1)
    // Title hover color - rgba(56, 207, 42, 1)
    /* Typography

      }
    */
  });

  test("Test Style: FAQ Content controls should be applied.", async ({
    page,
  }) => {});

  test("Test Style: FAQ List Icon controls should be applied.", async ({
    page,
  }) => {});

  test("Test Style: All FAQ Section Title controls should be applied.", async ({
    page,
  }) => {});

  test("Test Advanced Tab: Layout controls should be applied.", async ({
    page,
  }) => {});

  /* CONTENT TAB */

  // Verify that the FAQ layout is modern layout with "data-widget_type="betterdocs-faq.default""

  // Verify that the FAQ Section title is "Commonly Asked Questions"

  // Verify that the FAQ Groups are
  // * "FAQ For Elementor Widget 01"
  // * "FAQ 02 For Elementor Widget"
  // * "03 FAQ For Elementor Widget"

  /* STYLE TAB */
});
