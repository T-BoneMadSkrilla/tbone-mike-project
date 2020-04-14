<template>
    <div>
        <div class="topRelative">
            <router-link to="/employers/candidates" class="forEmployers"> Employers </router-link>

            <router-link to="/universities/data" class="forUni"> Universities </router-link>
            <router-link to="/profile" class="profile"> Profile </router-link>
        </div>
        <div class="logo">
            Our Logo
        </div>
        <header class="header nav">
            | <router-link to="/"> Job Matches </router-link> |
            <router-link to="/resume"> Resume </router-link> |
        </header>
    </div>
</template>

<script>
    export default {
        name: "TopNav"
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

    .topRelative{
        position: relative;
    }

    .topRelative a{
        text-decoration: none;
    }

    .forEmployers{
        position: absolute;
        left: 15px;
        color: #2c3e50;
    }

    .forUni{
        position: absolute;
        top: 20px;
        left: 15px;
        color: #2c3e50;
    }

    .profile{
        position: absolute;
        right: 15px;
        color: #2c3e50;
    }

    .logo{
        font-size: 2.5em;
        font-family: sans-serif;
        color: #41B883;
        -webkit-text-stroke: .5px #34495E;
    }
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