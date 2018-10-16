<template>
  <div id="app">
    <AppTitle />
    <BusinessIndicators />
    <PowerTotal />
    <DataRank :data-rank="dataRank" />
  </div>
</template>

<script>
import BusinessIndicators from "./components/BusinessIndicators.vue";
import PowerTotal from "./components/PowerTotal.vue";
import AppTitle from "./components/AppTitle.vue";
import DataRank from "./components/DataRank.vue";

import data from "./assets/data/data.js";

export default {
  name: "app",
  components: {
    BusinessIndicators,
    PowerTotal,
    AppTitle,
    DataRank
  },
  computed: {
    dataRank () {
      return data.dataRank
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

  background: linear-gradient(-45deg, black , #6480FC);
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
