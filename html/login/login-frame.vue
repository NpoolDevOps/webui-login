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
const axios = require('axios').default;
import { sha256 } from 'js-sha256';

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
			var qs = Qs;

            let appId = this.$cookies.get('appid');
            if (appId == "") {
                this.$cookies.set(this.appId)
            }

			axios({
				url: 'https://auth.npool.com/api/v0/user/login',
				method: 'post',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: qs.stringify({
                    username: this.userLogin.userLogin,
                    passwd: sha256(this.userLogin.passwd).substring(0, 12),
                    url: this.$route.params['target'],
                }),
			}).then(function (response) {
                let resp = response.data

                if (resp.code != 0) {
                    const h = this.$createElement;
                    this.$notify({
                        title: '登錄失敗',
                        message: h('i', {style: 'color: teal'}, resp.msg),
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
