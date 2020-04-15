<template>
  <div>
    <TopNav />
    <Jobs msg="Jobs:" />

    <div v-for="job in matchedJobs" :key="job.id">
      {{ job.company }}
      {{ job.position }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Jobs from "@/components/Jobs.vue";
import TopNav from "@/components/layout/TopNav";

export default {
  name: "JobMatches",
  components: {
    Jobs,
    TopNav
  },
  data() {
    return {
      matchedJobs: []
    };
  },
  mounted() {
    axios.get("http://localhost:3030/api/matched-jobs").then(res => {
      this.matchedJobs = res.data;
    });
  }
};
</script>
