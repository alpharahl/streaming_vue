<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <div class="map">
        <table class="grid">
          <tr v-bind:key=y v-for="y in 100">
            <Cell
              v-bind:x=x
              v-bind:y=y 
              v-bind:key=x
              v-for="x in 98"/>
          </tr>
        </table>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import Cell from './Cell'
import {mapState} from 'vuex'

export default {
  components: {
    Cell
  },

  computed: {
    ...mapState( 'Cells', {
      cells: 'cells'
    })
  },

  created () {
    console.log(this.cells)
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
