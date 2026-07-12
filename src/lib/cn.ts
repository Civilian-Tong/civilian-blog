/**
 *[INPUT]：依赖 clsx 的条件类名解析与 tailwind-merge 的冲突消解
 *[OUTPUT]：对外提供 cn 函数，生成稳定、无冲突的 className
 *[POS]：lib 模块的基础样式工具，被所有可组合 UI 组件消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
