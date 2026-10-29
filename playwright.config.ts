import { defineConfig, devices } from '@playwright/test';

const runtime = globalThis as typeof globalThis & { process: { env: Record<string, string | undefined> } };
const baseURL = runtime.process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:4325';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL,
    trace: 'retain-on-failure',
    launchOptions: {
      args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
    },
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'pnpm dev --host 127.0.0.1 --port 4325',
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
