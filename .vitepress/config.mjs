import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ps vitePress 文档",
  description: "A VitePress Site",
  base:"/docs-demo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:"/p.svg",
    outline:1,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '哔哩哔哩动画-test', link: '/test' },
      { text: '下拉选项', items:[
        { text: 'Examples', link: '/markdown-examples' },
        { text: '哔哩哔哩动画-test', link: '/test' },
      ] }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'test', link: '/test' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
