import Vue from 'vue'
import Router from 'vue-router'
import TheHomePage from '@/components/TheHomePage'
import TheErrorPage from '@/components/TheErrorPage'
import about from '@/components/AboutMe'

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
      component: TheHomePage,
      children: [
        {
          path: 'about',
          name: 'about',
          component: about
        }
      ]
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
