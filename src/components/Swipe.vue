<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow" v-bind:href="list.clickUrl" href="https://h5.koudaitong.com/v2/index/rukou">
          <img class="goods-main-photo fadeIn" :src="list.image">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'swipe',
  props: {
    lists: {
      type: Array,
      required: true
    },
    name: ''
  },
  mounted () {
    new Swiper('.swiper-container',{
      loop: true,
      effect : 'coverflow',
      autoplay:true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style>
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
</style>