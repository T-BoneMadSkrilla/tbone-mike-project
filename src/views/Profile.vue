<template>
  <div class="relative">
    <router-link to="/job-matches" class="homeArrow">
      <font-awesome-icon icon="arrow-left" size="3x" />
    </router-link>

    <div class="userImg">
      Profile
    </div>
    <div class="about">
      user description
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}

.homeArrow {
  position: absolute;
  left: 170px;
  top: 30px;
  color: grey;
  height: 50px;
  width: 50px;
}

.userImg {
  margin: 0 auto;
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
