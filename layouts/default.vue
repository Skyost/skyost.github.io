<script setup lang="ts">
import PageHead from '~/components/Page/PageHead.vue'

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

// TODO: Wait for https://github.com/nuxt-modules/i18n/issues/1632 to be fixed.
const { locale, setLocale } = useI18n()
onMounted(async () => {
  const currentLocale = locale.value
  await setLocale(currentLocale === 'en' ? 'fr' : 'en')
  await setLocale(currentLocale)
})
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Body>
        <NuxtLoadingIndicator color="#2196f3" />
        <page-head />
        <slot />
      </Body>
    </Html>
  </div>
</template>

<script lang="ts">
export default {
  async mounted () {
    await this.$nextTick()
    const bootstrap = await import('bootstrap/dist/js/bootstrap.min')
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    for (const tooltip of tooltips) {
      // eslint-disable-next-line no-new
      new bootstrap.Tooltip(tooltip)
    }
  }
}
</script>

<style lang="scss">
@import 'assets/colors';

a {
  text-decoration: none;
  font-weight: bold;
  color: $primary;

  &:hover {
    text-decoration: underline;
    color: darken($primary, 10%);
  }
}

strong {
  color: $primary;
}

input,
textarea {
  background-color: $light !important;
  transition: background-color 0.2s !important;
  border: var(--bs-border-width) solid #f2f4f6 !important;

  &:hover,
  &:active {
    background-color: #cecfd1 !important;
    border-color: #c2c3c5;
  }
}
</style>
