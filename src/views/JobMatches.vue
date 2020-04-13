<template>
  <div>
    <div id="nav">
      <TopNav />
    </div>
    <HelloWorld msg="Jobs:" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import TopNav from "@/components/layout/TopNav";

export default {
  name: "JobMatches",
  components: {
    HelloWorld,
    TopNav
  }
};
</script>
