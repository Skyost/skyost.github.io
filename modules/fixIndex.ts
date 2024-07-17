import { createResolver, defineNuxtModule, extendPages, useLogger } from '@nuxt/kit'

/**
 * The name of the module.
 */
const name = 'fix-index'

/**
 * The logger instance.
 */
const logger = useLogger(name)

/**
 * Nuxt module to compile Latex files into PDF.
 */
export default defineNuxtModule({
  meta: {
    name,
    version: '0.0.1',
    compatibility: { nuxt: '^3.0.0' }
  },
  setup: (_, nuxt) => {
    logger.info('This module created an "index.html" in your "dist" folder.')
    logger.info('This is a workaround, as stated in https://github.com/nuxt-modules/i18n/issues/3016.')
    const resolver = createResolver(import.meta.url)
    extendPages((pages) => {
      pages.unshift({
        name: 'index',
        path: '/index.html',
        file: resolver.resolve(nuxt.options.srcDir, 'pages', 'index.vue')
      })
    })
  }
})
