<template>
  <div :style="[size ? {flexBasis: size + '%', display: 'flex'} : {flexGrow: 1, display: 'flex'}]">
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