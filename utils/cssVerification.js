import { test, expect } from "@playwright/test";

export default async function verifyCss(selector, cssData) {
  console.log(`-- Verifying CSS For [${selector}] --`);
  for (const property in cssData) {
    if (cssData.hasOwnProperty(property)) {
      const value = cssData[property];

      console.log(`---- Verifying ${property}: ${value}`);

      await expect(selector).toHaveCSS(property, value);
    }
  }
  console.log(`-- CSS verification DONE! --`);
}
