<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div>&nbsp;</div>
      </el-col>
      <el-col :span="16">
        <!--        开始测试-->
        <div>
          <el-card style="height: 630px;margin: 0 auto">
              <!--              有图片的卡片-->
              <el-card style="margin: 0 auto">
                <el-row>
                  <el-col :span="12">
                    <!--                    左边继续分-->
                    <el-row>
                      <el-col :span="12">

                        <img height="90%" width="90%" style="left:0; top:0;"
                             src="https://www.agri35.com/UploadFiles/img_0_3350240698_1000634026_26.jpg">
                      </el-col>
                      <el-col :span="12">
                        <span class="header" v-text="result.score"></span>
                        <span class="header2">分</span>
                      </el-col>
                    </el-row>
                    <!--                    左边继续分结束-->
                  </el-col>
                  <el-col :span="12">
                    <el-card style="width: 450px;">
                      <h2><span v-text="result.scaleName"></span></h2>
                    </el-card>
                    <el-card style="width: 450px;color: cadetblue">
                      测试时间：<span v-text="result.resultTime	"></span>
                    </el-card>
                  </el-col>
                </el-row>

              </el-card>
              <br>
              <!--              有图片的卡片结束-->
              <!--得分描述-->
              <el-row>
                <el-col :span="12">
                  <el-card style="width: 480px;height: 50px">
                    <h3>测试结果：</h3>
                  </el-card>
                  <el-card style="width: 480px;height: 310px;color: gray">
                    <span v-text="result.descriptionInfo"></span>
                  </el-card>
                </el-col>

                <el-col :span="12">
                  <el-card style="width: 480px;height: 50px">
                    <h3>预警信息：</h3>
                  </el-card>
                  <el-card style="width: 480px;height: 310px;color: gray">
                    <span v-text="result.warningInfo"></span>
                  </el-card>
                </el-col>
              </el-row>

              <!--得分描述结束-->

          </el-card>
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
      </el-col>
      <el-col :span="4">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as evApi from "../api/evApi";

  export default {
    name: "scale_result",
    data() {
      return {
        //  算分param
        getScore: {
          scaleId: '',
          optionIds: '',
        },
        result: {
          descriptionInfo: '',
          resultTime: '',
          scaleName: '',
          score: 0,
          warningInfo: '',
          userName: '',
          userWarningInfo: '',
        }
      }
    },
    methods: {
      getInfo: function () {
        evApi.getResult(this.getScore).then((res) => {
          this.result = res.resultVO;
          // console.log(this.result)
        });

      }
    },

    created() {
      //取出路由中的参数,赋值给数据对象
      this.getScore.scaleId = this.$route.query.scaleId;
      this.getScore.optionIds = this.$route.query.optionIds;
      /*   console.log(this.getScore.scaleId)
         console.log(this.getScore.optionIds)*/

    },
    mounted() {
      this.getInfo();
    },
  }
</script>
<style>

  .header {
    background-color: #409EFF;
    color: white;
    font-size: 100px;
  }

  .header2 {
    background-color: #DCDCDC;
    color: #6d6d72;
    font-size: 50px;
  }
</style>
<style scoped>

</style>
