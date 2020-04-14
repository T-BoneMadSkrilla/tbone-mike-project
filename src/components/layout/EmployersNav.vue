<template>
    <header>
        | <router-link to="/employers"> Candidates </router-link>
        | <router-link to="/employers/job-post"> Post a job </router-link> |
    </header>
</template>

<script>
export default {
    name: "EmployersNav"
}
</script>

<style scoped>

    header {
        background: #34495E;
        color: #41B883;
        font-size: 1em;
        padding: 5px;
    }
    header a {
        color: white;
        text-decoration: none;
    }

    .header a.router-link-exact-active{
        color: #42b983;
    }

</style>