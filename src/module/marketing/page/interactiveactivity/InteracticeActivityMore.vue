<template>
  <div class="container">
    <span class="fontstyle">全部活动</span>
    <span :data="total">共<span v-text="total"></span>个</span>
    <el-divider></el-divider>
    <el-card class="main_container">
      <ul class="infinite-list" :data="activities" style="overflow:auto">
        <li v-for="activity in activities" class="infinite-list-item" @click="toSeeDetail(activity.id)">
          <el-row>
            <!--活动图片-->
            <el-col :span="3">
              <img src="http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg" class="img_logo_style" alt="图片加载失败！">
            </el-col>
            <!--活动详情-->
            <el-col :span="6" style="margin-left: 30px">
              <div :data="activity" class="divh3">
                <h3>{{activity.title}}</h3>
                <div style="color: gray; margin-top: 5px;">{{activity.subTitle}}</div>
                <span class="time">{{formatTime(activity.releaseBeginTime)}} </span>
              </div>
            </el-col>
          </el-row>
        </li>
      </ul>
    </el-card>

  </div>
</template>

<script>
    import * as marketingApi from '../../api/marketing'
    import moment from 'moment';
  export default {
    data() {
      return {
        total: 0,
        activities: {
        }
      }
    },
    methods: {
        //根据发布时间查询活动
        queryReleaseInteractiveActivity() {
            const today = new Date();
            marketingApi.queryReleaseInteractiveActivity(today).then((res) => {
                if(res.success){
                    this.total = res.queryResult.total;
                    this.activities = res.queryResult.list;
                } else {
                    this.activities = [];
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
        //格式化时间
        formatTime(date){
            return moment(date).format("YYYY-MM-DD");
        },
    },
    mounted() {

        this.queryReleaseInteractiveActivity();

    },
  }
</script>

<style scoped>
  .el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    /* 4：上右下左 3：上右下 2：上下 左右*/
    margin: 10px 0 12px 0;
  }
  .container {
    width: 850px;
    margin-left: 20%;
  }
  .img_logo_style {
    margin: 5px;
    width: 100px;
    height: 100px;
  }
  .main_container {
    height: 700px;
  }
  .divh3 {
    width: 600px;
  }
  .time {
    float: right;
    margin-right: 40px;
    margin-top: 30px;
   }
  .fontstyle {
    font-size: 16px;
    color: #333;
  }
</style>
