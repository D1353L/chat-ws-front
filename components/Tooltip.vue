<template>
  <b-tooltip
    :target="target"
    :placement="placement"
    custom-class="custom-tooltip"
  >
    <slot></slot>
  </b-tooltip>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.custom-tooltip {
  .tooltip-inner {
    background: $primary-input-color;
    color: #000;
  }

  .arrow::before {
    border-right-color: $primary-input-color;
  }
}
</style>
