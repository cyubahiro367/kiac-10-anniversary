import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueNoty from 'vuejs-noty'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueNoty)

axios.defaults.baseURL = process.env.VUE_APP_API_URL

axios.defaults.headers.post['Content-Type'] = 'application/json';

const options = {
  color: '#FF8C00',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
