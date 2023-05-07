<template>
  <header class="header">
    <ul>
      <li>
        <v-btn elevation="2" to="/">Главная</v-btn>
      </li>
      <li>
        <v-btn elevation="2" to="/map">Карта</v-btn>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: rgba(163, 194, 245, 0.4);
  padding: 0 25px;

  ul {
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;

    li {
      list-style-type: none;
      text-transform: uppercase;
      margin-right: 15px;
    }

    li:last-child {
      margin-right: 0;
    }
  }
}
</style>