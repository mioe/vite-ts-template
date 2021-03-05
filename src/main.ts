import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Styles
 */
import 'windi.css' // tailwindcss demon
import '@/assets/sass/main.sass'

// init app
createApp(App)
  .use(router)
  .mount('#app')
