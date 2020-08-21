import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false


const store = new Vuex.Store({
  state: {
    animations:[
        ['Steve','fade'],
        ['Client','slide'],
        ['References','slideUp'],
        ['Algo','zoom'],
        ['Contact','flipX'],
        ['Imprint','flipY']
      ],
    view: 'fade',
    header:  'Steve'
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
