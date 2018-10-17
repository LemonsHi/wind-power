<template>
  <div class="power-total">
    <el-row>
      <el-col :span="8">
        <i class="iconfont icon app-yellow">&#xe9ae;</i>
      </el-col>
      <el-col :span="16">
        <span class="title unit">今日发电总量</span>
        <el-row :gutter="5" style="line-height: 25px;">
          <el-col :span="12" style="text-align: right"><span class="app-yellow value">{{ dataPower.day }}</span></el-col>
          <el-col :span="12"><span class="unit">万千瓦时</span></el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <i class="iconfont icon app-blue">&#xe605;</i>
      </el-col>
      <el-col :span="16">
        <span class="title unit">月度发电总量</span>
        <el-row :gutter="5" style="line-height: 25px;">
          <el-col :span="12" style="text-align: right"><span class="app-blue value">{{ dataPower.mounth }}</span></el-col>
          <el-col :span="12"><span class="unit">万千瓦时</span></el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <i class="iconfont icon app-green">&#xe606;</i>
      </el-col>
      <el-col :span="16">
        <span class="title unit">年度发电总量</span>
        <el-row :gutter="5" style="line-height: 25px;">
          <el-col :span="12" style="text-align: right"><span class="app-green value">{{ dataPower.year }}</span></el-col>
          <el-col :span="12"><span class="unit">万千瓦时</span></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    dataPower: Object
  }
}
</script>

<style scoped lang="scss">
.power-total {
  position: absolute;
  top: 40px;
  right: 0px;

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

  .unit {
    font-size: 13px;
  }

  .value {
    font-size: 20px;
  }
}
</style>
