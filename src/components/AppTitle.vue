<template>
  <div class="app-title">
    <el-row style="z-index: 999;">
      <el-col :span="8" class="title-time">
        <i class="iconfont icon" v-if="firstPage" @click="control">&#xe628;</i>
        <i class="iconfont icon" v-if="!firstPage" @click="controlPage">&#xe6ae;</i>
        <div class="time">
          <p>{{ time }}</p>
          <p>{{ date }}</p>
        </div>
      </el-col>
      <el-col :span="8" class="title-column">
        <span class="title">基于BP神经网络的风电场风电预测系统</span>
      </el-col>
      <el-col :span="8" class="title-info">
        <div class="info iconfont">&#xe616;</div>
        <div class="info iconfont">&#xe642;</div>
        <div class="info iconfont">&#xe626;</div>
        <div class="info iconfont">&#xe639;</div>
        <div class="info iconfont" @click="controlFull" v-if="!isFull">&#xe625;</div>
        <div class="info iconfont" @click="controlFull" v-else>&#xe618;</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    firstPage: Boolean
  },
  data: () => {
    return {
      time: '',
      date: '',
      isFull: false
    }
  },
  created () {
    setInterval(() => {
      this.getTime()
    }, 500)
    document.addEventListener("fullscreenchange", function(event) {
      if (document.fullscreenElement) {
        this.isFull = true
      } else {
        this.isFull = false
      }
    });
  },
  methods: {
    getTime () {
      let _time = new Date()
      let _hour = `${parseInt(_time.getHours() / 10)}${_time.getHours() % 10}`
      let _minute = `${parseInt(_time.getMinutes() / 10)}${_time.getMinutes() % 10}`
      let _second = `${parseInt(_time.getSeconds() / 10)}${_time.getSeconds() % 10}`
      this.time = `${_hour}:${_minute}:${_second}`
      this.date = `${_time.getFullYear()}年${parseInt((_time.getMonth() + 1) / 10)}${(_time.getMonth() + 1) % 10}月${parseInt(_time.getDate() / 10)}${_time.getDate() % 10}日`
    },
    control () {
      this.$emit('control-info')
    },
    controlPage () {
      this.$emit('control-page', 'firstPage')
    },
    controlFull () {

    }
  }
}
</script>

<style scoped lang="scss">
.app-title {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);

  .title-time {
    padding-left: 10px;
    color: #ffffff;
    .icon {
      float: left;
      font-size: 20px;
      line-height: 40px;
      width: 60px;
      text-align: center;
      transition: all 0.3s;
      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
        color: #000000;
      }
    }
    .time {
      width: 200px;
      height: 100%;
      padding-left: 80px;
      text-align: center;
      p {
        font-size: 14px;
      }
      p:first-child {
        font-size: 20px;
      }
    }
  }

  .title-column {
    text-align: center;
    .title{
      color: #ffffff;
      line-height: 40px;
      font-size: 20px;
      font-weight: bold;
    }
  }

  .title-info {
    color: #ffffff;
    .info {
      float: right;
      font-size: 12px;
      margin: 5px 20px 5px 20px;
      width: 30px;
      height: 30px;
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      line-height: 30px;
      text-align: center;
      transition: all 0.3s;
      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
        color: #000000;
      }
    }
  }
}
</style>
