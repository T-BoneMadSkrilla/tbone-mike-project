<template>
  <div class="wrapper">
    Uni Data
    <div class="chartFlex">
      <div class="chartCard">Applications</div>
      <div class="chartCard">Jobs per Major</div>
      <div class="chartCard">Another Chart</div>
      <div class="chartCard">Another Chart</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UniData"
};
</script>

<style scoped>
  .wrapper {
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    text-align: center;
    width: 1220px;
    min-height: 920px;
    border-style: double;
    background: #fafafa;
  }
  .chartFlex{
    display: flex;
    flex-wrap: wrap;
	  justify-content: space-around;
  }

  .chartCard{
    height: 500px;
    width: 450px;
    background: #e8e8e8;
    margin-bottom: 25px;
    margin-right: 10px;
  }
</style>
