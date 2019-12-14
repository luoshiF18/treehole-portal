<template>
  <!--编写页面静态部分，即view部分，<div>标签不能少-->
  <div>
    <!--查询表单-->
    <el-form :model="params" :inline="true">
      <el-form-item label="城市">
        <el-input v-model="params.region" placeholder="请输入城市名" clearable></el-input>
      </el-form-item>
      <el-form-item label="咨询师性别">
        <el-select v-model="params.sex" placeholder="请选择咨询师性别" clearable>
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="query" icon="el-icon-search">查询</el-button>
      </el-form-item>
    </el-form>
    <!--数据列表-->
    <el-table :data="list" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="sex" label="性别" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>
      <el-table-column prop="region" label="地区" width="260"></el-table-column>
      <el-table-column prop="studio" label="工作室" width="260"></el-table-column>
      <el-table-column prop="praise_number" label="好评数" width="150"></el-table-column>
      <el-table-column prop="platform_year" label="从业年限" width="160"></el-table-column>
      <el-table-column prop="price" label="收费标准" width="200"></el-table-column>
      <el-table-column label="操作" width="136">
        <template slot-scope="page">
          <el-button size="small" type="success" @click="getDetail(page.row.id)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页组件-->
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :page-size="params.size"
      :current-page="params.page"
      v-on:current-change="changePage"
      style="float:right">
    </el-pagination>
  </div>
</template>

<script>
  /*编写页面静态部分，即model和vm部分*/
  import * as psychologistApi from '../api/psychologist'

  export default {
    data() {
      return {
        list: [],
        total: 0,
        //查询信息需要传递的参数
        params: {
          page: 1, //当前页码
          size: 6, //每页显示个数
          region: '',//地区，页面显示的是城市
          sex: ''//性别
        }
      }
    },
    methods: {
      //查询所有
      query: function () {
        //res为服务端的数据，是一个形参，名字任意
        psychologistApi.psychologist_list(this.params.page, this.params.size, this.params).then((res) => {
          //将res服务端数据赋值给数据模型对象
          this.total = res.queryResult.total
          this.list = res.queryResult.list
        })
      },
      //分页查询
      changePage: function (page) {
        //调用当前实例的query方法
        this.params.page = page;
        this.query();
      },
      //打开详情页面，并且把参数通过url传递过去
      getDetail: function (id) {
        this.$router.push({
          path: '/psychologist_detail/' + id,
          query: {
            page: this.params.page,
            region: this.params.region,
            sex: this.params.sex
          }
        })
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'row1';
        } else if (rowIndex === 2) {
          return 'row2';
        } else if (rowIndex === 3) {
          return 'row3';
        } else if (rowIndex === 4) {
          return 'row4';
        } else if (rowIndex === 5) {
          return 'row5';
        }
        return 'row6';
      }
    },
    //钩子函数，DOM元素还未渲染就调用
    created() {
      //取出url中的参数，赋值给数据对象，由于page为字符串，需要转换为int，如果page为空，则默认为转换为1
      this.params.page = Number.parseInt(this.$route.query.page || 1)
      this.params.region = this.$route.query.region || ''
      this.params.sex = this.$route.query.sex || ''
    },
    //钩子函数，DOM元素渲染完成后调用，定义在methods之后
    mounted() {
      //实现进入页面就查询
      this.query();
    }
  }
</script>
<style>
  .el-table .row1 {
    background: oldlace;
  }

  .el-table .row2 {
    background: #f0f9eb;
  }

  .el-table .row3 {
    background: oldlace;
  }

  .el-table .row4 {
    background: #f0f9eb;
  }

  .el-table .row5 {
    background: oldlace;
  }

  .el-table .row6 {
    background: #f0f9eb;
  }
</style>

