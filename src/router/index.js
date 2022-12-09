import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import InicioAdminview from '@/views/usuarioAdmin/InicioAdminview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/usuarioAdmin/InicioAdminview.vue')
  },
  {
    path: '/admin/aprendiz',
    name: 'aprendiz',
    component: () => import('../views/usuarioAdmin/AprendicesView.vue')
  },
  {
    path: '/admin/psicologo',
    name: 'psicologo',
    component: () => import('../views/usuarioAdmin/PsicologosView.vue')
  },
  {
    path: '/admin/registropsicologo',
    name: 'registropsicologo',
    component: () => import('../views/usuarioAdmin/RegistroPsicologo.vue')
  },
  {
    path: '/admin/administrador',
    name: 'administrador',
    component: () => import('../views/usuarioAdmin/AdministradoresView.vue')
  },
  {
    path: '/admin/artesanias',
    name: 'artesanias',
    component: () => import('../views/usuarioAdmin/ArtesaniasView.vue')
  },
  {
    path: '/admin/perfil',
    name: 'perfil',
    component: () => import('../views/usuarioAdmin/PerfilAdmin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
