// @ts-check
import { test, expect } from "@playwright/test";
import extractAccordionJsonContent from "../../utils/extractJsonSchema";

let slug = "/eb/accordion";

test("Accordion 2nd item should be open by default.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Accordion Default Open For 2nd Item").scrollIntoViewIfNeeded();

  // section heading
  await expect(page.getByText("Accordion Default Open For 2nd Item")).toBeVisible();

  // all questions should be visible
  await expect(page.getByText("This is question one.")).toBeInViewport();
  await expect(page.getByText("And question two is here.")).toBeInViewport();
  await expect(page.getByText("Final question.")).toBeInViewport();

  // only 2nd answer should be visible
  await expect(page.getByText("This is answer A.")).not.toBeInViewport();
  await expect(page.getByText("so is answer B.")).toBeInViewport();
  await expect(page.getByText("Final answer.")).not.toBeInViewport();
});

test("Accordion click on 1st item should hide others.", async ({ page }) => {
  await page.goto(slug);
  await page.getByText("Accordion Default Open For 2nd Item").scrollIntoViewIfNeeded();

  // click on the 1st item
  await page.waitForTimeout(500); // fix flakiness
  await page.getByText("This is question one.").click();
  await page.waitForTimeout(200);

  // all questions should be visible
  await expect(page.getByText("This is question one.")).toBeInViewport();
  await expect(page.getByText("And question two is here.")).toBeInViewport();
  await expect(page.getByText("Final question.")).toBeInViewport();

  // only 1st answer should be visible
  await expect(page.getByText("This is answer A.")).toBeInViewport();
  await expect(page.getByText("so is answer B.")).not.toBeInViewport();
  await expect(page.getByText("Final answer.")).not.toBeInViewport();
});

test("Validate the JSON Schema", async ({ request }) => {
  let expected_schema_contents = '{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\": \"This is question one.\",\"acceptedAnswer\":{\"@type\": \"Answer\",\"text\": \"This is answer A.\"}},{\"@type\":\"Question\",\"name\": \"And question two is here.\",\"acceptedAnswer\":{\"@type\": \"Answer\",\"text\": \"so is answer B.\"}},{\"@type\":\"Question\",\"name\": \"Final question.\",\"acceptedAnswer\":{\"@type\": \"Answer\",\"text\": \"Final answer.\"}}]}';
  
  const response = await request.get(slug);
  let body = await response.text();
  let received_schema_contents = extractAccordionJsonContent(body);
  expect(received_schema_contents).toContain(expected_schema_contents);
});
