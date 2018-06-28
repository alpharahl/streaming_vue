<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <div class="map">
        <table class="grid">
          <tr v-bind:key=y v-for="y in 100">
            <Cell
              v-bind:x=x-1
              v-bind:y=y-1
              v-bind:key=x
              v-for="x in 98"/>
          </tr>
        </table>
      </div>
      <router-view/>
      <div>
        
        <v-btn v-on:click="nav">Nav</v-btn>
        <v-btn v-on:click="clearNav">Clear Nav</v-btn>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import Cell from './Cell'
import {navigate} from '../helpers/navLogic'
import {mapState} from 'vuex'

export default {
  components: {
    Cell
  },

  methods: {
    nav(){
      this.$store.commit('Cells/setNav',
        navigate([37,38],[60, 79], this.cells))
      console.log(this.cells)
    },
    clearNav(){
      this.$store.commit('Cells/clearNav')
    }
  },

  computed: {
    ...mapState( 'Cells', {
      cells: 'cells'
    })
  },

  mounted () {
    this.$store.commit('Cells/clearNav')
  }
}
</script>

<style>
.map{
  background: url(../assets/map_cropped.png) no-repeat center top;
  background-size: contain;
  text-align: center;
}

.grid{
  border: 1px white solid;
  border-collapse: collapse;
}
</style>
