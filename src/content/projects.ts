/**
 *[INPUT]：依赖 types/content 的 Project 契约
 *[OUTPUT]：对外提供六个可筛选、可生成详情页的项目数据
 *[POS]：content 模块的作品单一真相源，被首页、作品页与简历页消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { Project } from '@/types/content'

export const projects: Project[] = [
  {
    slug: 'atlas-rag-workbench', title: 'Atlas RAG Workbench', eyebrow: 'KNOWLEDGE SYSTEM',
    summary: '面向团队知识库的检索增强工作台，让资料上传、切分、检索与答案溯源形成闭环。',
    category: 'RAG', status: '在线', stack: ['Next.js', 'FastAPI', 'pgvector', 'LangChain'], featured: true,
    index: 'P—01', gradient: 'from-[#0b5cff] via-[#2b83ff] to-[#9bd9ff]',
    metrics: [{ label: '检索延迟', value: '< 800ms' }, { label: '引用命中', value: '92%' }, { label: '文档规模', value: '10K+' }],
    highlights: ['混合检索与重排序', '答案逐句引用', '增量索引管线'],
    challenge: '团队资料散落在多个格式中，传统关键词检索无法理解上下文，也难以说明答案来自哪里。',
    solution: '统一解析文档并建立混合索引，在回答阶段强制绑定引用片段，同时记录检索链路供调试。',
    role: '负责产品结构、检索管线、API 设计、前端工作台与 Docker 部署。',
    links: [{ label: '在线体验', href: '#', kind: 'demo' }, { label: '源代码', href: '#', kind: 'source' }],
  },
  {
    slug: 'pulse-agent-console', title: 'Pulse Agent Console', eyebrow: 'AGENT OPERATIONS',
    summary: '可观察的智能体运行控制台，把工具调用、任务状态和异常恢复展示为一条清晰时间线。',
    category: '智能体', status: '开发中', stack: ['React', 'Python', 'MCP', 'WebSocket'], featured: true,
    index: 'P—02', gradient: 'from-[#071a46] via-[#0a4dbb] to-[#2cb8ff]',
    metrics: [{ label: '工具接入', value: '18' }, { label: '事件追踪', value: '实时' }, { label: '恢复策略', value: '3 类' }],
    highlights: ['实时执行拓扑', '工具权限边界', '失败节点重放'],
    challenge: '智能体任务执行过程不可见，工具失败后只能从日志碎片反推原因。',
    solution: '将每次推理、工具调用和状态变化建模为事件，前端按任务因果链实时渲染。',
    role: '负责事件模型、WebSocket 通道、运行控制台和权限交互。',
    links: [{ label: '开发日志', href: '#', kind: 'docs' }],
  },
  {
    slug: 'northstar-portfolio', title: 'Northstar Portfolio', eyebrow: 'PERSONAL BRAND',
    summary: '为学生求职场景设计的个人品牌、作品集、文章与在线简历统一入口。',
    category: 'Web', status: '维护中', stack: ['Next.js', 'TypeScript', 'Tailwind CSS'], featured: true,
    index: 'P—03', gradient: 'from-[#1264e8] via-[#61a5ff] to-[#d8f1ff]',
    metrics: [{ label: 'Lighthouse', value: '95+' }, { label: '响应断点', value: '3' }, { label: '核心页面', value: '8' }],
    highlights: ['叙事型首页', '类型化内容层', '打印友好简历'],
    challenge: '传统博客把文章放在中心，却无法让 HR 快速理解个人能力和代表项目。',
    solution: '以身份、能力、项目、文章和成长顺序组织首页，保留深度内容又提高决策效率。',
    role: '独立完成产品定位、设计系统、前端架构与可访问性验证。',
    links: [{ label: '项目文档', href: '#', kind: 'docs' }],
  },
  {
    slug: 'vision-inspection', title: 'Vision Inspect', eyebrow: 'COMPUTER VISION',
    summary: '面向实验室数据的缺陷识别平台，支持批量推理、结果复核与样本回流。',
    category: 'AI', status: '在线', stack: ['Python', 'FastAPI', 'PyTorch', 'Vue'], featured: false,
    index: 'P—04', gradient: 'from-[#1559b7] via-[#00a5cf] to-[#b9f2ff]',
    metrics: [{ label: '准确率', value: '94.6%' }, { label: '单图推理', value: '46ms' }, { label: '样本', value: '26K' }],
    highlights: ['批量推理队列', '人工复核闭环', '模型版本对比'],
    challenge: '模型离线指标不错，但缺少面向真实使用者的复核与反馈入口。',
    solution: '把推理结果、置信度和标注反馈放进同一工作流，使错例自然回流训练集。',
    role: '负责服务封装、批处理任务、复核界面与部署监控。',
    links: [{ label: '案例说明', href: '#', kind: 'docs' }],
  },
  {
    slug: 'campus-flow', title: 'Campus Flow', eyebrow: 'SERVICE DESIGN',
    summary: '聚合校园活动、场地与报名流程的轻量服务，减少信息孤岛和重复填报。',
    category: 'Web', status: '已归档', stack: ['Vue', 'Spring Boot', 'MySQL', 'Docker'], featured: false,
    index: 'P—05', gradient: 'from-[#174ea6] via-[#4f8ef7] to-[#a9c8ff]',
    metrics: [{ label: '服务用户', value: '1.2K' }, { label: '活动记录', value: '320' }, { label: '表单减少', value: '40%' }],
    highlights: ['统一活动模型', '二维码核验', '权限分层'],
    challenge: '活动通知、报名和签到分散在多个渠道，组织者重复整理信息。',
    solution: '以活动作为单一事实源，串联发布、报名、提醒与现场核验。',
    role: '负责后端接口、权限模型、前端活动流和部署。',
    links: [{ label: '复盘文章', href: '#', kind: 'docs' }],
  },
  {
    slug: 'paper-scout', title: 'Paper Scout', eyebrow: 'RESEARCH ASSISTANT',
    summary: '从论文收藏到主题聚类的研究助手，帮助快速建立领域脉络与阅读队列。',
    category: 'AI', status: '维护中', stack: ['Python', 'Embedding', 'Next.js', 'PostgreSQL'], featured: false,
    index: 'P—06', gradient: 'from-[#003b73] via-[#0074d9] to-[#72c7ff]',
    metrics: [{ label: '论文索引', value: '8K+' }, { label: '主题簇', value: '34' }, { label: '重复减少', value: '31%' }],
    highlights: ['语义去重', '主题聚类', '阅读队列'],
    challenge: '收藏数量持续增长，但论文之间的关系和阅读优先级越来越模糊。',
    solution: '用语义向量发现重复和相似主题，再结合阅读状态形成可执行队列。',
    role: '负责数据管线、聚类策略、查询 API 与交互原型。',
    links: [{ label: '技术说明', href: '#', kind: 'docs' }],
  },
]
