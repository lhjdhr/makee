import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/plugins.css'
import '../src/assets/css/helper.css'
import '../src/assets/css/style.css'
import 'font-awesome/css/font-awesome.min.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/js/bootstrap.min.js'

import $ from 'jquery'


Vue.use({ axios, VueAxios});
Vue.prototype.$axios = axios

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
