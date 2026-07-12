/**
 *[INPUT]：依赖 lucide-react 图标与浏览器打印能力
 *[OUTPUT]：对外提供打印按钮和明确禁用的 PDF 示例入口
 *[POS]：resume 模块的唯一客户端边界，不伪造尚未提供的简历文件
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
'use client'

import { Download, Printer } from 'lucide-react'

export function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-3 print:hidden">
      <button type="button" onClick={() => window.print()} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#075ee8] px-5 text-sm font-bold text-white"><Printer className="size-4" />打印简历</button>
      <a href="#" aria-disabled="true" onClick={(event) => event.preventDefault()} title="替换为真实 PDF 后开放" className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-full border border-[#bdd2e9] bg-white px-5 text-sm font-bold text-[#7a8fa5]"><Download className="size-4" />下载 PDF 简历</a>
    </div>
  )
}
