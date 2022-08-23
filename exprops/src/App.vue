<template>
  <div id="app">
    <h1>상위 컴포넌트</h1>
    상위 컴포넌트가 보내는 값: {{send_name}} <!--상위에서 보내는 데이터값-->
    <child_compo :get_name="send_name"></child_compo> <!--상위에서 보낸 데이터를 받은 하위 컴포넌트-->
  </div>
</template>

<script>
//import 지정하고 싶은 이름 from "경로"
import child_compo from "./components/child_compo.vue"//child_compo 컴포넌트 사용을 위해
export default { //import를 사용하기 때문에 export 사용
  name: 'parent_compo', 
  components: {
    //'지정하고싶은 이름' : import에서 지정한 이름
    'child_compo' : child_compo //import한 child_compo를 하위 컴포넌트로 사용

  },
  data() {
    return{
      send_name: '전달값' //해당 뷰에서 사용할 데이터를 지님
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
