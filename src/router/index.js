import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicial from '../App.vue'
import Sobre from '../App1.vue'
import Contatos from '../App2.vue'
import Curriculo from '../App3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicial',
    component: Inicial
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path:'/contatos',
    name:'Contatos',
    component: Contatos
  },
  {
    path:'/curriculo',
    name:'Curriculo',
    component: Curriculo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router