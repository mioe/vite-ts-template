/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/testing',
    name: 'Testing',
    component: () => import('@/views/Testing.vue'),
  },
]

// console.log('🚥 routes', routes)

export default routes
