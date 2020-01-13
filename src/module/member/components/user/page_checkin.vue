<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top: 10px">
    <el-col :span="18">
      <!--面包屑-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item>签到</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <!--签到按钮-->
      <el-card style="height: 100px">
        <div style="transform: translate(30%,30%)">
          <span >点击签到:</span>
          <el-button  type="success" class="sign"  :disabled="isShow" size="medium" @click="insertCheckin" >签到</el-button>
          <!--<el-button type="success" :disabled="isShow" @click="signAlert">签到</el-button>-->
        </div>
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
          // 签到按钮 显示的状态
          isShow: false,
          list: [],  // 数据
          page: 1, //  当前页
          size: 6, //  每页显示数据的条数
          params: {  //  数据对象 这里和上面的查询表单做了双向绑定
            nickname: ''
          },
          checkinForm: {
            user_id: '',
          },
          pointForm: {
            user_id: '',
            act_id: 'a4f6820eea97433db565f58b9d974b7b',  //签到id
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
        insertCheckin: function(){
          //签到
          userApi.checkin_add(this.checkinForm).then(res=>{
            if (res.success) {
              //积分
              userApi.point_add(this.pointForm).then(res=>{
                if (res.success) {
                  this.$message.success('签到成功')
                  this.query()
                  this.isShow = true
                }else if(res.message){
                  this.$message.error(res.message)
                }else{
                  this.$message.error('签到失败')
                }
              });
              //this.$message.success('签到成功')
            }else if(res.message){
              this.$message.error(res.message)
            }else{
              this.$message.error('签到失败')
            }

          });
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
        this.checkinForm.user_id = utilApi.getActiveUser().userid;
        this.pointForm.user_id = utilApi.getActiveUser().userid;
        //alert(this.params.nickname )
        //alert("+++id1:" + this.checkinForm.user_id);
        //alert("+++id2:" + this.pointForm.user_id);
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
  .buttonstyle {
    margin-left: 1px;
  }
</style>
