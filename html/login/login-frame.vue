<template>
    <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane name="login">
            <span slot="label" class="login-tab-pane"><i class="el-icon-user"></i> 登录 </span>
            <el-form label-position="right" label-width="60px" :model="userLogin" class="login-form">
                <el-form-item label="用户名">
                    <el-input v-model="userLogin.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="userLogin.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="login-hint">
                        <el-button type="primary" @click="login(userLogin)">登录</el-button>
                        <el-link type="primary">忘记密码</el-link>
                    </div>
                </el-form-item>
            </el-form>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
module.exports = {
    data () {
        return {
            activeName: 'login',
            userLogin: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login: function (userLogin) {
        }
    }
}
</script>
<style scoped>
.login-tab-pane {
    font-weight: bold;
}
.login-form {
    margin-top: 20px;
    margin-right: 20px;
}
.login-hint {
    display: flex;
    justify-content: space-between;
}
</style>