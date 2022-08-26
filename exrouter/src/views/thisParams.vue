<template>
  <div>
    <h1>Params</h1>

    <h2>params로 받은 데이터</h2>
    <h2>name: {{ $route.params.name }}</h2>
    <h2>name: {{ $route.params.age }}</h2>

    <h2>props로 받은 데이터</h2>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
  </div>
</template>

<script>
  export default {
    name: "thisParams",
    props: {
      name: {
        type:String,
        default:"",
      },
      age: {
        type: Number,
        default:0,
      }
    },
    created() {
      console.log(this.$route.params.name);//$route.params 로 접근
      console.log(this.$route.params.age);
    }
  }
</script>