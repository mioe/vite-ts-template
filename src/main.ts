import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Plugins
 */
import head from '@/plugins/vueuse-head'
import pinia from '@/plugins/pinia'

/**
 * Styles
 */
import 'virtual:windi.css' // windicss demon
import '@/assets/sass/main.sass'

/**
 * init app
 */
createApp(App)
  .use(pinia)
  .use(router)
  .use(head)
  .mount('#app')
