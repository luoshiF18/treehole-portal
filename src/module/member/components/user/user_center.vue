<template>
  <div>
    <div style="margin-bottom: 15px; margin-left: 19%">会员中心</div>
    <div class="head">
      <div class="grid-content">
        <el-row>
          <!--头像-->
          <el-col :span="3" style="margin-top: 5px">
            <div>
              <img src="../../../../assets/logo.jpg" alt="图片加载失败！">
            </div>
          </el-col>
          <!--顶部基本信息-->
          <el-col :span="14" style="margin-top: 5px">
            <div :data="userForm" class="userset">
              <span>{{userForm.user_nickname}}</span>
              <!--判断男性女性 -->
              <span v-if="userForm.gender==='男'">
                <i class="iconfont aliIcon-nan malecolor"></i>
              </span>
              <span v-else-if="userForm.gender==='女'">
                <i class="iconfont aliIcon-nv femalecolor"></i>
              </span>
             <!--判断是否为VIP-->
              <span v-if="cardForm.paygrade==='无'">
              </span>
              <span v-else>
               <span class="vipstyle">v</span> <span class="vipstyle2">{{cardForm.paygrade}}</span>
                <span class="vipstyle2">({{formatTime(cardForm.paygrade_start)}}至{{formatTime(cardForm.paygrade_end)}})</span>
              </span>
              <div class="role">{{userForm.role_name}} <span class="role"> {{userForm.age}}岁</span></div>
              <router-link tag="span" :to="{path: '/member/user_edit'}" class="linkstyle">
                <el-button type="text">修改个人信息</el-button>
              </router-link>
              <!--我要签到-->
              <router-link tag="span" :to="{path: '/member/checkin'}" class="linkstyle">
                <el-button type="text">我要签到</el-button>
              </router-link>

            </div>

          </el-col>
          <!--右侧箭头-->
          <el-col :span="15">
            <div class="arrow"><i class="el-icon-arrow-right icon2"></i></div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="15">
        <div class="grid-content">
          <!--预约-->
          <router-link tag="span" :to="{path: '/member/page_appoint'}">
            <div class="spans" style="border-bottom: 1px solid #EBEEF5">
              <i class="el-icon-shopping-cart-2 icon1"></i>
              <span>我的预约</span><i class="el-icon-arrow-right icon2"></i>
            </div>
          </router-link>
          <!--测试结果-->
          <router-link tag="span" :to="{path: '/member/page_mytest'}">
            <div class="spans" style="border-bottom: 1px solid #EBEEF5">
              <i class="el-icon-edit-outline icon1"></i>
              <span>我的测试</span><i class="el-icon-arrow-right icon2"></i>
            </div>
          </router-link>
          <!--我的消息-->
          <router-link tag="span" :to="{path: '/member/page_message'}">
            <div class="spans">
              <i class="el-icon-document icon1"></i>
              <span>我的消息</span><i class="el-icon-arrow-right icon2"></i>
            </div>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="15">
        <div class="grid-content">
          <!--我的积分-->
          <router-link tag="span" :to="{path: '/member/page_point'}">
            <div class="spans" style="border-bottom: 1px solid #EBEEF5">
              <i class="el-icon-shopping-cart-2 icon1"></i>
              <span>我的积分</span><i class="el-icon-arrow-right icon2"></i>
            </div>
          </router-link>
          <!--我的红包-->
          <router-link tag="span" :to="{path: '/member/page_redpaper'}">
            <div class="spans" style="border-bottom: 1px solid #EBEEF5">
              <i class="el-icon-present icon1"></i>
              <span>我的红包</span><i class="el-icon-arrow-right icon2"></i>
            </div>
          </router-link>
          <!--账号绑定-->
          <router-link tag="span" :to="{path: '/member/page_bind'}">
            <div class="spans">
              <i class="el-icon-paperclip icon1"></i>
              <span>账号绑定</span><i class="el-icon-arrow-right icon2"></i>
            </div>
          </router-link>

        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="15">
        <div class="grid-content">
          <!--退出-->
          <router-link tag="span" :to="{path: '/'}">
            <div class="spans">
              <i class="el-icon-upload2 tuichu"></i>
              <span   type="text" @click="logout">退出</span><i class="el-icon-arrow-right icon2"></i>
            </div>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as userApi from '../../api/member'
  import  utilApi from '../../../../common/utils'
  import * as logoutApi from '../../../../base/api/login';
  import moment from 'moment'
  export default {
    name: "userInfo",
    data() {
      return {
        logined: false,
        /*userlist: {
          user_id: '',
          username: '',
          role_name: '',
          gender: '0'
        },*/
        userForm: {
          user_id:'',
          role_name: '',
          age: '',
          user_nickname:'',
          user_image:'',
          gender:'',
        },
        cardForm: {
          paygrade: '',
          paygrade_start: '',
          paygrade_end: '',
        },

      }
    },
    methods: {
      //退出登录
      logout: function () {
        alert(this.logined)
        this.$confirm('确认退出吗?', '提示', {}).then(() => {
          logoutApi.logout({}).then((res) => {
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
      /*refresh_user: function () {
        //从sessionStorage中取出当前用户
        let activeUser = utilApi.getActiveUser();
        // console.log(activeUser)
        //取出cookie中的令牌
        let uid = utilApi.getCookie('uid')
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
              let activeUser = utilApi.getUserInfoFromJwt(jwt)
              if (activeUser) {
                this.logined = true
                this.user = activeUser;
                utilApi.setUserSession("activeUser", JSON.stringify(activeUser))
              }
            }
          })
        }
      },*/
      //编写日期格式化的方法
      formatTime(time) {
        if(time == null){
          return "/";
        }
        const date = new Date(time);
        // return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return moment(date).format("YYYY-MM-DD");
      },
    },
    created: function () {
      this.userForm.user_id = utilApi.getActiveUser().userid;
      //根据主键查询页面信息
      userApi.user_get(this.userForm.user_id).then((res) => {
        console.log(res);
        this.userForm = res;
        //alert("++" + this.userForm)
      });
      //获取card 内的vip
      userApi.card_get(this.userForm.user_id).then((res) => {
        console.log(res);
          this.cardForm = res;
          //alert(this.cardForm.paygrade)
      });
    },
    mounted:function(){
     /* this.refresh_user();*/
    }
  }
</script>

<style lang="less" scoped>
  .head {
    width: 62.5%;
    height: 26%;
    margin-left: 18.8%;
    margin-bottom: 15px;
    background: #ffffff;
    line-height: 25px;
  }

  .userset {
    margin-top: 5px;
    color: #9e9e9e;
    font-size: 15px;

    .role {
      font-size: 14px;
    }

    .femalecolor {
      margin-left: 15px;
      color: #ffb4fc;
      font-weight: bold;
    }

    .malecolor {
      margin-left: 10px;
      color: #7a95ff;
      font-weight: bold;
    }

    .linkstyle {
      /*text-decoration: none;*/
      color: #7990f9;
      font-size: 14px;
    }
  }

  .arrow {
    float: right;
    margin-top: 6px;
    color: #9e9e9e;
  }

  .el-row {
    margin-bottom: 10px;
  }

  .vipstyle {
    margin-left: 5px;
    font-weight: bold;
    font-size: 20px;
    color: #fffc12;
  }
  .vipstyle2 {
    margin-left: 15px;

  }
  .grid-content {
    background: #ffffff;
  }

  img {
    width: 80px;
    height: 80px;
    margin: 5px;
    border-radius: 50%;
    background-color: #e8e8e8;
  }

  .row-bg {
    padding: 5px 0;
    background-color: #e9eef3;
  }

  .spans {
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #FFF;
    color: #9e9e9e;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    outline: 0;

    .icon1 {
      width: 20px;
      height: 20px;
      margin-left: 5px;
    }

    .tuichu {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      transform: rotate(90deg);
    }

    .icon2 {
      margin-top: 17px;
      float: right;
    }
  }

</style>
