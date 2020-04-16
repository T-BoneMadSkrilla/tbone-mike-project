<template>
  <div>
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
  .wrapper {
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    text-align: center;
    width: 1220px;
    min-height: 720px;
    border-style: double;
  }
</style>