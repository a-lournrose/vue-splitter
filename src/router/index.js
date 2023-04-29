import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import MapPage from "@/pages/MapPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/map',
    component: MapPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
