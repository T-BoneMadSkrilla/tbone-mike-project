<template>
  <div>
    <TopNav userId="userId"/>
    <div class="wrapper">
      <div class="relative">
        <!-- <router-link to="/job-matches" class="homeArrow">
          <font-awesome-icon icon="arrow-left" size="3x" />
        </router-link> -->

        <div class="userImg">
          Profile
        </div>
        <div class="about">
          user resume
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/layout/TopNav";

export default {
  name: "Resume",
  components: {
    TopNav
  },
  data () {
    return {
      userId: this.$route.params.id,
    }
  }
};
</script>

<style scoped>
  .flexAround{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .wrapper {
    margin-left: 15%;
    text-align: center;
    width: 85%;
    min-height: 720px;
    border-style: double;
    background: #fafafa;
  }

  .relative {
  position: relative;
}

.homeArrow {
  position: absolute;
  left: 100px;
  top: 30px;
  color: grey;
  height: 50px;
  width: 50px;
}

.userImg {
  margin: 0 auto;
  margin-top: 5px;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border-style: solid;
}

.about {
  margin: 0 auto;
  margin-top: 30px;
  height: 400px;
  width: 750px;
  background: #e8e8e8;
  border-radius: 20px;
}
</style>