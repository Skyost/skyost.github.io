<script setup lang="ts">
const props = defineProps<{ error: any }>()

const pageTitleSuffix = computed(() => {
  if (Object.prototype.hasOwnProperty.call(props.error, 'statusCode')) {
    return props.error.statusCode
  }
  return null
})
</script>

<template>
  <div>
    <page-head :title="`${$t('error.title')} ${pageTitleSuffix}`" />
    <page-content :navbar="false" class="justify-content-center">
      <page-section class="p-lg-5 p-3 text-center">
        <error-display :error="error" />
      </page-section>
    </page-content>
  </div>
</template>
