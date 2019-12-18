var message = {
  name: 'WeChat',
  array: [1, 2, 3, 4, 5],
  view: 'MINA',
  staffA: {firstName: 'Hulk', lastName: 'Hu'},
  staffB: {firstName: 'Shang', lastName: 'You'},
  staffC: {firstName: 'Gideon', lastName: 'Lin'}
}
Page({
data: message,
  changeName: function(e) {
    // sent data change to view.
    this.setData({
      name: 'HYAN'
    })
  }
})