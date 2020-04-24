<template>
  <div class="wrapper">
    Uni Data
    <div class="chartFlex">
      <div class="chartCard">Applications <Applications /></div>
      <div class="chartCard">Jobs per Major</div>
      <div class="chartCard">Another Chart</div>
      <div class="chartCard">Another Chart</div>
    </div>
  </div>
</template>

<script>
import Applications from "./charts/Applications";
export default {
  name: "UniData",
  components: {
    Applications
  }
};
</script>

<style scoped>
.wrapper {
  margin-left: 15%;
  text-align: center;
  width: 85%;
  min-height: 720px;
  border-style: double;
  background: #fafafa;
}
.chartFlex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.chartCard {
  height: 450px;
  width: 450px;
  background: #e8e8e8;
  margin-bottom: 25px;
  margin-right: 10px;
  text-align: center;
}
</style>
