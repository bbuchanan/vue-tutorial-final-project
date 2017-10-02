import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Stocks from './components/Stocks.vue'
import Portfolio from './components/Portfolio.vue'

import { store } from './store'

Vue.use(VueRouter)

Vue.filter('money', (value, key) => {
  return Number(value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/Home', component: Home },
    { path: '/Portfolio', component: Portfolio },
    { path: '/Stocks', component: Stocks }
  ]
})

new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(App)
})
