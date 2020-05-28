<template>
    <div>
      <div v-if="interactiveActivities != null">
       <!-- <div v-for="(activity, index) in interactiveActivities" :key="index">-->
       <el-row>
         <el-col :span="8" v-for="(activity, index) in interactiveActivities" v-if="index<2" :key="index" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }" style="margin-top: 15px" @click.native="toSeeDetail(activity.id)" shadow="always">
            <!--<el-image
              style="width: 100%; height: 200px"
              :src="activity.image"
              fit="fit">
            </el-image>-->
            <img src="http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg" class="image">
            <div style="padding: 14px;">
              <el-row>
                <el-col :span="16">
                  <span v-text="activity.shortTitle" ></span>
                  <div class="bottom clearfix">
                    <span v-text="formatTime(activity.beginTime)"></span>~<span v-text="formatTime(activity.endTime)"></span>

                  </div>
                </el-col>
                <el-col :span="8">
                  <span>发起人：</span><span v-text="activity.originatorName"></span>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
         <!--页面最多只展示两条数据，如果只有一条则显示暂无更多活动 -->
        <el-col v-if="size==1||size==0"  :span="8" :offset="2">
          <el-card :body-style="{ padding: '0px' }" shadow="always" style="margin-top: 15px">
            <!--<el-image
              style="width: 100%; height: 200px"
              src=""
              fit="fit">
            </el-image>-->
            <img src="http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg" class="image">
            <div style="padding: 14px;">
              <el-row>
                <el-col :span="24" style="text-align: center">
                  <span>暂无更多活动</span>
                  <div class="bottom clearfix">
                    <span v-text=""></span>敬请期待<span v-text=""></span>

                  </div>
                </el-col>
              </el-row>

            </div>

          </el-card>

        </el-col>
         <!--页面最多只展示两条数据，如果超过两条则显示更多 -->
        <span v-if="size>2" style="margin-left: 20px"><el-button type="text" @click.native="toSeeMore">更多>>></el-button> </span>
       </el-row>

        <!--</div>-->
      </div>

      <div v-else>
        无数据
      </div>
    </div>
</template>

<script>
    import * as marketingApi from '../api/marketing'
    import moment from 'moment';
    export default {
        name: "InteractiveList",
        data() {
            return {
              size: 0,
              interactiveActivities: [],

            }
        },
        methods: {

            //根据发布时间查询活动
          queryReleaseInteractiveActivity() {
            const today = new Date();
            marketingApi.queryReleaseInteractiveActivity(today).then((res) => {
                if(res.success){
                    this.size = res.queryResult.list.length;
                    this.interactiveActivities = res.queryResult.list;
                } else {
                    this.interactiveActivities = [];
                    this.size = 0;
                }
            })
          },
            //查看活动详细内容
            toSeeDetail(id){
                this.$router.push({
                    path:'/interactiveactivity/info',
                    query: {
                        id:id
                    }
                })
            },
            //更多
            toSeeMore(){
              this.$router.push({
                  path:'/interactiveactivity/more',
              })
            },
            //格式化时间
          formatTime(date){
              return moment(date).format("YYYY-MM-DD");
          },
        },
        mounted() {
            this.queryReleaseInteractiveActivity();
        }
    }
</script>

<style scoped>
  .window{
    border-radius: 20px;
    border: 1px solid cadetblue;
    padding: 2px;
    width: 30%;
  }
  .content{
    background: whitesmoke;
  }
  .content_child{
    margin: 20px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  .image {
    width: 100%;
    display: block;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .nomore{
    text-align: center;
    margin-top: 10px;
    line-height: 13px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>
