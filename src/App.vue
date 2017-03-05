<template>
  <div style="height: 100%">
    <v-header :user="user"></v-header>
    <el-row class="container">
      <el-col :span="4" class="menu" >
        <el-menu default-active="/data_center" :router="true">  <!--还要在main.js修改默认-->
          <el-menu-item index="/data_center">数据中心</el-menu-item>
          <el-menu-item index="/user">用户管理</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div>
         <keep-alive>
          <router-view></router-view>
        </keep-alive>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import header from './components/header/header.vue';
  const ERR_OK = 0;
  export default {
    data () {
      return {
        user: {}
      };
    },
    created () {
      this.$http.get('/api/user').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.user = response.data;
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>
<style>
  .menu, .el-menu {
    height: 100%;
  }

  .container {
    padding-top: 80px;
    height: 100%;
  }
</style>

