<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div>&nbsp;</div>
      </el-col>
      <el-col :span="16">
        <div>
          <el-card style="width: 900px;margin: 0 auto">
            <el-card style="width: 800px;margin: 0 auto">
              <h1 style="text-align:center" v-text="scaleDetail.scaleName"></h1>
            </el-card>
            <el-card style="background-color: #d8d8d8;width: 800px;margin: 0 auto">
              <el-row>
                <el-col :span="12">
                  <img height="90%" width="90%" style="left:0; top:0;"
                       src="https://www.agri35.com/UploadFiles/img_0_3350240698_1000634026_26.jpg">
                </el-col>
                <el-col :span="12">
                  <el-card>
                    <span class="color" v-text="scaleDetail.topicBackground"></span>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>
            <!--           测试入口-->
            <el-card style="margin-top: 10px">
              <div style="text-align:center">
                <button class="button button2" @click="startTest"><h2>开始测试</h2></button>
              </div>
            </el-card>
          </el-card>
        </div>
      </el-col>
      <el-col :span="4">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
    <!--    分块结束-->
    <br> <br>
    <el-card style="width: 900px;margin: 0 auto">
      <br> <br> <br>
      <div style="text-align:center">
        <h1>相关推荐</h1>
        <br>
        <span>暂时么得</span>
        <span>暂时么得</span>
        <span>暂时么得</span>
      </div>
      <br> <br> <br> <br> <br> <br> <br> <br>
    </el-card>
  </div>
</template>

<script>
  import * as evApi from "../api/evApi";

  export default {
    name: "scale_test",
    data() {
      return {
        scaleId: '',
        scaleDetail: {},
      }

    },
    methods: {
      //开始测试
      startTest: function () {
        //打开修改页面
        this.$router.push({
          path: '/scale/page/scale_test2', query: {
            scaleId: this.scaleId,
            scaleType: this.scaleDetail.scaleType,
            scaleName: this.scaleDetail.scaleName,
            total: this.scaleDetail.questionTotal,
          }
        });
      },
      //获取量表信息
      get_scale_info: function () {
        evApi.scale_info(this.scaleId).then((res) => {
          this.scaleDetail = res.scaleDetail;
        });

      }
    },
    created() {
      //取出路由中的参数,赋值给数据对象
      this.scaleId = this.$route.query.scaleId;
      // console.log(this.scaleId)
      this.get_scale_info();
    },
    mounted() {

    },
  }

</script>
<style>
  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 25px 200px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }

  .button2:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  .color {
    color: gray;
  }
</style>
<style scoped>


</style>
