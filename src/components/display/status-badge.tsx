/**
 *[INPUT]：依赖 ProjectStatus 有限状态
 *[OUTPUT]：对外提供带文字和图形指示的 StatusBadge
 *[POS]：display 模块的状态原语，避免仅用颜色表达项目可用性
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { ProjectStatus } from '@/types/content'

const tones: Record<ProjectStatus, string> = {
  在线: 'bg-[#e7f9f2] text-[#087451] border-[#b5ead8]',
  开发中: 'bg-[#eaf3ff] text-[#0753ba] border-[#bdd6f8]',
  维护中: 'bg-[#fff7df] text-[#8a5b00] border-[#f1dda5]',
  已归档: 'bg-[#eef2f6] text-[#5d6c7b] border-[#d5dee7]',
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[9px] font-semibold tracking-[.08em] ${tones[status]}`}><span aria-hidden="true" className="size-1.5 rounded-full bg-current" />{status}</span>
}
