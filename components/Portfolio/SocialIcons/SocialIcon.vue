<template>
  <nuxt-link class="social-icon" :to="links[social]">
    <ski-icon :icon="social" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    social: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      links: {
        twitter: 'https://twitter.com/Skyost',
        github: 'https://github.com/Skyost',
        'google-play': 'https://play.google.com/store/apps/dev?id=9192910026538664281',
        apple: 'https://itunes.apple.com/us/developer/hugo-delaunay/id1456648264',
        linkedin: 'https://www.linkedin.com/in/hugodelaunay/'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.social-icon {
  font-size: 30px;
  margin: 16px;
}
</style>
