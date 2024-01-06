<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{ error: any }>()

const errorCode = computed(() => {
  if (/^-?\d+$/.test(props.error.toString())) {
    return parseInt(props.error.toString())
  }
  if (Object.prototype.hasOwnProperty.call(props.error, 'statusCode')) {
    return parseInt(props.error.statusCode)
  }
  return null
})

const title = computed(() => {
  if (errorCode.value === 404) {
    return t('error.pageNotFound')
  }
  const error = t('error.title')
  return errorCode.value ? `${error} ${errorCode.value}` : error
})
</script>

<template>
  <div>
    <img v-if="errorCode === 404" src="/images/404.svg" alt="404">
    <h1 v-text="title" />
    <p class="mb-0">
      <span v-html="$t('error.description')" />
      <span v-if="errorCode === 404" v-html="` ${$t('error.contactMe')}`" />
    </p>
  </div>
</template>
