<template>
  <td class="cell"></td>
</template>

<script>
export default {
  props: [
    'x',
    'y' 
  ]
}
</script>

<style>
.cell{
  width: 5px;
  height: 5px;
  border: 1px solid black;
}
</style>
