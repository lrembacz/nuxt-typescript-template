const nodeExternals = require('webpack-node-externals')
const pkg = require('./package')

module.exports = {
  loading: {
    color: 'blue'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Build configuration
  */
  plugins: [
    '~/plugins/vuetify.ts',
    '~/plugins/inversify',
    '~/plugins/filters'
  ],
  css: ['~/assets/style/app.styl'],
  build: {
    vendor: [
      'vuex-class',
      'nuxt-class-component',
      'inversify'
    ],
    extend (config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  },
  modules: [
    '~/modules/typescript',
    '@nuxtjs/pwa'
  ],
  vendor: [
    '~/plugins/vuetify.ts'
  ],
  extractCSS: true,
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}
