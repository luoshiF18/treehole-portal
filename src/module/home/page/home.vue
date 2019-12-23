<template>

  <div class="dv-index">
    <ul class="additional-features" data-t="" data-tt="">
      <li class="kf">
        <!-- <div class="additional-icon icon1"></div>-->
        <a><p href=""
              onclick="window.open('http://ucenter.treehole.com/#/imclient','_blank',' scrollbar = 0,resizable=0,width=870,height=600,top=220,left=430')">
          客服</p></a>
        <!--<p>客服</p>-->
      </li>
    </ul>
    <el-container style="height: 100vh;">
      <el-header>
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          router
          text-color="#191970"
          mode="horizontal">

          <div class="logo">
            <img src="../../../assets/logo.jpg" alt="">
          </div>

          <el-menu-item index="/index" style="font-size: 18px">首页</el-menu-item>

          <el-menu-item index="/scale/page/scale_list" style="font-size: 18px">心理测试</el-menu-item>

          <el-submenu index="8">
            <template slot="title"><span style="font-size: 18px">测试</span></template>
            <el-menu-item-group>
              <el-menu-item index="/test/page/first">个人档案</el-menu-item>
              <el-menu-item index="/test/page/second">用户档案</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="/psychologist_list" style="font-size: 18px">心理咨询</el-menu-item>

          <div class="dv-right">
            <span v-if="logined == true">欢迎:{{this.user.username}}</span>
            <el-button v-if="logined == true" @click="logout" type="text">退出</el-button>
            <el-button type="text" v-if="logined == false" v-on:click="showlogin">登录</el-button>

            <el-button v-if="logined == false" type="text" v-on:click="showregister">
              <span style="color:#409EFF">|</span>
              注册
            </el-button>
            <el-button @click="system" type="text">后台管理入口</el-button>
            <el-button @click="usercenter" v-if="logined == true" type="text">用户中心</el-button>
          </div>


          <!--时间-->
          <!-- <div class="dv-date">{{dateFormat(date)}}</div>-->

        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!--      <el-footer>Footer

            </el-footer>-->
    </el-container>
  </div>
</template>

<script>
  import utils from '../../../common/utils'
  import * as loginApi from '../../../base/api/login'
  import jwtDecode from 'jwt-decode'

  export default {
    name: "index",
    data() {
      return {
        date: new Date(),
        user: {
          userid: '',
          username: '',
          userpic: '',
        },
        logined: false,
      }
    },
    methods: {
      //处理登录,跳转到登录页面
      showlogin: function () {
        this.$router.push('/base/components/loginform');
      },
      system: function () {
        window.location = "http://ucenter.treehole.com/#/login"
      },
      showregister: function () {
        this.$router.push('/member/register');
      },
      usercenter: function () {

        this.$router.push('/member/user_center');
      },

      refresh_user: function () {
        //从sessionStorage中取出当前用户
        let activeUser = utils.getActiveUser();
        // console.log(activeUser)
        //取出cookie中的令牌
        let uid = utils.getCookie('uid')
        // console.log('当前用户：'+activeUser)
        if (activeUser && uid && uid == activeUser.uid) {
          this.logined = true
          this.user = activeUser;
          console.log(this.user.userid)
          // console.log('userId：'+ this.user.id)
        } else {
          if (!uid) {
            return;
          }
          //请求查询jwt
          loginApi.getjwt().then((res) => {
            if (res.success) {
              let jwt = res.jwt;
              let activeUser = utils.getUserInfoFromJwt(jwt)
              if (activeUser) {
                this.logined = true
                this.user = activeUser;
                utils.setUserSession("activeUser", JSON.stringify(activeUser))
              }
            }
          })
        }
      },
      //时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
      dateFormat(time) {
        var date = new Date(time);
        var year = date.getFullYear();
        /* 在日期格式中，月份是从0开始的，因此要加0
         * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
         * */
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        // 拼接
        return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
      },
      //退出登录
      logout: function () {
        this.$confirm('确认退出吗?', '提示', {}).then(() => {
          loginApi.logout({}).then((res) => {
              if (res.success) {
                //返回首页
                window.location = "http://www.treehole.com"
                this.$message('退出成功');
              } else {
                this.$message.error('退出失败');
              }
            },
            (res) => {
              loading.close();
            });

        }).catch(() => {

        });
      },
    },
    mounted() {
      this.refresh_user();
      var _this = this; //声明一个变量指向vue实例this,保证作用域一致
      this.timer = setInterval(function () {
        _this.date = new Date();//修改数据date
      }, 1000);
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
      }
    },

  }
</script>

<style scoped lang="less">

  .additional-features {
    position: fixed;
    right: 50px;
    bottom: 180px;
    z-index: 200;
    width: 46px;
    box-sizing: border-box;
  }

  .additional-features li {
    position: relative;
    padding-top: 8px;
    margin-bottom: 4px;
    width: 46px;
    height: 66px;
    line-height: 1;
    cursor: pointer;
    background-color: rgba(0, 0, 0, .3);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#4c000000,endColorstr=#4c000000)";
    transition: all 0.2s linear;
    box-sizing: border-box;
    list-style-type: none;
  }

  .additional-features li.kf {
    background-color: #4ab3f3;
  }

  .additional-features li.kf:hover {
    background-color: #1da1f2;
  }

  .additional-features li.db {
    padding-top: 5px;
    height: 46px;
  }

  .additional-features li.xx .xx-dot {
    position: absolute;
    display: block;
    top: 13px;
    right: 13px;
    width: 7px;
    height: 7px;
    background-color: #ff1e00;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
  }

  .additional-features li.rx .revi-hotline-wrapper {
    display: none;
    position: absolute;
    left: -235px;
    bottom: 0;
    width: 235px;
    height: 80px;
  }

  .additional-features li.rx .revi-hotline {
    position: absolute;
    left: 0;
    width: 221px;
    height: 80px;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: text;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    box-shadow: -2px 3px 25px rgba(0, 0, 0, 0.1);
  }

  .additional-features li.rx .revi-hotline h3 {
    margin: 16px 0 8px;
    font-family: 'Arial', "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, PingFang SC, "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
    font-size: 28px;
    color: #1da1f2;
  }

  .additional-features li.xz .xz-ewm {
    display: none;
    position: absolute;
    top: -55px;
    left: -188px;
    width: 188px;
    height: 174px;
  }

  .additional-features li.xz a {
    position: absolute;
    left: 0;
    width: 174px;
    height: 174px;
    border: 1px solid #ddd;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    /*background: url("../assets/kefu.jpg") center center;*/
    /* background: url("../images/revi-ewm@1x.png") center center\9; */
    background-size: cover;
    box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.1);
  }

  .additional-features li p {
    font-size: 12px;
    color: #fff;
    text-align: center;
  }
  .el-button {
    margin-left: 0 !important;
  }

  .additional-features li .additional-icon {
    margin: 0 auto 4px;
    width: 36px;
    height: 36px;
    /* background: url("../assets/kefu.jpg");
     background: url("../assets/kefu.jpg")\9;*/
    background-size: 72px 591px;
  }

  .additional-features li .additional-icon.icon1 {
    background-position: 0 -360px;
  }

  .additional-features li .additional-icon.icon2 {
    background-position: 0 -396px;
  }

  .additional-features li .additional-icon.icon3 {
    background-position: 0 -432px;
  }

  .additional-features li .additional-icon.icon4 {
    background-position: 0 -468px;
  }

  .additional-features li .additional-icon.icon5 {
    background-position: 0 -504px;
  }

  .additional-features li.active {
    background-color: #1da1f2;
    border-color: #1da1f2;
  }

  .additional-features li.active span {
    display: none;
  }

  .additional-features li.active p {
    color: #fff;
  }

  .dv-index {
    .el-header {
      padding: 0;

      .el-menu-demo {
        padding-left: 28vw;

        .logo img {
          width: 123px;
          margin: 0 8px 0 12px;
          float: left;
        }

        .dv-right {
          font-size: 16px;
          float: left;
          margin: 10px;
        }

        .dv-date {
          float: right;
          margin-right: 5vw;
          font-size: 20px;
          font-family: 隶书;
          color: orange;
          margin-top: 15px;
        }
      }
    }

    .el-main {
      color: #333;
    }

    .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
  }
</style>
