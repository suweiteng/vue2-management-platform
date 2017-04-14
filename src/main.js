// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import Index from './components/index/index';
import Table from './components/table/table';
import Form from './components/form/form';
import other from './components/other/other';
import 'font-awesome/css/font-awesome.min.css';
import Mock from './mock/mock';
Mock.mockData();
Vue.use(VueRouter);// 安装路由功能
/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

// 后端对比cookies判断是否登录，凡接口response的header带有x-auth-token的即未登录，跳转首页。
// Vue.http.interceptors.push((request, next) => {
//   request.credentials = true;
//   next((response) => {
//     let messageHeader;
//     /* global IS_PRODUCTION:true */
//     if (IS_PRODUCTION) {
//       messageHeader = "X-Auth-Token";
//     } else {
//       messageHeader = "x-auth-token";
//     }
//     if (messageHeader in response.headers.map) {
//       router.push({path: '/login'});
//     }
//     return response
//   });
// });

let routes = [
  {
    path: '/',
    component: App,
    children: [
      // {path: '', component: Index}, // 默认Table
      {path: '/index', component: Index, name: 'index'},
      {path: '/table', component: Table, name: 'table'},
      {path: '/form', component: Form, name: 'form'},
      {path: '/other', component: other, name: 'other'},
      // {path: '/data_list', component: DataList}
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
