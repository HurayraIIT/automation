import { expect } from "@playwright/test";

export default async function verifyCss(locator, cssData) {
  // console.log(`-- Verifying CSS For [${locator}] --`);

  for (const property in cssData) {
    if (cssData.hasOwnProperty(property)) {
      const value = cssData[property];
      await expect.soft(locator, `[${locator}]: CSS verification failed for "${property}":`).toHaveCSS(property, value);
    }
  }
  // console.log(`-- CSS verification DONE! --`);
}
