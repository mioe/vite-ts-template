import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Plugins
 */
import head from '@/plugins/vueuse-head'
import i18n from '@/plugins/vue-i18n'
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
  .use(i18n)
  .use(router)
  .use(head)
  .mount('#app')
