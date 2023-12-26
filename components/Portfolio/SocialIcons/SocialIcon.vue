<script setup lang="ts">
const props = defineProps<{ social: string }>()

const links: { [key: string]: string } = {
  twitter: 'https://twitter.com/Skyost',
  github: 'https://github.com/Skyost',
  'google-play': 'https://play.google.com/store/apps/dev?id=9192910026538664281',
  apple: 'https://itunes.apple.com/us/developer/hugo-delaunay/id1456648264',
  linkedin: 'https://www.linkedin.com/in/hugodelaunay/'
}
const title = computed<string>(() => {
  const parts = props.social.split('-')
  const result = []
  for (const part of parts) {
    result.push(part.charAt(0).toUpperCase() + part.slice(1))
  }
  return result.join(' ')
})
</script>

<template>
  <nuxt-link class="social-icon" :to="links[social]">
    <ski-icon :icon="social" :title="title" />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.social-icon {
  font-size: 30px;
  margin: 16px;
}
</style>
