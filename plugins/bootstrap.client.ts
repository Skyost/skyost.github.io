import * as bootstrapTooltip from 'bootstrap/js/dist/tooltip'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bootstrap', {
    ...bootstrapTooltip
  })
})
