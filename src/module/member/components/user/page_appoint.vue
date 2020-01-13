<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top:10px">
    <el-col :span="12">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的预约</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>


      <div class="yuyue">
        <h3>预约咨询</h3>
        <div class="div1">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane  label="所有预约" name="first"></el-tab-pane>
            <el-tab-pane  label="代咨询" name="second"></el-tab-pane>
            <el-tab-pane  label="已取消" name="third"></el-tab-pane>
          </el-tabs>
        </div>
        <div>
          <el-table
            :data="list"
            stripe
            style="width: 100%">
            <el-table-column prop="image" label="咨询师" width="160" align="center">
              <template slot-scope="scope">
                <img :src="scope.row.image"  min-width="70" height="70" />
              </template>
            </el-table-column>
            <el-table-column prop="cltName" label="姓名" width="120" align="center"></el-table-column>
            <el-table-column prop="appMode" label="咨询方式" width="120" align="center">
              <template scope="scope">
                <div v-if="scope.row.appMode == 0">预约电话</div>
                <div v-if="scope.row.appMode == 1">预约视频</div>
                <div v-if="scope.row.appMode == 2">预约文字</div>
              </template>
            </el-table-column>
            <el-table-column prop="appDate" label="预约时间" width="160" align="center"></el-table-column>
            <el-table-column prop="appPrice" label="费用" width="100" align="center"></el-table-column>
            <el-table-column prop="appStatus" label="状态" width="120" align="center">
              <template scope="scope">
                <div v-if="scope.row.appStatus == 0" style="color: orange">未付款</div>
                <div v-if="scope.row.appStatus == 1" style="color: #00c300">待咨询</div>
                <div v-if="scope.row.appStatus == 2" style="color: #bbbbbb">已完成</div>
                <div v-if="scope.row.appStatus == 3" style="color: red">已取消</div>
              </template>
            </el-table-column>
            <el-table-column label="交易操作" align="center">
              <template slot-scope="list">
                <el-button v-if="list.row.appStatus == 0"
                           size="small"type="text"
                  @click="cancel(list.row.id)">取消订单
                </el-button>
                <el-button v-if="list.row.appStatus == 1"
                           size="small"type="text"
                           @click="cancel(list.row.id)">取消订单
                </el-button>
                <el-button v-if="list.row.appStatus == 2"
                           size="small"type="text"
                           @click="cancel(list.row.id)">评价
                </el-button>
                <el-button v-if="list.row.appStatus == 3"
                           size="small"type="text"
                           @click="del(list.row.id)">删除订单
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            :page-size="params.size"
            :current-page="params.page"
            @current-change="changePage"
            style="float: right;">
          </el-pagination>
        </div>
      </div>


    </el-col>
  </el-row>
</template>

<script>
  import * as userApi from '../../api/member'
  import utilApi from '@/common/utils';
  export default {
    name: "yuyue_order",
    data() {
      return {
        activeName: 'first',
        list: [],
        total: 0,
        params: {  //这里和上面的查询表单做了双向绑定
          page:1,
          size:10,
          userId:'',
        },
      };
    },
    methods: {
      //编写日期格式化的方法
      dateFormat:function (row,column) {
        const date=row[column.property]
        if(date == null){
          return null
        }
        if(date==undefined){
          return''
        }
        return moment(date).format("YYYY-MM-DD HH:mm:ss")
      },
      handleClick(tab, event) {
        //console.log(tab, event);
      },
      query() {
        this.params.page = 1;
        this.queryList();
      },
      changePage: function (currentPage) {  //形参就是当前页码
        this.params.page = currentPage;
        //调用query方法
        this.queryList();
      },
      //查询用户预约订单
      queryList: function () {
        //调用服务端的接口
        userApi.order_list(this.params.page, this.params.size, this.params).then((res) => {
          //将res结果数据赋值给数据模型对象
          this.list = res.queryResult.list;
          this.total = res.queryResult.total;
        })
      },
      cancel:function (id) {
        this.$confirm('你确认取消吗?', '提示', {}).then(() => {
          //调用服务端接口
          userApi.order_cancel(id).then((res)=>{
            if (res.success){
              this.$message.success('取消成功')
              //刷新页面
              this.queryList();
            }else{
              this.$message.error('取消失败')
            }
          })
        })
      },
      //删除预约订单
      del:function (id) {
        this.$confirm('你确认删除吗?', '提示', {}).then(() => {
          //调用服务端接口
          userApi.order_del(id).then((res)=>{
            if (res.success){
              this.$message.success('删除成功')
              //刷新页面
              this.queryList();
            }else{
              this.$message.error('删除失败')
            }
          })
        })
      },
    },
    created(){
        //取出用户id
        this.params.userId = utilApi.getActiveUser().userid
      },
    mounted() {
        this.queryList();
      }
  };
</script>

<style scoped>
  .yuyue {
    border: 1px solid #ebebeb;
    background: #fff;
    padding: 30px;
    width: 922px;
  }
  .div1{
    margin-top: 20px;
    clear: both;
    zoom: 1;
    display: block;
  }
  .btn{
  }
</style>
