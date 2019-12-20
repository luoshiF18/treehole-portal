<template>

  <el-row type="flex" class="row-bg" justify="center" style="margin-top:10px">
    <el-col :span="12">
      <!--面包屑-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的消息</el-breadcrumb-item>
        <el-breadcrumb-item>树洞预警信息</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

      <el-card class="cardstyle">
        <el-collapse >
          <el-collapse-item v-for="(li,index) in list" class="claname">
            <template slot="title" >
              <div class="liInfostyle">{{formatTime(li.createTime)}}</div>您填写的 <div  class="liInfostyle">{{li.scaleName}}</div>有一条信息产生。
            </template>
            <div class="fontcolor"><span>{{li.wmessage}}</span>，请注意您的心理健康状况！</div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!--您在{{时间}}做的{{量表名称}}产生了信息:{{内容}}，请注意您的心理状况！-->
    </el-col>
  </el-row>
</template>

<script>
  //2、导入方法user.js方法
  import * as userApi from '../../api/member'
  import  utilApi from '../../../../common/utils'
  import moment from 'moment'
    export default {
      data() {
        return {
          activeName: '1',
          loading: true,
          list: [
            {
              scaleName: '',
              wmessage: '',
              createTime: ''
            }
          ],  // 数据
          total: 0,  //  数据总条数
          params: {  //  数据对象 这里和上面的查询表单做了双向绑定
            userId: ''
          },
        }
      },
      methods: {
        //页面查询
        query: function () {
          //1、调用js方法请求服务端页面查询接口  2、导入user.js
          userApi.page_warnlist(this.params).then((res) => {
            /*if (res.success) {
              alert(res)
            } else {
              this.$message.error(res.message)
            }*/
            // 2）将res结果数据赋值给list数据模型对象
            //alert(res)
            this.list = res;
            //this.total = res.queryResult.total;
            this.loading = false;
          })
        },

        //编写日期格式化的方法
        formatTime(time) {
          if(time == null){
            return "/";
          }
          const date = new Date(time);
          // return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
          return moment(date).format("YYYY-MM-DD");
        },
        //页面内容排序
        sort: function (sort) {
          this.params.sortBy = sort.prop;
          //判断排序字段
          if (sort.order == 'ascending') {
            this.params.desc = false;
          } else if (sort.order == 'descending') {
            this.params.desc = true;
          } else {
            this.params.desc = null;
          }
          this.query();
        },
      },
      // 私有过滤器
      filters: { //自定义私有过滤器 过滤器有两个条件 过滤器名称:处理函数
        dateFilter: function (dateStr, pattern=""){
          if(dateStr == null){
            return null;
          }
          var dt = new Date(dateStr)
          //yyyy-mm-dd
          var y = dt.getFullYear()
          var m = dt.getMonth() + 1
          var d = dt.getDate()
          if(pattern.toLowerCase() === 'yyyy-mm-dd') {
            return `${y}-${m}-${d}`
          }else{ // hh:mm:ss
            var hh = dt.getHours()
            var mm = dt.getMinutes()
            var ss = dt.getSeconds()
            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
          }
        }
      },
      //钩子函数们！
      created() { // vm实例的data和methods初始化完毕后执行，发ajax要提前
        /*取出路由中的参数,赋值给数据对象*/
        //this.params.page = Number.parseInt(this.$route.query.prepage || 1);
        this.params.userId = utilApi.getActiveUser().userid;//activeUser.userid;
        //获取cwarn 内的积分值
      /*  userApi.warn_get(this.params.user_id).then((res) => {
          console.log(res);
          if(res){
            this.warnFrom = res;
          }
        });*/
      },

      mounted() { // 模板和HTML已经渲染出来
        /*当dom元素全部渲染完成后,自动调用query*/
        this.query();
      },
    }
</script>

<style scoped>
.cardstyle {
  margin-top: 20px;
  width: 100%;
  height: 300px;
  /*height: 300px;*/
}
.claname {
  font-size: 15px;
}
.liInfostyle {
  font-weight: 600;
  color: #050b05;
  margin-right: 5px;
}
.fontcolor {
  color: red;
  margin-left: 15px;
}
</style>
