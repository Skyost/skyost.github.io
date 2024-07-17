<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'

const { locales, setLocale } = useI18n()

const getFlagUrl = (locale: LocaleObject) => {
  let code = locale.code
  if (code === 'en') {
    code = 'gb'
  }
  return `https://flagcdn.com/${code.toLowerCase()}.svg`
}
</script>

<template>
  <ul class="languages">
    <li
      v-for="locale in locales"
      :key="locale.code"
    >
      <a
        href="#"
        @click.prevent="setLocale(locale.code)"
      >
        <img
          :src="getFlagUrl(locale)"
          :alt="locale.name"
        >
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
