<template>
  <div :class="{
    'splitter-horizontal': layout === 'horizontal',
    'splitter-vertical': layout === 'vertical',
  }" @mousemove="onSplitterMouseMove">
    <template v-for="(panel, i) in $slots.default">
      <splitter-panel-renderer :v-node="panel"/>
      <div class="gutter"
           v-if="i !== $slots.default.length - 1"
           @mousedown="onGutterMouseDown($event, i)"
      >
        <div class="gutter__handle"></div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'Splitter',
  components: {
    SplitterPanelRenderer: {
      functional: true,
      render: (h, ctx) => ctx.props.vNode
    }
  },
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
      prevPanelElementProps: null,
      nextPanelElementProps: null,
      active: false,
    }
  },
  methods: {
    onSplitterMouseMove(e) {
      if (e.buttons === 0 || e.which === 0) {
        this.active = false;
      }
      this.onMove(e);
    },
    onGutterMouseDown(e, index) {
      e.preventDefault();
      this.gutterElement = e.currentTarget;
      this.prevPanelElement = this.gutterElement.previousElementSibling;
      this.nextPanelElement = this.gutterElement.nextElementSibling;
      this.prevPanelElementProps = this.$slots.default[index].componentOptions.propsData;
      this.nextPanelElementProps = this.$slots.default[index + 1].componentOptions.propsData;
      this.active = true;
    },
    validateSize(percent) {
      return (
          percent > (this.prevPanelElementProps.minSize || 0) &&
          percent < (this.prevPanelElementProps.maxSize || 100) &&
          (100 - percent) > (this.nextPanelElementProps.minSize || 0) &&
          (100 - percent) < (this.nextPanelElementProps.maxSize || 100)
      )
    },
    onMove(e) {
      let gutterElement = e.currentTarget;
      let offset = 0;
      let percent = 0;
      if (this.active) {
        if (this.layout === 'horizontal') {
          while (gutterElement) {
            offset += gutterElement.offsetLeft;
            gutterElement = gutterElement.offsetParent;
          }
          percent = Math.floor(((e.pageX - offset) / e.currentTarget.offsetWidth) * 10000) / 100;
        } else {
          while (gutterElement) {
            offset += gutterElement.offsetTop;
            gutterElement = gutterElement.offsetParent;
          }
          percent = Math.floor(((e.pageY - offset) / e.currentTarget.offsetHeight) * 10000) / 100;
        }
        if (this.validateSize(percent)) {
          this.prevPanelElement.style.flexBasis = percent + '%';
          this.nextPanelElement.style.flexBasis = (100 - percent) + '%';
          this.$emit('resize', e);
        }
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