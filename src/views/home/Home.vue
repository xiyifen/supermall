<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>

</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from "./homecomps/HomeSwiper";
  import RecommendView from "./homecomps/RecommendView";

  import {getHomeMultidata} from "network/home";
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return{
        banners:[],
        recommend:[],
        // retult: null
      }
    },
    created() {
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list
        this.recommend=res.data.recommend.list
      })
    }

  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
