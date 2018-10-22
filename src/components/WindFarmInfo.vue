<template>
  <div class="wind-farm-info" :style="{left: open ? '0px' : '-400px'}">
    <div class="box-header">
      <i class="iconfont">&#xe627;</i>
      <span>德昌风电场信息</span>
      <div class="box-header-button" @click="controlPanel">
        <div class="iconfont">&#xe610;</div>
      </div>
    </div>
    <div class="box-body">
      <el-row>
        <el-col :span="12" style="padding-right: 20px">
          <span class="title">风场实时有功总和</span>
        </el-col>
        <el-col :span="12" style="padding-left: 20px">
          <span class="value">{{ dataInfo.total }} KW</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" style="padding-right: 20px">
          <span class="title">AGC调节目标</span>
        </el-col>
        <el-col :span="12" style="padding-left: 20px">
          <span class="value">{{ dataInfo.agc }} KW</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" style="padding-right: 20px">
          <span class="title">有功出力上送</span>
        </el-col>
        <el-col :span="12" style="padding-left: 20px">
          <span class="value">{{ dataInfo.real }} KW</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" style="padding-right: 20px">
          <span class="title">实时有功上限</span>
        </el-col>
        <el-col :span="12" style="padding-left: 20px">
          <span class="value">{{ dataInfo.upperLimit }} KW</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" style="padding-right: 20px">
          <span class="title">实时有功下限</span>
        </el-col>
        <el-col :span="12" style="padding-left: 20px">
          <span class="value">{{ dataInfo.lowerLimit }} KW</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" style="padding-right: 20px">
          <span class="title">通信状态</span>
        </el-col>
        <el-col :span="12" style="padding-left: 20px">
          <span class="value">{{ state }}</span>
        </el-col>
      </el-row>
    </div>
    <div class="box-footer">
      <el-row>
        <el-col :span="8">
          <div class="btn active" @click="jumpPage('info')">
            详细信息
          </div>
        </el-col>
        <el-col :span="8">
          <div class="btn" @click="jumpPage('predictionAnalysis')">
            预报分析
          </div>
        </el-col>
        <el-col :span="8">
          <div class="btn" @click="jumpPage('dataStatistics')">
            数据统计
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { connectionStateMap } from '../assets/config/state-config.js'

export default {
  name: "wind-farm-info",
  props: {
    open: Boolean,
    dataInfo: Object
  },
  computed: {
    state: {
      get: function () {
        return connectionStateMap[this.dataInfo.state]
      }
    }
  },
  methods: {
    controlPanel () {
      this.$emit('control-info')
    },
    jumpPage (type) {
      this.$emit('control-page', type)
    }
  }
}
</script>
<style lang="scss" scoped>
.wind-farm-info {
  position: absolute;
  top: 60px;
  left: 0px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.6s;

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
    padding: 0 10px 10px 10px;
    .el-row {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      &:last-child {
        border-bottom: 0px;
      }
    }
    .title {
      float: right;
    }
  }

  .box-footer {
    color: #ffffff;
    padding: 0 10px 10px 10px;

    .btn {
      text-align: center;
      background-color: #0f2c70;
      height: 30px;
      line-height: 30px;
      &:hover {
        background-color: #0C2255;
      }
    }
  }
}
</style>
