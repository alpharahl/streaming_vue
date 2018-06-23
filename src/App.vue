<template>
  <div id="app">
    <Nav/>
    <Map class="map"/>
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
.map{
  text-align: center;
  padding-top: 10px;
}
</style>
