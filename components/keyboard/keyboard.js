Component({
  data: {
    keyboardRows: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ],
    inputValue: '',
    timer: null
  },

  methods: {
    handleKeyTap(e) {
      wx.vibrateShort({
        type: 'heavy'
      })
      const key = e.currentTarget.dataset.key;
      let newValue = this.data.inputValue;

      switch (key) {
        case 'clear':
          newValue = '';
          break;
        case 'delete':
          newValue = newValue.slice(0, -1);
          break;
        default:
          newValue += key;
      }

      this.setData({ inputValue: newValue });
      this.triggerEvent('inputchange', { value: newValue });
    },
    // 点击删除按钮
    handleDeletePress() {
      const that = this;
      // 立即执行第一次删除
      this.deleteHandel();
      // 启动定时器
      this.setData({
        timer: setInterval(() => {
          that.deleteHandel();
        }, 100)
      });
    },
    // 删除键松开/离开 清除定时器
    handleDeleteRelease() {
      clearInterval(this.data.timer);
      this.setData({ timer: null });
    },
    // 删除字母逻辑
    deleteHandel() {
      let theVlaue= this.data.inputValue;
      if (theVlaue.length > 0) {
        wx.vibrateShort({
          type: 'heavy'
        })
        theVlaue = theVlaue.slice(0,-1)
        this.setData({
          inputValue: theVlaue
        });
        this.triggerEvent('inputchange', { value: theVlaue });
      }
    }
  }
});