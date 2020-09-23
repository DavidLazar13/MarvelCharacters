import Vue from 'vue'
import './plugins/bootstrap-vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';


Vue.use(VueRouter)

window.axios = require('axios');

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
