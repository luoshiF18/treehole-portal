<template>
  <div>

    <el-col :span="24" class="header">
      <!--页面logo-->
      <el-col :span="14" class="logo" >
        <img src="/static/images/asset-logoIco-white.png" width="500px" alt="">{{collapsed ? '' : sysName}}
      </el-col>
      <!--<el-col :span="10">
        <div class="tools" @click.prevent="collapse">
          <i class="fa fa-align-justify"></i>
        </div>
      </el-col>-->


        <el-col :span="10" class="userinfo" v-if="this.logined">
        <el-dropdown trigger="hover">
         <span class="el-dropdown-link userinfo-inner"><img :src="this.user.sysUserImg!=null?this.user.sysUserImg:'/static/images/small.jpg'"/> {{user.username}}</span>
          <el-dropdown-menu slot="dropdown">
           <el-dropdown-item>我的消息</el-dropdown-item>
           <el-dropdown-item>设置</el-dropdown-item>
           <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
         </el-dropdown-menu>
       </el-dropdown>

      </el-col>
    </el-col>

  </div>
</template>
<script type="text/javascript">
  import jwtDecode from 'jwt-decode'
  import utilApi from '../../common/utils'
  import * as loginApi from '../../module/home/api/home'
  import * as logoutApi from '../api/login';

  export default {
    data() {
      return {
        editLoading:false,
        sysName: '系统管理中心',
        user:{
          userid:'',
          username: '小任',
          userimg: ''
        },
        logined:true,
        collapsed: false,


      }
    },
    methods: {

      //退出登录
      logout: function () {
        this.$confirm('确认退出吗?', '提示', {
        }).then(() => {
          logoutApi.logout({}).then((res) => {
            if(res.success){
              this.$message('退出成功');
              //跳转到登陆页面
              this.$router.push({ path: '/'})
            }else{
              this.$message.error('退出失败');
            }
          },
            (res) => {
              loading.close();
            });

        }).catch(() => {

        });
      },
      refresh_user:function(){

        //从sessionStorage中取出当前用户
        let activeUser= utilApi.getActiveUser();
        //取出cookie中的令牌
        let uid = utilApi.getCookie("uid")
        console.log(activeUser+"1")
        if(activeUser){
          this.logined = true
          this.user = activeUser;

        }else{

          if(!uid){
            this.$message('请登录');
            this.$router.push({ path: '/'})
            return ;
          }
          //请求查询jwt
          logoutApi.getjwt().then((res) => {

            if(res.success){
              console.log(res.jwt)
              let jwt = res.jwt;
              let activeUser = utilApi.getUserInfoFromJwt(jwt)
              if(activeUser){
                this.logined = true
                this.user = activeUser;
                utilApi.setUserSession("activeUser",JSON.stringify(activeUser))
              }
            }
          })
        }
      },
    },
    mounted() {
      this.refresh_user()

    }
  }
</script>
<style scoped lang="scss">
  @import '~scss_vars';
  .nav {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .usermenu {
    float: right;
    padding: 0 2em;
    color:#fff;
  }
  .usermenu a {
    text-decoration: none;
    margin: 0 0.2em 0 1em;
    color:inherit;
  }
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: $color-primary;
    color: #fff;
  .userinfo {
    text-align: right;
    padding-right: 15px;
    float: right;
  .userinfo-inner {
    cursor: pointer;
    color: #fff;
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 8px 10px 10px;
    float: left;
  }
  }
  }
  .logo {
  /*//width:230px;*/
    height: 60px;
    font-size: 20px;
    padding-left: 0px;
    padding-right: 20px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;

  img {
    width: 200px;
    float: left;
    margin: 10px 10px 10px 18px;
  }
  .txt {
    color: #fff;
  }
  }
  .logo-width {
    width: 250px;
  }
  .logo-collapse-width {
    width: 60px
  }
  .tools {
    padding: 0px 23px;
    width: 14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  }
  .main {
    display: flex;
  /*// background: #324057;*/
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  aside {
    flex: 0 0 230px;
    width: 230px;
  /*// position: absolute;*/
  /*// top: 0px;*/
  /*// bottom: 0px;*/
  .el-menu {
    height: 100%;
  }
  .collapsed {
    width: 60px;
  .item {
    position: relative;
  }
  .submenu {
    position: absolute;
    top: 0px;
    left: 60px;
    z-index: 99999;
    height: auto;
    display: none;
  }

  }
  }
  .menu-collapsed {
    flex: 0 0 60px;
    width: 60px;
  }
  .menu-expanded {
    flex: 0 0 230px;
    width: 230px;
  }
  .content-container {
    background: #fff;
    flex: 1;
  /*// position: absolute;*/
  /*// right: 0px;*/
  /*// top: 0px;*/
  /*// bottom: 0px;*/
  /*// left: 230px;*/
    overflow-y: scroll;
    padding: 20px;
  .breadcrumb-container {
  /*//margin-bottom: 15px;*/
  .title {
    width: 200px;
    float: left;
    color: #475669;
  }
  .breadcrumb-inner {
    float: right;
  }
  }
  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
  }
  }
  }
</style>
