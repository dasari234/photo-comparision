import Vue from 'vue'
import App from './App.vue'
import axios from "@/http-interceptor";
import createStore from "@/store";
const store = createStore;
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
