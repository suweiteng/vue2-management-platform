<template>
  <div class="chart-container">
    <el-row>
      <el-col :span="12" class="chart chart_left">
        <div id="userChart" style="height: 650px" >图表加载失败</div>
      </el-col>
      <el-col :span="12" class="chart">
        <div id="userDoChart" style="height: 650px" >图表加载失败</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {

      };
    },
    methods: {
      // 加载用户来源图
      getUserChartInit() {
        const myChart = echarts.init(document.getElementById('userChart'));
        myChart.showLoading();
        var option = {
          title: {
            text: '用户来源'
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
            data: ['华东', '华北', '华南', '西部', '其他']
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
              name: '华东',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '华北',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '华南',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '西部',
              type: 'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '其他',
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
        myChart.setOption(option);
        myChart.hideLoading();
      },
      // 加载每日用户行为图
      getUserDoChartInit() {
        const myChart = echarts.init(document.getElementById('userDoChart'));
        myChart.showLoading();
        var app = {};
        var option = null;
        var cellSize = [80, 80];
        var pieRadius = 30;

        function getVirtulData() {
          var date = +echarts.number.parseDate('2017-02-01');
          var end = +echarts.number.parseDate('2017-03-01');
          var dayTime = 3600 * 24 * 1000;
          var data = [];
          for (var time = date; time < end; time += dayTime) {
            data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 10000)
            ]);
          }
          return data;
        }

        function getPieSeries(scatterData, chart) {
          return echarts.util.map(scatterData, function (item, index) {
            var center = chart.convertToPixel('calendar', item);
            return {
              id: index + 'pie',
              type: 'pie',
              center: center,
              label: {
                normal: {
                  formatter: '{c}',
                  position: 'inside'
                }
              },
              radius: pieRadius,
              data: [
                {name: '工作', value: Math.round(Math.random() * 24)},
                {name: '娱乐', value: Math.round(Math.random() * 24)},
                {name: '睡觉', value: Math.round(Math.random() * 24)}
              ]
            };
          });
        }

        function getPieSeriesUpdate(scatterData, chart) {
          return echarts.util.map(scatterData, function (item, index) {
            var center = chart.convertToPixel('calendar', item);
            return {
              id: index + 'pie',
              center: center
            };
          });
        }
        var scatterData = getVirtulData();
        option = {
          tooltip: {},
          title: {
            text: '每日用户行为'
          },
          legend: {
            data: ['工作', '娱乐', '睡觉'],
            bottom: 20
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          calendar: {
            top: 'middle',
            left: 'center',
            orient: 'vertical',
            cellSize: cellSize,
            yearLabel: {
              show: false,
              textStyle: {
                fontSize: 30
              }
            },
            dayLabel: {
              margin: 20,
              firstDay: 1,
              nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
            monthLabel: {
              show: false
            },
            range: ['2017-02']
          },
          series: [{
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                textStyle: {
                  color: '#000',
                  fontSize: 14
                }
              }
            },
            data: scatterData
          }]
        };
        if (!app.inNode) {
          var pieInitialized;
          setTimeout(function () {
            pieInitialized = true;
            myChart.setOption({
              series: getPieSeries(scatterData, myChart)
            });
          }, 10);

          app.onresize = function () {
            if (pieInitialized) {
              myChart.setOption({
                series: getPieSeriesUpdate(scatterData, myChart)
              });
            }
          };
        }
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
        myChart.hideLoading();
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.getUserChartInit();
        this.getUserDoChartInit()
      })
    }
  };
</script>
<style>
  .chart{
    background-color: white;
    border-radius: 4px;
  }
  .chart_left{
    border-right:#F2F2F2 10px solid;
  }
</style>
