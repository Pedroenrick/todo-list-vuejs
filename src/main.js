import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import App from './App.vue'
import router from './router'

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(VueCompositionAPI)

const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
