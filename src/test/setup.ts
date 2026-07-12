/**
 *[INPUT]：依赖 @testing-library/jest-dom 的 DOM 断言扩展
 *[OUTPUT]：对 Vitest 测试环境注册可访问性友好的 DOM 匹配器
 *[POS]：test 模块的全局初始化文件，被所有单元与组件测试加载
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(cleanup)
