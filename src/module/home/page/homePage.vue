<template>
  <div class="dv-homePage">
    <el-row class="el-row-1">
      <el-col class="el-col-1" :span="24">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 5" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>


    <el-row class="el-row-2" :gutter="20">
      <h1>评测</h1>
      <el-col :span="6">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
      </el-col>
    </el-row>



    <el-row class="el-row-3" :gutter="20">
      <el-col :span="24">
        <div class="el-row-3-dv-1">
          <h1>预警</h1>
          <h5>1111111111</h5>
          <h5>1111111111</h5>
          <h5>1111111111</h5>
          <h5>1111111111</h5>
          <h5>1111111111</h5>
          <h5>1111111111</h5>
        </div>
      </el-col>
    </el-row>

    <el-row class="el-row-4" :gutter="20">
      <el-col :span="24">
        <div class="el-row-1-dv-4">
          <h1>档案</h1>
          <h5>1111111111</h5>
          <h5>1111111111</h5>
          <h5>1111111111</h5>
          <h5>1111111111</h5>
          <h5>1111111111</h5>
          <h5>1111111111</h5>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="less">
  .dv-homePage{
    .el-row-1 {
      margin-bottom: 20px;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }
    .el-row-2{
      background-color: #C0C0C0;
      width: 80vw;
      margin-bottom: 5vh;
      margin-left: 8vw!important;
      .box-card{
        margin-bottom: 6px;
      }
    }
    .el-row-3{
      background-color: #DCDCDC;
      width: 80vw;
      margin-bottom: 5vh;
      margin-left: 8vw!important;
    }
    .el-row-4{
      background-color: #C0C0C0;
      width: 80vw;
      margin-bottom: 5vh;
      margin-left: 8vw!important;
    }
  }
</style>
