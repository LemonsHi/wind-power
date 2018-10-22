<template>
  <div id="app">
    <AppTitle :first-page="isShow.firstPage" @control-page="controlPage" @control-info="controlWindFarm" />
    <div class="app-body">
      <div class="app-body-item" v-if="isShow.firstPage">
        <MapPanel />
        <BusinessIndicators
          :data-total="dataTotal" />
        <PowerTotal
          :data-power="dataPower" />
        <DataRank
          :data-rank="dataRank" />
        <powerLineChart />
        <WindFarmInfo
          :data-info="dataInfo"
          :open="openInfo"
          @control-info="controlWindFarm"
          @control-page="controlPage" />
      </div>
      <div class="app-body-item" v-if="isShow.info">
        <PowerTotal
          :data-power="dataPower" />
        <FanState
          :data-fan-state="dataFanState" />
        <WindFarm />
      </div>
      <div class="app-body-item" v-if="isShow.dataStatistics">
        <PowerTotal
          :data-power="dataPower" />
        <ClimateTotal
          :data-climate="dataClimate" />
        <ClimateTable
          :data-climate-table="dataClimateTable" />
      </div>
      <div class="app-body-item" v-if="isShow.predictionAnalysis">
        <PredictionAnalysis :data-option="dataOption" />
      </div>
    </div>
  </div>
</template>

<script>
import BusinessIndicators from "./components/BusinessIndicators.vue";
import PowerTotal from "./components/PowerTotal.vue";
import AppTitle from "./components/AppTitle.vue";
import DataRank from "./components/DataRank.vue";
import powerLineChart from "./components/powerLineChart.vue";
import WindFarmInfo from "./components/WindFarmInfo.vue";
import FanState from "./components/FanState.vue";
import WindFarm from "./components/WindFarm.vue";
import MapPanel from "./components/MapPanel.vue";
import ClimateTotal from "./components/ClimateTotal.vue";
import ClimateTable from "./components/ClimateTable.vue";
import PredictionAnalysis from "./components/PredictionAnalysis.vue";

import data from "./assets/data/data.js";

export default {
  name: "app",
  data: () => ({
    openInfo: true,
    isShow: {
      firstPage: true,
      info: false,
      dataStatistics: false,
      predictionAnalysis: false
    }
  }),
  components: {
    BusinessIndicators,
    PowerTotal,
    AppTitle,
    DataRank,
    powerLineChart,
    WindFarmInfo,
    FanState,
    WindFarm,
    MapPanel,
    ClimateTotal,
    ClimateTable,
    PredictionAnalysis
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
    },
    dataInfo () {
      return data.dataInfo
    },
    dataFanState () {
      return data.dataFanState
    },
    dataClimate () {
      return data.dataClimate
    },
    dataClimateTable () {
      return data.dataClimateTable
    },
    dataOption () {
      return data.dataOption
    }
  },
  methods: {
    controlWindFarm () {
      this.openInfo = !this.openInfo
    },
    controlPage (type) {
      for (var key in this.isShow) {
        if (this.isShow.hasOwnProperty(key) && key === type) {
          this.isShow[key] = true
        } else {
          this.isShow[key] = false
        }
      }
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

    .app-body-item {
      height: 100%;
      width: 100%;
    }
  }
}

.app-blue {
  color: #6BB3FA !important;
}

.app-blue-bg {
  background-color: #6BB3FA !important;
}

.app-blue-1 {
  color: #98B3F1 !important;
}

.app-blue-bg-1 {
  background-color: #98B3F1 !important;
}

.app-yellow {
  color: #FFFF00 !important;
}

.app-yellow-bg {
  background-color: #FFFF00 !important;
}

.app-green {
  color:#00FF00 !important;
}

.app-green-bg {
  background-color:#00FF00 !important;
}
</style>
