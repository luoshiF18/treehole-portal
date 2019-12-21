<template>
  <div class='big'>
    <el-steps :active="active" finish-status="success" process-status="finish" style="padding: 100px">
      <el-step title="填写订单"></el-step>
      <el-step title="付款"></el-step>
      <el-step title="咨询"></el-step>
      <el-step title="评价"></el-step>
    </el-steps>
    <div class="message">专家可约时间随时变动，为了不错过时间，请务必在30分钟内完成付款，以免系统取消。</div>
    <div class='div1'>
        <div>
          <strong>付款信息</strong>
        </div>
        <div class="pay_info">
          <ul>
            <li>
              <label>付款类型:</label><p>预约咨询</p>
            </li>
            <li>
              <label>付款金额:</label><p style="color: #F60">6666.00元</p>
            </li>
            <li>
              <label>使用优惠:</label>
              <el-select v-model="discount" size="mini" no-data-text="暂无优惠可用" placeholder="暂无优惠可用">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <label>还需支付:</label><p style="color: #F60">6666.00元</p>
            </li>
          </ul>
          <template>
            <el-button class="ali" type="primary" @click="aLiPay">支付宝付款</el-button>
            <el-button class="wx" type="success" @click="WxPay">微信支付</el-button>
            <el-button class="wy" type="button" @click="YYZX">网银支付</el-button>
          </template>
        </div>
    </div>

    <div class="article">
      <div class="title">支付说明</div>
      <p>1、目前支持微信支付、支付宝以及网银付款;</p>
      <p>2、如有疑问请联系在线客服或拨打服务热线400-111-1111</p>
    </div>

  </div>
</template>
<script>
  import * as appointmentApi from '../api/appointment'
  import querystring from 'querystring'
  export default {
    data() {
      return {
        active: 1,
        discount:'',
        options:['暂无优惠卷可用'],
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      aLiPay() {
        const aLiUrl = require("../../../assets/alipay.png");
        // <img src=" + aLiUrl + " width=100px height=100px>
        this.$alert("<strong><img src="+ aLiUrl + "></strong>",'支付宝扫码支付：', {
          dangerouslyUseHTMLString: true,
          showCancelButton: false,
          confirmButtonText: '我已支付',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '验证中...';
              setTimeout(() => {
                //支付成功
                this.appOrder.appStatus = 1
                appointmentApi.order_edit(this.appOrder.id,this.appOrder).then(res => {
                  console.log(res)
                })
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              //支付失败
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: '付款成功'
            //message: 'action: ' + action
          });
          this.next();
        });
      },
      WxPay() {
        const weiXinUrl = require("../../../assets/wxpay.png");
        // <img src=" + aLiUrl + " width=100px height=100px>
        this.$alert("<strong><img src="+ weiXinUrl + "></strong>",'微信扫码支付：', {
          dangerouslyUseHTMLString: true,
          showCancelButton: false,
          confirmButtonText: '我已支付',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '验证中...';
              setTimeout(() => {
                //支付成功
                this.appOrder.appStatus = 1
                appointmentApi.order_edit(this.appOrder.id,this.appOrder).then(res => {
                  console.log(res)
                })
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              //支付失败
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: '付款成功'
            //message: 'action: ' + action
          });
          this.next();
        });
      },
      YYZX(){
        this.$router.push({
          path: '/appointment/pay',
          query: {
          }
        });
      }
    },
    mounted(){
    },
    created: function () {
      this.form = this.$route.query.form
      this.appOrder = this.$route.query.appOrder
      /**
       * 在这里使用的是 $route.params来获取路由中的信息,还有一种是$route.query来获取路由中的信息
       * 有什么区别? 应用场景各自又是什么?
       * $route.query是来获取路径中  例如:(请求路径xxx)?key=value 中的key的值
       * $route.params是来获取路径中 例如:(请求路径xxx)/value   获取value的值
       */
    }
  }
</script>
<style>
  .big{
    position:relative;
    display: block;
    overflow: hidden;
    max-width: 1100px;
    padding: 1.6em 20px;
    margin: 1em auto;
    box-sizing: border-box;
  }
  .message {
    display: block;
    overflow: hidden;
    margin-top: -50px;
    margin-left:100px;
    margin-right:100px;
    margin-bottom: 20px;
    padding: 20px 30px;
    background: #fcf8e4;
    color: #C77900;
    box-sizing: border-box;
    border: 1px solid #FFEED8;
  }
  .div1{
    position:relative;
    top:100px;
    margin-top:-100px;
    margin-left:100px;
    margin-right:100px;
    padding: 30px;
    border:black solid 1px;
  }
  .pay_info ul{
    padding: 0px;
  }
  .pay_info li{
    list-style-type: none;
  }
  .pay_info li label{
    float: left;
    width: 80px;
    text-align: left;
    color: #888888;
  }
  .ali{
    width: 200px;
    text-align: center;
    background: #00a2ff;
    color: #fff !important;
    font-size: 1.2em;
    padding: 0.9em 0em;
    margin-top: 20px;
  }
  .wx{
    width: 200px;
    text-align: center;
    background: #00c300;
    border: 1px solid #00c300;
    color: #fff !important;
    font-size: 1.2em;
    padding: 0.9em 0em;
  }
  .wy{
    width: 200px;
    font-size: 1.2em;
    padding: 0.9em 0em;
  }
  .article{
    position:relative;
    margin-top:120px;
    margin-left:100px;
    margin-right:100px;
  }
  .title{
    color: #000000;
    font-size: 1.3em;
  }
</style>
