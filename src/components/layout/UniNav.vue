<template>
  <div>
    <div class="logo">
      Our Logo
    </div>
    <header class="header">
      <router-link to="/universities/data"> Metrics </router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: "UniNav"
};
</script>

<style scoped>
.logo {
  font-size: 2.5em;
  font-family: sans-serif;
  color: #41b883;
  -webkit-text-stroke: 0.5px #34495e;
}
.header {
  background: #34495e;
  color: #41b883;
  text-align: center;
  font-size: 1.25em;
  padding: 15px;
}

.header a {
  color: white;
  text-decoration: none;
}

.header a.router-link-exact-active {
  color: #42b983;
}
</style>
