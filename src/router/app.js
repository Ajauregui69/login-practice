import { createRouter, createWebHistory } from "vue-router";
import Login from "../Login.vue";
import App from "../App.vue";
import AuthView from "../views/login/AuthView.vue"
import LoginView from "../views/login/login.vue";
import Signup from "../views/login/signup.vue";
import recover from "../views/login/recover.vue"
import recoverPass from "../views/login/recoverPass.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "main",
      path: "/",
      component: Login,
      children: [
        {
          component: AuthView,
          name: "AuthView",
          path: "/",
          children:[
            {
              path: "/",
              name: "login",
              component: LoginView,
            },
            {
              path: "/signup",
              name: "signup",
              component: Signup,
            },
            {
              path: '/recover',
              name: 'recover',
              component: recover
            },
            {
              path: '/recoverPass',
              name: 'recoverPass',
              component: recoverPass
            }
          ]
        }
      ],
    },
    {
      path: "/app",
      name: "app",
      component: App
    },
  ],
});

export default router;