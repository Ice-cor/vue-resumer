<template>
  <div id="home">
    <topbar/>
    <main>
      <editor/>
      <preview/>
    </main>
    <router-view/>
  </div>
</template>

<script>
import Editor from './components/Editor'
import Preview from './components/Preview'
import Topbar from './components/Topbar'

export default {
  name: 'Home',
  components: {
    Editor,Preview,Topbar
  }
}
</script>

<style lang="scss">
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;

}

main{
  display: flex;
  flex: 1;
  padding-top: 16px;
}
</style>
