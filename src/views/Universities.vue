<template>
  <div class="flexAround">
    <UniNav />
    <router-view />
  </div>
</template>

<script>
import UniNav from "@/components/layout/UniNav";

export default {
  name: "Universities",
  components: {
    UniNav
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
