/* eslint-disable no-unused-vars */
import { Configuration as NuxtConfiguration } from '@nuxt/types'
import blogs from './content/blogs.json'
import { Configuration } from '~/node_modules/@types/webpack'
/* eslint-enable */

const routes: string[] = ([] as string[]).concat(blogs.map(blog => `/blog/${blog.slug}`))

const config: NuxtConfiguration = {
  mode: 'universal',
  dir: {},
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
    routes: routes
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
    '@nuxtjs/sitemap',
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
  /*
  ** sitemap
  */
  sitemap: {
    gzip: true,
    path: '/sitemap.xml',
    exclude: [
      '/admin/**'
    ],
    generate: true,
    routes: routes
  },
  /*
  ** webfonts
  */
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
    extend(config: Configuration, ctx) {
      config.module!.rules.push({
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
