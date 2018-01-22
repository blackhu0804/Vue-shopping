let url = 'http://rap2api.taobao.org/app/mock/4354/GET//index/lists'

new Vue({
  el: '#app',
  data: {
    lists: null
  },
  created () {
    axios.post(url, {
      pageNum: 1,
      pageSize: 10
    }).then(res => {
      this.lists = res.data.list
      console.log(lists);
    })
  }
})