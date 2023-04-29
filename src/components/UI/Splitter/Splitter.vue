<template>
  <div :class="{
    'splitter-horizontal': layout === 'horizontal',
    'splitter-vertical': layout === 'vertical',
  }" @mousemove="onSplitterMouseMove">
    <template v-for="(panel, i) in panels">
      <splitter-panel-renderer :v-node="panel"/>
      <div class="gutter"
           v-if="i !== panels.length - 1"
           @mousedown="onGutterMouseDown"
      >
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
  data() {
    return {
      gutterElement: null,
      prevPanelElement: null,
      nextPanelElement: null,
      active: false,
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
  },
  methods: {
    onSplitterMouseMove(e) {
      if (e.buttons === 0 || e.which === 0) {
        this.active = false;
      }
      this.onMove(e);
    },
    onGutterMouseDown(e) {
      e.preventDefault();
      this.gutterElement = e.currentTarget;
      this.prevPanelElement = this.gutterElement.previousElementSibling;
      this.nextPanelElement = this.gutterElement.nextElementSibling;
      this.active = true;
      console.log(e);
    },
    onMove(e) {
      let offset = 0;
      let gutterElement = e.currentTarget;
      let percent = 0;
      if (this.active) {
        if (this.layout === 'horizontal') {
          while (gutterElement) {
            offset += gutterElement.offsetLeft;
            gutterElement = gutterElement.offsetParent;
          }
          percent = Math.floor(((e.pageX - offset) / e.currentTarget.offsetWidth) * 10000) / 100;
          console.log(percent)
        } else {
          while (gutterElement) {
            offset += gutterElement.offsetTop;
            gutterElement = gutterElement.offsetParent;
          }
          percent = Math.floor(((e.pageY - offset) / e.currentTarget.offsetHeight) * 10000) / 100;
          console.log(percent)
        }
        this.prevPanelElement.style.flexBasis = percent + '%';
        this.nextPanelElement.style.flexBasis = (100 - percent) + '%';
        this.$emit('resize', e);
      }
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.splitter-horizontal > .gutter > .gutter__handle {
  height: 24px;
  width: 100%;
  background-color: #bbbbbb;
}

.splitter-vertical > .gutter > .gutter__handle {
  width: 24px;
  height: 100%;
  background-color: #bbbbbb;
}
</style>