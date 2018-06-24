<template>
  <div id="app">
    <Nav/>
    <Map/>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Map from './components/Map'

export default {
  name: 'app',
  components: {
    Nav,
    Map
  }
}
</script>

<style>
</style>
