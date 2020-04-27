require('typeface-roboto')

import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


// I18n
import i18n from '@/i18n.js'

Vue.config.productionTip = false

library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
