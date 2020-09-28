import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import store from './store/index' 
import {Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


// Require dependencies
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);
Vue.prototype.$message = Message
Vue.use(Message)
Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false
// Vue.prototype.axios = axios
// Vue.prototype.$ajax = axios
//根据前端跨域做调整 我们用的是接口代理这一个跨域 前端域名和后端一样
//如果是jsonp cors跨域 接口地址一般用http开头
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5f5b0e089ff3095b55ad84f9/miMall'
axios.defaults.timeout = 8000
axios.defaults.baseURL = '/api'
//设置超时
//axios 接口错误拦截
let path = location.hash
axios.interceptors.response.use(function(response){
  let res =  response.data
  //获取接口数据 data这里是axios包装好了的 必须要.data获取
  if(res.status == 0){
    //status 0 表示可以返回信息
    return res.data
  }else if(res.status == 10){
    // status 为 十 代表登录出错 
    if(path !='/#/index'){
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  }else {
    this.$message.warning(res.msg)
    Promise.reject(res)
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
