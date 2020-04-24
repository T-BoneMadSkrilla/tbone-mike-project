<template>
  <div class="absolute">
    <div class="header">
      <div class="logoWrapper">
        <img class="logo" src="@/assets/logo.png" />
      </div>

      <form class="cardAroundSignIn" @submit.prevent="postUser">
        <input type="text" v-model="email" placeholder="email" />
        <input type="password" v-model="password" placeholder="password" />
        <input class="btn" type="submit" value="Sign In" />
      </form>
      <div class="errorMessage" v-if="errorMessage">
        Please ensure you have an account, are using a vaild email address, and your
        password is correct
      </div>
    </div>

    <div class="wrapper">
      <img class="topImgSize" src="@/assets/splashimg3.jpg" />
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
      password: "",
      errorMessage: false
    };
  },
  methods: {
    postUser() {
      const Email = this.email;
      const Password = this.password;

      axios
        .post(
          "http://localhost:3030/api/login",
          { Email, Password },
          { withCredentials: true }
        )
        .then(res => {
          if (res.data.user_type == 1) {
            this.$router.push(`job-matches/${res.data.id}`);
          } else if (res.data.user_type == 2) {
            this.$router.push(`employers/candidates/${res.data.id}`);
          } else {
            this.$router.push("universities/data");
          }
        })
        .catch(
          this.errorMessage = true
        )
    }
  }
};
</script>

<style scoped>
.absolute {
  height: 100%;
}

.header {
  position: absolute;
  right: 0;
  top: 0;
  background-image: linear-gradient(to bottom, #34495e, #0892d0);
  color: #41b883;
  text-align: center;
  font-size: 1.25em;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.logoWrapper {
  width: 100%;
  height: 40%;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-bottom-color: #fafafa;
}

.logo {
  width: 100%;
  height: 300px;
  -webkit-text-stroke: 0.5px #34495e;
  object-fit: contain;
}

.cardAroundSignIn {
  margin: 0 auto;
  height: 65px;
  display: flex;
  flex-direction: column;
}
input[type="text"] {
  margin-top: 23px;
  height: 31px;
  width: 130px;
  font-size: 13px;
}
input[type="password"] {
  margin-top: 13px;
  height: 31px;
  width: 130px;
  font-size: 13px;
}
.btn {
  margin-top: 13px;
  height: 36.75px;
  width: 135px;
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
}

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  text-align: center;
  width: 80%;
  height: 99.1%;
  border-style: double;
  background: #fafafa;
}

.topImgSize {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: sepia(0.5);
  background-image: linear-gradient(to top, #34495e, #0892d0);
}

.errorMessage {
  font-size: .75em;
  margin-top: 100px;
  color: white;
}
</style>
