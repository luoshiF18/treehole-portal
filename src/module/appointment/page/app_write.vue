<template>
  <div style="background-color: white;width: 100%;height:100%;position: absolute;">
  <div class='big'>
    <el-steps :active="active" finish-status="success" process-status="finish">
      <el-step title="填写订单"></el-step>
      <el-step title="付款"></el-step>
      <el-step title="咨询"></el-step>
      <el-step title="评价"></el-step>
    </el-steps>
    <div class='div'>
      <!--咨询师介绍-->
      <el-avatar :size="100" style="float: left">
        <img :src=form.image>
      </el-avatar>
      <div class="info">
        <b><p>{{this.form.cltName}}</p></b>
        <p>{{this.form.qualification}}</p>
        <span>累计已收到<font color="orange">{{this.form.praiseNumber}}</font>多次好评
        </span>
      </div>
      <div style="clear:both;padding-top: 30px">
        <div class="title">频临“破产”的感情快速挽救</div>
        <div class="title">情绪情感压抑、紧张焦虑排除、缓解恐惧不安</div>
        <div class="title">夫妻情感增进、夫妻、婆媳矛盾</div>
        <div class="title">弱水三千，掀开“婚姻攻守战”</div>
        <div class="title">自卑胆小、敏感多疑、人际交往能力提升</div>
        <div class="title">情绪疏导、工作压力、人际关系</div>
        <div class="title">成长阴影、感情脆弱、孤独感</div>
      </div>
      <!--预约时段-->
      <div style="clear:both;padding-top: 10px">
        <b><p style="font-size: 20px;margin-bottom: 20px;margin-top: 0px">预约服务日期:</p></b>
        <el-form ref="form1" :model="form" :rules="rules">
          <el-form-item label="" prop="appDate">
            <el-date-picker
              v-model="form.appDate"
              placeholder="选择日期时间"
              type="datetime"
              align="right"
              format="yyyy-MM-dd HH:mm:ss"
              default-time="12:00:00"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <!--服务方式-->
      <template>
        <p>服务方式</p>
        <el-radio v-model="form.appMode" label="0">电话</el-radio>
        <el-radio v-model="form.appMode" label="1">视频</el-radio>
        <el-radio v-model="form.appMode" label="2">文字</el-radio>
      </template>
      <!--咨询时长-->
      <template>
        <p>咨询时长</p>
        <el-radio >60分钟</el-radio>
      </template>
      <!--费用-->
      <template>
        <div style="margin-top: 20px">
          <span>咨询单价:&nbsp&nbsp<span style="color:orange">{{this.form.appPrice}}元/次,共1次</span></span>
          <p style="margin-top: 5px">咨询费用</p>
          <span style="color: orange;font-size: xx-large">{{this.form.appPrice}}元</span>
        </div>
      </template>
    </div>
    <!--预约单-->
    <div class="div">
    <b><span>预约申请单</span></b>
    <p></p>
    <el-form ref="form2" :model="form" :rules="rules">
      <el-form-item label="姓名">
        <el-input v-model="form.userName" disabled></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="form.userGender" disabled></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="userPhone">
        <el-input v-model="form.userPhone"></el-input>
      </el-form-item>
      <el-form-item label="问题描述">
        <span style="color: red;margin-left:-12px;">及期望咨询时间</span>
        <el-input type="textarea" v-model="form.appNote"></el-input>
      </el-form-item>
      <!--提交-->
      <el-form-item>
        <el-button class="btn" type="primary" @click="next">提交</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
  </div>
</template>
<script>
  import * as appointmentApi from '../api/appointment'
  import utilApi from '@/common/utils';
  export default {
    data() {
      return {
        active: 0,
        defaultTime:Date.now(),
        user:{
          userid:'',
          userNickName: '',
          userimg: ''
        },
        form: {
          id:'',
          userId:'',
          cltId:'',
          cltName:'',
          image:'',
          qualification: '',
          praiseNumber:'',
          appDate:'',
          appMode: '0',
          appStatus:'0',
          appPrice:'',
          appNote:'',
          userName:'',
          userGender: '',
          userPhone:'',
        },
        pickerOptions:{
          //日期效验(预约日期不能小于当前日期)
          disabledDate(time) {
            return time.getTime() < Date.now()- 8.64e7
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '明天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '后天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 2);
              picker.$emit('pick', date);
            }
          }]
        },
        rules:{
          appDate: [
            { required: true, message: '请选择预约日期', trigger: 'blur'}
          ],
          userPhone: [
            { pattern: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/, message:'请输入正确的手机号码', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) {
          this.active = 0;
        }
        this.$refs['form1'].validate((valid) => {
          if (valid) {  //表单1校验成功
            this.$refs['form2'].validate((valid) => {
              if (valid) {  //表单2校验t成功
                //this.form.appDate = utilApi.formatDate(this.form.appDate, 'yyyy-MM-dd hh:mm:ss');
                //添加预约订单（未付款）
                appointmentApi.order_add(this.form).then(res => {
                  //解析服务端响应内容
                  this.form.id = res.appOrder.id
                  if (res.success) {
                    this.$message.success("预约订单已提交，请及时付款")
                    //预约订单提交成功，跳转至付款页面
                    this.$router.push({
                      path: '/appointment/pay',
                      query: {
                        form: this.form,
                        appOrder: res.appOrder
                      }
                    });
                  } else {
                    this.$message.error("预约订单提交失败")
                  }
                });
              }
            });
          }
        });
      }
    },
    //钩子函数,在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
    created(){
      //页面参数通过路由传入，这里通过this.$route.params来获取
      this.cltId = this.$route.params.cltId;
      //取出用户id
      this.form.userId = utilApi.getActiveUser().userid
      //根据咨询师id查询咨询师信息
      appointmentApi.detail_get(this.cltId).then((res) => {
        if (res) {
          this.form.cltId = res.id;
          this.form.image = res.image;
          this.form.cltName = res.name;
          this.form.qualification = res.qualification;
          this.form.praiseNumber = res.praise_number;
          this.form.appPrice = res.price;
        }
      });
      //根据用户id查询用户信息
      appointmentApi.user_get(this.form.userId).then((res) => {
        if (res) {
          this.form.userName = res.user_nickname;
          this.form.userGender = res.gender;
          this.form.userPhone = res.user_phone;
        }
      });
    },
    //钩子函数,在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作.
    mounted(){
    }
  }
</script>
<style>
  .big{
    display: block;
    overflow: hidden;
    max-width: 1100px;
    padding: 1.6em 20px;
    margin: 1em auto;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
  }
  .div{
    background-color:aliceblue;
    position:relative;
    padding: 30px;
    margin-top: 25px;
    border:#ebebeb solid 1px;
  }
  .info{
    float:left;
    margin-left: 30px
  }
  .info p{
    margin-top: 10px;
  }
  p{
    font-size: medium;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .title{
    float: left;
    width: auto;
    border: 1px solid gainsboro;
    padding: 12px;
    font-size: 1em;
    margin-right: 12px;
    margin-bottom: 15px;
  }
  .text {
    font-size: 16px;
    margin: 20px;
  }
  .item {
    padding: 18px;
    float: left;
    margin-top: 5px;
  }
  .btn{
    text-align: center;
    width: 100%;
    background: #00a2ff;
    color: #fff !important;
  }
</style>
