<template>
  <splitter style="height: calc(100vh - 60px)" @resize="onResize">
    <splitter-panel :size='20' :max-size='30'>
      <down-table style="min-width: 400px"/>
    </splitter-panel>
    <splitter layout="vertical" @resize="onResize">
      <splitter-panel>
        <MapContainer @afterMounted="onMapMounted"></MapContainer>
      </splitter-panel>
      <splitter-panel :size='20' :max-size="40">
        <down-table/>
      </splitter-panel>
    </splitter>
  </splitter>
</template>

<script>
import Splitter from "@/components/UI/Splitter/Splitter.vue";
import SplitterPanel from "@/components/UI/Splitter/SplitterPanel.vue";
import MapContainer from "@/components/MapContainer/MapContainer.vue";
import DownTable from "@/components/Tables/DownTable.vue";

export default {
  components: {DownTable, Splitter, SplitterPanel, MapContainer},
  data() {
    return {
      map: null
    }
  },
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