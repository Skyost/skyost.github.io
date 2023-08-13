<script setup lang="ts">
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localeCodes = computed<string[]>(() => {
  const result = []
  for (const locale of locales.value) {
    result.push(typeof locale === 'string' ? locale : locale.code)
  }
  return result
})
</script>

<template>
  <ul class="languages">
    <li v-for="code in localeCodes" :key="code">
      <nuxt-link :to="switchLocalePath(code)">
        <img :src="`/images/languages/${code}.svg`" :alt="code">
      </nuxt-link>
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
