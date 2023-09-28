import { createRouter, createWebHistory } from 'vue-router'
import Add from './views/Add.vue'

// const history = createWebHistory()

const routes = [
  { path: '/', component: Add }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
