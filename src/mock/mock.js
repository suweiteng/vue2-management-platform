/**
 * Created by suwt on 2017/3/9.
 */
import Mock from 'mockjs';

export default {
  haha (){
    Mock.mock('/api/user2', {
      "name": "尼古拉斯赵四",
      "area": "华东区",
      "identity": "超级管理员"
      // 'name': '@name',
      // 'age|1-100': 100,
      // 'color': '@color'
    });
    Mock.mock('/api/user3', {
      "name": "22尼古拉斯赵四",
      "area": "华东区",
      "identity": "超级管理员"
      // 'name': '@name',
      // 'age|1-100': 100,
      // 'color': '@color'
    });
  }
};
