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
          <el-col :span="6" style="margin-top: 5px">
            <div :data="userlist" class="userset">
              <span>{{userlist.username}}</span><i class="el-icon-female femalecolor"></i>
              <span class="vipstyle">v</span>
              <div class="role">{{userlist.role}}</div>
              <router-link tag="span" :to="{path: '/member/user_edit'}" class="linkstyle">
                <el-button type="text">修改个人信息</el-button>
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
          <!--预约订单-->
          <router-link tag="span" :to="{path: '/member/page_appoint'}">
            <div class="spans" style="border-bottom: 1px solid #EBEEF5">
              <i class="el-icon-shopping-cart-2 icon1"></i>
              <span>我的预约</span><i class="el-icon-arrow-right icon2"></i>
            </div>
          </router-link>
          <!--倾诉订单-->
          <router-link tag="span" :to="{path: '/member/qingsu_order'}">
            <div class="spans" style="border-bottom: 1px solid #EBEEF5">
              <i class="el-icon-edit-outline icon1"></i>
              <span>倾诉订单</span><i class="el-icon-arrow-right icon2"></i>
            </div>
          </router-link>
          <!--我的问题-->
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
          <!--账户余额-->
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
              <span divided @click.native="logout">退出</span><i class="el-icon-arrow-right icon2"></i>
            </div>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "userInfo",
    data() {
      return {
        userlist: {
          user_id: '',
          username: 'Shan',
          role: '普通用户',
          gender: '0'
        }
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
    color: #fffc12;
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
