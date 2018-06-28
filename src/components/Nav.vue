<template>
  <v-toolbar dark color="primary">
    <router-link to="/"><v-toolbar-title>MagMap</v-toolbar-title></router-link>
    <v-spacer></v-spacer>
    <router-link to="/map">Map</router-link>
    <router-link to="/map/edit">Edit</router-link>
    <v-toolbar-items class="hidden-sm-and-down">
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  
}
</script>
