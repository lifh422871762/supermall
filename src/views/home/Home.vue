<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";

  import {getHomeMultidata} from "network/home/home";


  export default {
    name: "Home",
    data() {
      return {
        banners: null,
        recommends: null
      }
    },
    components: {
      NavBar,
      HomeSwiper
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list;
      })
    }
  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
