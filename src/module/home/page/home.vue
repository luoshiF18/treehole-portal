<template>
  <div class="dv-index">
    <el-container style="height: 100vh;">
      <el-header>
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          router
          background-color="#FFFFF0"
          text-color="#191970"
          mode="horizontal">

          <div class="logo">
            <img src="../../../assets/logo.jpg" alt="">
          </div>

         <el-menu-item index="/index">首页</el-menu-item>

          <el-menu-item index="/scale/page/scale_list">心理测试</el-menu-item>

          <el-submenu index="8">
            <template slot="title"><span>测试</span></template>
            <el-menu-item-group>
              <el-menu-item index="/test/page/first">个人档案</el-menu-item>
              <el-menu-item index="/test/page/second">用户档案</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


<!--          <el-menu-item index="/archive">评测</el-menu-item>-->
<!--          <el-menu-item index="/cross">跨域1</el-menu-item>-->
<!--          <el-menu-item index="/crossTwo">跨域2</el-menu-item>-->

          <!--            <el-submenu index="5">-->
          <!--              <template slot="title">我的工作台</template>-->
          <!--              <el-menu-item index="5-1">选项1</el-menu-item>-->
          <!--              <el-menu-item index="5-2">选项2</el-menu-item>-->
          <!--              <el-menu-item index="5-3">选项3</el-menu-item>-->
          <!--            </el-submenu>-->

          <!--            <el-submenu index="6">-->
          <!--              <template slot="title">我的工作台</template>-->
          <!--              <el-menu-item index="6-1">选项6-1</el-menu-item>-->
          <!--              <el-menu-item index="6-2">选项6-2</el-menu-item>-->
          <!--              <el-submenu index="6-3">-->
          <!--                <template slot="title">选项6-3</template>-->
          <!--                <el-menu-item index="6-3-1">选项6-3-1</el-menu-item>-->
          <!--                <el-menu-item index="6-3-2">选项6-3-2</el-menu-item>-->
          <!--                <el-menu-item index="6-3-3">选项6-3-3</el-menu-item>-->
          <!--              </el-submenu>-->
          <!--              <el-submenu index="6-4">-->
          <!--                <template slot="title">选项6-4</template>-->
          <!--                <el-menu-item index="6-4-1">选项6-4-1</el-menu-item>-->
          <!--                <el-menu-item index="6-4-2">选项6-4-2</el-menu-item>-->
          <!--                <el-menu-item index="6-4-3">选项6-4-3</el-menu-item>-->
          <!--              </el-submenu>-->
          <!--            </el-submenu>-->

          <div class="dv-right">
            <el-button type="text">登录</el-button>
            <span style="color:#409EFF">|</span>
            <el-button type="text">注册</el-button>
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
  export default {
    name: "index",
    data() {
      return {
        date: new Date(),
      }
    },
    methods: {
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

    },
    mounted() {
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
  .dv-index{
    .el-header {
      padding: 0;
      .el-menu-demo{
        padding-left: 28vw;
        .logo img{
          width: 123px;
          margin: 0 8px 0 12px;
          float: left;
        }
        .dv-right{
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
      background-color: #E9EEF3;
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
