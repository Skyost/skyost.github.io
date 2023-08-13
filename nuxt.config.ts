import { defineNuxtConfig } from 'nuxt/config'
import StylelintPlugin from 'vite-plugin-stylelint'
import eslintPlugin from 'vite-plugin-eslint'
import 'dotenv/config'
import { siteMeta } from './site/meta'
import { debug } from './site/debug'

let url = siteMeta.url
if (debug) {
  url = 'http://localhost:3000'
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: siteMeta.title,
      meta: [
        { name: 'theme-color', content: '#0c7cd5' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  devtools: {
    enabled: debug
  },

  css: [
    '~/assets/app.scss'
  ],

  vite: {
    plugins: [
      StylelintPlugin(),
      eslintPlugin()
    ]
  },

  modules: [
    '~/modules/generate-cname',
    'skimple-components/nuxt',
    '@nuxtjs/i18n',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots'
  ],

  runtimeConfig: {
    public: {
      url,
      recaptchaKey: '6LeKnbIUAAAAACp2f5sx8-td-qwZHBv-ZaByOa3R'
    }
  },

  i18n: {
    baseUrl: siteMeta.url,
    locales: [
      {
        code: 'en',
        file: 'en.ts',
        iso: 'en-US'
      },
      {
        code: 'fr',
        file: 'fr.ts',
        iso: 'fr-FR'
      }
    ],
    langDir: 'site/languages',
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    trailingSlash: true,
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root'
    },
    customRoutes: 'config',
    compilation: {
      escapeHtml: false,
      strictMessage: false
    }
  },

  skimpleComponents: {
    bootstrapCss: false,
    bootstrapJs: false
  },

  site: {
    url,
    name: siteMeta.title,
    trailingSlash: true
  },

  linkChecker: {
    failOn404: false
  },

  cname: {
    hostname: url
  }
})
