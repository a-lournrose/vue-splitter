<template>
  <v-app>
    <Header/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "@/components/Header/Header.vue";

export default {
  components: {Header}
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
