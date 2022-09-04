<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to your vue.js App">
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"

export default defineComponent({
  name:'PageHome',
  components: {
    HelloWorld
  }
})
</script>

