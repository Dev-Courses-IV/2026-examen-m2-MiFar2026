import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Lectura from '../views/Lectura.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/lectura',
    name: 'Lectura',
    component: Lectura
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router