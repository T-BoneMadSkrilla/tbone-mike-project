<template>
    <div class="relative">
        <router-link to="/" class="homeArrow">
        <font-awesome-icon icon="arrow-left" size="3x" />
        </router-link>

        <div class="userImg">
        Profile
        </div>
    </div>
</template>

<style scoped>
    .relative{
        position: relative;
    }

    .homeArrow{
        position: absolute;
        left: 30px;
        top: 30px;
        color: grey;
        height: 50px;
        width: 50px;
    }

    .userImg{
        margin: 0 auto;
        margin-top: 30px;
        height: 350px;
        width: 350px;
        border-radius: 50%;
        border-style: solid;
    }

</style>