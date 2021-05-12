import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://kumanxuan1.f3322.net:8001'
axios.defaults.timeout = 5000
  //将axios挂载到vue原型上
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
