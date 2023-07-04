import * as bootstrapTooltip from 'bootstrap/js/dist/tooltip'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bootstrap', {
    ...bootstrapTooltip
  })
})
