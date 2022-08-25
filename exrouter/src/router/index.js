// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
import thisMain from '@/views/thisMain.vue'
import thisQuery from '../views/thisQuery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'thisMain',
    component: thisMain
  },
  {
    path: '/thisQuery',
    name: 'thisQuery',
    component: thisQuery,
  },
  {
    path: '/thisParams',
    name: 'thisParams',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/thisParams.vue'),
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
