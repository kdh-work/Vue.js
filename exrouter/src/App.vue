<template>
  <div>
    Main
    <div>
      <router-link to="/">Main 페이지로</router-link>
    </div>

    <div>
      <br />

      <div>
        <button @click="clickList">Query 프로그래밍 방식</button>
      </div>
      <br />
      <div>
        <router-link
          :to="{ name: 'thisQuery', query: { name: 'Query 선언적 방식', age: 1 } }"
        >
          Query 선언적 방식
        </router-link>
      </div>

      <br />

      <div>
        <button @click="clickParams">Params 프로그래밍 방식</button>
      </div>

      <br />

      <div>
        <router-link
          :to="{
            name: 'thisParams',
            params: { name: 'Params 선언적 방식', age: 1 },
          }"
        >
          Params 선언적 방식
        </router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    clickList() {
      this.$router.push({
        name: "thisQuery",
        query: { name: "Query 프로그래밍 방식", age: 2 },
      });
    },
    clickParams() {
      this.$router.push({
        name: "thisParams",
        params: { name: "Params 프로그래밍 방식", age: 2 },
      });
    },
  },
};
</script>