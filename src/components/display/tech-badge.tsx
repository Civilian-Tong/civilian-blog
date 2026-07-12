/**
 *[INPUT]：依赖单个技术名称字符串
 *[OUTPUT]：对外提供统一 TechBadge 视觉标签
 *[POS]：display 模块的技术栈原语，被项目、简历与能力分区复用
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
export function TechBadge({ children }: { children: string }) {
  return <span className="rounded-full border border-[#c6d9ef] bg-white/70 px-2.5 py-1 font-mono text-[10px] font-medium text-[#3f648d]">{children}</span>
}
