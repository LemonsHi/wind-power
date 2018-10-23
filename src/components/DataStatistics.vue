<template>
  <div class="data-total">
    <div class="box-menu">
      <el-form ref="form" :model="searchData" label-width="80px">
        <el-form-item>
          <p class="title"><span class="iconfont">&#xe635;</span>河北张北坝头风电场</p>
        </el-form-item>
        <el-form-item label="气压">
          <el-input v-model="searchData.pressure" placeholder="请输入查询气压值" size="small"></el-input>
        </el-form-item>
        <el-form-item label="湿度">
          <el-input v-model="searchData.humidity" placeholder="请输入查询湿度值" size="small"></el-input>
        </el-form-item>
        <el-form-item label="温度">
          <el-input v-model="searchData.temperature" placeholder="请输入查询温度值" size="small"></el-input>
        </el-form-item>
        <el-form-item label="风速">
          <el-input v-model="searchData.speed" placeholder="请输入查询风速值" size="small"></el-input>
        </el-form-item>
        <el-form-item label="风向正弦">
          <el-input v-model="searchData.speedSin" placeholder="请输入查询风向正弦值" size="small"></el-input>
        </el-form-item>
        <el-form-item label="风向余弦">
          <el-input v-model="searchData.speedCos" placeholder="请输入查询风向余弦值" size="small"></el-input>
        </el-form-item>
        <el-form-item label="风电功率">
          <el-input v-model="searchData.realData" placeholder="请输入查询风电功率" size="small"></el-input>
        </el-form-item>
        <el-form-item label="预测功率">
          <el-input v-model="searchData.predictionData" placeholder="请输入查询预测功率" size="small"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="searchData.starTime"
            type="datetime"
            placeholder="选择开始日期时间"
            align="right"
            :picker-options="pickerOptions"
            size="small">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="searchData.endTime"
            type="datetime"
            placeholder="选择结束日期时间"
            align="right"
            :picker-options="pickerOptions"
            size="small">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="10">
            <el-col :span="12">
              <el-button type="primary" @click="onSubmit" style="width: 100%" size="small">上传数据</el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="primary" @click="onSubmit" style="width: 100%" size="small">下载数据</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="10" type="flex" justify="center" align="middle">
            <el-col :span="24">
              <el-button type="primary" @click="onSubmit" style="width: 100%" size="small">搜索</el-button>
            </el-col>
          </el-row>

        </el-form-item>
      </el-form>
    </div>
    <div class="box-body">
      <el-row style="height: 40%; margin-bottom: 10px;">
        <el-col :span="24" style="height: 100%">
          <DataStatisticsChart />
        </el-col>
      </el-row>
      <el-row style="height: 59%">
        <el-col :span="24" style="height: 100%">
          <el-table
            border
            stripe
            id="data-table-panel"
            ref="data-table"
            :height="tableOption.tableHeight"
            :data="tableData"
            style="width: 100%">
            <el-table-column
              fixed="left"
              type="index"
              align="center"
              label="编号"
              :index="indexMethod"
              width="80">
            </el-table-column>
            <el-table-column
              fixed="left"
              prop="time"
              label="日期"
              align="center"
              width="150">
            </el-table-column>
            <el-table-column label="参数" align="center">
              <el-table-column
                prop="pressure"
                label="气压(kPa)"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="temperature"
                label="温度(℃)"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="humidity"
                label="湿度(%)"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="speed"
                label="速度(m/s)"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="speedSin"
                label="风向正弦"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="speedCos"
                label="风向余弦"
                align="center"
                width="120">
              </el-table-column>
            </el-table-column>
            <el-table-column
              prop="realData"
              label="风电功率(WkW.h)"
              align="center"
              width="150">
            </el-table-column>
            <el-table-column
              prop="predictionData"
              label="预测功率(WkW.h)"
              align="center"
              width="150">
            </el-table-column>
            <el-table-column
              fixed="right"
              prop="options"
              label="操作"
              align="center"
              width="150">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="medium">查看</el-button>
                <el-button type="text" size="medium">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import DataStatisticsChart from './DataStatisticsChart.vue'
import { tableData } from '../assets/data/table-data.js'

export default {
  name: "data-total",
  data: () => ({
    searchData: {
      speed: '',
      pressure: '',
      temperature: '',
      humidity: '',
      speedSin: '',
      speedCos: '',
      starTime: '',
      endTime: '',
      realData: '',
      predictionData: ''
    },
    tableOption: {
      tableHeight: '100%',
    },
    pickerOptions: {
      shortcuts: [{
        text: '今天',
        onClick(picker) {
          picker.$emit('pick', new Date())
        }
      }, {
        text: '昨天',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          picker.$emit('pick', date)
        }
      }, {
        text: '一周前',
        onClick(picker) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          picker.$emit('pick', date)
        }
      }]
    },
  }),
  computed: {
    tableData () {
      return tableData
    }
  },
  components: {
    DataStatisticsChart
  },
  methods: {
    indexMethod (index) {
      return index + 1;
    },
    handleClick (row) {
      console.log(row)
    },
    onSubmit () {
      console.log('onSubmit')
    }
  }
}
</script>
<style lang="scss" scoped>
.data-total {
  position: relative;
  height: 100%;
  width: 100%;

  .title {
    font-size: 15px;
    color: #ffffff;
    span {
      font-size: 30px;
      padding-right: 20px;
    }
  }

  .box-menu {
    float: left;
    width: 320px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
  }

  .box-body {
    width: 100%;
    height: 100%;
    padding: 10px 10px 10px 330px;
  }
}
</style>
