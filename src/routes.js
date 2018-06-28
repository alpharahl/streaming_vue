import Vue from 'vue'
import VueRouter from "vue-router";

import Map from './components/Map'
import MapEdit from './components/MapEdit'
import CellLink from './components/CellLink'



const routes = [
  { path: '/map', component: Map,
    children: [
      { path: 'edit', component: MapEdit },
      { path: 'link', component: CellLink }
    ]
  }
  // { path: '/edit', component: MapEdit}
]

export const router = new VueRouter({
  routes
})


Vue.use(VueRouter)