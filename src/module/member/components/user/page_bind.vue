<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top: 80px" >
    <el-col :span="10">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item>账号绑定</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
        <div class="grid-content bg-purple">
          <div>
          登录账号
            <div>{{params.user_phone}}</div>
          <el-link type="primary" @click="editpass()"> 重置密码</el-link>
        </div>
          <br/>
          <div>
            <div>手机绑定</div>
            已绑定({{params.user_phone}})
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
        </div>
    </el-col>
  </el-row>
</template>

<script>
  //2、导入方法user.js方法
  import * as userApi from '../../api/member'
  import moment from 'moment'
    export default {
      data(){
        return{
          params: {
            /*user_id: '',
            role_id: '',*/
            user_phone: '123',
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
      },
      mounted() { // 模板和HTML已经渲染出来
        //this.query();
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
