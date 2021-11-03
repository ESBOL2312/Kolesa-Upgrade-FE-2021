import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '../views/shop/shop.vue'
import Score from '../views/scores/scores.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Shop
  },
  {
    path: '/get-scores',
    name: 'GetScores',
    component: Score
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
