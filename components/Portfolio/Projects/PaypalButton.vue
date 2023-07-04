<template>
  <ski-button class="paypal-button" variant="light">
    <nuxt-link to="https://paypal.me/Skyost">
      <img src="/images/projects/paypal.svg" alt="PayPal">
    </nuxt-link>
  </ski-button>
</template>

<style lang="scss" scoped>
.paypal-button {
  padding: 20px 20px;

  img {
    height: 30px;
    max-width: 100%;
  }
}
</style>
