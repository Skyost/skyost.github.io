<template>
  <ul class="social">
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
.social {
  list-style-type: none;
  padding-left: 0;
  font-size: 1.2em;

  li {
    display: inline-block;
    margin: 0 15px;
  }
}
</style>
