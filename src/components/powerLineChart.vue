<template>
  <div id="power-line-chart" :style="{bottom: isOpen ? '0px' : '-210px'}">
    <div class="box-header">
      <el-row>
        <el-col :span="8">
          <i class="iconfont">&#xe675;</i>
          <span>当日发电量</span>
        </el-col>
        <el-col :span="8" class="title-center">
          <i class="iconfont">&#xe624;</i>
          <span>实时 5,875 万千瓦时</span>
        </el-col>
        <el-col :span="8" class="title-center">
          <i class="iconfont">&#xe631;</i>
          <span>同比增长 17%</span>
        </el-col>
      </el-row>
      <div class="box-header-button" @click="controlPanel">
        <div class="iconfont" :style="{transform: isOpen ?'rotate(0deg)' : 'rotate(180deg)'}">&#xe611;</div>
      </div>
    </div>
    <div class="box-body">
      <div class="chart-panel" ref="line-chart"></div>
    </div>
  </div>
</template>
<script>
import { lineChartConfig } from '../assets/config/echarts-config.js'

export default {
  name: "power-line-chart",
  data: () => {
    return {
      isOpen: true
    }
  },
  mounted () {
    this.initChartStyle()
  },
  methods: {
    controlPanel () {
      this.isOpen = !this.isOpen
    },
    initChartStyle () {
      let _element = this.$refs['line-chart']
      let _height = _element.parentElement.clientHeight
      let _width = _element.parentElement.clientWidth
      _element.style.height = `${_height}px`
      _element.style.width = `${_width}px`
      let myChart = this.$echarts.init(_element)
      myChart.setOption(lineChartConfig);
    }
  }
}
</script>
<style lang="scss" scoped>
#power-line-chart {
  position: absolute;
  bottom: 0px;
  left: 410px;
  width: 880px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.6s;

  .title-center {
    text-align: center;
  }

  .box-header {
    width: 100%;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.6);

    color: #ffffff;
    line-height: 40px;
    font-size: 18px;
    i {
      margin: 0 10px;
      font-size: 20px;
    }

    .box-header-button {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 60px;
      text-align: center;
      border-left: 1px solid #eee;
      border-right: 1px solid rgba(0, 0, 0, 0.6);
      transition: all 0.3s;
      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
        color: #000000;
      }
    }
    .el-row {
      margin-right: 61px;
    }
  }
  .box-body {
    position: absolute;
    top: 0px;
    margin-top: 40px;
    height: 210px;
    width: 100%;
  }
}
</style>
