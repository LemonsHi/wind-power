<template>
  <div class="prediction-analysis">
    <el-row :gutter="20" style="height: 150px">
      <el-col :span="6">
        <div class="normal-panel">
          <el-row>
            <el-col :span="8">
              <i class="iconfont icon" :style="{color: setColor[0]}">&#xe637;</i>
            </el-col>
            <el-col :span="16">
              <div class="title">{{ dataOption[0].title }}</div>
              <div class="value" :style="{color: setColor[0]}">{{ dataOption[0].value }}</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="normal-panel">
          <el-row>
            <el-col :span="8">
              <i class="iconfont icon" :style="{color: setColor[1]}">&#xe633;</i>
            </el-col>
            <el-col :span="16">
              <div class="title">{{ dataOption[1].title }}</div>
              <div class="value" :style="{color: setColor[1]}">{{ dataOption[1].value }}</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="normal-panel">
          <el-row>
            <el-col :span="8">
              <i class="iconfont icon" :style="{color: setColor[2]}">&#xeb35;</i>
            </el-col>
            <el-col :span="16">
              <div class="title">{{ dataOption[2].title }}</div>
              <div class="value" :style="{color: setColor[2]}">{{ dataOption[2].value }}</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="normal-panel">
          <el-row>
            <el-col :span="8">
              <i class="iconfont icon" :style="{color: setColor[3]}">&#xe632;</i>
            </el-col>
            <el-col :span="16">
              <div class="title">{{ dataOption[3].title }}</div>
              <div class="value" :style="{color: setColor[3]}">{{ dataOption[3].value }}</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <PredictionLineBarChart />
      </el-col>
      <el-col :span="12">
          <PredictionLineEchart />
      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col :span="12">
          <PredictionLineEchart />
      </el-col>
    </el-row> -->
    <el-row>
      <el-col :span="24">
          <PredictionBarChart />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import PredictionLineEchart from './PredictionLineEchart.vue'
import PredictionLineBarChart from './PredictionLineBarChart.vue'
import PredictionBarChart from './PredictionBarChart.vue'

export default {
  name: "prediction-analysis",
  props: {
    dataOption: Array
  },
  data: () => ({
    setColor: ['#FFFF00', '#6BB3FA', '#00FF00', '#98B3F1']
  }),
  components: {
    PredictionLineEchart,
    PredictionLineBarChart,
    PredictionBarChart
  }
}
</script>
<style lang="scss" scoped>
.prediction-analysis {
  width: 100%;
  height: 100%;
  padding: 10px 150px;

  .normal-panel {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
    text-align: center;

    .icon {
      font-size: 40px;
      line-height: 150px;
    }

    .title {
      font-size: 20px;
      height: 60px;
      line-height: 60px;
      // border-left: 1px solid rgba(0, 0, 0, 0.5);
      // border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    }

    .value {
      font-size: 30px;
      height: 90px;
      line-height: 90px;
      // border-left: 1px solid rgba(0, 0, 0, 0.5);
    }
  }
  .el-row {
    height: 37%;
    margin-bottom: 20px;
    .el-col {
      height: 100%;
    }
  }
}
</style>
