<template>
  <div>
    <checkParent><input type="button" v-on:onclick="checkParent()"></checkParent>
    
  </div>
</template>

<script>
  export default {
    methods: {
      checkParent() {
        let text="상위 컴포넌트로 전달하는 데이터"
        this.$emit(checkchild, text)
      }
    }
  }
</script>

<style>
</style>