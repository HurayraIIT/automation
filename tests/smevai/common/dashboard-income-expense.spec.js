import { test } from '@playwright/test';
import { generateDateTimeString } from '../../../utils/dateTimeGenerator';

const formattedDateTime = generateDateTimeString();

test('Income and Expense is shown properly.', async ({ page }) => {
    // Register a new account

    // Login page
    await page.goto('https://app.smevai.com/');await page.getByText('Login to SMEVai').click();
    await page.getByRole('link', { name: 'Signup' }).click();
    await page.waitForLoadState('networkidle');

    // Registration page
    await page.getByText('Register a New Account').click();

    await page.getByText('First Name *').click();
    await page.getByPlaceholder('e.g. Mr. X').click();
    await page.getByPlaceholder('e.g. Mr. X').fill(`a${formattedDateTime}`);

    await page.getByText('Last Name *').click();
    await page.getByPlaceholder('e.g. Mr. Y').click();
    await page.getByPlaceholder('e.g. Mr. Y').fill(`b${formattedDateTime}`);

    await page.getByText('Code *').click();
    await page.getByText('Country Code').nth(2).click();
    await page.getByPlaceholder('Search Country Code').fill('88');
    await page.getByRole('option', { name: '+88 (BD)' }).click();

    await page.getByText('Phone Number *').click();
    await page.getByPlaceholder('01xxxxxxxxx').click();
    await page.getByPlaceholder('01xxxxxxxxx').fill(`015${formattedDateTime.slice(2)}`);

    await page.getByText('Email').click();
    await page.getByPlaceholder('e.g. example@example.com').click();
    await page.getByPlaceholder('e.g. example@example.com').fill(`hurayra+${formattedDateTime}ta1@wpdeveloper.com`);

    await page.getByText('Password *', { exact: true }).click();
    await page.locator('#password').click();
    await page.locator('#password').fill(formattedDateTime);

    await page.getByText('Confirm Password *').click();
    await page.locator('#confirm_password').click();
    await page.locator('#confirm_password').fill(formattedDateTime);
    
    await page.getByRole('button', { name: 'Register' }).click();
    await page.waitForLoadState('networkidle');

    // Subscription package page
    await page.getByText('Subscription Packages').click();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.waitForLoadState('networkidle');

    // Company setup page
    await page.getByText('Company Setup').click();
    await page.getByText('Business Type *').click();
    await page.getByRole('combobox').selectOption('2');

    await page.getByPlaceholder('e.g. X').click();
    await page.getByPlaceholder('e.g. X').fill('BRCom Net');

    await page.getByLabel('VAT Applicable').check();

    // await page.getByLabel('Upload Logo').click();
    // await page.getByLabel('Upload Logo').setInputFiles('./upload-files/bird.png');

    await page.getByRole('button', { name: 'Continue' }).click();

    await page.locator('.modal-content > .absolute').click();
    await page.waitForLoadState('networkidle');

    // Check if current page is dashboard
    await page.getByRole('heading', { name: 'Dashboard' }).click();
    // await page.getByText('You\'ve got 31 days left in your premium version trial.').click();
});