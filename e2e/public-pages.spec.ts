/**
 *[INPUT]：依赖 Playwright 与本地 Next.js 公开页面
 *[OUTPUT]：验证首页、作品、简历主路径及移动导航可用性
 *[POS]：e2e 模块的核心验收脚本，覆盖真实浏览器行为
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { expect, test } from '@playwright/test'

test('访客可从首页进入作品与个人动态', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name.includes('mobile'), '移动端由抽屉导航用例覆盖')
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('欢迎，来到我的世界。')
  await page.getByRole('navigation', { name: '主导航' }).getByRole('link', { name: '作品集' }).click()
  await expect(page).toHaveURL(/\/projects$/)
  await page.getByRole('navigation', { name: '主导航' }).getByRole('link', { name: '个人动态' }).click()
  await expect(page).toHaveURL(/\/moments$/)
})

test('移动端导航可抵达所有内容入口', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), '仅在移动视口验证抽屉导航')
  await page.goto('/')
  await page.getByRole('button', { name: '打开导航' }).click()
  const nav = page.getByRole('navigation', { name: '移动导航' })
  await expect(nav).toBeVisible()
  await nav.getByRole('link', { name: '文章' }).click()
  await expect(page).toHaveURL(/\/articles$/)
})
