<template>
  <div class="power-total">
    <el-row>
      <el-col :span="8">
        <i class="iconfont icon app-yellow">&#xe62f;</i>
      </el-col>
      <el-col :span="16">
        <span class="title">大气温度</span>
        <el-row :gutter="5" style="line-height: 25px;">
          <el-col :span="12" style="text-align: right"><span class="app-yellow value">{{ dataClimate.temperature }}</span></el-col>
          <el-col :span="12"><span class="unit">℃</span></el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <i class="iconfont icon app-blue">&#xe62e;</i>
      </el-col>
      <el-col :span="16">
        <span class="title">大气气压</span>
        <el-row :gutter="5" style="line-height: 25px;">
          <el-col :span="12" style="text-align: right"><span class="app-blue value">{{ dataClimate.pressure }}</span></el-col>
          <el-col :span="12"><span class="unit">kPa</span></el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <i class="iconfont icon app-green">&#xead4;</i>
      </el-col>
      <el-col :span="16">
        <span class="title">相对湿度</span>
        <el-row :gutter="5" style="line-height: 25px;">
          <el-col :span="12" style="text-align: right"><span class="app-green value">{{ dataClimate.humidity }}</span></el-col>
          <el-col :span="12"><span class="unit">%</span></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    dataClimate: Object
  }
}
</script>

<style scoped lang="scss">
.power-total {
  position: absolute;
  top: 40px;
  left: 0px;

  width: 300px;

  color: #ffffff;

  padding: 20px;

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  .icon {
    line-height: 40px;
    font-size: 40px;
  }

  .title {
    font-size: 17px
  }

  .unit {
    font-size: 20px;
  }

  .value {
    font-size: 20px;
  }
}
</style>
