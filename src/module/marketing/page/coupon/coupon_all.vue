<template>
  <div>
    <!--<el-form :model="couponBo">

      <div class="coupon">
        <span>¥</span><span id="price" v-text="couponBo.usedAmount"></span>
        <span v-if="couponBo.validType == 1">
               <div class="date"><span>使用期限</span><span v-text="formatTime(couponBo.validStartTime)"></span>&nbsp;&nbsp;<span v-text="formatTime(couponBo.validEndTime)"></span></div>
            </span>
        <span v-else>
               <div class="date"><span>领取后</span><span>{{couponBo.validDays}}</span><span>日失效</span></div>
            </span>
        <div class="click"><el-button type="text" @click="receive">立即领券</el-button></div>
        <div class="linear"></div>
      </div>

    </el-form>-->

    <div :data="couponBos">
      <div v-for="(coupon, index) in couponBos">
        <el-form :model="coupon">

          <div class="coupon">
            <span>¥</span><span id="price" v-text="coupon.usedAmount"></span>
            <span v-if="coupon.validType == 1">
               <div class="date"><span>使用期限</span><span v-text="formatTime(coupon.validStartTime)"></span>&nbsp;&nbsp;<span v-text="formatTime(coupon.validEndTime)"></span></div>
            </span>
            <span v-else>
               <div class="date"><span>领取后</span><span>{{coupon.validDays}}</span><span>日失效</span></div>
            </span>
            <div class="click"><el-button type="text" @click="receive(coupon)">立即领券</el-button></div>
            <div class="linear"></div>
          </div>

        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
    import * as marketingApi from '../../api/marketing'
    import moment from 'moment'
    import  utilApi from '../../../../common/utils'
    export default {
        name: "coupon_all",
        data() {
            return{
                couponId: '',
                couponBos: [],
                couponBo: {
                    id: '',
                    title: '',
                    withAmount:'',
                    usedAmount: '',
                    withSpecial: '',
                    typeName: '',
                    usedTypeId: '',
                    validType: '',
                    validStartTime: '',
                    validEndTime: '',
                    validDays: '',
                    limitNum: '',
                    usedBy: '',

                },
                userCouponRequest: {
                    id: '',
                    title: '',
                    withAmount:'',
                    usedAmount: '',
                    withSpecial: '',
                    typeName: '',
                    usedTypeId: '',
                    validType: '',
                    validStartTime: '',
                    validEndTime: '',
                    validDays: '',
                    limitNum: '',
                    usedBy: '',
                    userId: '',
                },

            }
        },
        methods: {
            receive(coupon) {
                this.userCouponRequest = coupon;
                this.userCouponRequest["userId"] = utilApi.getActiveUser().userid;
                //this.userCouponRequest["userId"] = '贾用户';
                marketingApi.receive_coupon(this.userCouponRequest).then((res)=>{
                    if(res.success){
                        this.$message.success("已领取")
                    } else if(res.message){
                        this.$message.error(res.message)
                    } else {
                        this.$message.error("领取失败")
                    }
                })
            },
            getCouponDetail() {
                marketingApi.coupon_cdetail(this.couponId).then((res) => {
                    this.couponBo = res;
                    this.userCouponRequest = this.couponBo;
                    /* title: '',
                         withAmount:'',
                         usedAmount: '',
                         withSpecial: '',
                         typeName: '',
                         usedType: '',
                         validType: '',
                         validStartTime: '',
                         validEndTime: '',
                         validDays: '',
                         limitNum: '',
                         usedBy: '',*/
                    this.userCouponRequest["userId"] = utilApi.getActiveUser().userid;
                })
            },
            getAllReleaseCoupon(){
                let today = new Date();
                marketingApi.coupon_releaseAll(today).then((res) => {
                    if(res.success){
                        this.couponBos = res.queryResult.list;
                    }
                })
            },
            formatTime(time) {
                if(time == null){
                    return "/";
                }
                const date = new Date(time);
                // return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                return moment(date).format("YYYY-MM-DD");
            },
        },
        mounted() {
            this.getAllReleaseCoupon();
        }


    }
</script>

<style scoped>
  .coupon{
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 367px;
    border:0px solid black;
    height: 57px;
    margin-top: 3%;
    background-color: red; /* 不支持线性的时候显示 */
    /*background-image: linear-gradient(to right, #FD7C56 , #FF293B);*/
    background-image: linear-gradient(to right, #FD7C56 , #FF283B);
    border-radius: 20px;
    padding: 7px;
    /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
  }
  #price{
    font-size: 1.7em;
    margin-left: 7px;
  }
  .linear{
    height: 64px;
    width: 0px;
    border: 1px dashed red;
    float: right;
    margin-right: 50px;
    transform: translate(-50%,-90%);
    /* margin-top: 53px;*/
  }
  .click{
    float: right;
    color: white;
    font-size: 16px;
    transform: translate(-30%,-130%);
    margin-right: 20px;
    /* margin-top: 60px;*/
  }
  .date{
    font-size: 10px;
    margin-top: 5px;
  }
  .el-button--text{
    color: #fff;
    font-size: 15px;
    /* transform: translate(-30%,-130%);*/
  }

  .el-button--text:hover{
    color: #bbb;
    /*font-size: 16px;
    transform: translate(-30%,-130%);*/
  }
</style>
