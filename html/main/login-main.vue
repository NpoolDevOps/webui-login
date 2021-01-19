<template>
    <div>
        <loginframe></loginframe>
    </div>
</template>
<script>
module.exports = {
    components: {
        'loginframe': httpVueLoader('../login/login-frame.vue')
    }
}
</script>
<style scoped>
.milestone {
    width: 75%;
}
.activity {
    width: 25%;
}
.main-project {
    display: flex;
}
</style>