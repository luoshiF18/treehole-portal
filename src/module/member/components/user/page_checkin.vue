<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top: 80px">
    <el-col :span="18">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item>签到</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <el-card style="height: 300px">
        点击签到：
        <el-button class="sign" size="medium" >签到</el-button>
      </el-card>

      <!--签到历史-->
      <el-card>
        <el-table :data="list"
                  v-loading="loading"
                  style="width: 100%"
                  height="350"
                  :default-sort = "{prop: 'checkin_time', order: 'descending'}">
          <!-- 数据列表 -->
          <el-table-column prop="nickname"
                           align="center"
                           label="用户昵称"
                           width="250">
          </el-table-column>
          <el-table-column prop="checkin_time"
                           align="center"
                           label="签到时间"
                           :formatter="dateFormat"
                           sortable
                           width="250">
          </el-table-column>

        </el-table>
        <!--列表底部分页-->
        <el-pagination layout="total, prev, pager, next"
                       :total="total"
                       :page-size="size"
                       :current-page="page"
                       @current-change="changePage"
                       style="float: right;">
          <!-- current-page:当前页  current-change:当前页改变时会被触发   -->
        </el-pagination>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import * as userApi from '../../api/member'
  import  utilApi from '../../../../common/utils'
  import moment from 'moment'
    export default {
      data() {
        return {
          loading: false,
          list: [],  // 数据
          page: 1, //  当前页
          size: 6, //  每页显示数据的条数
          params: {  //  数据对象 这里和上面的查询表单做了双向绑定
            nickname: ''
          },
          total: 0,  //  数据总条数
        }
      },
      methods: {
        //页面查询
        query: function () {
          //1、调用js方法请求服务端页面查询接口  2、导入user.js
          userApi.user_checkin(this.page, this.size,this.params).then((res) => { //当前页|每页记录数|查询条件
            // 2）将res结果数据赋值给list数据模型对象
            this.list = res.queryResult.list;
            this.total = res.queryResult.total;
            this.loading = false;
          })
        },
        //当前页码改变时触发的事件 @current-change="changePage"
        changePage: function (currentPage) {  //current--》当前页码
          this.page = currentPage;
          //调用query方法
          this.query();
        },

        //编写日期格式化的方法
        dateFormat:function (row,column) {
          const date=row[column.property]
          if(date==undefined){
            return''
          }
          return moment(date).format("YYYY-MM-DD HH:mm:ss")
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
      filters: { //自定义私有过滤器 过滤器有两个条件 过滤器名称:处理函数
        dateFilter: function (dateStr, pattern=""){
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
        /*!//取出路由中的参数,赋值给数据对象*/
        this.page = Number.parseInt(1);
        this.params.nickname = utilApi.getActiveUser().username;
        //alert(this.params.nickname )
        this.query();
      },
      mounted() { // 模板和HTML已经渲染出来
        /*当dom元素全部渲染完成后,自动调用query*/
        this.query();
      },
    }
</script>

<style scoped>
.sign:visited {
  background-color: #990055;
}
.demo-table-expand label {
  width: 90px;
  color: #f5d2ac;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 40%;
}
</style>
