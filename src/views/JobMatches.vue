<template>
  <div>
      <TopNav />
    <Jobs msg="Jobs:" />
  </div>
</template>

<script>
import Jobs from "@/components/Jobs.vue";
import TopNav from "@/components/layout/TopNav";

export default {
  name: "JobMatches",
  components: {
    Jobs,
    TopNav
  }
};
</script>
