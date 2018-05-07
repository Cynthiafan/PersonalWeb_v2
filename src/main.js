import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store/index.js'
import './assets/styles/reset.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-91843640-4',
  router,
  ignoreRoutes: ['admin', 'login']
})
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })
Vue.use(VueI18n)


import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)

const i18n = new VueI18n({
    // locale: store.state.language,
    locale: 'zh',
    messages: {
      'en': require('./i18n/en.json'),
      'zh': require('./i18n/zh.json')
    }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  created () {
  AOS.init()
  },
  components: { App },
  template: '<App/>'
})
