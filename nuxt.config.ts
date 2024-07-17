import { defineNuxtConfig } from 'nuxt/config'
import StylelintPlugin from 'vite-plugin-stylelint'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import { siteMeta } from './site/meta'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-07-01',

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

  vite: {
    plugins: [
      StylelintPlugin(),
      eslintPlugin()
    ]
  },

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

  eslint: {
    config: {
      stylistic: true
    }
  },

  icon: {
    class: 'vue-icon'
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
    strategy: 'prefix',
    trailingSlash: true,
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root'
    },
    compilation: {
      escapeHtml: false,
      strictMessage: false
    }
  },

  nitro: {
    routeRules: {
      '/': { ssr: false }
    }
  },

  site: {
    url: siteMeta.url,
    name: siteMeta.title,
    trailingSlash: true
  },

  linkChecker: {
    failOnError: false
  },

  cname: {
    host: siteMeta.url
  }
})
