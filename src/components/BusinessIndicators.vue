<template>
  <div class="business-indicators-panel">
    <div class="box-header">
      <i class="iconfont">&#xe60d;</i>
      <span>数据汇总</span>
      <div class="box-header-button iconfont">&#xe611;</div>
    </div>
    <div class="box-body">

    </div>
    <div class="box-footer">

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.business-indicators-panel {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 300px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.1);

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
        background-color: rgba(0, 0, 0, 0.8)
      }
    }
  }
}
</style>
