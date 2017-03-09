// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import table from './components/table/table';
import form from './components/form/form';
import './common/styles/icon.css';
import './common/styles/base.css';
import 'font-awesome/css/font-awesome.min.css';
import Mock from './mock/mock';
Mock.mockData();
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
      {path: '', component: table}, // 默认table
      {path: '/table', component: table},
      {path: '/form', component: form}
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
