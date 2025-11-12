import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createAppI18n } from './locales'

const app = createApp(App)
const i18n = createAppI18n()

app.use(i18n)
app.mount('#app')
