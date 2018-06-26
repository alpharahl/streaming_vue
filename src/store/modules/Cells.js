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
    console.log(state.cells)
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