<template>
  <div>
    <TopNav />
    <div class="wrapper">
      <Jobs msg="Jobs:" />
      <div v-for="job in matchedJobs" :key="job.id">
        <div class="jobCard">
          <h4 class="companyPosition">
            {{ job.company }} -
            {{ job.position }}
          </h4>
          <div>
            <button class="applyBtn">
              Apply Here
            </button>
            <button class="xBtn">
              Not Interested
            </button>
          </div>
        </div>
        <div class="descFlex">
          <div class="icon" v-if="job.descShow == false" v-on:click="openOrCloseDesc(job)">
            Description: <font-awesome-icon icon="angle-down" />
          </div>

          <div v-if="job.descShow">
            <div class="icon" v-on:click="openOrCloseDesc(job)">
              Close <font-awesome-icon icon="angle-up" />
            </div>
            <p>
              {{job.description}}
            </p>
          </div>
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
        {id: 1,
         company: "Michael-soft",
         position: "Code Monkey",
         descShow: false,
         description: "oh hey I'm Mike, you should work at my company",
         applied: 0},
        {id: 2,
         company: "Some Tech Company",
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
  .wrapper {
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    text-align: center;
    width: 1220px;
    min-height: 720px;
    border-style: double;
    background: #fafafa;
  }
  .jobCard{
    margin: 0 auto;
    margin-top: 15px;
    background: #e8e8e8;
    width: 700px;
    display: flex;
    justify-content: space-between;
	  align-items: center;
    /* border-style: solid;
    border-width: .25px;
    border-bottom-width: 0px; */
  }
  .companyPosition{
    margin-left: 30px;
  }

  .xBtn{
    margin-right: 5px;
    height: 30px;
    width: 100px;
    background-color: #f44336;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 13px; 
    cursor: pointer; 
  }
  .applyBtn {
    margin-right: 15px;
    height: 30px;
    width: 100px;
    background-color: #4caf50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    cursor: pointer;
  }
  .descFlex{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #e8e8e8;
    width: 700px;
    /* border-style: solid;
    border-width: .25px;
    border-top-width: 0px; */
  }

  .icon{
    cursor: pointer;
  }
</style>
