var util = require('../../utils/util.js')
var helloData = {
  name: 'WeChat',
  item: {
      index: 0,
      msg: 'this is a template',
      time: '2019-12-18'
    }
}
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
data: helloData,
  changeName: function(e) {
    // sent data change to view.
    this.setData({
      name: 'MINA'
    })
  },
  handleTap1:function(e){
     console.log(e)
    
    this.setData({
      name: 'handleTap1'
    })
  },
  handleTap2:function(e){
     console.log(e)
    this.setData({
      name: 'handleTap2'
    })
  },
  handleTap3:function(e){
    console.log(e)
    this.setData({
      name: 'handleTap3'
    })
  },
    bindViewTap:function(event){
    event.target.dataset.alphaBeta === 1 // - 会转为驼峰写法
    event.target.dataset.alphabeta === 2 // 大写会转为小写
  }

})