const { test, expect } = require("@playwright/test");

test("Check footer", async ({ page }) => {
  await page.goto("https://ivangeorgiev34-movies.onrender.com");
  const footer = await page.$("footer");
  const text = await footer.textContent();
  expect(text).toBe(
    "© 2023 - Software Engineering and DevOps exam preparation"
  );
});
