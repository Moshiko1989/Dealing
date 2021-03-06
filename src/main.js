
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './vue-plugins.js';
// import vuex from 'vuex'

import './style/main.css'

import router from './router';
import store from './store';

Vue.config.productionTip = false
// Vue.use(vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
