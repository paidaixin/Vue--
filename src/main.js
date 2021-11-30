import Vue from 'vue'
import App from './App.vue'
import Index from '@/views/dialog/file/index.js'

Vue.use(Index)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
