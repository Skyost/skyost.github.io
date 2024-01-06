<script setup lang="ts">
import PageHead from '~/components/Page/PageHead.vue'

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useTooltips()
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
    <nuxt-loading-indicator color="#2196f3" />
    <page-head />
    <slot />
  </Html>
</template>

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
