import './cart_base.css'
import './cart_trade.css'
import './cart.css'

// import Mock from 'mockjs'
// let Random = Mock.Random

// let data = Mock.mock({
//   'cartList|3' :[{
//     'goodsList|1-2' : [{
//       id: Random.int(10000,100000),
//       image: Mock.mock('@img(90x90,@color)')
//     }]
//   }]
// })

import Vue from 'vue'
import mixin from 'js/mixin.js'
import axios from 'axios'
import url from 'js/api.js'

new Vue({
  el: '.container',
  data: {
    lists: null
  },
  computer: {

  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      axios.post(url.cartLists).then( res => {
        this.lists = res.data.cartList
        // this.lists.forEach(shop => {
        //   shop.goodsList.forEach(good => {
        //     good.checked = true
        //   })
        // })
      })
    }
  },
  mixins: [mixin]
})
