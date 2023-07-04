<template>
  <section class="page-section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
@import 'assets/bootstrap-mixins';
@import 'assets/colors';

.page-section {
  background-color: white;
  padding: 15px 60px;

  @include media-breakpoint-down(md) {
    padding-left: 15px;
    padding-right: 15px;
  }

  &.blue {
    background-color: $blue;
    color: rgba(white, 0.85);

    :deep(a),
    :deep(strong) {
      color: white !important;
    }

    :deep(a):hover {
      color: rgba(white, 0.85) !important;
    }

    ::selection {
      background-color: rgba(white, 0.7);
      color: $primary;
    }
  }

  :deep(h1),
  :deep(h2) {
    text-transform: uppercase;
  }

  :deep(h1) {
    font-size: 2.5rem;
  }

  :deep(h2) {
    font-size: 1.75rem;
    font-weight: lighter;
    padding-bottom: 0.3em;
    border-bottom: 1px solid rgba(black, 0.2);
  }
}
</style>
