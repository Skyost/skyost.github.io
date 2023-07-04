<template>
  <div>
    <h1 v-text="title" />
    <p class="mb-0">
      <span v-html="$t('error.description')" />
      <span v-if="errorCode === 404" v-html="` ${$t('error.contactMe')}`" />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: null,
      required: true
    }
  },
  computed: {
    errorCode () {
      if (/^-?\d+$/.test(this.error.toString())) {
        return parseInt(this.error.toString())
      }
      if (Object.prototype.hasOwnProperty.call(this.error, 'statusCode')) {
        return parseInt(this.error.statusCode)
      }
      return null
    },
    title () {
      const errorCode = this.errorCode
      if (errorCode === 404) {
        return this.$nuxt.$i18n.t('error.pageNotFound')
      }
      const error = this.$nuxt.$i18n.t('error.title')
      return errorCode ? `${error} ${errorCode}` : error
    }
  }
}
</script>
