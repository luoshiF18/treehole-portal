<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top: 10px" >
    <el-col :span="10">
      <!--面包屑-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item>账号绑定</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <el-form :model="userForm"
               label-width="80px"
               status-icon
               style="margin-top: 30px"
               label-position="left"
               class="demo-ruleForm"
               ref="userForm">
      <el-card class="cardstyle" >
            <!--正文数据-->
              <div>
                登录账号
                <div>{{userForm.user_phone}}</div>
                <el-link type="primary" @click="editpass()"> 重置密码</el-link>
              </div>
              <br/>
              <div>
                <div>手机绑定</div>
                已绑定({{userForm.user_phone}})
                <el-link type="primary" @click="editphone()"> 重置手机号</el-link>
              </div>
              <br/>
              <div>
                <div>微信绑定</div>
                <el-link type="primary" @click="editpass(page.row.user_id)">立即绑定</el-link>
              </div>
              <br/>
              <div>
                <div>QQ绑定</div>
                <el-link type="primary" @click="editpass(page.row.user_id)">立即绑定</el-link>
              </div>
      </el-card>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  //2、导入方法user.js方法
  import * as userApi from '../../api/member'
  import  utilApi from '../../../../common/utils'
  import moment from 'moment'
    export default {
      data(){
        return{
            user_id:'',
          userForm: {
            user_id: '',
            user_phone: '',
          }
        }
      },
      methods: {
        //重置密码  通过user_id查询，返回结果后修改
        editpass: function () {
          //打开页面
          this.$router.push({
            path: '/member/reset_pass',
          })
        },
        //重置手机号  通过user_id查询，返回结果后修改
        editphone: function () {
          //打开页面
          this.$router.push({
            path: '/member/reset_phone',
          })
        },
      },
      //钩子函数们！
      created() { // vm实例的data和methods初始化完毕后执行，发ajax要提前
        this.user_id = utilApi.getActiveUser().userid;
        //alert(this.user_id)
        //根据主键查询页面信息
        userApi.user_get(this.user_id).then((res) => {
          console.log(res);
          this.userForm = res;
        });
      },
      mounted() { // 模板和HTML已经渲染出来
      }
    }
</script>

<style scoped>

  .cardstyle {
    margin-top: 20px;
    width: 700px;
    height: 400px;
    /*height: 300px;*/
  }
</style>
