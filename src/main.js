import './assets/css/index.css'
import Vue from 'vue'
import router from './routers'
import VueBus from 'vue-bus'

Vue.use(VueBus)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<router-view></router-view>',
	router: router
})
