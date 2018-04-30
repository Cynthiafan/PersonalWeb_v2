import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      language: 'zh'
    },
    mutations: {
      changeLanguage (state, webLanguage) {
        state.language = webLanguage
      }
    },
    getters: {
      language: state => state.language,
    }
});
