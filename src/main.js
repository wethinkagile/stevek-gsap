import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false


const store = new Vuex.Store({
  state: {
    animations:[
        ['About Me','fade'],
        ['Clients','slide'],
        ['References','slideUp'],
        ['Apps','zoom'],
        ['Contact Me','flipX'],
        ['The Vlog','flipY']
      ],
    view: 'fade',
    header:  'About Me'
  },
  mutations: {
    setView(state, index) {
      state.header = state.animations[index][0]
      state.view = state.animations[index][1]
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
