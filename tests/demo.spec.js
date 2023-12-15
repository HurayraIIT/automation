// @ts-check
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("It works.", async ({ request }) => {
  const response = await request.get("/");
  expect(response.status()).toBe(200);
  const body = await response.text();
  console.log(body);
});
