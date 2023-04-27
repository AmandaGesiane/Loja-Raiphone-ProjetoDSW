import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'sobre',   
    component: () => import(/* webpackChunkName: "SobreView" */ '../views/SobreView.vue')
  },
  {
    path: '/cadastracelular',
    name: 'cadastracelular',
    component: () => import(/* webpackChunkName: "CadastraCelular" */ '../views/CadastraCelular.vue')
  },

  {
    path: '/cadastrafuncionario',
    name: 'cadastrafuncionario',
    component: () => import(/* webpackChunkName: "CadastraFuncionario" */ '../views/CadastraFuncionario.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
