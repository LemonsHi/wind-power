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

const dataInfo = {
  total: '32000.0',
  agc: '32000.0',
  real: '32000.0',
  upperLimit: '32000.0',
  lowerLimit: '32000.0',
  state: 1
}

const dataFanState = {
  normal: '825',
  standby: '132',
  maintain: '825',
  cutOut: '825',
  anemometerTower: '12'
}

export default {
  dataRank: dataRank,
  dataTotal: dataTotal,
  dataPower: dataPower,
  dataInfo: dataInfo,
  dataFanState: dataFanState
}
