<template>
  <td 
    class="cell"
    v-on:click="select()"
    v-bind:class="{ 
      inactive: !selected && edit
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
      if (this.edit) {
        this.$store.commit('Cells/swapCell', {'x': this.x, 'y': this.y})  
      } else {
        console.log(this.x, this.y)
      }
      
    }
  },

  computed: {
    selected () {
      try {
        return this.cells[this.y][this.x]["walkable"]
      } catch {
        return false
      }
    },
    ...mapState( 'Cells', {
      cells: 'cells',
      edit: 'edit'
    })
  }
}
</script>

<style>
.cell{
  width: 5px;
  height: 5px;
}

.inactive {
  background-color: rgba(114, 3, 3, 0.8);
  border: 1px solid black;
}
</style>
