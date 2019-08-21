export default {
  // modern: 'client',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
    ]
  },
  modules: [
    ['~/modules/docs/', { port: 3001 }],
    '~/modules/static/',
    '~/modules/components/',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/Developmint/nuxt-svg-loader/
    'nuxt-svg-loader',
    // https://github.com/Atinux/nuxt-tailwindcss/
    '@nuxtjs/tailwindcss',
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
    // https://nuxt-community.github.io/nuxt-i18n
    ['nuxt-i18n', {
      locales: [
        { code: 'fr', iso: 'fr-FR', text: 'Français' },
        { code: 'zh', iso: 'zh-ZH', text: '简体中文' },
        { code: 'ja', iso: 'ja-JA', text: '日本語' },
        { code: 'ko', iso: 'ko-KO', text: '한국어' },
        { code: 'ru', iso: 'ru-RU', text: 'Русский' },
        { code: 'id', iso: 'id-ID', text: 'Indonesian' },
        { code: 'en', iso: 'en-US', text: 'English' }
      ],
      defaultLocale: 'en'
    }]
  ],
  plugins: [
    '~/plugins/init.js',
    '~/plugins/intersection-observer.client.js',
    '~/plugins/ga.client.js',
    '~/plugins/adblock.client.js'
  ],
  env: {
    githubToken: process.env.GITHUB_TOKEN || '4aa6bcf919d238504e7db59a66d32e78281c0ad3',
    docSearchApiKey: 'ff80fbf046ce827f64f06e16f82f1401'
  },
  loading: { color: '#41B883' },
  router: {
    scrollBehavior(to, from, savedPosition) {
      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    }
  },
  build: {
    hardSource: {
      info: {
        level: 'warn' // nuxt/nuxt.js#5653
      }
    }
  },
  generate: {
    fallback: true,
    interval: 100
  }
}
