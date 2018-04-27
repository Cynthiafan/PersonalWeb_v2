import Vue from 'vue'
import Router from 'vue-router'
import TheHomePage from '@/components/TheHomePage'
import TheErrorPage from '@/components/TheErrorPage'
import Playground from '@/components/Playground/PlaygroundLayout'
import TheAdmin from '@/components/TheAdmin'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'ThePage',
      meta: {title: `Hello, I'm Cynthia`},
      component: TheHomePage
    },
    {
      path: '/playground',
      name: 'playground',
      meta: {title: 'My Playground'},
      component: Playground
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {title: 'Admin'},
      component: TheAdmin
    },
    {
      path: '*',
      name: '404',
      meta: {title: 'Oops!'},
      component: TheErrorPage
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
