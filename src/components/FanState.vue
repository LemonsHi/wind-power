<template>
  <div class="fan-state-panel">
    <div class="box-header">
      <i class="iconfont">&#xe62d;</i>
      <span>风机状态</span>
      <div class="box-header-button" @click="controlPanel">
        <div class="iconfont icon" :style="{transform: isOpen ?'rotate(0deg)' : 'rotate(180deg)'}">&#xe60e;</div>
      </div>
    </div>
    <div class="box-body" :style="{height: isOpen ? '255px' : '0px'}">
      <el-row>
        <el-col :span="12" style="padding: 0px 20px">
          <i class="iconfont title-icon">&#xe62d;</i>
          <span class="title">正常运行</span>
        </el-col>
        <el-col :span="12" style="padding: 0px 20px">
          <p class="value-item"><span class="value">{{ dataFanState.normal }}</span> 台</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" style="padding: 0px 20px">
          <i class="iconfont title-icon app-yellow">&#xe62d;</i>
          <span class="title">待机</span>
        </el-col>
        <el-col :span="12" style="padding: 0px 20px">
          <p class="value-item"><span class="value app-yellow">{{ dataFanState.standby }}</span> 台</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" style="padding: 0px 20px">
          <i class="iconfont title-icon app-blue">&#xe62d;</i>
          <span class="title">维护中</span>
        </el-col>
        <el-col :span="12" style="padding: 0px 20px">
          <p class="value-item"><span class="value app-blue">{{ dataFanState.maintain }}</span> 台</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" style="padding: 0px 20px">
          <i class="iconfont title-icon app-green">&#xe62d;</i>
          <span class="title">切出状态</span>
        </el-col>
        <el-col :span="12" style="padding: 0px 20px">
          <p class="value-item"><span class="value app-green">{{ dataFanState.cutOut }}</span> 台</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" style="padding: 0px 20px">
          <i class="iconfont title-icon app-blue-1">&#xe62d;</i>
          <span class="title">测风塔</span>
        </el-col>
        <el-col :span="12" style="padding: 0px 20px">
          <p class="value-item"><span class="value app-blue-1">{{ dataFanState.anemometerTower }}</span> 架</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "fan-state",
  props: {
    dataFanState: Object
  },
  data: () => ({
    isOpen: true
  }),
  methods: {
    controlPanel () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style lang="scss" scoped>
.fan-state-panel {
  position: absolute;
  top: 60px;
  left: 20px;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 999;

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
      float: right;
      width: 60px;
      text-align: center;
      border-left: 1px solid #eee;
      border-right: 1px solid rgba(0, 0, 0, 0.6);
      transition: all 0.3s;
      .icon {
        transition: all 0.3s;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
        color: #000000;
      }
    }
  }

  .box-body {
    color: #ffffff;
    line-height: 50px;
    font-size: 18px;
    overflow: hidden;
    transition: all 0.3s;
    .el-row {
      &:last-child {
        border-bottom: 0px;
      }
    }
    .title-icon {
      font-size: 20px;
      margin-right: 40px;
    }
    .title {
      text-align: center;
    }
    .value-item {
      text-align: right;
    }
  }
}
</style>
