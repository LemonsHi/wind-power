<template>
  <div class="climate-table">
    <div class="box-header">
      <p class="title"><span class="iconfont">&#xe635;</span>河北张北坝头风电场（<span class="iconfont">&#xe62a;</span>3号测风塔）</p>
    </div>
    <div class="box-body">
      <el-row style="margin-bottom: 10px">
        <el-col :span="4">
          <p class="table-icon iconfont">&#xe62a;</p>
          <p class="table-title">测风塔高度（m）</p>
        </el-col>
        <el-col :span="5">
          <p class="table-icon iconfont">&#xe701;</p>
          <p class="table-title">风速（m/s）</p>
        </el-col>
        <el-col :span="5">
          <p class="table-icon iconfont">&#xe62e;</p>
          <p class="table-title">气压（Kpa）</p>
        </el-col>
        <el-col :span="5">
          <p class="table-icon iconfont">&#xe62f;</p>
          <p class="table-title">温度（℃）</p>
        </el-col>
        <el-col :span="5">
          <p class="table-icon iconfont">&#xead4;</p>
          <p class="table-title">相对湿度（%）</p>
        </el-col>
      </el-row>
      <el-row style="height: 11.3%;" v-for="(item, index) in dataClimateTable" :key="item.key">
        <el-col :span="4" style="height: 100%; padding-top: 4%">
          <p class="table-tower">{{ item.tower }}</p>
        </el-col>
        <el-col :span="5" class="table-value first">{{ item.speed }}</el-col>
        <el-col :span="5" class="table-value">{{ item.pressure }}</el-col>
        <el-col :span="5" class="table-value">{{ item.temperature }}</el-col>
        <el-col :span="5" class="table-value">{{ item.humidity }}</el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "climate-table",
  props: {
    dataClimateTable: Array
  }
}
</script>
<style lang="scss" scoped>
.climate-table {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 350px 0 250px;

  .box-header {
    padding: 10px 0;
    height: 9%;
    .title {
      font-size: 20px;
      text-align: center;
      color: #ffffff;
      span {
        font-size: 40px;
        padding-right: 20px;
      }
    }
  }

  .box-body {
    color: #ffffff;
    text-align: center;
    height: 86%;
    padding-bottom: 10px;
    .table-icon {
      font-size: 30px;
      color: #FFFF00;
    }
    .table-title {

    }
    .table-tower {
      font-size: 20px;
      // padding-top: 4%;
    }
    .table-value {
      font-size: 20px;
      padding-top: 4%;
      height: 100%;
      border-top: 1px solid #EBEBEB;
      &.first {
        border-left: 1px solid #EBEBEB;
      }
    }
  }
}
</style>
