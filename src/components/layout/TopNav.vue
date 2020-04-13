<template>
    <div>
        <div class="topRelative">
            <div class="forEmployers">
                Employers
            </div>
            <div class="forUni">
                Universities
            </div>
            <div class="profile">
                Profile
            </div>
        </div>
        <div class="logo">
            Our Logo
        </div>
        <header class='header'>
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
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

    .topRelative{
        position: relative;
    }

    .forEmployers{
        position: absolute;
        left: 15px;
    }

    .forUni{
        position: absolute;
        top: 20px;
        left: 15px;
    }

    .profile{
        position: absolute;
        right: 15px;
    }

    .logo{
        font-size: 2.5em;
        font-family: 'Anton', sans-serif;
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
        color: #41B883;
        text-decoration: none;
    }
</style>