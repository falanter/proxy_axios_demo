import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false  //当前处于开发阶段，无须显示生产模式提示的信息
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
