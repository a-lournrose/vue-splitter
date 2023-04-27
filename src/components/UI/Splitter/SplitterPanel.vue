<template>
  <div :style="[size ? {flexBasis: size + '%'} : {flexGrow: 1}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number
    }
  }
}
</script>