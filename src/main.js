import './assets/css/index.css'

import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routers'
import store from './vuex/store'

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history', // h5 history模式 可以去除URL中的/#/     默认hash模式
  routes
});

new Vue({
  template: `<router-view></router-view>`,
  router,
  store
}).$mount('#app');
