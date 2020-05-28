<template>
    <div>
      <el-form :model="couponBo">

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

      </el-form>
    </div>
</template>

<script>
    import * as marketingApi from '../../api/marketing'
    import  utilApi from '../../../../common/utils'
    import moment from 'moment'
    export default {
        name: "coupon_page",
        data() {
            return{
                couponId: '',
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
            receive() {
                //为什么会是undefined不是''
                if(this.userCouponRequest.userId == undefined || this.userCouponRequest.userId == ''){
                    this.$message.error("请登录");
                    this.$router.push({
                        path: '/base/components/loginform', query: {
                            url: this.$route.params//当前页面的地址
                        }

                    });
                }else{
                    marketingApi.receive_coupon(this.userCouponRequest).then((res)=>{
                        if(res.success){
                            this.$message.success("已领取")
                        } else if(res.message){
                            this.$message.error(res.message)
                        } else {
                            this.$message.error("领取失败")
                        }
                    })
                }

            },
            getCouponDetail() {

                marketingApi.coupon_cdetail(this.couponId).then((res) => {
                        if(res == ''){
                            this.$message.error("无优惠券")
                        }
                        this.couponBo = res;
                        this.userCouponRequest = this.couponBo;
                        if(utilApi.getActiveUser() != undefined){
                            this.userCouponRequest["userId"] = utilApi.getActiveUser().userid;
                        }




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

                })

                if(localStorage.getItem('oldUrl').startsWith("/base/components/loginform")){
                    window.location.reload()
                }

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
        created() {
            //取出路由中的参数,赋值给数据对象

            this.couponId = this.$route.query.id;

        },
        beforeRouteEnter(to, from, next) {
            localStorage.setItem('oldUrl', from.fullPath);
            //console.log(from.fullPath)
            next();
        },
        mounted() {

            this.getCouponDetail();

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
