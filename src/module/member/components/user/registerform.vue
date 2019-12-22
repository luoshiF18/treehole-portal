<template>
    <div class="dv-login">
        <el-card header="前台注册页面" class="login-card">
            <!--native监听el-form表单中的原生事件-->
          <div id="body">
            <div class="g-center login-page" @keyup.enter="login">
<!--              <el-tabs v-model="activeName" >
                <el-tab-pane label="用户登陆" name="login">-->
                  <el-form :model="registerForm" label-width="80px" :rules="registerRules" ref="registerForm" class="login-form">
                    <el-form-item label="昵称" prop="user_nickname">
                      <el-input v-model="registerForm.user_nickname" auto-complete="off" ></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码" prop="user_phone">
                      <el-input v-model="registerForm.user_phone" auto-complete="off" ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                      <el-input v-model="registerForm.password" auto-complete="off" ></el-input>
                    </el-form-item>
                    <el-form-item >
                      <el-button type="primary"  @click="resetForm('registerForm')">重置</el-button>
                      <el-button type="primary"  @click.native="register1" :loading="editLoading">注册</el-button>

                    </el-form-item>
                  </el-form>
<!--                </el-tab-pane>
              </el-tabs>-->
            </div>

          </div>
        </el-card>
    </div>
</template>
<script>
  import utilApi from '../../../../common/utils';
  import * as registerApi from '../../api/member';
    export default {
        data() {
          return {
            LoginFormVisible:false,
            activeName: 'register',
            editLoading: false,
            registerForm: {
              user_nickname:'',
              password: '',
              user_phone:'',
              role_id:'1',
              gender:'0',
              user_states:'0',
              user_type:'0'
            },
            registerRules: {
              user_nickname: [
                {required: true, message: '请输入账号', trigger: 'blur'}
              ],
              user_phone: [
                {required: true, message: '请输入手机号码', trigger: 'blur'}
              ],
              password: [
                {required: true, message: '请输入密码', trigger: 'blur'}
              ]
            },
            user:{
              userid:'',
              userNickName: '',
              userimg: ''
            },
            logined:false,
            returnUrl:''
          }
        },
        methods: {
          register1: function () {

            this.$refs.registerForm.validate((valid) => {
              if (valid) {

                this.editLoading = true;

                let para = Object.assign({}, this.registerForm);

                registerApi.user_register(para).then((res) => {
                    this.editLoading = false;
                    if(res.success){
                      this.$message({
                        message: '注册成功',
                        type: 'success'
                      });
                           window.location.href = 'http://www.treehole.com/#/base/components/loginform';

                    }else{
                      if(res.message){
                        this.$message.error(res.message);
                      }else{
                        this.$message.error('注册失败');
                      }
                    }
                  },
                  (res) => {
                    this.editLoading = false;
                  });
              }
            });

          },

          resetForm:function(formName){
            this.$refs[formName].resetFields();
          },
          refresh_user:function(){
            let activeUser= utilApi.getActiveUser();

            if(activeUser){
              this.logined = true
              this.user = activeUser;
            }else{
              this.showlogin()
            }
          },
          showlogin:function(){
            this.LoginFormVisible = true;
          }
        },
      created() {
        // var this_ = this;
        //bus.$on('childa-message', this.showlogin(this_));


      },
      mounted() {

        //this.refresh_user()
//    Vue.prototype.loginwin = this;
        if( this.$route.query &&  this.$route.query.returnUrl){

          let returnUrl =  Base64.decode(this.$route.query.returnUrl)
          //alert(returnUrl)
          this.returnUrl = returnUrl;
          //alert(this.returnUrl)
        }
        /*bus.$on('childa-message', function(data) {
          console.log("aaaaaaaaaaaaa"+data)
          alert(this.LoginFormVisible)
          this.LoginFormVisible = true
          alert(this.LoginFormVisible)
        });*/



      }
    }
</script>
<style scoped>
    .login-card {
        width: 25rem;
        margin: 8rem auto;
        text-align: center;

    }
    .btn {
        text-align: center;
    }
</style>
