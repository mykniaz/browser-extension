<template>
  <div class="options-row">
    <div class="options-row__title">
      <slot name="title" />
    </div>
    <div class="options-row__item">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionsRow',
};
</script>

<style lang="scss">
.options-row {
  display: flex;
  width: 100%;

  &__title {
    width: 40%;
  }

  &__item {
    width: 60%;
  }
}
</style>
