import { test, expect } from '@playwright/test';

test('home page loads and shows start button', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('button', { name: /start|начать/i })).toBeVisible();
});

test('language switcher is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('English')).toBeVisible();
  await expect(page.getByText('Русский')).toBeVisible();
});

test('guide page is accessible', async ({ page }) => {
  await page.goto('/guide');
  await expect(page).toHaveURL(/guide/);
});
