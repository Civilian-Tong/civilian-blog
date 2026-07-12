/**
 *[INPUT]：依赖 ButtonLink 与 EmptyState
 *[OUTPUT]：对外提供全局 404 页面及首页、作品恢复入口
 *[POS]：app 模块的未找到边界，被无效页面与内容 slug 统一消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { ButtonLink } from '@/components/ui/button-link'
import { EmptyState } from '@/components/display/empty-state'

export default function NotFound() {
  return <EmptyState code="404" title="坐标不存在" description="这个页面可能被移动、归档，或者从未进入这张蓝图。选择一个明确入口继续浏览。" actions={<><ButtonLink href="/">返回首页</ButtonLink><ButtonLink href="/projects" variant="secondary">浏览作品</ButtonLink></>} />
}
