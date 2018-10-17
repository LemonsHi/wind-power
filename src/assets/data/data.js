const dataRank = [
  {
    key: 1,
    name: '四川德昌风电场',
    value: '7,638'
  },
  {
    key: 2,
    name: '河北张北坝头风电场',
    value: '7,638'
  },
  {
    key: 3,
    name: '云南泸西风电场',
    value: '7,638'
  }
]

const dataTotal = {
  total: {
    scale: 351,
    farm: 14,
    fan: 1176
  },
  state: {
    normal: 825,
    cut: 132,
    repair: 63,
    fault: 14,
    interrupt: 7
  }
}

const dataPower = {
  day: '20,366',
  mounth: '462,081',
  year: '6,035,875'
}

export default {
  dataRank: dataRank,
  dataTotal: dataTotal,
  dataPower: dataPower
}
