/**
 *[INPUT]：依赖 Playwright Test 与 Next.js 本地开发服务
 *[OUTPUT]：对外提供 Chromium、视口、失败截图和 webServer 配置
 *[POS]：项目根部的浏览器质量门，验证真实路由与交互
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:3100',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop-chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-chromium', use: { ...devices['iPhone 13'], browserName: 'chromium' } },
  ],
  webServer: {
    command: 'pnpm dev --port 3100',
    url: 'http://127.0.0.1:3100',
    reuseExistingServer: true,
    timeout: 120_000,
  },
})
