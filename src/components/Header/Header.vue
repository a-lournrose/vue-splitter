<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="center">
        <li><a @click="$router.push('/')">Главная</a></li>
        <li><a @click="$router.push('/map')">Карта</a></li>
      </ul>
    </div>
  </nav>
</template>