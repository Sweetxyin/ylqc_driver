import App from './App'
import store from './store'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import api from './api/index.js'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import uviewPlus from '@/uni_modules/uview-plus'
import api from './api/index'

export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$api = api
  app.config.globalProperties.productionTip = false
  app.use(uviewPlus)
  app.use(store)
  return {
    app
  }
}
// #endif