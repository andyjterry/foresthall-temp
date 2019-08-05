import Vue from 'vue';
import App from './App.vue';
import Header from './layout/Header';
import VueRouter from 'vue-router';
import css from './assets/css/main.css'

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
