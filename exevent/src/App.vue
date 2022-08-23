<template>
  <div id="app">
    <h2>상위 컴포넌트</h2>

    <!--v-on:하위 컴포넌트의 이벤트명="상위 컴포넌트의 메서드명"-->
    <child_com v-on:checkchild="checkParent"></child_com>
    <!--<child_com v-bind:count="printText" v-on:change="change"></child_com>-->
  </div>
</template>

<script>
import child_com from "./components/child_com.vue"
export default {
  components: {
    child_com
  },
  methods:{
    checkParent(text) {
      alert(text);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
