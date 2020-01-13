<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top:10px">
    <el-col :span="12">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
    <el-breadcrumb-item>我的积分</el-breadcrumb-item>
  </el-breadcrumb>
      <el-divider></el-divider>
      <el-form :model="cardForm"
               label-width="80px"
               status-icon
               style="margin-top: 30px"
               label-position="left"
               class="demo-ruleForm"
               ref="cardForm">
      <!--现有积分：<{{cardForm.points_now}}分-->
        <el-form-item label="现有积分:">
          <span>{{ cardForm.points_now }}分</span>
        </el-form-item>
        <div></div>
      <!--累计积分：{{cardForm.points_sum}}分-->
        <el-form-item label="累计积分:">
          <span>{{ cardForm.points_sum }}分</span>
        </el-form-item>
        <div></div>
      查看历史积分记录：
      <!--数据列表 stripe 条纹  -->
      <el-card class="margin">
        <el-table :data="list"
                  v-loading="loading"
                  style="width: 100%;height:50%"
                  height="420"
                  :default-sort = "{prop: 'user_createtime', order: 'descending'}">
          <el-table-column prop="points_time"
                           align="center"
                           label="记录时间"
                           sortable
                           :formatter="dateFormat"
                           width="180">
          </el-table-column>
          <el-table-column prop="points_before"
                           align="center"
                           label="计算前积分"
                           width="90">
          </el-table-column>
          <el-table-column prop="points_num"
                           align="center"
                           label="本次积分"
                           width="90"
          >
          </el-table-column>
          <el-table-column prop="points_later"
                           align="center"
                           label="计算后积分"
                           width="90"
          >
          </el-table-column>
          <el-table-column prop="description"
                           align="center"
                           label="积分描述"
                           width="200">
          </el-table-column>

        </el-table>
        <!--列表底部分页-->
        <el-pagination layout="total, prev, pager, next"
                       :total="total"
                       :page-size="params.size"
                       :current-page="params.page"
                       @current-change="changePage"
                       style="float: right;">
          <!-- current-page:当前页  current-change:当前页改变时会被触发   -->
        </el-pagination>
      </el-card>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
  //2、导入方法user.js方法
  import * as userApi from '../../api/member'
  import  utilApi from '../../../../common/utils'
  import moment from 'moment'
    export default {
        data(){
          return{
            loading:false,
            list: [],  // 数据
            params: {  //  数据对象 这里和上面的查询表单做了双向绑定
              page: 1, //  当前页
              size: 6, //  每页显示数据的条数
              //points_id:'',
              user_id: '',
              user_nickname: ''
            },
            cardForm: {
              user_id: '',
              //consum_all:'',
              points_now: '',
              points_sum: ''
            },

            total: 0,  //  数据总条数
          }
        },
      methods: {

        //页面查询
        query: function () {
          //1、调用js方法请求服务端页面查询接口  2、导入user.js
          userApi.user_point(this.params.page, this.params.size, this.params).then((res) => { //当前页|每页记录数|查询条件
            // 2）将res结果数据赋值给list数据模型对象
            this.list = res.queryResult.list;
            this.total = res.queryResult.total;
            this.loading = false;
          })
        },

        //当前页码改变时触发的事件 @current-change="changePage"
        changePage: function (currentPage) {  //current--》当前页码
          this.params.page = currentPage;
          //调用query方法
          this.query();
          this.loading = false;
        },
        //编写日期格式化的方法
        dateFormat: function (row, column) {
          const date = row[column.property]
          if (date == undefined) {
            return ''
          }
          return moment(date).format("YYYY-MM-DD  HH:mm:ss")
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
        this.params.page = Number.parseInt(this.$route.query.prepage || 1);
          let activeUser = utilApi.getActiveUser();
          this.params.user_id = activeUser.userid;
          this.cardForm.user_id = activeUser.userid;

        //获取card 内的积分值
        userApi.card_get(this.cardForm.user_id).then((res) => {
          console.log(res);
          if(res){
            this.cardForm = res;
          }
        });
      },
      mounted() { // 模板和HTML已经渲染出来
        /*当dom元素全部渲染完成后,自动调用query*/
        this.query();
      },
    }
</script>

<style scoped>

  .demo-table-expand label {
    width: 90px;
    color: #f5d2ac;
  }

  .margin{
    margin-top: 20px;
  }
</style>
