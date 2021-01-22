<template>
    <div class="dashboard-main">
        <dashboardframe class="dashboard-frame"></dashboardframe>
    </div>
</template>
<script>
module.exports = {
    components: {
        'dashboardframe': httpVueLoader('../dashboard/dashboard-frame.vue')
    }
}
</script>
<style scoped>
</style>
