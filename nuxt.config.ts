import NuxtConfiguration from '@nuxt/config'
// @ts-ignore
import blogs from './content/blogs.json'
import { Configuration } from '~/node_modules/@types/webpack'

const config: NuxtConfiguration = {
  mode: 'universal',
  env: {
    NUXT_ENV_GITHUB_URL: 'https://github.com/t-tajiri',
    NUXT_ENV_TWITTER_URL: 'https://twitter.com/tajiridev'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'my blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    routes: [].concat(blogs.map(blog => `/blog/${blog.slug}`))
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lazyload'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/eslint-module',
    'nuxt-fontawesome',
    'nuxt-webfontloader'
  ],
  /*
  ** font awesome icon
  */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faTwitter',
          'faGithub'
        ]
      }
    ]
  },
  webfontloader: {
    google: {
      families: [
        'Lobster:400',
        'Open Sans:300',
        'Noto Sans JP:400,700',
        'Roboto Mono:400,700'
      ]
    }
  },
  /*
  ** robots
  */
  robots: {
    UserAgent: '*',
    Disallow: '/admin'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config: Configuration, ctx) {
      // @ts-ignore
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      })
    }
  }
}

export default config
