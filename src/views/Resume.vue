<template>
  <div class="flexAround">
    <TopNav />
    <div class="wrapper">
      <h3>Please upload your resume</h3>
      <p>
        Ight buddy, I was thinking of using firebase to host resumes. Thoughts?
      </p>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/layout/TopNav";

export default {
  name: "Resume",
  components: {
    TopNav
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
</style>