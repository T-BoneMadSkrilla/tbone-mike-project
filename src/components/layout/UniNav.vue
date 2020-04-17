<template>
  <div>
    <header class="header">
    <div class="logoWrapper">
      <img class="logo" src="../../assets/logo.png"/>
    </div>
      <router-link to="/universities/data"> Metrics </router-link> 
      <router-link to="/universities/student-upload"> Student Upload </router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: "UniNav"
};
</script>

<style scoped>
.logoWrapper {
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-bottom-color: #fafafa;
}
.logo {
  width: 100%;
  height: 135px;
  -webkit-text-stroke: 0.5px #34495e;
  object-fit: contain;
}
.header {
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(to bottom, #34495e, #0892D0);
  color: #41b883;
  text-align: center;
  font-size: 1.25em;
  width: 15%;
  min-height: 135vh;
  max-height: 200%;
  display: flex;
  flex-direction: column;
}

.header a {
  margin-top: 30px;
  color: white;
  text-decoration: none;
}

.header a.router-link-exact-active {
  color: #42b983;
}
</style>
