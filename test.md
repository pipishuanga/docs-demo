# 我是一级标题

1. **一但千万不能的**
2. 你的完全可能的



























## 我是二级标题

1. **一但千万不能的**
2. 你的完全可能的









## 我是二级标题

**去我看权威的你的快乐请问你的快乐你**




## javaScript

~~~js
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 共享属性和其他顶层内容...

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'French',
      lang: 'fr', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  }
})
~~~
















