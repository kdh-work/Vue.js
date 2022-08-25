<template>
  <div>
    <button v-on:click="forParent">클릭시 부모의 데이터 값이 증가</button><!--버튼 클릭시 이벤트 전달하는 메소드 실행 리스너-->
  </div>
</template>

<script>
  export default {
    name: "ChildComponent",
    methods: {
      forParent() {
        this.$emit("childEvent");// childEvent(상위에서 받을 이벤트 이름)라는 이벤트 전달
      }
    }
  }
</script>

<style>
</style>