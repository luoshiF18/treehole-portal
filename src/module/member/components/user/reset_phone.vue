<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center" style="margin-top: 80px">
      <el-col :span="10">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path: '/member/page_bind'}">账号绑定</el-breadcrumb-item>
          <el-breadcrumb-item>重置手机号</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <!--<el-button class="el-icon-back" @click="go_back" type="primary"  >返回</el-button>-->
        <el-form :model="pageForm"
                 label-width="80px"
                 status-icon
                 style="margin-top: 30px"
                 label-position="left"
                 class="demo-ruleForm"
                 :rules="pageFormRules"
                 ref="pageForm">
          <el-form-item label="手机号:" prop="user_phone">
            <el-input placeholder="请输入手机号" style="width: 500px" clearable
                      v-model="pageForm.user_phone"></el-input>
          </el-form-item>
        </el-form>
          <div style="float: right">
            <el-button type="primary" size="small" @click="resetForm('pageForm')">重置</el-button>
            <el-button type="primary" size="small" @click="addSubmit">绑定</el-button>
          </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户手机号！'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入合法的手机号！'));
          }
        }
      };
      return {
        pageForm: {
          user_id: '',
          user_role: '',
          user_phone: ''
        },
        pageFormRules: { // 添加界面必填选项+不填警告 rules
          user_phone: [
            {required: true, validator: checkPhone, trigger: 'blur'},
            {min: 11, max: 11, message: '长度为11位数字', trigger: 'blur'}
          ],

        },

      };
    },

    methods: {
      // 重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 提交
      addSubmit: function () {
        this.$refs['pageForm'].validate((valid) => {
          if (valid) {  //表单校验成功
            this.$confirm('你确认绑定吗?', '提示', {}).then(() => {
              //调用user_add方法请求服务端的新增页面接口
              userApi.user_add(this.pageForm).then(res => {
                //解析服务端的响应内容
                if (res.success) {
                  this.$message.success('绑定成功')
                  //将表单清空
                  this.$refs['pageForm'].resetFields();
                } else if (res.message) {
                  this.$message.error(res.message)
                } else {
                  this.$message.error('绑定失败')
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
    background: #E4E7ED;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
