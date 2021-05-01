import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Plugins
 */
import i18n from '@/plugins/vue-i18n'
import head from '@/plugins/vueuse-head'

/**
 * Styles
 */
import 'virtual:windi.css' // tailwindcss demon
import '@/assets/sass/main.sass'

/**
 * init app
 */
createApp(App)
  .use(router)
  .use(i18n)
  .use(head)
  .mount('#app')
