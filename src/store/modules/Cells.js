import axios from 'axios';
import Vue from 'vue';

const state = {
  cells: {},
  edit: false
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
    for (let y=0; y < 96; y += 1){
      for (let x=0; x < 80; x += 1){
        let x2 = defaultCell
        state.cells[y][x] = x2
      }
    }
  },
  swapEdit(state){
    state.edit = !state.edit
  },
  clearNav(state){
    for (var y in state.cells){
      for (var x in state.cells[y]){
        if (state.cells[y][x]["nav"]){
          Vue.set(state.cells[y][x], "nav", false)   
        }
      }
    }
  },
  setNav(state,cells){
    for (var y in state.cells){
      for (var x in state.cells[y]){
        if (state.cells[y][x]["nav"]){
          Vue.set(state.cells[y][x], "nav", false)   
        }
      }
    }

    for (var c in cells){
      var cCell = cells[c]
      Vue.set(
        state.cells[cCell[1]][cCell[0]],
        "nav",
        true
      )
    }
  },
  linkCells(state, {cell1, cell2}){
    console.log(cell1, cell2)
    let c1x = cell1[0]
    let c1y = cell1[1]
    let c2x = cell2[0]
    let c2y = cell2[1]
    Vue.set(state.cells[c1y][c1x], "linked_cells", cell2)
    Vue.set(state.cells[c2y][c2x], "linked_cells", cell1)
    console.log("C1:", state.cells[c1y][c1x], "C2", state.cells[c2y][c2x])
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