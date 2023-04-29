<template>
  <div>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";

export default {
  components: {Header}

}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
