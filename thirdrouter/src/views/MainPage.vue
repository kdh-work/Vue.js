<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <h1>네스티드 라우터 연습</h1>
      <h2>{{title}}</h2>
      <h2>{{title2}}</h2>
      <button @click="onclick">this Button</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["title"],
    watch: {
      cnt(n) {
        this.cnt2 = n*2;
      }
    },
    computed: {
      title2() {
        return this.cnt *3;
      } 
    },
    data() {
      return {
        cnt:0,
        cnt2:0
      }
    },
    methods: {
      onclick() {
        this.cnt++;
        this.$emit("myevent", `button was clicked time:${this.cnt}`);
      }
    }
  }
</script>
