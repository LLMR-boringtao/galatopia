const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Galatopia ai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: ''},
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
      { rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" },
      { rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Gochi+Hand:wght@400&amp;display=swap" },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    {
      src: 'element-ui/lib/theme-chalk/index.css'
    },
    {
      src: '~static/css/style.css'
    },
  ],
  vender: [
    'element-ui'
  ],
  babel: {
    'plugins': [['component', [
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-default'
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments: true
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  telemetry: false,
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      config.resolve.alias['public'] = path.resolve(__dirname, './')
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },
  plugins: [
    {
      src: '~plugins/vant.js', ssr: true
    },
    {
      src: '~plugins/element.js', ssr: true
    },
    {
      src: '~plugins/quill', ssr: false
    },
    {
      src: '~plugins/echarts.js', ssr: false
    }
  ]
}
