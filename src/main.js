import Vue from 'vue'
import App from './App.vue'
import draggable from 'vuedraggable';

Vue.component('vue-draggable', draggable);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
