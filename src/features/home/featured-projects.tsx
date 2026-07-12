/**
 *[INPUT]：依赖 projects 模拟数据、ProjectCard、SectionHeading 与 Container
 *[OUTPUT]：对外提供首页代表作品分区
 *[POS]：home 模块的能力证据层，连接身份陈述与完整作品集
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/display/section-heading'
import { projects } from '@/content/projects'
import { ProjectCard } from '@/features/projects/project-card'

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured)
  return (
    <section aria-label="精选作品" className="content-atmosphere py-20 sm:py-28">
      <Container>
        <SectionHeading index="02" title="精选作品" description="关于网站、应用与 AI 项目的创作记录。" href="/projects" linkLabel="查看全部作品" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">{featured.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index === 0} />)}</div>
      </Container>
    </section>
  )
}
