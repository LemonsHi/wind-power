<template>
  <div class="legend-info">
    <el-row>
      <el-col :span="10" style="text-align: center;">
        <span class="title">图例</span>
      </el-col>
      <el-col :span="14" style="height: 75px;">
        <div class="items">
          <div class="item">
            <div class="item-line-1">
              <div class="item-rect-1" ></div>
            </div>
            <span class="item-info">一期</span>
          </div>
          <div class="item">
            <div class="item-line-2">
              <div class="item-rect-2" ></div>
            </div>
            <span class="item-info">二期</span>
          </div>
          <div class="item">
            <div class="item-line-3">
              <div class="item-rect-3" ></div>
            </div>
            <span class="item-info">三期</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "legend-info",
  // data: () => ({
  //
  // })
}
</script>
<style lang="scss" scoped>
.legend-info {
  position: absolute;
  top: 242px;
  right: 0px;
  width: 300px;

  .title {
    line-height: 75px;
    color: #ffffff;
    font-size: 25px
  }
  .items {
    position: relative;
    width: 100%;
    height: 100%;
    .item {
      position: relative;
      height: 33.3%;
      width: 100%;
      padding-right: 80px;
      .item-info {
        position: absolute;
        top: 50%;
        right: 35%;
        right: 20%;
        margin-top: -9px;
        color: #ffffff;
        font-size: 15px;
      }
      .item-line-1 {
        position: relative;
        height: 50%;
        border-bottom: 1px solid #FFFF00;
        .item-rect-1 {
          position: absolute;
          top: 50%;
          right: 33.3%;
          width: 33.3%;
          height: 100%;
          background-color: #FFFF00;
        }
      }
      .item-line-2 {
        position: relative;
        height: 50%;
        border-bottom: 1px solid #6BB3FA;
        .item-rect-2 {
          position: absolute;
          top: 50%;
          right: 33.3%;
          width: 33.3%;
          height: 100%;
          background-color: #6BB3FA;
        }
      }
      .item-line-3 {
        position: relative;
        height: 50%;
        border-bottom: 1px solid #00FF00;
        .item-rect-3 {
          position: absolute;
          top: 50%;
          right: 33.3%;
          width: 33.3%;
          height: 100%;
          background-color: #00FF00;
        }
      }
    }
  }
}
</style>
