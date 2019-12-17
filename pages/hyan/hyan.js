var util = require('../../utils/util.js')
var helloData = {
  name: 'WeChat'
}
Page({
data: helloData,
  changeName: function(e) {
    // sent data change to view.
    this.setData({
      name: 'MINA'
    })
  }
})