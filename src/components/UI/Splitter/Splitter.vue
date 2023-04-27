<template>
  <div :class="{
    'splitter-horizontal': layout === 'horizontal',
    'splitter-vertical': layout === 'vertical',
  }">
    <template v-for="(panel, i) in panels">
      <splitter-panel-renderer :v-node="panel"/>
      <div class="gutter" v-if="i !== panels.length - 1">
        <div class="gutter__handle"></div>
      </div>
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
      default: 'horizontal',
      validator: function (value) {
        return ['horizontal', 'vertical'].includes(value)
      }
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

  .gutter {
    cursor: col-resize;

    &__handle {
      height: 24px;
      width: 100%;
      background-color: #bbbbbb;
    }
  }
}
.splitter-vertical {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .gutter {
    cursor: row-resize;
  }
}
.gutter {
  flex-basis: 4px;
  background-color: #edeeef;
}
</style>