<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="登录" name="login">登录111</el-tab-pane>
    </el-tabs>
</template>
<script>
module.exports = {
    data () {
        return {
            activeName: 'login'
        }
    },
    methods: {
        handleClick: function () {

        }
    }
}
</script>