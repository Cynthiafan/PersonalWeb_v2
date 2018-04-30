import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import VueScrollTo from 'vue-scrollto'
import store from './store/index.js'
import './assets/styles/reset.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Vuetify from 'vuetify'

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

const i18n = new VueI18n({
    // locale: store.state.language,
    locale: 'zh',
    messages: {
      'en': require('./i18n/en.json'),
      'zh': require('./i18n/zh.json')
    }
})

Vue.config.productionTip = false

// $(window).on('load', function () {
//     AOS.refresh();
// });


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
