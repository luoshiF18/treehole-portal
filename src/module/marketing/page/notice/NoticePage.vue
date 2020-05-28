<template>
  <div class="container">
    <span class="fontstyle">全部系统通知</span>
    <span :data="total">共<span v-text="total"></span>条</span>
    <br>
    <el-divider></el-divider>
    <el-card class="main_container">
      <ul class="infinite-list" :data="notices" style="overflow:auto">
        <li v-for="notice in notices" class="infinite-list-item">

          <el-row>
            <!--活动图片-->
      <!--      <el-col :span="3">
              <img src="http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg" class="img_logo_style" alt="图片加载失败！">
            </el-col>-->
            <!--通知详情-->
            <el-col :span="6" style="margin-left: 30px">
              <div :data="notice" class="divh3">
                <h3>{{notice.title}}</h3>
                <div style="color: gray; margin-top: 5px;">{{notice.content}}</div>
                <span class="time">{{formatTime(notice.releaseTime)}} </span>
              </div>
            </el-col>
          </el-row>
          <el-divider></el-divider>
        </li>

      </ul>
    </el-card>

  </div>
</template>

<script>
    import  utilApi from '../../../../common/utils'
    import * as marketingApi from '../../api/marketing'
    import moment from 'moment';

    export default {
        name: "NoticePage",
        data() {
            return {
                total: 0,
                notices: {
                }
            }
        },
        methods: {
            //根据发布时间查询活动
            queryNotice() {

                marketingApi.getNotice(utilApi.getActiveUser().userid).then((res) => {
                    if(res.success){
                        this.total = res.queryResult.total;
                        this.notices = res.queryResult.list;
                    } else {
                        this.notices = [];
                    }
                })
            },

            //格式化时间
            formatTime(date){
                return moment(date).format("YYYY-MM-DD");
            },
        },
        mounted() {

            this.queryNotice();

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
