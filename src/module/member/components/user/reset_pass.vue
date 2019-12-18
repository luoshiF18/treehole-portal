<template>
  <el-row type="flex" class="row-bg" justify="center"  style="margin-top: 80px">
    <el-col :span="12">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item  :to="{path: '/member/page_bind'}">账号绑定</el-breadcrumb-item>
        <el-breadcrumb-item>重置密码</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <!--<el-button class="el-icon-back" @click="go_back" type="primary"  >返回</el-button>-->
      <div class="grid-content bg-purple" style="margin-top: 30px">
        <div>
          旧密码:<el-input placeholder="请输入旧密码" v-model="params.OldPass" show-password></el-input>
          新密码:<el-input placeholder="请输入新密码" v-model="params.NewPass" show-password></el-input>
          确认密码:<el-input placeholder="请再次输入新密码" v-model="params.NewPass" show-password></el-input>
      </div>
      </div>
      <el-row>
        <el-button type="primary" @click="resetForm('pageForm')">重置</el-button>
        <el-button type="primary" @click="addSubmit" >提交</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
    export default {
      data() {
        return {
          params: {
            OldPass: '',
            NewPass: '',
          },

        }
      },
      methods:{
        // 重置
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        // 提交
        addSubmit:function () {
          this.$refs['pageForm'].validate((valid) => {
            if (valid) {  //表单校验成功
              this.$confirm('你确认提交吗?', '提示', {}).then(() => {
                //调用user_add方法请求服务端的新增页面接口
                userApi.user_add(this.pageForm).then(res=>{
                  //解析服务端的响应内容
                  if (res.success) {
                    this.$message.success('提交成功')
                    //将表单清空
                    this.$refs['pageForm'].resetFields();
                  }else if(res.message){
                    this.$message.error(res.message)
                  }else{
                    this.$message.error('提交失败')
                  }
                });
              })
            }
          })
        },
        // 返回
        /*go_back:function () {
          // 获取当前路由
          this.$router.push({
            path:'/member/user/page_bind',
          })
        },*/
      }
    }
</script>

<style scoped>
  .bg-purple {
    background: #E4E7ED
  ;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
