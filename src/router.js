import Vue from 'vue';
import Router from 'vue-router';
import Hello from './components/HelloWorld'
import Home from './home'
import Login from './components/login'

Vue.use(Router)

export default new Router({
  routes:[
      {
          path:'/',
          component:Home
      },
      {
          path:'/login',
          component:Login
      }
  ]
})