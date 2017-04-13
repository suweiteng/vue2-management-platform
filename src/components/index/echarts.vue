<template>
  <section class="chart-container">
    <el-row>
      <el-col :span="12" class="data_left data_left_li">
        <div id="main" style="height: 500px">gfd</div>
      </el-col>
      <el-col :span="12" class="data_left data-left-line">
        <div id="main2" style="height: 500px">gfd</div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        myChart: null
      };
    },
    methods: {
      // 加载图表
      getChartInit() {
        console.log("dd");
        this.myChart = echarts.init(document.getElementById('main'));
        this.myChart2 = echarts.init(document.getElementById('main2'));
        this.myChart.showLoading();
        var option = {
          title: {
            text: '用户区域图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {normal: {}},
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };
        this.myChart.setOption(option);
        this.myChart2.setOption(option);
        this.myChart.hideLoading();
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.getChartInit();
        // this.getUsers(this.size, this.page)// 获取用户列表 启动
      })
    }
  };
</script>
<style>
</style>
