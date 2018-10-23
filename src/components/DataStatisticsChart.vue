<template>
  <div class="data-statistics-chart-panel">
    <div class="data-statistics-chart" ref="data-statistics-chart"></div>
  </div>
</template>
<script>
import { dataStatisticsConfig } from '../assets/config/echarts-config.js'

export default {
  name: "data-statistics-chart",
  mounted () {
    this.initChartStyle()
  },
  methods: {
    initChartStyle () {
      let _element = this.$refs['data-statistics-chart']
      let _height = _element.parentElement.clientHeight
      let _width = _element.parentElement.clientWidth
      _element.style.height = `${_height}px`
      _element.style.width = `${_width}px`
      let myChart = this.$echarts.init(_element)
      myChart.setOption(dataStatisticsConfig)
    }
  }
}
</script>
<style lang="scss" scoped>
.data-statistics-chart-panel {
  width: 100%;
  height: 100%;
  background-color: rgba(243, 243, 243, 1);
}
</style>
