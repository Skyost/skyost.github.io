<template>
  <div class="phone-case">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.phone-case {
  --border-radius-outer: 2rem;
  --outer-padding: 0.5rem;
  --case-color: hsl(0, 0%, 0%);
  --border-radius-inner: calc( var(--border-radius-outer) - var(--outer-padding));
  box-shadow: 0 0 0 2px white;
  background-color: var(--case-color);
  border-radius: var(--border-radius-outer);
  padding: var(--outer-padding);
  width: min(250px);
  aspect-ratio: 1/2;
  position: relative;
  margin-inline: auto;

  &::before {
    content: '';
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    height: 1.3rem;
    background-color: var(--case-color);
    width: 22%;
    border-radius: 25px;
  }

  .content {
    border-radius: var(--border-radius-inner);
    overflow: hidden;
  }
}
</style>
