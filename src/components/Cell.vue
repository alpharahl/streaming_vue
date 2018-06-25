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
export default {
  data () {
    return {
      selected: false,
      elevator: false,
      escalator: false
    }
  },

  props: [
    'x',
    'y' 
  ],

  methods: {
    select(){
      this.selected = !this.selected
    }
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
