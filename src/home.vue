<template>
  <div id="home">
    <topbar/>
    <main>
      <editor v-bind:resume="resume"/>
      <preview v-bind:resume="resume"/>
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
  },
  data(){
    return {
      resume: {
        profile: [
          {
            name: "",
            jop: "",
            headPortrait: ""
          }
        ],
        contactInfo: [
          {
            phone: "",
            email: "",
            github: "",
            homePage: ""
          }
        ],
        projectInfo: [{ name: "", link: "", content: "" }]
      }
    }
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
