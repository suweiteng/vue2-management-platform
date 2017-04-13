<template>
  <section class="chart-container">
    <el-row>
      <v-charts></v-charts>
    </el-row>
  </section>
</template>
<script>
  import charts from './echarts.vue';
  export default {
//    data() {
//    },
//    methods: {
//      // 加载图表
//      getChartInit() {
//        console.log(echarts);
//      }
//    }
    components: {
      'v-charts': charts
    }
  };
</script>
<style>
</style>
