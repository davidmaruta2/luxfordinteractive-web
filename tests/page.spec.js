const { test, expect } = require("@playwright/test");

const siteUrl = `file:///${process.cwd().replace(/\\/g, "/")}/index.html`;

test("desktop page renders without console errors", async ({ page }) => {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.setViewportSize({ width: 1440, height: 1100 });
  await page.goto(siteUrl);

  await expect(page.getByRole("heading", { name: /Apps that move people/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Our ventures, presented honestly." })).toBeVisible();
  await expect(page.locator("img[alt='keenlee app icon']")).toBeVisible();
  expect(errors).toEqual([]);
});

test("mobile layout keeps key content visible", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(siteUrl);

  await expect(page.getByRole("navigation").getByRole("link", { name: "Portfolio" })).toBeVisible();
  await expect(page.getByRole("link", { name: "admin@luxfordinteractive.com" }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Waddl" })).toBeVisible();
});

test("reduced motion disables ambient canvas", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(siteUrl);

  await expect(page.locator("#ambientCanvas")).toHaveCSS("display", "none");
});
