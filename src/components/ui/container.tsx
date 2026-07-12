/**
 *[INPUT]：依赖 React HTMLAttributes 与 lib/cn 的样式合并能力
 *[OUTPUT]：对外提供统一站点宽度与横向间距的 Container 组件
 *[POS]：ui 模块的布局原语，被页面与全局外壳共同消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10', className)} {...props} />
}
