import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "@/assets/style/reset.css"
import "@/assets/style/main.css"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')