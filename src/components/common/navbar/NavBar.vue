<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>

  .nav-bar {
    display: flex;
    line-height: 44px;
    box-shadow:1px 1px 1px #909090;
  }
  .left , .right {
    width: 20%;
  }
  .center {
    flex: 1;
    text-align: center;
  }

</style>
