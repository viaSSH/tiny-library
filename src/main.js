import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'

// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false


Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
}).$mount('#app')
