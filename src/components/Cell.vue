<template>
  <td 
    class="cell"
    v-on:click="select()"
    v-bind:class="{ 
      inactive: !selected
    }"
  />
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {
      elevator: false,
      escalator: false,
    }
  },

  props: [
    'x',
    'y',
    'selectedProp'
  ],

  methods: {
    select(){
      this.$store.commit('Cells/swapCell', {'x': this.x, 'y': this.y})
    }
  },

  computed: {
    selected () {
      try {
        return this.cells[this.y][this.x]
      } catch {
        return false
      }
    },
    ...mapState( 'Cells', {
      cells: 'cells'
    })
  }
}
</script>

<style>
.cell{
  width: 5px;
  height: 5px;
  border: 1px solid black;
}

.inactive {
  background-color: rgba(8, 0, 0, 0.5);
}
</style>
