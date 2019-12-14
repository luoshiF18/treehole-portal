<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div>&nbsp;</div>
      </el-col>
      <el-col :span="16">
        <!--        开始测试-->
        <div>
          <el-card style="width: 900px;height: 630px;margin: 0 auto">
            <el-card style="width: 500px;height: 550px;margin: 0 auto">
              <el-card style="width: 450px;height: 500px;margin: 0 auto">
                <el-card style="height: 100px;margin: 0 auto">
                  <!--                  问题展示-->
                  第<span v-text="curr_sort"></span>题：<span v-text="question_option.question"></span>
                </el-card>
                <br>
                <!--               选项展示 -->
                <el-card style="height: 280px;margin: 0 auto">
                  <!--   <div v-for="(item,i) in question_option.optionVOS"><br>
                       <el-radio-button label="">{{item.answer}}</el-radio-button>
                     </div>-->
                  <el-radio-group @change="saveOption" v-model="pre_option">
                    <el-radio v-for="item in question_option.optionVOS" :key="item.id" :label="item.id">
                      <!--                        {{item.answer}}-->
                      <span v-text="item.answer"></span>
                    </el-radio>
                  </el-radio-group>

                </el-card>
                <!--                记录总条数-->
                <div class="card">
                  <span class="header" v-text="curr_sort"></span>
                  <span class="header2"> /</span>
                  <span class="header3" v-text="total"></span>
                </div>

              </el-card>
            </el-card>
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
    name: "scale_test2",
    data() {
      return {
        total: 0,
        scaleName: '',
        scaleId: '',
        scaleType: 0,
        //后端返回的问题和选项，普通类型
        question_option: {
          question: '',
          optionVOS: []
        },
        //普通类型
        normal_type: {
          nextQuestionId: '',
          questionSort: 0,
          optionId: '',
        },
        //多选类型
        multiple_type: {},
        //选项集合
        options: '',
        //临时选项
        pre_option: '',
        //  当前题号
        curr_sort: 1,
      }
    },
    methods: {
      //把选项排序
      sortByKey(array, key) {
        return array.sort(function (a, b) {
          var x = a[key];
          var y = b[key];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
      },
      //保存用户的选项
      saveOption: function () {
        // console.log(this.pre_option);
        // console.log('保存选项');
        this.options = this.pre_option + '|' + this.options;
        this.startTest1();
        // console.log(this.options);
      },
      //开始测试，第一次测试
      startTestFirst: function () {
        //如果为2是普通类型
        if (this.scaleType == 2) {
          evApi.startTestFirst(this.scaleId).then((res) => {
            if (res.success) {
              this.normal_type.nextQuestionId = res.questionVO2.nextQuestionId;
              this.normal_type.questionSort = res.questionVO2.questionSort;
              this.question_option.question = res.questionVO2.question;
              this.question_option.optionVOS = res.questionVO2.optionVOS;
              this.sortByKey(this.question_option.optionVOS, 'sort');
              /*            console.log(this.question_option.question)
                          console.log(this.question_option.optionVOS)*/
            } else {
              //如果做过题就送回原处
              this.$message.error(res.message);
              this.$router.push({
                path: '/scale/page/scale_list'
              });
            }

          });
        } else {
          //如果为1是多选类型
        }
      },
      //  如果不是第一次测试,普通
      startTest1: function () {
        // console.log('获取下一题');
        evApi.startTest1(this.scaleId, this.normal_type.nextQuestionId, this.normal_type.questionSort, this.pre_option).then((res) => {
            // console.log(res.success)
            //如果没有下一题就算分，得出结果
            if (res.success == false) {
              //打开修改页面
              this.$router.push({
                path: '/scale/page/scale_result', query: {
                  scaleId: this.scaleId,
                  optionIds: this.options,
                }
              });
            }
            this.normal_type.nextQuestionId = res.questionVO2.nextQuestionId;
            this.normal_type.questionSort = res.questionVO2.questionSort;
            this.question_option.question = res.questionVO2.question;
            this.question_option.optionVOS = res.questionVO2.optionVOS;
            this.curr_sort = res.questionVO2.questionSort;
            this.sortByKey(this.question_option.optionVOS, 'sort');
          }
        );
      }
    },
    created() {
      //取出路由中的参数,赋值给数据对象
      this.scaleName = this.$route.query.scaleName;
      this.scaleId = this.$route.query.scaleId;
      this.scaleType = this.$route.query.scaleType;
      this.total = this.$route.query.total;
      // console.log(this.scaleId, this.scaleType)
      // console.log(this.scaleName)
      // console.log( this.total)

    },
    mounted() {
      this.startTestFirst();
    }
  }
</script>
<style>
  .card {
    margin: 0 auto;
    height: 45px;
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
  }

  .header {
    background-color: #f0ad4e;
    color: white;
    font-size: 28px;
  }

  .header2 {
    color: #409EFF;
    font-size: 35px;
  }

  .header3 {
    background-color: #4CAF50;
    color: white;
    font-size: 33px;
  }
</style>
<style scoped>

</style>
