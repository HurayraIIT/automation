// @ts-check
import { defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";

config();

export default defineConfig({
  workers: 4,
  retries: 2,
  testDir: "./tests",
  globalSetup: "global-setup.js",
  fullyParallel: true,

  reporter: process.env.CI
    ? [
        [
          "./node_modules/playwright-slack-report/dist/src/SlackReporter.js",
          {
            slackWebHookUrl: process.env.SLACK_WEBHOOK_URL,
            sendResults: "always", // "always" , "on-failure", "off"
            maxNumberOfFailuresToShow: 0,
            meta: [
              {
                key: "Detailed HTML Results",
                value: "<https://hurayraiit.github.io/automation | 🔗 Click Me!>",
              },
            ],
          },
        ],
        ["dot"],
        ["list"],
        ["html"],
      ]
    : [["dot"], ["list"], ["html"]],

  use: {
    baseURL: process.env.WP_BASE_URL,

    screenshot: "on",
    trace: "retain-on-failure",
    video: "on",

    ignoreHTTPSErrors: true,
  },
});
