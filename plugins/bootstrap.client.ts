import tooltip from 'bootstrap/js/dist/tooltip'

export default defineNuxtPlugin(nuxtApp => nuxtApp.provide('bootstrap', { tooltip }))
