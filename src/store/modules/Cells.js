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
    Vue.set(y2, x, !y2[x])
  },
  setCells(state, cells){
    for (var y in cells){
      let row = cells[y]
      let rowSimple = []
      for (var r in row){
        rowSimple.push(row[r]["walkable"])
      }
      Vue.set(state.cells, y, rowSimple)
    }
  },
  disableAll(state){
    for (var y in state.cells){
      let y2 = state.cells[y]
      y2 = y2.fill(false)
      Vue.set(state.cells, y, y2)
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