import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login/login.vue'

const loginRoutes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    }
  ]
})

export default loginRoutes
