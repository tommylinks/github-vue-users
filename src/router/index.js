import Vue from 'vue'
import VueRouter from 'vue-router'

import UserList from '../views/UserList'
import Detail from '../views/Detail'
import SelectedUsers from '../views/SelectedUsers'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'User list',
    component: UserList
  },
  {
    path: '/user/:login',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },
  {
    path: '/selected',
    name: 'SelectedUsers',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectedUsers.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
