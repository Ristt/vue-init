import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';
// eleUI 引入
Vue.use(Button);
Vue.use(Select);
// Vue.use(Loading.directive);

Vue.use(ElementUI, { size: 'small' });
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
