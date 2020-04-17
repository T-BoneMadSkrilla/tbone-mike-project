<template>
  <div>
    <div class="logoWrapper">
      <div class="logo">
        Our Logo
      </div>
      <form class="cardAroundSignIn" @submit.prevent="postUser">
        <input type="text" v-model="email" placeholder="email" />
        <input type="password" v-model="password" placeholder="password" />
        <input class="btn" type="submit" value="Sign In" />
      </form>
    </div>
    <div class="wrapper">
      <img class="topImgSize" src="@/assets/splashimg2.jpg" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    postUser() {
      const Email = this.email;
      const Password = this.password;

      axios
        .post("http://localhost:3030/api/create-user", { Email, Password })
        .then(
          (this.email = ""),
          (this.password = ""),
          this.$router.push("job-matches")
        )
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
  .logoWrapper {
    margin: 0 auto;
    position: absolute;
    top: 170px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    background: #e8e8e8;
    width: 425px;
    height: 130px;
    text-align: center;
    z-index: 2;
  }

  .logo {
    font-size: 3.5em;
    font-family: sans-serif;
    color: #41b883;
    -webkit-text-stroke: 1px #34495e;
  }

  .cardAroundSignIn {
    margin: 0 auto;
    background: #34495e;
    height: 65px;
    width: 425px;
  }
  input[type="text"] {
    margin-top: 13px;
    height: 31px;
    font-size: 13px;
  }
  input[type="password"] {
    margin-top: 13px;
    height: 31px;
    font-size: 13px;
  }
  .btn {
    margin-top: 13px;
    height: 36.75px;
    background-color: #4caf50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    cursor: pointer;
  }

  .wrapper {
    margin: 0 auto;
    position: relative;
    z-index: -1;
    text-align: center;
    width: 1220px;
    height: 720px;
    border-style: double;
    background: #fafafa;
  }

  .topImgSize {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 1200px;
    height: 700px;
    object-fit: cover;
    z-index: -1;
    filter: grayscale(40%) sepia(0.15);
  }
</style>
