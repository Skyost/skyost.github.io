<template>
  <div>
    <page-head :title="`${$t('error.title')} ${pageTitleSuffix}`" />
    <page-content :navbar="false" class="justify-content-center">
      <page-section class="p-lg-5 p-3 text-center">
        <img class="icon" src="/images/skyost.png" alt="Skyost">
        <error-display :error="error" />
      </page-section>
    </page-content>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  computed: {
    pageTitleSuffix () {
      if (Object.prototype.hasOwnProperty.call(this.error, 'statusCode')) {
        return this.error.statusCode
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  border-radius: 100%;
  height: 200px;
  max-width: 90%;
  margin-bottom: 20px;
}
</style>
