import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//懒加载
const App = resolve => require(['./App'], resolve)
const Login = resolve => require(['./pages/Login'], resolve)
const Main = resolve => require(['./pages/Main'], resolve)
const account = resolve => require(['./layouts/account/'], resolve)
const analyze = resolve => require(['./layouts/analyze/'], resolve)
const welfare = resolve => require(['./layouts/welfare/'], resolve)
const abc = resolve => require(['./layouts/abc'], resolve)
const movie = resolve => require(['./layouts/movie'], resolve)
const movie1 = resolve => require(['./layouts/movie1'], resolve)
const NotFound = {
	template: `<div>404</div>`
}


const router = new VueRouter({
	// mode: 'history', // h5 history模式 可以去除URL中的/#/     默认hash模式
	routes: [{
		path: '/app',
		component: App
	}, {
		path: '/login',
		component: Login
	}, {
		path: '/main',
		alias: '/',
		component: Main,
		children: [{
			path: 'account',
			alias: '/',
			component: account
		}, {
			path: 'analyze',
			component: analyze
		}, {
			path: 'welfare',
			component: welfare
		}, {
      path: 'abc',
      component: abc
    }, {
      path: 'movie',
      component: movie
    }, {
      path: 'movie1',
      component: movie1
    }]
	}, {
		path: '*',
		component: NotFound
	}]
})

export default router
