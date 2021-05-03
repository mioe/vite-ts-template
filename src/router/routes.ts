/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('@/views/Features.vue'),
  },
  {
    path: '/testing',
    name: 'Testing',
    component: () => import('@/views/Testing.vue'),
  },
  {
    path: '/error-404',
    name: 'Error404',
    component: () => import('@/views/Error404.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Error404' }
  },
]

// console.log('🚥 routes', routes)

export default routes
