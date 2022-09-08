<template>
  <div id="app">
    <h1>Parent에 해당하는 부분</h1>
    <nav>
      <router-link to="/main">Main 컴포넌트로 이동</router-link> |
      <router-link to="/login">Login 컴포넌트로 이동</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
