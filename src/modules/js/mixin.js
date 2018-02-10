let mixin = {
  filters: {
    currency(price) {
      // 将价格保留两位小数
      var f = parseFloat(price);
      if (isNaN(f)) {
          return false;
      }
      var f = Math.round(price*100)/100;
      var s = f.toString();
      var rs = s.indexOf('.');
      if (rs < 0) {
          rs = s.length;
          s += '.';
      }
      while (s.length <= rs + 2) {
          s += '0';
      }
      return s;
    }
  }
}

export default mixin