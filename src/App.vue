<template>
  <div style="height: 100%">
    <v-header :user="user"></v-header>
    <el-row class="container">
      <el-col :span="4" class="menu menu-list-router" >
        <router-link to="/index"><i class="fa fa-line-chart"></i>index</router-link>
        <router-link to="/table"><i class="fa fa-table"></i>Table</router-link>
        <router-link to="/form" ><i class="fa fa-newspaper-o"></i>Form</router-link>
        <router-link to="/other"><i class="fa fa-plug"></i>其他</router-link>
      </el-col>
      <el-col :span="20">
        <div>
          <div class="content">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import header from './components/header/header.vue';
  const ERR_OK = "000";
  export default {
    data () {
      return {
        user: {}
      };
    },
    created () {
//      this.$http.get('/api/user').then((response) => {
//        response = response.body;
//        if (response.errno === ERR_OK) {
//          this.user = response.data;
//        }
//      });
      this.$http.get('/api/user').then((response) => {
        response = response.body;
        if (response.code === ERR_OK) {
          this.user = response.datas;
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>
<style>
  html, body,#app{
    height: 100%;
  }
  body{
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  }
  .menu, .el-menu {
    height: 100%;
    padding-left: 20px;
    background-color: #e6e6e6;
  }
  .container {
    padding-top: 80px;
    height: 100%;
  }
  .content{
    padding: 20px;
  }
  /* fa图标右侧需要流出空白 elementUI图标已自带样式 */
  i.fa{
    vertical-align: baseline;
    margin-right: 10px;
  }
  /* 左侧导航菜单active时蓝色 */
  .container .menu-list-router a {
    display: block;
    color: #48576a;
    line-height: 30px;
    padding: 10px;
  }

  .container .menu-list-router a:hover {
    background: #EEEEEE;
  }

  .container .menu-list-router a.active {
    color: #20a0ff !important;
    margin: 0;
  }

</style>
