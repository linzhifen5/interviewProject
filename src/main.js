import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/scss/index.scss'
import fastclick from 'fastclick';

fastclick.attach(document.body);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  // render: h => h(App)
  components: { App },
  template: '<App/>'
})
