<template>
  <splitter style="height: 100vh" @resize="resizeSplitter">
    <splitter-panel :size='20' :max-size='40' :min-size='40'>
      <div></div>
    </splitter-panel>
    <splitter layout="vertical" @resize="resizeSplitter">
      <splitter-panel>
        <Map @getMap="mapHandler"></Map>
      </splitter-panel>
      <splitter-panel :size='20'></splitter-panel>
    </splitter>
  </splitter>
</template>

<script>
import Splitter from "@/components/UI/Splitter/Splitter.vue";
import SplitterPanel from "@/components/UI/Splitter/SplitterPanel.vue";
import Map from "@/components/Map/Map.vue";

export default {
  data() {
    return {
      layer: null
    }
  },
  components: {Splitter, SplitterPanel, Map},
  methods: {
    mapHandler(m) {
      this.layer = m;
    },
    resizeSplitter() {
      this.layer.updateSize();
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
</style>
