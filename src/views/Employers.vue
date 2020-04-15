<template>
  <div>
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
