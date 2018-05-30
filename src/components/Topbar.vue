<template>
  <div id="topbar">
      <div>logo</div>
      <div>userInfo</div>
      
  </div>
</template>

<script>
export default {
  name: 'topbar'
}
</script>

<style scoped>
    #topbar{
        border: 1px solid blue;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
