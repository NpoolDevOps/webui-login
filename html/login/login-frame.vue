<template>
    <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane name="login">
            <span slot="label" class="login-tab-pane"><i class="el-icon-user"></i> 登录 </span>
            <el-form label-position="right" label-width="60px" :model="userLogin" class="login-form">
                <el-form-item label="用户名">
                    <el-input v-model="userLogin.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="userLogin.passwd" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="login-hint">
                        <el-button type="primary" @click="login()">登录</el-button>
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
                passwd: '',
            },
            appId: "00000000-0000-0000-0000-000000000000"
        }
    },
    methods: {
        login: function () {
            const axios = require('axios').default;

            let appId = this.$cookies.get('appid');
            if (!appId || appId == '' || appId == 'null') {
                appId = this.appId
            }
            this.$cookies.set('appid', appId);

            console.log(get_query())

            let encPassword = sha256(this.userLogin.passwd);

            axios({
                url: 'https://auth.npool.top/api/v0/user/login',
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                data: {
                    username: this.userLogin.username,
                    password: encPassword.substring(0, 12),
                    appid: appId,
                    url: this.$route.params['target'],
                },
            }).then(function (response) {
                let resp = response.data

                if (resp.code != 0) {
                    ELEMENT.Notification({
                        title: '登錄失敗',
                        message: resp.msg,
			type: 'error',
                    })
                    return
                }

                if (resp.body.url == '') {
                    // GOTO default location
                    return
                }

                this.$cookies.set("authcode", resp.body.auth_code)
                window.location.href = resp.body.url
            })
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
