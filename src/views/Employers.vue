<template>
  <div class="flexAround">
    <EmployersNav />
    <router-view />
  </div>
</template>

<script>
import EmployersNav from "@/components/layout/EmployersNav";
export default {
  name: "Employers",
  components: {
    EmployersNav
  }
};
</script>

<style scoped>
  .flexAround{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>