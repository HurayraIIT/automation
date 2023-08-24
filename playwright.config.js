// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout: 100000,
  workers: 15,
  retries: 3,

  testDir: "./tests",
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  reporter: "html",

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    extraHTTPHeaders: {
      'X-QA-TEST': 'Abu Hurayra',
    },
    browserName: 'chromium',
    // viewport: {
    //   width: 1920,
    //   height: 1080
    // }
  },

  /* Configure projects */
  projects: [
    {
      name: 'Essential Addons',
      testMatch: '**/*.ea.spec.js',
      retries: 3,
      use: {
        baseURL: 'https://essential-addons.com/elementor'
      }
    },
    {
      name: 'Essential Blocks',
      testMatch: '**/*.eb.spec.js',
      retries: 3,
      use: {
        baseURL: 'https://essential-blocks.com'
      }
    },
    {
      name: 'BetterDocs',
      testMatch: '**/*.bd.spec.js',
      retries: 3,
      use: {
        baseURL: 'https://automation.s3-tastewp.com'
      }
    },
  ],
});
