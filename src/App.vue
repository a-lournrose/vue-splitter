<template>
  <splitter>
    <splitter-panel size="20">
      <div>Первая панель</div>
    </splitter-panel>
    <splitter-panel>
      <div>Вторая панель</div>
    </splitter-panel>
  </splitter>
</template>

<script>
import Splitter from "@/components/UI/Splitter/Splitter.vue";
import SplitterPanel from "@/components/UI/Splitter/SplitterPanel.vue";

export default {
  components: {Splitter, SplitterPanel}
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
</style>
