<template>
  <section class="chart-container">
    <el-row>
      <el-col :span="10" class="data_left data_left_li">
        <div class="totale_home">共计  家</div>
        <div id="chartPie" style="height:300px;">dddd</div>
      </el-col>
      <el-col :span="13" class="data_left data-left-line">
        <div id="chartLine" style="height:300px;">dd</div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data() {
    },
    methods: {
      // 加载图表
      getChartInit() {
        console.log(echarts);
      }
    }
  };
</script>
<style>
</style>
