import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/login/login.vue";
import Signup from "../views/login/signup.vue";
import Login from "../Login.vue";
import App from "../App.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "main",
      path: "/",
      component: Login,
      children: [
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