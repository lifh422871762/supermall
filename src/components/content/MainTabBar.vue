<template>
    <div>
      <tab-bar>
        <tab-bar-item path="/home" activeColor="red">
          <img slot="item-icon" src="~assets/img/tabbar/home.svg">
          <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="red">
          <img slot="item-icon" src="~assets/img/tabbar/category.svg">
          <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="red">
          <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg">
          <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="red">
          <img slot="item-icon" src="~assets/img/tabbar/profile.svg">
          <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>

  import TabBarItem from 'components/common/tabbar/TabBarItem';
  import TabBar from "components/common/tabbar/TabBar";

  export default {
      name: "MainTabBar",
      components: {
          TabBarItem,
          TabBar
      }
  }
</script>

<style>

</style>
