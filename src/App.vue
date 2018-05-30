<template>
  <div id="app">
    <topbar/>
    <main>
      <editor/>
      <preview/>
    </main>
    
  </div>
</template>

<script>
import Editor from './components/Editor'
import Preview from './components/Preview'
import Topbar from './components/Topbar'

export default {
  name: 'App',
  components: {
    Editor,Preview,Topbar
  }
}
</script>

<style lang="scss">
#app {
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
  
}
</style>
