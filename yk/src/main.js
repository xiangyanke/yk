// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Mint from 'mint-ui';
import store from './store';
import './mock/mock-server';
import  'lib-flexible/flexible'
import search from './pages/search/search.vue';
import VueLazyload from 'vue-lazyload'
import loading from './common/loading/loading.jpg'
Vue.use(VueLazyload, {
  loading
})

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
import zh_CN from 'vee-validate/dist/locale/zh_CN'
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    myemail:'邮箱'
  }
})



Vue.use(Mint);
import { Button } from 'mint-ui'





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,

})
