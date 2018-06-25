import Vue from 'vue'
import Vuex from 'vuex'
import Cells from './modules/Cells'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Cells
  },
  strict: debug
})