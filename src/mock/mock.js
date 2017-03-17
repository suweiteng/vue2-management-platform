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
    });
    Mock.mock('/api/getTable', {
      "code": "000",
      "datas|5-20": [
        {
          "date": '@date("yyyy-MM-dd")',
          "name": "@cname",
          "address": "@county(true)"
        }
      ]
    });
    Mock.mock('/api/getOptions', {
      "code": "000",
      "datas|5-7": [
        {
          "label": '广东省',
          "value": "@natural(10, 100)",
          "children|5-8": [
            {
              "label": '深圳市',
              "value": "@natural(10, 100)",
              "children|5-5": [
                {
                  "label": '南山区',
                  "value": "@natural(10, 100)"
                }
              ]
            }
          ]
        }
      ],
      "places|9-18": [
        {
          "label": '广东省',
          "value": "@natural(10, 100)"
        }
      ]
    });
  }
};
