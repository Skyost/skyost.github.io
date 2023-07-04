<template>
  <nuxt-layout>
    <page-head :title="$t('error.title')" />
    <error-display :error="error" />
  </nuxt-layout>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
