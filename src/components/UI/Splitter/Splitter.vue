<template>
  <div :class="{
    'splitter-horizontal': layout === 'horizontal',
    'splitter-vertical': layout === 'vertical',
  }">
    <template v-for="panel in panels">
      <splitter-panel-renderer :v-node="panel"/>
    </template>
  </div>
</template>
<script>
import SplitterPanelRenderer from "@/components/UI/Splitter/SplitterPanelRenderer.vue";

export default {
  name: 'Splitter',
  components: {SplitterPanelRenderer},
  props: {
    layout: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    panels() {
      const panels = [];
      this.$slots.default.forEach(el => {
        panels.push(el);
      })
      return panels;
    }
  }
}
</script>

<style lang="scss" scoped>
.splitter-horizontal {
  display: flex;
  flex-grow: 1;
}
.splitter-vertical {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>