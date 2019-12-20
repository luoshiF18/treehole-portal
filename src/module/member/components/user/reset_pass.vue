<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center"  style="margin-top: 80px">
    <el-col :span="12">
      <!--面包屑-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item  :to="{path: '/member/page_bind'}">账号绑定</el-breadcrumb-item>
        <el-breadcrumb-item>重置密码</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <!--<el-button class="el-icon-back" @click="go_back" type="primary"  >返回</el-button>-->
     <!-- <div class="grid-content bg-purple" style="margin-top: 30px">-->
        <el-card class="card">
          <el-form :model="params"
                   label-width="80px"
                   status-icon
                   label-position="left"
                   class="demo-ruleForm"
                   :rules="pageFormRules"
                   ref="pageForm">
            <!--旧密码1-->
            <el-form-item v-if="visible" label="旧密码" prop="OldPass">
              <el-input type="password"
                        v-model="params.OldPass"
                        placeholder="请输入旧密码"
                        auto-complete="off">
                <i slot="suffix" title="显示密码" @click="changePassword('show')"
                   style="cursor:pointer;" class="iconfont aliIcon-icon-test"></i>
              </el-input>
            </el-form-item>
            <!--旧密码2-->
            <el-form-item v-else label="旧密码" prop="OldPass">
              <el-input type="text"
                        v-model="params.OldPass"
                        auto-complete="off"
                        placeholder="请输入旧密码">
                <i slot="suffix" title="隐藏密码" @click="changePassword('hide')"
                   style="cursor:pointer;" class="iconfont aliIcon-icon-test1"></i>
              </el-input>
            </el-form-item>
            <!--新密码1-->
            <el-form-item v-if="visible" label="新密码" prop="NewPass">
              <el-input type="password"
                        v-model="params.NewPass"
                        placeholder="请输入新密码"
                        auto-complete="off">
                <i slot="suffix" title="显示密码" @click="changePassword('show')"
                   style="cursor:pointer;" class="iconfont aliIcon-icon-test"></i>
              </el-input>
            </el-form-item>
            <!--新密码2-->
            <el-form-item v-else label="新密码" prop="NewPass">
              <el-input type="text"
                        v-model="params.NewPass"
                        auto-complete="off"
                        placeholder="请输入新密码">
                <i slot="suffix" title="隐藏密码" @click="changePassword('hide')"
                   style="cursor:pointer;" class="iconfont aliIcon-icon-test1"></i>
              </el-input>
            </el-form-item>

            <!--确认密码1-->
            <el-form-item v-if="visible" label="新密码" prop="CheckNewPass">
              <el-input type="password"
                        v-model="params.CheckNewPass"
                        placeholder="请输入新密码"
                        auto-complete="off">
                <i slot="suffix" title="显示密码" @click="changePassword('show')"
                   style="cursor:pointer;" class="iconfont aliIcon-icon-test"></i>
              </el-input>
            </el-form-item>
            <!--确认密码2-->
            <el-form-item v-else label="新密码" prop="CheckNewPass">
              <el-input type="text"
                        v-model="params.CheckNewPass"
                        auto-complete="off"
                        placeholder="请输入新密码">
                <i slot="suffix" title="隐藏密码" @click="changePassword('hide')"
                   style="cursor:pointer;" class="iconfont aliIcon-icon-test1"></i>
              </el-input>
            </el-form-item>
          </el-form>

      <div style="text-align: center">
        <el-button type="primary" @click="resetForm('pageForm')">重置</el-button>
        <el-button type="primary" @click="addSubmit" >提交</el-button>
      </div>
        </el-card>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  //2、导入方法user.js方法
  import * as userApi from '../../api/member'
  import  utilApi from '../../../../common/utils'
  import moment from 'moment'
    export default {
      data() {
        var validatePass  = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户密码！'));
          } else {
            if (this.params.CheckNewPass !== '') {
              this.$refs.pageForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('输入的确认密码不能为空！'));
          } else if (value !== this.params.NewPass) {
            callback(new Error('您输入的确认密码不合法! 请务必检查与输入的用户密码是否一致！'));
          } else {
            callback();
          }
        };
        return {
          visible: true, // 是否显示
          visiblePass: true,
          params: {
            user_id: '',
            OldPass: '',
            NewPass: '',
            CheckNewPass: '',
          },
          pageFormRules: { // 添加界面必填选项+不填警告 rules
            OldPass:  [{required: true,trigger: 'blur'}],
            NewPass:  [{required: true, validator: validatePass , trigger: 'blur'}],
            CheckNewPass: [{required: true, validator: validatePass2, trigger: 'blur' }],
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
                this.params.user_id = utilApi.getActiveUser().userid;
                userApi.reset_pass(this.params).then(res=>{
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
        //判断密码（password）渲染，true:暗文显示，false:明文显示
        changePassword(value) {
          this.visible = !(value === 'show');
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
