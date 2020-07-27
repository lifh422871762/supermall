<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: "Tabbar"
    }
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0px;
    bottom: 0px;
    right: 0px;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
  }
</style>
