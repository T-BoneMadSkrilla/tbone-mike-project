<template>
  <div class="wrapper">
    <h3>
      Candidates:
    </h3>
    <div v-for="candidate in interestedCandidates" :key="candidate.student_id">
      <div class="candidateCard">
        <div class="text">
          {{ candidate.first_name }}
          {{ candidate.last_name }} 
          <!-- {{ candidate.uni }} -->
        </div>

        <div class="majorFlex">
          <div class="text">
            Major: {{ candidate.major }}
            <!-- Minor: {{candidate.minor}} -->
          </div>
          <button class="emailBtn">
            email
          </button>
        </div>
      </div>
      <div class="resumeFlex">
        <div
          class="icon"
          v-if="candidate.resumeShow == false"
          v-on:click="openOrCloseResume(candidate)"
        >
          Résumé <font-awesome-icon icon="angle-down" />
        </div>
        <div v-if="candidate.resumeShow">
          <div class="icon" v-on:click="openOrCloseResume(candidate)">
            Close <font-awesome-icon icon="angle-up" />
          </div>
          <!-- {{ candidate.resume }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Candidates",
  data() {
    return {
      userId: this.$route.params.id,
      interestedCandidates: []
    };
  },
  mounted() {
    const UserId = this.userId;
    axios
      .get("http://localhost:3030/api/candidates/" + UserId, {
        withCredentials: true 
      })
      .then(res => {
        this.interestedCandidates = res.data;
      })
      .catch(err => console.log(err)
      )
  },
  methods: {
    openOrCloseResume(candidate) {
      candidate.resumeShow = !candidate.resumeShow;
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

.candidateCard {
  margin: 0 auto;
  margin-top: 10px;
  background: #e8e8e8;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.text {
  margin-top: 2px;
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 17px;
}

.majorFlex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  width: 700px;
}
.emailBtn {
  margin-right: 15px;
  height: 30px;
  width: 70px;
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
}

.resumeFlex {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #e8e8e8;
  width: 700px;
}

.icon {
  cursor: pointer;
}
</style>
