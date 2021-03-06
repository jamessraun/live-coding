// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('semantic-ui-css/semantic.min.css')
require('semantic-ui-css/semantic.min.js')
import Vue from 'vue'
import App from './App'
import router from './router'
import Navbar from './components/Navbar'


import {store} from './store'


Vue.config.productionTip = false
Vue.component('navbar',Navbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
