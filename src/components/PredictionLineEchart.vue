<template>
  <div class="prediction-line-echart-panel">
    <div class="prediction-line-echart" ref="prediction-line-echart"></div>
  </div>
</template>
<script>
import { predictionLineChartConfig } from '../assets/config/echarts-config.js'

export default {
  name: "prediction-line-echart",
  mounted () {
    this.initChartStyle()
  },
  methods: {
    initChartStyle () {
      let _element = this.$refs['prediction-line-echart']
      let _height = _element.parentElement.clientHeight
      let _width = _element.parentElement.clientWidth
      _element.style.height = `${_height}px`
      _element.style.width = `${_width}px`
      let myChart = this.$echarts.init(_element)
      myChart.setOption(predictionLineChartConfig)
    }
  }
}
</script>
<style lang="scss" scoped>
.prediction-line-echart-panel {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
