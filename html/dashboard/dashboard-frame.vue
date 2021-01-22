<template>
	<el-main>
	<el-row :gutter="20">
		<el-col :span="6"><div class="grid-content bg-purple">{{ name }}</div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple">等</div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple">更</div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple">新</div></el-col>
	</el-row>
	<el-main>
</template>
<script>
module.exports = {
    data () {
        return {
			name: 'DashBoard',
		    auth: ''
        }
    },
	mounted() {
		this.auth = sessionStorage['auth_code']
	},
    methods: {
    }
}
</script>
<style scoped>
  .el-row {
      margin-bottom: 20px;
      &:last-child {
	        margin-bottom: 0;
	      }
    }
  .el-col {
	  margin-top: 1rem;
	  text-align: center;
      border-radius: 4px;
    }
  .el-col div {
	  padding-top: 1rem;
  }
  .bg-purple-dark {
      background: #99a9bf;
    }
  .bg-purple {
      background: #d3dce6;
    }
  .bg-purple-light {
      background: #e5e9f2;
    }
  .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
  .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
</style>
