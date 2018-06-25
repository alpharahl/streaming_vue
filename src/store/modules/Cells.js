import axios from 'axios';
import Vue from 'vue';

const state = {
  cells: {}
}

const getters = {
}

const mutations = {
  swapCell(state, { x, y }){
    let y2 = state.cells[y]
    y2[x] = !y2[x]
    Vue.set(state.cells, y, y2)
    console.log(state.cells[y])
  },
  setCells(state, cells){
    for (var y in cells){
      Vue.set(state.cells, y, cells[y])
    }
  }
}

const actions = {
  getCells({ commit }) {
    axios.get('/api/foo')
    .then(response => {
      commit('setCells', response.data)
    })
  },
  sendCells({ state }){
    axios.post('/api/bar', {
      blob: state.cells
    }).then(response => {
      console.log(response.data)
    })
    
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}