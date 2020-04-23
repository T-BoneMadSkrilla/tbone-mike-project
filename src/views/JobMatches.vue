<template>
  <div>
    <TopNav />
    <div class="wrapper">
      <Jobs msg="Jobs:" />
      <div v-for="job in matchedJobs" :key="job.job_id">
        <div class="jobCard">
          <h4 class="companyPosition">
            {{ job.company_id }} -
            {{ job.job_title }}
          </h4>
          <div>
            <button class="applyBtn" v-on:click="apply(job)">
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
      userId: this.$route.params.id,
      matchedJobs: []
    }
  },
  mounted() {
    const UserId = this.userId
    axios.get("http://localhost:3030/api/matched-jobs/"+ UserId, {withCredentials: true}).then(res => {
      this.matchedJobs = res.data;
    });
  },
  methods: {
    openOrCloseDesc(job) {
      job.descShow = !job.descShow;
    },
    apply(job){
      const JobId = job.job_id
      const UserId = this.userId
      axios.post("http://localhost:3030/api/apply-job", {JobId, UserId})
        .then(
          this.matchedJobs = this.matchedJobs.filter(job => job.job_id !== JobId),
        )
        .catch(
        err => console.log(err)
      )
    }
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
  .jobCard{
    margin: 0 auto;
    margin-top: 15px;
    background: #e8e8e8;
    width: 700px;
    display: flex;
    justify-content: space-between;
	  align-items: center;
    border-style: solid;
    border-width: .25px;
    border-bottom-width: 0px;
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
    border-style: solid;
    border-width: .25px;
    border-top-width: 0px;
  }

  .icon{
    cursor: pointer;
  }
</style>
