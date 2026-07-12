/**
 *[INPUT]：依赖 Vitest 与 React 测试环境
 *[OUTPUT]：对外提供 jsdom、路径别名与测试初始化配置
 *[POS]：自动化测试入口，覆盖纯函数与用户可见交互
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    exclude: ['e2e/**', 'node_modules/**', '.next/**'],
  },
})
