<template>
  <div class="wrapper">
    Текст, который располагается на главной странице
  </div>
</template>

<script>
import DownTable from "@/components/Tables/DownTable.vue";

export default {
  components: {DownTable}
}
</script>

<style scoped>
.wrapper {
  max-width: 1100px;
  margin: 0 auto;
}
</style>