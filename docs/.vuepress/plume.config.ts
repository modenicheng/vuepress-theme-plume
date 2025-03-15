import path from 'node:path'
import { defineThemeConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'
import { zhNavbar } from './navbar.js'
import { zhNotes } from './notes/index.js'

export default defineThemeConfig({
  logo: '/favicon.svg',

  profile: {
    avatar: '/avatar.jpg',
    circle: true,
    name: 'Modenc',
    description: 'The tech is always here, as well as the beauty.',
    location: 'Beijing, China',
    organization: 'Cheng Jiaqi',
  },

  social: [
    { icon: 'bilibili', link: 'https://space.bilibili.com/478206680' },
    { icon: 'github', link: 'https://github.com/modenicheng' },
  ],
  navbarSocialInclude: ['bilibili', 'github'],

  footer: {
    copyright: 'Copyright © 2025-present modenc <br \> <a target="_blank" href="https://beian.miit.gov.cn/">京 ICP 备 2025113038 号 - 1</a>',
    message: `Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a> ${version}`,
  },

  locales: {
    '/': {
      notes: zhNotes,
      navbar: zhNavbar,
    },
    // '/en/': {
    //   notes: enNotes,
    //   navbar: enNavbar,
    // },
  },

  autoFrontmatter: { exclude: ['**/*.snippet.*'] },

  bulletin: {
    layout: 'top-right',
    lifetime: 'always',
    // title: '🎉 公告 🎉',
    contentFile: path.join(__dirname, 'bulletin.md'),
    enablePage: page => page.path === '/guide/features/bulletin/',
  },
})
