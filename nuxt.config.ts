import { defineNuxtConfig } from 'nuxt/config'
import StylelintPlugin from 'vite-plugin-stylelint'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import { siteMeta } from './site/meta'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    'nuxt-cname-generator',
    '@bootstrap-vue-next/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-link-checker',
    '@nuxt/icon'
  ],
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

  css: [
    '~/assets/app.scss'
  ],

  site: {
    url: siteMeta.url,
    name: siteMeta.title,
    trailingSlash: true
  },
  compatibilityDate: '2024-07-01',

  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  vite: {
    plugins: [
      StylelintPlugin(),
      eslintPlugin()
    ]
  },

  cname: {
    host: siteMeta.url
  },

  eslint: {
    config: {
      stylistic: true
    }
  },

  i18n: {
    baseUrl: siteMeta.url,
    locales: [
      {
        code: 'en',
        file: 'en.ts',
        language: 'en-US'
      },
      {
        code: 'fr',
        file: 'fr.ts',
        language: 'fr-FR'
      }
    ],
    langDir: 'i18n/locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    trailingSlash: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'language',
      redirectOn: 'root'
    },
    compilation: {
      escapeHtml: false,
      strictMessage: false
    }
  },

  icon: {
    class: 'vue-icon'
  },

  linkChecker: {
    failOnError: false,
    skipInspections: [
      'link-text'
    ]
  }
})
