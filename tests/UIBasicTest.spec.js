const {test, expect} = require('@playwright/test');

// test('Browser Context Playwright Test', async ({browser}) => {
//     // Write Code Here
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://betterdocs.co/docs");
//     console.log(await page.title());
//     await expect(page).toHaveTitle("Documentation - BetterDocs");
//     await page.close();
// });

test('SMEVai Login Test', async ({ page }) => {
    await page.goto("https://app.smevai.com");
    await expect(page).toHaveTitle("SME Vai | Login");
    await page.close();
});