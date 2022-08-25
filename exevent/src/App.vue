<template>
  <div id="app">
    <h2>상위 컴포넌트</h2>
    {{parentValue}}
    <!--v-on:하위 컴포넌트의 이벤트명="상위 컴포넌트의 메서드명"-->
    <ChildComponent v-on:childEvent="updateParentVue"/> <!--childEvent라는 이벤트가 받아지면 그때 updateParentVue 메소드 실행-->
    <!--<child_com v-bind:count="printText" v-on:change="change"></child_com>-->
  </div>
</template>

<script>
import ChildComponent from "./components/child_com.vue"
export default {
  name:"ParentComponent",
  components: { //ParentComponent 컴포넌트 안에 ChildComponent 등록
    ChildComponent
  },
 data() {
  return {
    parentValue: 0 //초기값을 0으로 세팅
  }
 },
 methods: {
  updateParentVue() { //child_com.vue에서 화면 버튼 클릭시 실행되는 메소드
    this.parentValue++; //메소드가 실행될시 parentValue 1씩 증가
    console.log(this.parentValue) //로그에 parentValue 값 출력
    
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