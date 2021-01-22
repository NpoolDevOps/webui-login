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
                passwd: ''
            }
        }
    },
    methods: {
        login: function () {
			var qs = Qs;
			const axios = require('axios').default;
			axios({
				url: '/api/login',
				method: 'post',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: qs.stringify(this.userLogin),
			}).then(function (response) {
				let resp = response.data
				if (resp.code == 0) {
					console.log(resp.body.auth_code)
					sessionStorage['auth_code'] = resp.body.auth_code

					if (resp.body.url != "") {
						window.location.href = resp.body.url
					} else {
						window.location.href = '/#/dashboard'
					}
					
				} else {
					alert("登录失败")
				}
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
