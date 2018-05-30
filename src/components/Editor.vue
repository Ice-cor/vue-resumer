<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-bind:class="{active: currentTarget === index}" 
                    v-for="(icon,index) in icons" 
                    v-on:click="currentTarget=index">
                    <svg class="icon" aria-hidden="true">
                        <use v-bind:xlink:href="icon"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol>
            <li v-show="currentTarget ===0">1</li>
            <li v-show="currentTarget ===1">2</li>
            <li v-show="currentTarget ===2">3</li>
            <li v-show="currentTarget ===3">4</li>
            <li v-show="currentTarget ===4">5</li>
            <li v-show="currentTarget ===5">6</li>
        </ol>
    </div>
</template>

<script>
export default {
  name: "editor",
  data() {
    return {
      icons: [
        "#icon-wxbzhanghu",
        "#icon-phone",
        "#icon-project",
        "#icon-work0",
        "#icon-lights",
        "#icon-info"
      ],
      currentTarget: 0
    };
  },
  methods: {
    log(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped lang="scss">
#editor {
  height: 100%;
  width: 40em;
  margin-right: 40px;
  display: flex;
  & nav {
    background: rgb(0, 61, 100);
    width: 100px;
    height: 100%;
    & li {
      padding: 16px;
      text-align: center;
      cursor: pointer;
    }
    & li.active {
      background: rgb(34, 87, 121);
    }
  }
}
.icon {
  width: 32px;
  height: 32px;
  vertical-align: -0.15em;
  fill: rgb(200, 200, 200);
  overflow: hidden;
}
</style>
