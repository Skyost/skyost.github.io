import { defineNuxtConfig } from 'nuxt/config'
import StylelintPlugin from 'vite-plugin-stylelint'
import eslintPlugin from 'vite-plugin-eslint'
import siteMeta from './site/meta'
import 'dotenv/config'
import debug from './site/debug'

let url = siteMeta.url
if (debug.debug) {
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
        { rel: 'icon', type: 'image/png', href: '/images/icon.png' }
      ]
    }
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
    'nuxt-link-checker',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots'
  ],

  runtimeConfig: {
    public: {
      url,
      recaptchaKey: process.env.RECAPTCHA_KEY
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
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en'
    },
    precompile: {
      escapeHtml: false,
      strictMessage: false
    }
  },

  skimpleComponents: {
    bootstrapCss: false,
    bootstrapJs: false
  },

  sitemap: {
    hostname: url,
    trailingSlash: true,
    exclude: [
      '/404/'
    ]
  },

  linkChecker: {
    hostname: url,
    trailingSlash: true,
    failOn404: false
  },

  cname: {
    hostname: url
  },

  robots: {
    sitemap: `${url}/sitemap.xml`
  }
})
