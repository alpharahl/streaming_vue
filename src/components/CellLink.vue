<template>
  <div>
    <input 
      v-model="c1x"
      id="c1xinput"
    >
    <label for="c1xinput">Coord 1 x</label>
    <input 
      v-model="c1y"
      id="c1yinput"
    >
    <label for="c1yinput">Coord 1 y</label>
    <input 
      v-model="c2x"
      id="c2xinput"
    >
    <label for="c2xinput">Coord 2 x</label>
    <input 
      v-model="c2y"
      id="c2yinput"
    >
    <label for="c2yinput">Coord 2 y</label>

    <v-btn v-on:click="link">Link!</v-btn>
    <v-btn v-on:click="saveCells">Save!</v-btn>
  </div>
</template>


<script>
export default {
  data () {
    return {
      c1x: 0,
      c1y: 0,
      c2x: 0,
      c2y: 0
    }    
  },

  methods: {
    saveCells(){
      this.$store.dispatch('Cells/sendCells')
    },
    link () {
      this.$store.commit('Cells/linkCells', {'cell1': [this.c1x, this.c1y], 'cell2': [this.c2x, this.c2y]})
    }
  }
}
</script>
