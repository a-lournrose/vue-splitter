<template>
  <div>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import M from 'materialize-css'

export default {
  components: {Header},
  mounted () {
    M.AutoInit()
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
