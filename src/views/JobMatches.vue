<template>
  <div>
    <TopNav />
    <Jobs msg="Jobs:" />

    <div v-for="job in matchedJobs" :key="job.id">
      <div class="jobCard">
      <h4 class="companyPosition">
        {{ job.company }} -
        {{ job.position }}
      </h4>
      <div>
        <button class="xBtn">
          X
        </button>
        <button class="applyBtn">
          Apply
        </button>
      </div>
      </div>
      <div class="descFlex">
        <div v-if="job.descShow == false" v-on:click="openOrCloseDesc(job)">
          Description: <font-awesome-icon icon="angle-down" />
        </div>

        <div v-if="job.descShow">
          <div v-on:click="openOrCloseDesc(job)">
            Close <font-awesome-icon icon="angle-up" />
          </div>
          <p>
            {{job.description}}
          </p>
        </div>
      </div>
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
      matchedJobs: [
        {company: "Michael-soft",
         position: "Code Monkey",
         descShow: false,
         description: "oh hey I'm Mike, you should work at my company",
         applied: 0},
        {company: "Some Tech Company",
         position: "Full Stack Engineer",
         descShow: false,
         description: "oh hey I'm Mike, you should work at my company. vpauosifgvbasod paosdiuhva saposdiughvba posdinpausdhv l;lkkdjf poauisdhvopasdg",
         applied: 0}
      ]
    };
  },
  mounted() {
    axios.get("http://localhost:3030/api/matched-jobs").then(res => {
      this.matchedJobs = res.data;
    });
  },
  methods: {
            openOrCloseDesc(job) {
                job.descShow = !job.descShow;
            }
        }
};
</script>

<style scoped>
  .jobCard{
    margin: 0 auto;
    margin-top: 10px;
    background: #e8e8e8;
    width: 600px;
    display: flex;
    justify-content: space-between;
	  align-items: center;
  }
  .companyPosition{
    margin-left: 35px;
  }

  .xBtn{
    margin-right: 5px;
    height: 30px;
    background-color: #f44336;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 13px;  
  }
  .applyBtn {
    margin-right: 5px;
    height: 30px;
    background-color: #4caf50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
  }
  .descFlex{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #e8e8e8;
    width: 600px;
  }
</style>
