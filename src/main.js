import './assets/css/index.css'
import Vue from 'vue'
import router from './routers'
import store from './vuex/store'

const options = {
  color: '#fff',
  failedColor: '#873b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, options)
import VueScroll from 'vue-infinite-scroll'
Vue.use(VueScroll)


import VueBus from 'vue-bus'
Vue.use(VueBus)
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<router-view></router-view>',
  router,
  store
})
