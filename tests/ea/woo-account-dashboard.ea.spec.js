// // @ts-check
// import { test, expect } from "@playwright/test";

// let slug = "/ea/ea-woo-account-dashboard";
// const authFile = ".auth/240610.json";

// test.beforeAll(async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto(slug);
//   await page.waitForTimeout(200);
//   await page.waitForLoadState("networkidle");

//   // Login to the customer account
//   await expect.soft(page.getByText("Username or email address *")).toBeVisible();
//   await page.getByLabel("Username or email address *").fill(`${process.env.WP_CUSTOMER_USERNAME}`);
//   await page.getByLabel("Password *").fill(`${process.env.WP_CUSTOMER_PASSWORD}`);
//   await page.getByLabel("Remember me").check();
//   await page.waitForTimeout(300);
//   await page.getByRole("button", { name: "Log in" }).click();

//   await page.waitForTimeout(200);
//   await page.waitForLoadState("networkidle");
//   await expect(page.getByText("Hello First240610 Last240610")).toBeVisible();

//   await page.context().storageState({ path: authFile });
// });

// //test.use({ storageState: authFile });

// test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
// });

// test("Logged out users should not see the dashboard.", async ({ page }) => {
//   await expect(page.getByText("Hello First240610 Last240610")).toBeVisible();
//   // Logout first
//   await page.waitForLoadState("networkidle");
//   await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
//   await page.getByRole('link', { name: 'Log out' }).click();
//   await page.waitForTimeout(200);
//   await page.waitForLoadState("networkidle");

//   // URL should still be the account dashboard
//   expect.soft(page.url()).toContain(slug);

//   // Check login page
//   await expect.soft(page.getByRole('heading', { name: 'Login' })).toBeVisible();
//   await expect.soft(page.getByText('Username or email address *')).toBeVisible();
//   await expect.soft(page.getByRole('button', { name: 'Log in' })).toBeVisible();
// });

// test("All sections should be present.", async ({ page }) => {
//   await expect(page.locator('.eael-account-dashboard-container')).toBeVisible();
//   await expect(page.locator('.eael-account-profile')).toBeVisible();
//   await expect(page.locator('#content').getByRole('navigation')).toBeVisible();
//   await expect(page.locator('.eael-account-dashboard-content')).toBeVisible();
//   await expect(page.getByText('Hello First240610 Last240610')).toBeVisible();
//   await expect(page.getByText('Hey240610')).toBeVisible();
//   await expect(page.getByRole('heading', { name: 'First240610 Last240610' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
//   await expect(page.getByText('From your account dashboard')).toBeVisible();
//   await expect(page.getByRole('link', { name: 'recent orders' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'shipping and billing addresses' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'edit your password and' })).toBeVisible();
//   await expect(page.locator('img')).toBeVisible();
//   await expect(page.getByRole('heading', { name: 'First240610 Last240610' })).toBeVisible();
//   await expect(page.getByRole('link', { name: ' Dashboard' })).toBeVisible();
//   await expect(page.getByRole('link', { name: ' Orders' })).toBeVisible();
//   await expect(page.getByRole('link', { name: ' Downloads' })).toBeVisible();
//   await expect(page.getByRole('link', { name: ' Addresses' })).toBeVisible();
//   await expect(page.getByRole('link', { name: ' Account Details' })).toBeVisible();
//   await expect(page.getByRole('link', { name: ' Logout' })).toBeVisible();
// });

// test("Orders tab should contain proper data.", async ({ page }) => {
//   await expect(page.getByText('Hello First240610 Last240610')).toBeVisible();
//   await page.getByRole('link', { name: ' Orders' }).click();
//   await expect(page.getByRole('cell', { name: 'Order' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'Date' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'Status' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'Total' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'Actions' })).toBeVisible();
//   await expect(page.getByText('Order', { exact: true })).toBeVisible();
//   await expect(page.getByText('Date')).toBeVisible();
//   await expect(page.getByText('Status')).toBeVisible();
//   await expect(page.getByText('Total')).toBeVisible();
//   await expect(page.getByText('Actions')).toBeVisible();
//   await expect(page.getByRole('link', { name: '#888' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: '#888' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'June 10,' }).first()).toBeVisible();
//   await expect(page.getByRole('cell', { name: ' Completed' })).toBeVisible();
//   await expect(page.getByText('99.99৳')).toBeVisible();
//   await expect(page.getByRole('cell', { name: '৳  for 1 item' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'View' }).first()).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'View' }).first()).toBeVisible();
//   await expect(page.getByRole('cell', { name: '#884' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'June 10, 2024' }).nth(1)).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'Processing' })).toBeVisible();
//   await expect(page.getByText('146.00৳')).toBeVisible();
//   await expect(page.getByRole('cell', { name: '৳  for 8 items' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'View' }).nth(1)).toBeVisible();
//   await expect(page.locator('.eael-account-dashboard-content')).toBeVisible();
//   await page.getByRole('link', { name: 'View' }).first().click();
//   await page.getByRole('link', { name: ' Downloads' }).click();
//   await page.getByRole('link', { name: ' Orders' }).click();
// });

// test("Individual Order view should work.", async ({ page }) => {
//  await expect.soft(page.getByText("Hey240610")).toBeVisible();
//   await page.getByRole("link", { name: " Orders" }).click();
//   await page.waitForTimeout(200);
//   await page.getByRole("link", { name: "View" }).nth(1).click();
//   await expect(page.getByText("Order #884 was placed on June")).toBeVisible();
//   await expect(page.getByRole("heading", { name: "Order details" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "Product" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "Total" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "Hat × 1" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "Shirt × 3" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "Shirt - Green × 4" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "12.00৳" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "54.00৳" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "80.00৳" })).toBeVisible();
//   await expect(page.getByRole("rowheader", { name: "Subtotal:" })).toBeVisible();
//   await expect(page.getByRole("row", { name: "Subtotal: 146.00৳" }).getByRole("cell")).toBeVisible();
//   await expect(page.getByRole("rowheader", { name: "Shipping:" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "Free shipping" })).toBeVisible();
//   await expect(page.getByRole("rowheader", { name: "Payment method:" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "Cash on delivery" })).toBeVisible();
//   await expect(page.getByRole("rowheader", { name: "Total:", exact: true })).toBeVisible();
//   await expect(page.getByRole("row", { name: "Total: 146.00৳", exact: true }).getByRole("cell")).toBeVisible();
//   await expect(page.getByRole("cell", { name: "Note:" })).toBeVisible();
//   await expect(page.getByRole("cell", { name: "order-note-240610" })).toBeVisible();
//   await expect(page.getByRole("heading", { name: "Billing address" })).toBeVisible();
//   await expect(page.getByRole("heading", { name: "Shipping address" })).toBeVisible();
//   await expect(
//     page.getByText("First2406101 Last2406101Company>240610Street>240610Apartment>240610Dhaka>")
//   ).toBeVisible();
//   await expect(
//     page.getByText("First2406101 Last2406101Company>240610House-240610Apartment-240610Dhaka-")
//   ).toBeVisible();
// });

// test("Downloads tab should contain proper data.", async ({ page }) => {
//   await page.getByRole('link', { name: ' Downloads' }).click();
//   await expect(page.getByRole('cell', { name: 'Product' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'Downloads remaining' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'Expires' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'Download', exact: true })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'eBook240610: Become Happy' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: '∞' })).toBeVisible();
//   await expect(page.getByRole('cell', { name: 'Never' })).toBeVisible();
//   await expect(page.getByRole('link', { name: ' eBook240610: Be Happy_150kB' })).toBeVisible();
//   await expect(page.getByText('Dashboard Orders Downloads Addresses Account Details Logout Product Downloads')).toBeVisible();
//   await page.getByRole('link', { name: 'eBook240610: Become Happy' }).click();
//   await expect(page.getByRole('heading', { name: 'eBook240610: Become Happy' })).toBeVisible();
// });

// test("Addresses tab should contain proper data.", async ({ page }) => {
//   await expect(page.getByRole('heading', { name: 'First240610 Last240610' })).toBeVisible();
//   await page.getByRole('link', { name: ' Addresses' }).click();
//   await expect(page.getByText('The following addresses will')).toBeVisible();
//   await expect(page.getByText('The following addresses will be used on the checkout page by default. Billing')).toBeVisible();
//   await expect(page.getByRole('heading', { name: 'Billing address' })).toBeVisible();
//   await expect(page.getByRole('heading', { name: 'Shipping address' })).toBeVisible();
//   await expect(page.getByText('First2406101 Last2406101Company>240610Street>240610Apartment>240610Dhaka>')).toBeVisible();
//   await expect(page.getByText('First2406101 Last2406101Company>240610House-240610Apartment-240610Dhaka-')).toBeVisible();
//   await expect(page.locator('.u-columns')).toBeVisible();
// });

// test("Account Details tab should contain proper data.", async ({ page }) => {
//   await expect(page.getByRole('heading', { name: 'First240610 Last240610' })).toBeVisible();
//   await page.getByRole('link', { name: ' Account Details' }).click();
//   await expect(page.locator('.eael-account-dashboard-content')).toBeVisible();

//   await expect(page.getByText('First name *')).toBeVisible();
//   await expect(page.getByLabel("First name *")).toHaveValue("First240610");
  
//   await expect(page.getByText('Last name *')).toBeVisible();
//   await expect(page.getByLabel("Last name *")).toHaveValue("Last240610");

//   await expect(page.getByText('Display name *')).toBeVisible();
//   await expect(page.getByLabel("Display name *")).toHaveValue("First240610 Last240610");
//   await expect(page.getByText("This will be how your name will be")).toBeVisible();

//   await expect(page.getByText('Email address *')).toBeVisible();
//   await expect(page.getByLabel("Email address *")).toHaveValue("hurayraiit+user2406102@gmail.com");

//   await expect(page.getByText('Password change')).toBeVisible();
//   await expect(page.getByText('Current password (leave blank')).toBeVisible();
//   await expect(page.getByLabel('Current password (leave blank')).toBeVisible();

//   await expect(page.getByText('New password (leave blank to')).toBeVisible();
//   await expect(page.getByLabel('New password (leave blank to')).toBeVisible();

//   await expect(page.getByText('Confirm new password')).toBeVisible();
//   await expect(page.getByLabel('Confirm new password')).toBeVisible();

//   await expect(page.getByRole('button', { name: 'Save changes' })).toBeVisible();
// });
