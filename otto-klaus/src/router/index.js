import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'
import NotFound from '../components/NotFound.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/juguetes',
    name: 'Toys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Toys.vue'),
    meta: {
      login:true
    }
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {

  let user = firebase.auth().currentUser
  let authRequired = to.matched.some(route => route.meta.login)
  if(!user && authRequired) {
    next('/')
  } else {
    next()
  }
})

export default router
