<template>
  <div>
    <div id="nav">
      <TopNav />
    </div>
    <h3>Please upload your resume</h3>
  </div>
</template>

<script>
import TopNav from "@/components/layout/TopNav";

export default {
  name: "Resume",
  components : {
        TopNav
  }
}
</script>