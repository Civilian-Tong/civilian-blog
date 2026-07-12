/**
 *[INPUT]：依赖 eslint-config-next 的 Web Core Vitals 与 TypeScript 规则
 *[OUTPUT]：对外提供项目级 ESLint 扁平配置
 *[POS]：静态质量门，约束 Next.js 与 React 源码
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'coverage/**', 'playwright-report/**', 'test-results/**']),
])
