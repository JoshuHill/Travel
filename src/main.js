// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router"
import store from './store'
import fastClick from "fastclick"
import VueAwesomeSwiper from "vue-awesome-swiper"
import "./assets/styles/reset.css"
import "./assets/styles/border.css"
import "./assets/styles/iconfont.css"
import "swiper/dist/css/swiper.css"

fastClick.attach(document.body)
Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})