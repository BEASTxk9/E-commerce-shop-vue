import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // landing
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // register
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  // login
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  // home
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../views/LandingView.vue')
  },
  // shop
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/ShopView.vue')
  },
  // single
  {
    path: '/shop/:id',
    name: 'single',
    component: () => import('../views/SingleView.vue'),
    props : true
  },
  // contact
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  // users admin
  {
    path: '/usersadmin',
    name: 'usersadmin',
    component: () => import('../views/UsersAdmin.vue')
  },
  // products admin
  {
    path: '/productsadmin',
    name: 'productsadmin',
    component: () => import('../views/ProductsAdmin.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
