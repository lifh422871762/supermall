<template>
  <div class="feature">
    <div class="feature-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image">
        <div class="feature-item-font">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommends:{
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

  .feature {
    display: flex;
    border-bottom: 10px solid #eee;
    margin-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
  }

  .feature img {
    width: 80px;
    margin-bottom: 10px;
  }

  .feature-item {
    flex: 1;
    text-align: center;
  }

</style>
