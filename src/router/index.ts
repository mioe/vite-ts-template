import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
})

export default router
