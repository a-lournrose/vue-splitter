<template>
  <splitter style="height: calc(100vh - 60px)" @resize="onResize">
    <splitter-panel :size='20' :max-size='40' :min-size='10'>
      <div>Текст, который располагается слева</div>
    </splitter-panel>
    <splitter layout="vertical" @resize="onResize">
      <splitter-panel>
        <MapContainer @afterMounted="onMapMounted"></MapContainer>
      </splitter-panel>
      <splitter-panel :size='20' :max-size="40">
        <div>Текст, который располагается внизу</div>
      </splitter-panel>
    </splitter>
  </splitter>
</template>

<script>
import Splitter from "@/components/UI/Splitter/Splitter.vue";
import SplitterPanel from "@/components/UI/Splitter/SplitterPanel.vue";
import MapContainer from "@/components/MapContainer/MapContainer.vue";

export default {
  data() {
    return {
      map: null
    }
  },
  components: {Splitter, SplitterPanel, MapContainer},
  methods: {
    onMapMounted(map) {
      this.map = map;
    },
    onResize() {
      this.map.updateSize();
    }
  }
}
</script>