<template>
  <div class="wind-farm">
    <div class="farm-info">
      <div class="farm-data">
        <p class="title"><span class="iconfont">&#xe635;</span>四川德昌风电场</p>
        <div class="iconfont wind-farm-icon">&#xe629;</div>
      </div>
    </div>
    <div class="farm-items">
      <div class="farm-items-left">
        <div class="farm-item-left-1">
          <div class="icon app-yellow-bg"></div>
          <p class="farm-item-left">
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-yellow">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-green">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
          </p>
        </div>
        <div class="farm-item-left-2">
          <div class="icon app-yellow-bg"></div>
          <p class="farm-item-left">
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-yellow">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-green">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
          </p>
        </div>
        <div class="farm-item-left-3">
          <div class="icon app-blue-bg"></div>
          <p class="farm-item-left">
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-yellow">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-green">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
          </p>
        </div>
      </div>
      <div class="farm-items-right">
        <div class="farm-item-right-1">
          <div class="icon app-green-bg"></div>
          <p class="farm-item-right">
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-yellow">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-green">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
          </p>
        </div>
        <div class="farm-item-right-2">
          <div class="icon app-green-bg"></div>
          <p class="farm-item-right">
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-yellow">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-green">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
          </p>
        </div>
        <div class="farm-item-right-3">
          <div class="icon app-blue-bg"></div>
          <p class="farm-item-right">
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-yellow">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon app-blue">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
            <i class="iconfont farm-icon app-green">&#xe62d;</i>
            <i class="iconfont farm-icon">&#xe62d;</i>
          </p>
        </div>
      </div>
    </div>
    <LegendInfo />
  </div>
</template>
<script>
import LegendInfo from "./LegendInfo.vue";

export default {
  name: "wind-farm",
  components: {
    LegendInfo
  }
}
</script>
<style lang="scss" scoped>
.wind-farm {
  position: relative;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  .farm-info {
    position: relative;
    height: 40%;
    width: 100%;
    .farm-data {
      position: absolute;
      width: 600px;
      height: 80%;
      left: 50%;
      bottom: 0px;
      margin-left: -300px;
      border-bottom: 1px solid #ffffff;
      color: #ffffff;
      text-align: center;
      .title {
        font-size: 20px;
        // line-height: 40px;
        span {
          font-size: 40px;
          padding-right: 20px;
        }
      }
      .wind-farm-icon {
        line-height: 201px;
        font-size: 100px;
      }
    }
  }
  .farm-items {
    position: relative;
    height: 60%;
    width: 100%;
    .farm-item-left {
      position: absolute;
      bottom: 10px;
      right: 10px;
      .farm-icon {
        color: #ffffff;
        margin: 0px 10px;
        font-size: 30px;
      }
    }
    .farm-item-right {
      position: absolute;
      bottom: 10px;
      left: 10px;
      .farm-icon {
        color: #ffffff;
        margin: 0px 10px;
        font-size: 30px;
      }
    }
    .farm-items-left {
      position: relative;
      width: 50%;
      height: 100%;
      display: inline-block;
      .farm-item-left-1 {
        position: absolute;
        top: 0px;
        left: 40px;
        height: 60%;
        width: 70%;
        border-right: 1px solid #FFFF00;
        border-bottom: 1px solid #FFFF00;
        .icon {
          position: absolute;
          right: -10px;
          top: 30px;
          width: 20px;
          height: 60px;
        }
      }
      .farm-item-left-2 {
        position: absolute;
        top: 0px;
        left: 40px;
        height: 75%;
        width: 80%;
        border-right: 1px solid #FFFF00;
        border-bottom: 1px solid #FFFF00;
        .icon {
          position: absolute;
          right: -10px;
          top: 90px;
          width: 20px;
          height: 60px;
        }
      }
      .farm-item-left-3 {
        position: absolute;
        top: 0px;
        left: 40px;
        height: 90%;
        width: 90%;
        border-right: 1px solid #6BB3FA;
        border-bottom: 1px solid #6BB3FA;
        .icon {
          position: absolute;
          right: -10px;
          top: 150px;
          width: 20px;
          height: 60px;
        }
      }
    }
    .farm-items-right {
      position: relative;
      width: 50%;
      height: 100%;
      display: inline-block;
      .farm-item-right-1 {
        position: absolute;
        top: 0px;
        right: 40px;
        height: 60%;
        width: 70%;
        border-left: 1px solid #00FF00;
        border-bottom: 1px solid #00FF00;
        .icon {
          position: absolute;
          left: -10px;
          top: 30px;
          width: 20px;
          height: 60px;
        }
      }
      .farm-item-right-2 {
        position: absolute;
        top: 0px;
        right: 40px;
        height: 75%;
        width: 80%;
        border-left: 1px solid #00FF00;
        border-bottom: 1px solid #00FF00;
        .icon {
          position: absolute;
          left: -10px;
          top: 90px;
          width: 20px;
          height: 60px;
        }
      }
      .farm-item-right-3 {
        position: absolute;
        top: 0px;
        right: 40px;
        height: 90%;
        width: 90%;
        border-left: 1px solid #6BB3FA;
        border-bottom: 1px solid #6BB3FA;
        .icon {
          position: absolute;
          left: -10px;
          top: 150px;
          width: 20px;
          height: 60px;
        }
      }
    }
  }
}
</style>
