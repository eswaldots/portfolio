import { test, expect } from "@playwright/test";

const DEVELOPMENT_URL = "http://localhost:4321";

test("app runs and displays title with animation", async ({ page }) => {
  await page.goto(DEVELOPMENT_URL);

  await expect(page).toHaveTitle(/Aaron Avila/);
});

test("has first proyect with url", async ({ page }) => {
  await page.goto(DEVELOPMENT_URL);

  await expect(
    page.getByRole("heading", { name: "Experiencia laboral" }),
  ).toBeVisible();

  await expect(page.getByRole("link")).toHaveAttribute(
    "href",
    "https://avilabeauty.vercel.app",
  );
});
