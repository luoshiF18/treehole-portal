<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="17" >
        <el-card>
          <div :data="activity">
            <h2>{{activity.title}}</h2>
            <div style="color: gray; margin-top: 40px"><span>发布人：</span><span v-text="activity.originatorName"></span></div>
            <div style="color: gray; margin-top: 40px"><span>发布日期：</span><span v-text="formatTime(activity.releaseBeginTime)"></span></div>
            <div style="margin: 30px;"><span  v-html="activity.introduce"></span></div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="7">
         <el-card>
           <div style="margin: 10px"><b>猜你喜欢</b> </div>
           <img src="http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg" class="image">
            <div style="padding: 14px;">
              <el-row>
                <el-col>
                  <div>
                    <span>2020-04-11</span>~<span>2020-04-20</span>
                  </div>
                </el-col>

              </el-row>
              <el-row>
                <el-col>
                  <span>发起人：</span><span>王璐</span>
                </el-col>
              </el-row>
            </div>
         <div><b>专属优惠券</b></div>
            <div>
             <coupon_all  class="image"></coupon_all>
           </div>
        </el-card>
      </el-col>
    </el-row>



  </div>
</template>

<script>
    import * as marketingApi from '../../api/marketing'
    import moment from 'moment';
    import coupon_all from "../coupon/coupon_all";
    export default {
        name: "InteractiveActivityDetail",
        components:{
            coupon_all
        },
        data() {
            return {
                id: '',
                activity: {},
            }
        },
        methods: {
            queryInfo(id){
                marketingApi.queryReleaseInteractiveActivityInfo(this.id).then((res) =>{
                    this.activity = res;
                })
            },
            //格式化时间
            formatTime(date){
                return moment(date).format("YYYY-MM-DD");
            },
        },
        created() {
            this.id = this.$route.query.id;
        },
        mounted() {
            this.queryInfo();
        }
    }
</script>

<style scoped>
  .image {
    width: 100%;
    display: block;
  }
</style>
