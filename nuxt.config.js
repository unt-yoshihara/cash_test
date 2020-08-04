import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'cashのテストページ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'cashのテストをしているページです。' },
      { property: 'og:title', content: 'cashのテストページ' },
      { property: 'og:description', content: 'cashのテストをしているページです。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://relaxed-dubinsky-8bf368.netlify.app/' },
      { property: 'og:image', content: 'https://relaxed-dubinsky-8bf368.netlify.app/og.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'cashのテストページ' },
      { property: 'twitter:description', content: 'cashのテストをしているページです。' },
      { property: 'twitter:url', content: 'https://relaxed-dubinsky-8bf368.netlify.app/' },
      { property: 'twitter:image', content: 'https://relaxed-dubinsky-8bf368.netlify.app/og.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
