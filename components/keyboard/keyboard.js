Component({
  data: {
    keyboardRows: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ],
    inputValue: ''
  },

  methods: {
    handleKeyTap(e) {
      wx.vibrateShort({
        type: 'heavy'
      })
      const key = e.currentTarget.dataset.key;
      let newValue = this.data.inputValue;

      switch(key) {
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
    }
  }
});