
//懒加载
const App = resolve => require(['./App'], resolve);
const Main = resolve => require(['./layouts/Main'], resolve);
const account = resolve => require(['./layouts/account/'], resolve);
const analyze = resolve => require(['./layouts/analyze/'], resolve);
const welfare = resolve => require(['./layouts/welfare/'], resolve);
const abc = resolve => require(['./layouts/abc'], resolve);
const movie = resolve => require(['./layouts/movie'], resolve);
const movie1 = resolve => require(['./layouts/movie1'], resolve);
const NotFound = {
  template: `<div>404</div>`
};



export default [
  {
    path: '/app',
    component: App
  },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: 'account',
        alias: '/',
        component: account
      },
      {
        path: 'analyze',
        component: analyze
      },
      {
        path: 'welfare',
        component: welfare
      },
      {
        path: 'abc',
        component: abc
      },
      {
        path: 'movie',
        component: movie
      },
      {
        path: 'movie1',
        component: movie1
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]
