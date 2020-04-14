<template>
    <div>
        <UniNav />
        <router-view />
    </div>
</template>

<script>
import UniNav from "@/components/layout/UniNav";

export default {
    name: "Universities",
    components : {
        UniNav
    }
}
</script>