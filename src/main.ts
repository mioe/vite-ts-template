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
import head from '@/plugins/vueuse-head'

/**
 * Styles
 */
import 'virtual:windi.css' // tailwindcss demon
import 'highlight.js/styles/github-dark-dimmed.css'
import '@/assets/sass/main.sass'

/**
 * init app
 */
createApp(App)
  .use(router)
  .use(head)
  .directive('highlightjs', highlightjs)
  .mount('#app')
