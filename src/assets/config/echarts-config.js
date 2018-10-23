const realTimeData = [1200, 1400, 1000, 1400, 900, 2400, 2100, 1300, 900, 2300, 2100, 2200, 2100]
const predictionData = [1200, 1400, 1100, 1400, 900, 2000, 2100, 1100, 900, 2300, 2000, 2300, 2000]

// 首页折线图配置文件
const lineChartConfig = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    top: 40,
    left: 50,
    height: '70%',
    width: '87%',
    // containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
    boundaryGap: false,
    name: '小时(H)',
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  yAxis: {
    type: 'value',
    name: 'WkW.h',
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  series: [{
    name: '实时功率',
    data: realTimeData,
    type: 'line',
    symbol: 'circle',
    symbolSize: 10,
    itemStyle: {
      color: '#FFFF00'
    },
    lineStyle: {
      color: '#FFFF00'
    }
  }]
}

// 首页地图配置文件
const mapChartConfig = {
  backgroundColor: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: '#0f2c70' // 0% 处的颜色
    }, {
      offset: 1,
      color: '#091732' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
  },
  geo: {
    map: 'china',
    show: true,
    roam: false,
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#091632',
        borderColor: '#1773c3',
        shadowColor: '#1773c3',
        shadowBlur: 20
      }
    },
    // top: 10,
    layoutCenter: ['50%', '46%'],
    // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
    layoutSize: 900
  },
  series: [{
    type: 'map',
    map: 'china',
    geoIndex: 1,
    aspectScale: 0.75, //长宽比
    showLegendSymbol: true, // 存在legend时显示
    label: {
      normal: {
      show: false,
      },
      emphasis: {
        show: false,
        textStyle: {
          color: '#fff'
        }
      }
    },
    // roam: true,
    itemStyle: {
      normal: {
        areaColor: '#031525',
        borderColor: '#3B5077',
        borderWidth: 1
      },
      emphasis: {
        areaColor: '#0f2c70'
      }
    },
    // top: 10,
    layoutCenter: ['50%', '46%'],
    // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
    layoutSize: 900
  }, {
    type: 'effectScatter',
    coordinateSystem: 'geo',
    data: [
      {
        name: '河北张北坝头风电场',
        value: [114.829064, 41.082209, 400]
      },
      {
        name: '四川德昌风电场',
        value: [102.147882, 27.411969, 400]
      },
      {
        name: '关岭永宁风电场',
        value: [105.541214,25.834837, 400]
      },
      {
        name: '瓜州北大桥第一风电场',
        value: [95.883621, 40.598737, 400]
      },
      // {
      //   name: '张北元山子风电场',
      //   value: [115.098094, 41.211017, 400]
      // },
      {
        name: '云南泸西风电场',
        value: [103.81406, 24.524296, 400]
      }
    ],
    symbolSize: function (val) {
      return val[2] / 20;
    },
    showEffectOn: 'render',
    rippleEffect: {
      brushType: 'stroke'
    },
    hoverAnimation: true,
    label: {
      normal: {
        formatter: '{b}',
        position: 'right',
        show: true
      }
    },
    itemStyle: {
      normal: {
        color: '#f4e925',
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    zlevel: 1
  }]
}

const predictionLineChartConfig = {
  title: {
    text: '实时 - 预测折线图',
    textStyle: {
      color: '#ffffff',
      fontSize: 16
    },
    top: 5,
    left: 5
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    top: 60,
    left: 50,
    height: '68%',
    width: '87%',
    // containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
    boundaryGap: false,
    // name: '小时(H)',
    axisLabel: {
      formatter: '{value} H'
    },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  yAxis: {
    type: 'value',
    name: 'WkW.h',
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  series: [
    {
      name: '实时功率',
      data: realTimeData,
      type: 'line',
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#FFFF00'
      },
      lineStyle: {
        color: '#FFFF00'
      }
    },
    {
      name: '预报功率',
      data: predictionData,
      type: 'line',
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#6BB3FA'
      },
      lineStyle: {
        color: '#6BB3FA'
      }
    }
  ]
}

const predictionLineBarChartConfig = {
  title: {
    text: '实时 - 预测分析图',
    textStyle: {
      color: '#ffffff',
      fontSize: 16
    },
    top: 5,
    left: 5
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    top: 60,
    left: 50,
    height: '68%',
    width: '90%',
    // containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
    // boundaryGap: false,
    // name: '小时(H)',
    axisLabel: {
      formatter: '{value} H'
    },
    axisTick: {
      // alignWithLabel: true
    },
    axisPointer: {
      type: 'shadow'
    },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  yAxis: {
    type: 'value',
    name: 'WkW.h',
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  series: [
    {
      name: '实时功率',
      data: realTimeData,
      type: 'bar',
      barWidth: '50%',
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#FFFF00'
      },
      lineStyle: {
        color: '#FFFF00'
      }
    },
    {
      name: '预报功率',
      data: predictionData,
      type: 'line',
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#6BB3FA'
      },
      lineStyle: {
        color: '#6BB3FA'
      }
    }
  ]
}

const predictionBarChartConfig = {
  title: {
    text: '实时 - 预测条形图',
    textStyle: {
      color: '#ffffff',
      fontSize: 16
    },
    top: 5,
    left: 5
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    top: 60,
    left: 50,
    height: '68%',
    width: '95%',
    // containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
    // boundaryGap: false,
    // name: '小时(H)',
    axisLabel: {
      formatter: '{value} H'
    },
    axisTick: {
      // alignWithLabel: true
    },
    axisPointer: {
      type: 'shadow'
    },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  yAxis: {
    type: 'value',
    name: 'WkW.h',
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  series: [
    {
      name: '实时功率',
      data: realTimeData,
      type: 'bar',
      barWidth: '30%',
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#FFFF00'
      },
      lineStyle: {
        color: '#FFFF00'
      }
    },
    {
      name: '预报功率',
      data: predictionData,
      type: 'bar',
      barWidth: '30%',
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#6BB3FA'
      },
      lineStyle: {
        color: '#6BB3FA'
      }
    }
  ]
}

const dataStatisticsConfig = {
  title: {
    text: '实时 - 预测分析图',
    textStyle: {
      fontSize: 16
    },
    top: 5,
    left: 5
  },
  tooltip: {
    trigger: 'axis'
  },
  toolbox: {
    feature: {
      // dataView: {show: true, readOnly: false},
      magicType: {show: true, type: ['line', 'bar']},
      restore: {show: true},
      saveAsImage: {show: true}
    },
    top: 5,
    right: 10
  },
  grid: {
    top: 60,
    left: 50,
    height: '68%',
    width: '95%',
  },
  xAxis: {
    type: 'category',
    data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
    axisLabel: {
      formatter: '{value} H'
    },
    axisTick: {
      alignWithLabel: false
    },
    axisPointer: {
      type: 'shadow'
    }
  },
  yAxis: {
    type: 'value',
    name: 'WkW.h'
  },
  series: [
    {
      name: '实时功率',
      data: realTimeData,
      type: 'bar',
      barWidth: '30%',
      symbol: 'circle',
      symbolSize: 10
    },
    {
      name: '预报功率',
      data: predictionData,
      type: 'line',
      barWidth: '30%',
      symbol: 'circle',
      symbolSize: 10
    }
  ]
}

export {
  lineChartConfig,
  mapChartConfig,
  predictionLineChartConfig,
  predictionLineBarChartConfig,
  predictionBarChartConfig,
  dataStatisticsConfig
}
