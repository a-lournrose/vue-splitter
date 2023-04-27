<template>
  <splitter style="height: 500px">
    <splitter-panel>
      <div>Первая панель</div>
    </splitter-panel>
    <splitter layout="vertical">
      <splitter-panel>Верхняя панель</splitter-panel>
      <splitter-panel>Нижняя панель</splitter-panel>
    </splitter>
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
