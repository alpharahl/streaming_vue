import axios from 'axios';
import Vue from 'vue';

const state = {
  cells: {}
}

const defaultCell = {
  walkable: false,
  linked_cells: []
}

const getters = {
}

const mutations = {
  swapCell(state, { x, y}){
    Vue.set(state.cells[y][x], "walkable", !state.cells[y][x]["walkable"])
  },
  setCells(state, cells){
    console.log(cells)
    for (var y in cells){
      let row = cells[y]
      let rowSimple = []
      for (var r in row){
        rowSimple.push(row[r])
      }
      Vue.set(state.cells, y, rowSimple)
    }
    window.x = state.cells
  },
  disableAll(state){
    for (let y=0; y < 100; y += 1){
      for (let x=0; x < 98; x += 1){
        let x2 = defaultCell
        state.cells[y][x] = x2
      }
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