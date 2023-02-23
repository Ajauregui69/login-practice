import { createApp } from 'vue'
import App from './Login.vue'
import router from './router/app.js'

import './assets/main.css'
import 'uno.css'

const app = createApp(App)

app.use(router)

app.mount('#app')


