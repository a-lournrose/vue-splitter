<template>
  <div class='header'>
    <div class="header__link" @click="$router.push('/')">Главная</div>
    <div class="logo">MAPSplitter</div>
    <div class="header__link" @click="$router.push('/map')">Карта</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100%;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;

  &__link {
    cursor: pointer
  }
}
.logo {
  margin: 0 25px;
  cursor: default;
}
</style>