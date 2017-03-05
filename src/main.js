// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import './common/styles/icon.css';
import './common/styles/base.css';
Vue.use(VueRouter);// 安装路由功能
/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
let routes = [
  {
    path: '/',
    name: 'index',
    component: App,
    children: [
      {path: '/goods', component: goods},
      {path: '/ratings', component: ratings},
      {path: '/seller', component: seller}
    ]
  }
];
let router = new VueRouter({
  'linkActiveClass': 'active',
  routes
});
let app = new Vue({
  router
}).$mount('#app');
export default app;
