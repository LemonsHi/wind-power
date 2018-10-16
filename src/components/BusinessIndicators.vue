<template>
  <div class="business-indicators-panel" :style="{bottom: isOpen ? '0px' : '-460px'}">
    <div class="box-header">
      <i class="iconfont">&#xe60d;</i>
      <span>数据汇总</span>
      <div class="box-header-button" @click="controlPanel">
        <div class="iconfont" :style="{transform: isOpen ?'rotate(0deg)' : 'rotate(180deg)'}">&#xe611;</div>
      </div>
    </div>
    <div class="box-body">
      <div class="total-statistics">
        <p class="title">总数统计</p>
        <el-row>
          <el-col :span="12">
            <i class="iconfont icon" style="font-size: 20px; color: #00FF00">&#xe6b7;</i>
            <span>总装机规模</span>
          </el-col>
          <el-col :span="5">
            <span style="float: right; color: #00FF00; font-size: 20px;">351</span>
          </el-col>
          <el-col :span="7">
            <span style="float: left">(万千瓦时)</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <i class="iconfont icon" style="font-size: 20px; color: #00FF00">&#xe613;</i>
            <span>风电场总数</span>
          </el-col>
          <el-col :span="5">
            <span style="float: right; color: #00FF00; font-size: 20px;">14</span>
          </el-col>
          <el-col :span="7">
            <span style="float: left">(个)</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <i class="iconfont icon" style="font-size: 20px; color: #00FF00">&#xe62d;</i>
            <span>风机总数</span>
          </el-col>
          <el-col :span="5">
            <span style="float: right; color: #00FF00; font-size: 20px;">1176</span>
          </el-col>
          <el-col :span="7">
            <span style="float: left">(台)</span>
          </el-col>
        </el-row>
      </div>
      <div class="fan-state">
        <p class="title">风机状态</p>
        <el-row>
          <el-col :span="12">
            <i class="iconfont icon" style="font-size: 20px; color: #FFFF00">&#xe604;</i>
            <span>正常运行</span>
          </el-col>
          <el-col :span="5">
            <span style="float: right; color: #FFFF00; font-size: 20px;">825</span>
          </el-col>
          <el-col :span="7">
            <span style="float: left">(台)</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <i class="iconfont icon" style="font-size: 20px; color: #FFFF00">&#xe69c;</i>
            <span>切出状态</span>
          </el-col>
          <el-col :span="5">
            <span style="float: right; color: #FFFF00; font-size: 20px;">132</span>
          </el-col>
          <el-col :span="7">
            <span style="float: left">(台)</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <i class="iconfont icon" style="font-size: 20px; color: #FFFF00">&#xe65d;</i>
            <span>维护中</span>
          </el-col>
          <el-col :span="5">
            <span style="float: right; color: #FFFF00; font-size: 20px;">63</span>
          </el-col>
          <el-col :span="7">
            <span style="float: left">(台)</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <i class="iconfont icon" style="font-size: 20px; color: #FFFF00">&#xe619;</i>
            <span>故障状态</span>
          </el-col>
          <el-col :span="5">
            <span style="float: right; color: #FFFF00; font-size: 20px;">14</span>
          </el-col>
          <el-col :span="7">
            <span style="float: left">(台)</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <i class="iconfont icon" style="font-size: 20px; color: #FFFF00">&#xe761;</i>
            <span>通信中断</span>
          </el-col>
          <el-col :span="5">
            <span style="float: right; color: #FFFF00; font-size: 20px;">7</span>
          </el-col>
          <el-col :span="7">
            <span style="float: left">(台)</span>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isOpen: true,
      total: 351
    }
  },
  methods: {
    controlPanel () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped lang="scss">
.business-indicators-panel {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 300px;
  height: 500px;
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
    span {
      font-family: '黑体'
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
    padding: 0 10px;
    color: #ffffff;

    .title {
      margin: 25px 0px;
      font-weight: bold;
    }

    .icon {
      margin: 0px 10px 0px 5px;
    }

    .el-row {
      margin-bottom: 15px;
      line-height: 25px;
    }

    .value-items {
      span {
        float: right;
      }
      .value {
        color: #00FF00;
        font-size: 18px;
        line-height: 18px;
      }
    }
  }
}
</style>
