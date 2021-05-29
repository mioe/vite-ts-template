import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Directives
 */
import highlightjs from '@/directives/v-highlightjs'

/**
 * Plugins
 */
import i18n from '@/plugins/vue-i18n'
import head from '@/plugins/vueuse-head'

/**
 * Styles
 */
import 'virtual:windi.css' // tailwindcss demon
import 'highlight.js/styles/monokai-sublime.css'
import '@/assets/sass/main.sass'

/**
 * init app
 */
createApp(App)
  .use(router)
  .use(i18n)
  .use(head)
  .directive('highlightjs', highlightjs)
  .mount('#app')
