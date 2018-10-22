<template>
  <div class="map-panel" ref="map-panel"></div>
</template>
<script>
import { mapChartConfig } from '../assets/config/echarts-config.js'

export default {
  name: "map-panel",
  mounted () {
    this.initChartStyle()
  },
  methods: {
    initChartStyle () {
      let _element = this.$refs['map-panel']
      let _height = _element.parentElement.clientHeight
      let _width = _element.parentElement.clientWidth
      _element.style.height = `${_height}px`
      _element.style.width = `${_width}px`
      let myChart = this.$echarts.init(_element)
      myChart.setOption(mapChartConfig)
    }
  }
}
</script>
<style lang="scss" scoped>
.map-panel {
  margin: 0px;
}
</style>
