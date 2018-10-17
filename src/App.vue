<template>
  <div id="app">
    <AppTitle />
    <div class="app-body">
      <div class="map-panel" ref="map-panel"></div>
    </div>
    <BusinessIndicators :data-total="dataTotal" />
    <PowerTotal :data-power="dataPower" />
    <DataRank :data-rank="dataRank" />
    <powerLineChart />
  </div>
</template>

<script>
import BusinessIndicators from "./components/BusinessIndicators.vue";
import PowerTotal from "./components/PowerTotal.vue";
import AppTitle from "./components/AppTitle.vue";
import DataRank from "./components/DataRank.vue";
import powerLineChart from "./components/powerLineChart.vue";

import data from "./assets/data/data.js";
import { mapChartConfig } from './assets/config/echarts-config.js'

export default {
  name: "app",
  components: {
    BusinessIndicators,
    PowerTotal,
    AppTitle,
    DataRank,
    powerLineChart
  },
  computed: {
    dataRank () {
      return data.dataRank
    },
    dataTotal () {
      return data.dataTotal
    },
    dataPower () {
      return data.dataPower
    }
  },
  mounted () {
    this.initChartStyle()
  },
  methods: {
    initChartStyle () {
      let _element = this.$refs['map-panel']
      let _height = _element.parentElement.clientHeight - 40
      let _width = _element.parentElement.clientWidth
      _element.style.height = `${_height}px`
      _element.style.width = `${_width}px`
      let myChart = this.$echarts.init(_element)
      myChart.setOption(mapChartConfig)
    }
  }
};
</script>

<style lang="scss">
#app {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;

  background: linear-gradient(-45deg, #091732 , #0f2c70);

  .app-body {
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    padding-top: 40px;
    .map-panel {
      margin: 0px;
    }
  }
}

.app-blue {
  color: #6BB3FA;
}

.app-yellow {
  color: #FFFF00;
}

.app-green {
  color:#00FF00;
}
</style>
