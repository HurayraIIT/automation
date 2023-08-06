// @ts-check
const { test, expect, request } = require('@playwright/test');

test('api request test', async ({request}) => {
    //const apiContext = await request.newContext();
    const response = await request.post('https://api.smevai.com/api/login', {
        data: {
            "type": "email",
            "username": "",
            "password": ""
        } 
    });
    const data = await response.json();
    console.log(`Response Code: ${response.status()}`);
    console.log(`Response Body: ${data}`);
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
