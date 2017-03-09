/**
 * Created by suwt on 2017/3/9.
 */
import Mock from 'mockjs';

export default {
  mockData () {
    Mock.mock('/api/user', {
      "code": "000",
      "datas": {
        "name": "@cname", // 内容：npm安装后 mockjs/src/mock/random/xxx.js
        "area": "@province(true)",
        "identity": "超级管理员"
      }
      // 'name': '@name',
      // 'age|1-100': 100,
      // 'color': '@color'
    });
    Mock.mock('/api/user3', {
      "name": "22尼古拉斯赵四",
      "area": "华东区",
      "identity": "超级管理员"
    });
  }
};
