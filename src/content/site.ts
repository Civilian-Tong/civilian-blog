/**
 *[INPUT]：依赖首页主图静态资源与站点公开文案
 *[OUTPUT]：提供 Civilian_blog 的品牌、Hero 和导航基础配置
 *[POS]：content 模块的站点级单一真相源，被布局与首页消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
export const site = {
  name: 'Civilian_blog',
  email: '3519501337@qq.com',
  welcome: '欢迎，来到我的世界。',
  motto: '归心自渡，自有荣光之处……',
  hero: {
    imageSrc: '/images/hero/civilian-hero.jpg',
    imageAlt: 'Civilian_blog 的湖畔人物主图',
    focalPoint: '52% 48%',
  },
} as const
