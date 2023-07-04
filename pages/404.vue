<template>
  <div>
    <page-head :title="`${$t('error.title')} 404`" />
    <page-content :navbar="false" class="justify-content-center">
      <page-section class="p-lg-5 p-3 text-center">
        <img class="icon" src="/images/skyost.png" alt="Skyost">
        <error-display error="404" />
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
