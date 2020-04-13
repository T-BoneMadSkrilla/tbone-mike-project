<template>
  <div>
    <TopNav />
    <h3>Please upload your resume</h3>
    <p> Ight buddy, I was thinking of using firebase to host resumes. Thoughts?</p>
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