import Vue from 'vue'
import App from './App.vue'
import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import router from './router'
import service from './service';
import store from "./store/store";

Vue.prototype.service = service
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// Vue.use(ElementUI)
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
