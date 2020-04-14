<template>
    <div>
        <header class="header">
            <router-link to="/universities/data"> Metrics </router-link>
        </header>
    </div>
</template>

<script>
export default {
    name: "UniNav"
}
</script>

<style scoped>
    .header {
        background: #34495E;
        color: #41B883;
        text-align: center;
        font-size: 1.25em;
        padding: 15px;
    }

    .header a {
        color: white;
        text-decoration: none;
    }

    .header a.router-link-exact-active{
        color: #42b983;
    }

</style>