// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
// import router from './router' // vanilla SPA
import routes from './router/routes' // via vite-ssg

/**
 * Styles
 */
import 'windi.css' // tailwindcss demon
import '@/assets/sass/main.sass'

/**
 * init app
 */
/**
 * via vanilla SPA
 */
// createApp(App)
//   .use(router)
//   .mount('#app')
/**
 * via vite-ssg: https://github.com/antfu/vite-ssg
 */
// `export const createApp` is required
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, isClient }) => {
    // install plugins etc.
  }
)
