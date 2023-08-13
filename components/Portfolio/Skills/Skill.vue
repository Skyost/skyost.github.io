<script setup lang="ts">
defineProps<{ skill: string }>()
</script>

<template>
  <ski-column md="4" xs="12" class="text-center">
    <img class="skill-image" :src="`/images/skills/${skill}.svg`" :alt="skill">
    <p class="mb-0" v-html="$t(`skills.skill.${skill}`)" />
  </ski-column>
</template>

<style lang="scss" scoped>
.skill-image {
  max-width: 50%;
  height: 100px;
  margin-bottom: 20px;
}
</style>
