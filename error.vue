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
    <page-content :navbar="false">
      <page-section class="p-lg-5 p-3 text-center">
        <img class="icon" src="/images/skyost.png" alt="Skyost">
        <error-display :error="error" />
      </page-section>
    </page-content>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  border-radius: 100%;
  height: 200px;
  max-width: 90%;
  margin-bottom: 20px;
}
</style>
