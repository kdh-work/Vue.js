import Vue from 'vue'
import VueRouter from 'vue-router'
//Main라우트는 사용자가 해당 path에 접근하지 않아도 vue파일을 import하는 것
import Main from '../views/MainPage.vue'
//import Login from  '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //path에 접근하기 전까지는 vue 파일에 대한 import가 일어나지 않음
    component: () => import(/* webpackChunkName: "this" */ '../views/LoginPage.vue')
    //component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
