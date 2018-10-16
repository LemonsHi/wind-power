<template>
  <div class="data-rank" :style="{bottom: isOpen ? '0px' : '-360px'}">
    <div class="box-header">
      <i class="iconfont">&#xe67d;</i>
      <span>最大发电量风场排名</span>
      <div class="box-header-button" @click="controlPanel">
        <div class="iconfont" :style="{transform: isOpen ?'rotate(0deg)' : 'rotate(180deg)'}">&#xe611;</div>
      </div>
    </div>
    <div class="box-body">
      <div class="item" v-for="(item, index) in data" :key="item.key">
        <el-row>
          <el-col :span="16">
            <span class="item-num">{{ item.key }}.</span>
            <span class="item-name">{{ item.name }}</span>
          </el-col>
          <el-col :span="8">
            <span class="item-value">{{ item.value }} WkW.h</span>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataRank: Array
  },
  data: () => {
    return {
      isOpen: true
    }
  },
  computed: {
    data () {
      return this.dataRank
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
.data-rank {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 400px;
  height: 400px;
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
    overflow-y: auto;
    .item {
      width: 100%;
      height: 40px;
      &:nth-child(2n) {
          background-color: rgba(0, 0, 0, 0.5);
      }
      .el-row {
        line-height: 40px;
        color: #ffffff;
        font-size: 18px;
      }
      .item-num {
        margin: 0 15px;
        font-size: 18px;
      }
      .item-name {

      }
      .item-value {
        font-style: italic;
        font-weight: bold;
      }
    }
  }
}
</style>
