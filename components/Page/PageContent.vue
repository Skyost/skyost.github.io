<script setup lang="ts">
withDefaults(defineProps<{ navbar?: boolean }>(), { navbar: true })
</script>

<template>
  <div id="page-padding">
    <div id="page-content" :class="{'ms-auto': navbar, 'justify-content-center': !navbar}">
      <article>
        <slot />
      </article>
    </div>
    <div v-if="navbar" id="page-navbar-container" :class="{'me-auto': navbar}">
      <page-navbar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/bootstrap-mixins';

#page-padding {
  display: flex;
  padding-top: 60px;
  padding-bottom: 60px;

  @include media-breakpoint-down(lg) {
    padding-top: 0;
    padding-bottom: 0;
  }

  #page-content {
    padding: 0;
    position: relative;
    width: 60%;
    box-shadow: 0 0 100px rgba(black, 0.5);

    @include media-breakpoint-down(lg) {
      margin-left: 0 !important;
      width: 100%;
      padding-top: 60px;
    }
  }

  #page-navbar-container {
    @include media-breakpoint-down(lg) {
      margin-right: 0 !important;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
