import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

Vue.use(VueRouter)
Vue.use(ElementUI)

import Hello from './components/HelloWorld'
import About from './components/About'
import Test from './components/Test'
import Param from './components/Param'
import paramdetails from "./components/paramdetails";

//定义路由表
const routes = [
  {path: '/', component: Hello},
  {path: '/about', component: About},
  {path: '/param', component: Param},
  { path: '/Paramdetails/:id', component: paramdetails, name: 'Paramdetails' },
  {path: '/test', component: Test}
]

//创建路由器实例
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  // //定义Vue绑定的跟元素
  el: '#app',
  // //用<App/>代替根元素
  // template: '<App/>',
  // //声明App组件，这样上面的<App/>元素就可以生效
  // components: { App },
  render: h => h(App),
  router
}).$mount('#app')
