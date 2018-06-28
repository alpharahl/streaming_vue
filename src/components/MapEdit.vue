<template>
  <div>
    <v-btn v-on:click="saveCells">
      Save Grid
    </v-btn>
    <v-btn v-on:click="disableAll">
      Disable All
    </v-btn>
  </div>
</template>

<script>

export default {
  methods: {
    saveCells(){
      this.$store.dispatch('Cells/sendCells')
    },
    disableAll(){
      this.$store.commit('Cells/disableAll')
    }
  },

  mounted () {
    this.$store.commit('Cells/swapEdit')
  },

  beforeDestroy () {
    this.$store.commit('Cells/swapEdit')
  }
}
</script>

