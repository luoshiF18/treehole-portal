<template>
  <div class="wrap">
    <!--面包屑-->
    <div class="tab">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的红包</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-divider></el-divider>
    <el-row type="flex" class="row-bg" justify="right" style="margin-top: 10px">
      <!--可用红包-->
      <el-col :span="12">
        <div style="margin-bottom: 30px">可用红包:{{this.count}}个</div>
        <!--可用-->
        <div class="container">
          <div class="list">
            <span>可使用:</span>
            <ul>
              <span v-if="total1 == 0">近期无红包卡券</span>
              <li class="coupon" v-for="(li,index) in list1" v-else-if="list1.length > 0">
                <div class="coupon-left">
                  <span>￥{{li.usedAmount}}</span>
                </div>
                <div class="coupon-right">
                  <!--优惠类型-->
                  <span>{{li.usedTypeName}}</span>
                  <span>{{formatTime(li.validStartTime) }} 至 {{ formatTime(li.validEndTime)}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
      <!--<el-divider direction="vertical" style="width: 400px"></el-divider>-->
      <!--不可用-->
      <el-col :span="12">
        <div style="margin-bottom: 30px"></div>
        <div class="container container_1">
          <div class="list">
            <span class="container_1">已使用/已过期:</span>
            <ul>
              <span v-if="total2 == 0">近期无红包卡券</span>
              <!--<span v-if="list2.length > 0">-->
              <li class="coupon" v-for="(li,index) in list2" v-else-if="list2.length > 0">
                <div class="coupon-left">
                  <span>￥{{li.usedAmount}}</span>
                </div>
                <div class="coupon-right1">
                  <!--优惠类型-->
                  <span>{{li.usedTypeName}}</span>
                  <span>{{formatTime(li.validStartTime) }} 至 {{ formatTime(li.validEndTime)}}</span>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as userApi from '../../api/member'
  import utilApi from '../../../../common/utils'
  import moment from 'moment'

  export default {
    data() {
      return {
        loading: true,
        total1: 0,
        total2: 0,

        list1: [
          {
            usedAmount: '',
            usedTypeName: '',
            validStartTime: '',
            validEndTime: '',
          }
        ],
        list2: [
          {
            usedAmount: '',
            usedTypeName: '',
            validStartTime: '',
            validEndTime: '',
          }
        ],
        params1: {
          userId: '',
          status: 'true',
        },
        params2: {
          userId: '',
          status: 'false',
        },
        count: 0,
        message1: '',
        message2: '',
      }
    },
    methods: {
      redcount: function () {
        userApi.redcount_get(this.params1.userId).then((res) => {
          this.count = res;
          //alert(this.count)
        })
      },
      use: function () {
        //根据主键查询页面信息
        userApi.redpaper_get(this.params1).then((res) => {
          //alert("11")
          if (res.success) {
            //alert("123")
            this.list1 = res.queryResult.list;
            this.total1 = res.queryResult.total;
            //alert(this.list1)
          } else {
            //alert("567")
            this.message1 = res.message;
            //alert(this.message1)
            //alert(this.total1)
          }
          this.loading = false;
        })
      },
      unuse: function () {
        userApi.redpaper_get(this.params2).then((res) => {

          if (res.success) {
            //alert("123")
            this.list2 = res.queryResult.list;
            this.total2 = res.queryResult.total;
            //alert(this.total)
          } else {
            this.message2 = res.message;
            // alert(this.message2)
            //alert(this.total2)
          }
          this.loading = false;
        })
      },
      //编写日期格式化的方法
      formatTime(time) {
        if (time == null) {
          return "/";
        }
        const date = new Date(time);
        // return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return moment(date).format("YYYY-MM-DD");
      },
    },
    created() { // vm实例的data和methods初始化完毕后执行，发ajax要提前
      this.params1.userId = utilApi.getActiveUser().userid;
      this.params2.userId = utilApi.getActiveUser().userid;
      //alert(this.params1.userId)
      this.redcount();
      this.use();
      this.unuse();

    },
    mounted() {

    },


  }
</script>

<style scoped>

  .wrap {
    width: 960px;
    margin: auto;
  }

  .tab {
    display: block;
    margin-bottom: 20px;
    text-align: center;
    margin-left: 60px;
  }

  .container {
    width: 100%;
    height: 100vh;
    display: inline-block;
  }

  .container_1 {
    margin-top: 20px;
  }

  ul {
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }

  .list ul {
    padding: .5rem 0;
  }

  .list ul li.coupon {
    width: 400px;
    height: 60px;
    margin-bottom: .6rem;
    position: relative;
    left: 10px;
    margin-right: 300px;
    border-radius: .1rem;
    overflow: hidden;
  }

  .coupon-left {
    position: absolute;
    width: 30%;
    height: 100%;
    float: left;
    background-color: #FFFFFF;
    color: #545454;
  }

  .coupon-left::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: radial-gradient(circle at right top, #E9EEF3 .2rem, transparent .2rem, transparent .2rem);
  }

  .coupon-left::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: radial-gradient(circle at right bottom, #E9EEF3 .2rem, transparent .2rem, transparent .2rem)
  }

  /*有颜色*/
  .coupon-right {
    width: 50%;
    right: 0;
    width: 70%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(60deg, #9d2328 0%, #b6322c 37%, #eb474f 65%, #9d2328 100%);
    /*background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #3d3393 100%);*/
    color: #FFFFFF;
  }

  .coupon-right::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: radial-gradient(circle at left top, #E9EEF3 .2rem, transparent .2rem, transparent .2rem)
  }

  .coupon-right::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: radial-gradient(circle at left bottom, #E9EEF3 .2rem, transparent .2rem, transparent .2rem)
  }

  /*灰色*/
  .coupon-right1 {
    width: 50%;
    right: 0;
    width: 70%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(60deg, #8d99aa 0%, #adb9c5 37%, #ADB9C5 35%, #919391 100%);
    /*background-color: #919391;*/
    color: #FFFFFF;
  }

  .coupon-right1::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: radial-gradient(circle at left top, #E9EEF3 .2rem, transparent .2rem, transparent .2rem)
  }

  .coupon-right1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: radial-gradient(circle at left bottom, #E9EEF3 .2rem, transparent .2rem, transparent .2rem)
  }

  .coupon-left span {
    margin-top: 15px;
    display: block;
    font-family: Arial;
    line-height: 1.6rem;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  }

  .coupon-right span,
  .coupon-right1 span {
    display: block;
    line-height: 1.6rem;
    text-align: center;
    font-size: .5rem;
    font-weight: 700;
  }

</style>
