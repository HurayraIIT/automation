// @ts-check
import { defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

config();

export default defineConfig({
  workers: 8,
  retries: 2,
  testDir: "./tests",
  globalSetup: "global-setup.js",
  fullyParallel: true,

  reporter: [["list"], ["html"]],

  use: {
    baseURL: process.env.WP_BASE_URL,

    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",

    ignoreHTTPSErrors: true,
  },
});
