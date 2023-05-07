<template>
  <div :style="[size ? {flexBasis: size + '%'} : {flexGrow: 1}]" class="panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number
    },
    minSize: {
      type: Number,
      default: 0
    },
    maxSize: {
      type: Number,
      default: 100
    }
  }
}
</script>

<style scoped>
.panel {
  display: flex;
  overflow: auto;
}
</style>