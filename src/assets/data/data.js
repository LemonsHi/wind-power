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
  },
  {
    key: 4,
    name: '关岭永宁风电场',
    value: '7,638'
  },
  {
    key: 5,
    name: '瓜州北大桥第一风电场',
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

const dataClimate = {
  temperature: '30',
  pressure: '100.5',
  humidity: '17.9'
}

const dataClimateTable = [
  {
    key: 8,
    tower: '80',
    speed: '8.1',
    pressure: '89.2',
    temperature: '24.2',
    humidity: '30.5'
  },
  {
    key: 7,
    tower: '70',
    speed: '8.1',
    pressure: '89.2',
    temperature: '24.2',
    humidity: '30.5'
  },
  {
    key: 6,
    tower: '60',
    speed: '8.1',
    pressure: '89.2',
    temperature: '24.2',
    humidity: '30.5'
  },
  {
    key: 5,
    tower: '50',
    speed: '8.1',
    pressure: '89.2',
    temperature: '24.2',
    humidity: '30.5'
  },
  {
    key: 4,
    tower: '40',
    speed: '8.1',
    pressure: '89.2',
    temperature: '24.2',
    humidity: '30.5'
  },
  {
    key: 3,
    tower: '30',
    speed: '8.1',
    pressure: '89.2',
    temperature: '24.2',
    humidity: '30.5'
  },
  {
    key: 2,
    tower: '20',
    speed: '8.1',
    pressure: '89.2',
    temperature: '24.2',
    humidity: '30.5'
  },
  {
    key: 1,
    tower: '10',
    speed: '8.1',
    pressure: '89.2',
    temperature: '24.2',
    humidity: '30.5'
  },
  // {
  //   key: 0,
  //   tower: '',
  //   speed: '',
  //   pressure: '',
  //   temperature: '',
  //   humidity: ''
  // }
]

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

const dataOption = [
  {
    key: 0,
    title: '准确率',
    value: '98.2%'
  },
  {
    key: 1,
    title: '合格率',
    value: '98.2%'
  },
  {
    key: 2,
    title: '上报率',
    value: '98.2%'
  },
  {
    key: 3,
    title: '均方根误差',
    value: '0.05'
  }
]

export default {
  dataRank: dataRank,
  dataTotal: dataTotal,
  dataPower: dataPower,
  dataInfo: dataInfo,
  dataFanState: dataFanState,
  dataClimate: dataClimate,
  dataClimateTable: dataClimateTable,
  dataOption: dataOption
}
