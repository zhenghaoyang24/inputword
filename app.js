// app.js
App({
  onLaunch() {
    wx.redirectTo({
      url: "/start/start"
    })
  
  },
  globalData: {
    userInfo: null
  }
})
