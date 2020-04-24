<template>
  <div class="wrapper">
    <form class="jobPostFlex">
      <input class="jobTitle" type="text" placeholder="Job Title" />
      <textarea class="jobDescription">
        Job Description
      </textarea>
      <div>
        <input type="checkbox" id="Computer Science" />
        <label for="Computer Science"> Computer Science </label>
      </div>
      <input class="jobBtn" type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "NewJob"
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
.jobPostFlex {
  margin: 0 auto;
  margin-top: 35px;
  width: 700px;
  display: flex;
  flex-direction: column;
}

.jobTitle {
  margin: 0 auto;
  width: 200px;
}

.jobDescription {
  margin: 0 auto;
  margin-top: 5px;
  width: 600px;
  height: 400px;
}

.jobBtn {
  margin: 0 auto;
  margin-top: 5px;
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
</style>
