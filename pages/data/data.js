var helloData = {
  name: 'WeChat'
}
Page({
data: helloData,
  changeName: function(e) {
    // sent data change to view.
    this.setData({
      name: 'HYAN'
    })
  }
})