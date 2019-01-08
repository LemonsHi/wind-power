<template>
  <div class="prediction-bar-echart-panel">
    <div class="prediction-bar-echart" ref="prediction-bar-echart"></div>
  </div>
</template>
<script>
// import { predictionBarChartConfig } from '../assets/config/echarts-config.js'
import { errorChart } from '../assets/config/echarts-config.js'

export default {
  name: "prediction-bar-echart",
  mounted () {
    this.initChartStyle()
  },
  methods: {
    initChartStyle () {
      let _element = this.$refs['prediction-bar-echart']
      let _height = _element.parentElement.clientHeight
      let _width = _element.parentElement.clientWidth
      _element.style.height = `${_height}px`
      _element.style.width = `${_width}px`
      let myChart = this.$echarts.init(_element)
      // myChart.setOption(predictionBarChartConfig)
      myChart.setOption(errorChart)
    }
  }
}
</script>
<style lang="scss" scoped>
.prediction-bar-echart-panel {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
