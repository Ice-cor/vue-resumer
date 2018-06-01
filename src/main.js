// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './assets/scss/reset.scss'


Vue.use(ElementUI)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
