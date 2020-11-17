import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import RegistrationForm from '../views/RegistrationForm'
import Admin from '../views/admin/Admin';
import Biker from '../views/admin/Biker';
import Customer from '../views/admin/Customer';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registrationForm',
    name: 'RegistrationForm',
    component: RegistrationForm
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/biker',
    name: 'Biker',
    component: Biker
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
