<script setup>
const { locales, setLocale } = useI18n()
</script>

<template>
  <ul class="languages">
    <li v-for="{code} in locales" :key="code">
      <a href="#" @click.prevent.stop="setLocale(code)">
        <img :src="`/images/languages/${code}.svg`" :alt="code">
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.languages {
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    margin-right: 0.5rem;

    img {
      height: 16px;
      border-radius: var(--bs-border-radius);
      transition: filter 0.2s;

      &:hover {
        filter: brightness(80%);
      }
    }
  }
}
</style>
