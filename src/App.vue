<template>
  <div>
    <!--header组件负责投  左侧组件  右侧组件（右侧包含分页等  考虑vue路由）-->
  <!--顶部不用el-menu了  还是用普通的 参考https://elementui.github.io/theme-preview/#/zh-CN  左侧是menu 顶部自己写-->
  <v-header :user="user"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">
          评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          商家
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import header from './components/header/header.vue';
  const ERR_OK = 0;
  export default {
    /* ajax获得seller对象 */
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
  body{
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  }
</style>

