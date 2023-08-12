import { expect } from "@playwright/test";

export default async function verifyCss(selector, cssData) {
  console.log(`-- Verifying CSS For [${selector}] --`);

  // const data = JSON.stringify(cssData);
  // console.log(`---- ${data}`);

  for (const property in cssData) {
    if (cssData.hasOwnProperty(property)) {
      const value = cssData[property];
      await expect.soft(selector, `[${selector}]: CSS verification failed for "${property}":`).toHaveCSS(property, value);
    }
  }
  console.log(`-- CSS verification DONE! --`);
}
