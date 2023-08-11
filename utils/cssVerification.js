import { expect } from "@playwright/test";

export default async function verifyCss(selector, cssData) {
  console.log(`-- Verifying CSS For [${selector}] --`);
  console.log(`---- ${cssData}`);

  for (const property in cssData) {
    if (cssData.hasOwnProperty(property)) {
      const value = cssData[property];
      await expect.soft(selector).toHaveCSS(property, value);
    }
  }
  console.log(`-- CSS verification DONE! --`);
}
