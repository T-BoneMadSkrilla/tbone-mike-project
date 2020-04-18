<template>
  <div>
    <!-- <div class="topRelative"> -->
      <!-- <router-link to="/employers/candidates" class="forEmployers">
        Employers
      </router-link>

      <router-link to="/universities/data" class="forUni">
        Universities
      </router-link>
      <router-link to="/profile" class="profile"> Profile </router-link> -->
    <!-- </div> -->
    <header class="header nav">
      <div class="logoWrapper">
        <img class="logo" src="../../assets/logo.png"/>
      </div>
      <router-link to="/job-matches/1"> Job Matches </router-link> 
      <router-link to="/resume"> Resume </router-link> 
    </header>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      userId: String,
      jobMatch: "/job-matches/"
    }
  },
  mounted() {
    this.userId = this.$route.params.id
    console.log("'" + this.jobMatch + this.userId + "'")
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

.topRelative {
  position: relative;
}

.topRelative a {
  text-decoration: none;
}

.forEmployers {
  position: absolute;
  left: 15px;
  color: #2c3e50;
}

.forUni {
  position: absolute;
  top: 20px;
  left: 15px;
  color: #2c3e50;
}

.profile {
  position: absolute;
  right: 15px;
  color: #2c3e50;
}

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
  min-height: 105%;
  max-height: 200%;
  overflow: auto;
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
