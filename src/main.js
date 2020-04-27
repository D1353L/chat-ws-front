require('typeface-roboto')

import Vue from 'vue'
import App from './App.vue'

// Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// I18n
import i18n from '@/i18n.js'

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
