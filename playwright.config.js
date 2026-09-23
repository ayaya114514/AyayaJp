"use strict";

const { defineConfig, devices } = require("@playwright/test");

// A dedicated port, never reused: Vite preview also defaults to 4173, and
// reusing whatever answers there could test a different app.
const port = 4318;

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop-chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 320, height: 640 },
      },
    },
    {
      name: "iphone-14-webkit",
      use: { ...devices["iPhone 14"] },
    },
    {
      name: "iphone-14-landscape-webkit",
      use: { ...devices["iPhone 14 landscape"] },
    },
  ],
  webServer: {
    command: "node scripts/serve-static.js",
    env: { PORT: String(port) },
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
