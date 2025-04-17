// index.js
Page({
  data: {
    inputValue: ''
  },
  onInputChange(e) {
    this.setData({
      inputValue: e.detail.value
    });
  }
})
