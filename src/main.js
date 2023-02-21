import { createApp } from 'vue'
import Login from './Login.vue'
import App from './App.vue'
import loginRoutes from './router/login'
import router from './router/app.js'

import './assets/main.css'

const loginApp = createApp(Login)
const app = createApp(App)

loginApp.use(loginRoutes)
app.use(router)


loginApp.mount('#app')
app.mount('#app')


