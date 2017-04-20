<template>
  <section class="chart-container">
    <el-row>
      <div class="show-section top">
        <span>今日系统安全指数：</span>
        <el-rate
          v-model="value5"
          disabled
          show-text
          text-color="#ff9900"
          text-template="{value}">
        </el-rate>
      </div>
      <div class="show-section">
        <v-charts></v-charts>
      </div>
    </el-row>
  </section>
</template>
<script>
  import charts from './echarts.vue';
  export default {
    data() {
      return {
        value5: 3.7
      }
    },
    components: {
      'v-charts': charts
    }
  };
</script>
<style>
  .chart-container{
    background-color: #F2F2F2;
  }
  .show-section {
    margin: 10px;
    border-radius: 4px;
  }

  .show-section.top {
    background-color: white;
    padding: 10px;
    margin-top: 0;
  }

  .show-section span {
    font-weight: bold;
    font-size: 18px;
    color: #333333;
  }
  .el-rate{
    display:inline;
  }
</style>
