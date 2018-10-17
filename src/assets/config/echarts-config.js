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
    data: [1200, 1400, 1000, 1400, 900, 2400, 2100, 1300, 900, 2300, 2100, 2200, 2100],
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
  }]
}

export { lineChartConfig, mapChartConfig }
