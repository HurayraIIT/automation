// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout: 100000,
  workers: 6,
  retries: 2,

  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    // An object containing additional HTTP headers to be sent with every request.
    extraHTTPHeaders: {
      'X-QA-TEST': 'Abu Hurayra',
    },
    browserName: 'chromium',
  },

  /* Configure projects */
  projects: [
    {
      name: 'Essential Addons',
      testMatch: '**/*.ea.spec.js',
      retries: 2,
      use: {
        baseURL: 'https://essential-addons.com/elementor'
      }
    },
    {
      name: 'Essential Blocks',
      testMatch: '**/*.eb.spec.js',
      retries: 2,
      use: {
        baseURL: 'https://essential-blocks.com'
      }
    },
  ],
});
