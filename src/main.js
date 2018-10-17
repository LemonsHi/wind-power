import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import Echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';

window.echarts = Echarts

// import map from './assets/config/china.js'
require('./assets/config/china.js');

Vue.use(ElementUI);
Vue.prototype.$echarts = Echarts
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
