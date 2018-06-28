import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import store from './store'
import {router} from './routes'


Vue.config.productionTip = false

store.dispatch('Cells/getCells')

Vue.use(Vuetify)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

