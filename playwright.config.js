// @ts-check
import { defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";

config();

export default defineConfig({
  workers: process.env.CI ? 1 : undefined,

  testDir: "./tests",
  fullyParallel: true,

  reporter: [["list"], ["html"]],

  use: {
    baseURL: process.env.URL,
    ignoreHTTPSErrors: true,
    trace: "retain-on-failure",
    extraHTTPHeaders: {
      "X-QA-TEST": "Abu Hurayra",
    }
  }
});
