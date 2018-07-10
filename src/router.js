import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import store from './store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    }
  ]
})

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
