import Vue from 'vue'
//import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import {createRouter, createWebHistory} from 'vue-router'
import PageHome from '@/views/PageHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome 
  },
  {
    path: '/about',
    name: 'About',
    component: () =>import('../views/PageAbout.vue')
  }
 
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

const router = createRouter ({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
