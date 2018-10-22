<template>
  <div class="prediction-line-bar-echart-panel">
    <div class="prediction-line-bar-echart" ref="prediction-line-bar-echart"></div>
  </div>
</template>
<script>
import { predictionLineBarChartConfig } from '../assets/config/echarts-config.js'

export default {
  name: "prediction-line-bar-echart",
  mounted () {
    this.initChartStyle()
  },
  methods: {
    initChartStyle () {
      let _element = this.$refs['prediction-line-bar-echart']
      let _height = _element.parentElement.clientHeight
      let _width = _element.parentElement.clientWidth
      _element.style.height = `${_height}px`
      _element.style.width = `${_width}px`
      let myChart = this.$echarts.init(_element)
      myChart.setOption(predictionLineBarChartConfig)
    }
  }
}
</script>
<style lang="scss" scoped>
.prediction-line-bar-echart-panel {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
