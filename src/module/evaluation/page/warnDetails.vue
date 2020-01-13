<template>

  <el-row>
    <!--总共三份，第一份-->
    <el-col :span="16">
      <div class="grid-content bg-purple">
        <el-card>
        <div>
          <el-tabs type="border-card">
            <el-tab-pane label="预警记录">
              <el-table
                v-loading="loading"
                :data="list"
                border
                ref="list"
                style="width: 100%"
                class="el-row"
                @selection-change="handleSelectionChange"
              >
                <el-table-column align="center" type="selection" width="55"></el-table-column>
                <el-table-column label="序号"
                                 width="50" align="center">
                  <template scope="scope"><span v-text="getIndex(scope.$index)"></span></template>
                </el-table-column>
                <!--<el-table-column align="center" prop="userNickName" label="登录名"></el-table-column>
                <el-table-column align="center" prop="userName" label="姓名"></el-table-column>
                <el-table-column align="center" prop="company" label="机构"></el-table-column>
                <el-table-column align="center" prop="sex" label="性别">
                  <template slot-scope="scope">
                    {{ scope.row.sex === '0' ? '男' : '女' }}
                  </template>
                </el-table-column>-->
                <el-table-column align="center" prop="scaleName" label="量表名称"></el-table-column>
                <el-table-column align="center" prop="warningLevel" label="预警等级"  >
                  <template slot-scope="scope">
                    <span v-if="scope.row.warningLevel==2" style="color: #0062cc">关注</span>
                    <span v-if="scope.row.warningLevel==3" style="color: #ffe51a">追踪</span>
                    <span v-if="scope.row.warningLevel==4" style="color: #ff7e0c">高危</span>
                    <span v-if="scope.row.warningLevel==5" style="color: red">警戒</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="createTime" label="提交时间" :formatter="dateFormat1"></el-table-column>
                <el-table-column align="center"  fixed="right" label="操作">
                  <template slot-scope="page">
                    <el-button  type="primary" size="mini"
                                @click="look(page.row.id)">查看详情
                    </el-button>
                 <!--   <el-button  type="primary" size="mini"
                                @click="addIntervene">新增干预信息
                    </el-button>-->
                    <el-dialog title="新增干预记录"
                               :width="dialogWidth"
                               :visible.sync="dialogFormVisible"
                               :modal=false>
                      <div class="smallDiv">
                        <el-form  :model="intervene" ref="form"  label-width="120px" >
                          <el-form-item prop="userName" p :span="1" label="干预对象名称" >
                            <el-input  v-model="intervene.userName"></el-input>
                          </el-form-item>
                          <el-form-item label="干预方式"  prop="way" style="margin-right:0 ">
                            <el-select style="margin-left: 0"  v-model="intervene.way" placeholder="请选择干预方式">
                              <el-option label="面谈" value="面谈"></el-option>
                              <el-option label="家访" value="家访"></el-option>
                              <el-option label="送医" value="送医"></el-option>
                              <el-option label="其他" value="其他"></el-option>
                            </el-select>
                          </el-form-item>
                          <el-form-item label="干预的时间"  prop="recordTime" required>
                            <el-col :span="11" >
                              <el-form-item >
                                <el-date-picker v-model="intervene.recordTime" type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
                              </el-form-item>
                            </el-col>
                          </el-form-item>
                          <el-form-item label="干预原因" prop="reason" >
                            <el-input type="textarea"
                                      autosize
                                      :rows="7"
                                      v-model="intervene.reason">
                            </el-input>
                          </el-form-item>
                          <el-form-item label="干预内容" prop="context" >
                            <el-input type="textarea"
                                      autosize
                                      :rows="6"
                                      v-model="intervene.context">
                            </el-input>
                          </el-form-item>
                          <el-form-item label="干预后的效果" prop="effect" >
                            <el-input type="textarea"
                                      :rows="5"
                                      v-model="intervene.effect">
                            </el-input>
                          </el-form-item>
                          <el-form-item label="干预后状态" prop="status">
                            <el-radio-group v-model="intervene.status" >
                              <el-radio :label="0">良好</el-radio>
                              <el-radio :label="1">待观察</el-radio>
                              <el-radio :label="2">仍需干预</el-radio>
                            </el-radio-group>
                          </el-form-item>
                          <el-form-item label="咨询员" prop="advisoryName">
                            <el-input size="small"  v-model="intervene.advisoryName" ></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="submitForm('intervene')">立即提交</el-button>
                          </el-form-item>
                        </el-form>
                      </div>
                    </el-dialog>
                  </template>
                </el-table-column>

              </el-table>


            </el-tab-pane>
            <el-tab-pane label="干预记录">
             <el-card>
               <div class="scale_list">

                 该用户在<span >{{dateFormat(intervene.recordTime)}}</span>以{{intervene.way}}方式进行了干预，并添加了干预记录，记录人为：{{intervene.advisoryName}}<br>
               干预的原因是：{{intervene.reason}}<br>
                 记录的内容为：{{intervene.context}}<br>干预后效果为：{{intervene.effect}}

               </div>
             </el-card>

            </el-tab-pane>
            <el-tab-pane label="预警信息通知">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="预警等级">
                  <el-select v-model="form.warningLevel" placeholder="请选择预警等级">
                    <el-option label="关注" value="2"></el-option>
                    <el-option label="追踪" value="3"></el-option>
                    <el-option label="高危" value="4"></el-option>
                    <el-option label="警戒" value="5"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="预警时间">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.createTime" style="width: 20em"></el-date-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="量表名称">
                  <el-input type="text" v-model="form.scaleId" style="width: 20em"></el-input>
                </el-form-item>
                <el-form-item label="预警信息">
                  <el-input type="textarea" v-model="form.wmessage" style="width: 20em"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="addWarning">添加并发送预警消息</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
        </el-card>
      </div>
    </el-col>
    <!--总共三份，第二份-->
    <el-col :span="4">
      <div class="grid-content bg-purple-light">
        <el-card style="margin-left: 20px;margin-top: 100px">
          <el-card class="activity_high">
            用户名：小刘<br>
            性别：男<br>
            年龄：22<br>
            地址：string
            <p></p>
          </el-card>
        </el-card>
        <el-card style="margin-left: 20px;margin-top: 20px">
          <el-card class="activity_high">
            精品活动：
          </el-card>
        </el-card>
      </div>
    </el-col>
    <!--总共三份，第三份-->
    <el-col :span="4">
      <div class="grid-content bg-purple"></div>
    </el-col>

  </el-row>
</template>

<script>
    import * as evApi from '../api/evApi'
    import moment from 'moment'
    export default {
        name: "scale_list",
        data() {
            return {
                state: '',
                list: [],
                total: 0,
                intervene:{
                    userName:'',
                    way:'',
                    context:'',
                    reason:'',
                    effect:'',
                    advisoryName:'',
                    recordTime:'',
                    status:''
                },
                dialogWidth:'',
                dialogFormVisible: false,
                formLabelWidth: '130px',
                outerVisible: false,
                innerVisible: false,
                params: {
                    page: 1,
                    size: 10,
                    userNickName: '',
                    scaleName: '',
                    warningLevel: '',
                    startTime: '',
                    endTime: '',
                    date: '',
                },
                form: {
                    warningLevel: '',
                    createTime: '',
                    wmessage: '',
                    scaleId:''
                },
                loading: true,
                delarr: [], //存放删除的数据
                multipleSelection: [], //多选的数据
            };
        },
        methods: {

            //批量删除得到行数据
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //编写日期格式化的方法
            dateFormat1: function (row, column) {
                console.log(row, column)
                const date = row[column.property]
                if (date == undefined) {
                    return ''
                }
                return moment(date).format("YYYY-MM-DD")
            },
            //新增干预记录表
            addIntervene:function(){
                this.dialogFormVisible = true;
                this.resetForm('form');
            },
            resetForm(form){
                if (this.$refs[form]!==undefined) {
                    this.$refs[form].resetFields();
                }
            },
            //打开查看页面，查看预警详细信息
            look: function (warningId) {
                if (warningId == null) {
                    alert("id为空")
                }
                this.$router.push({
                    path: '/scale/page/preview/' + warningId
                })
            },
            //心理咨询师新增预警信息
            addWarning:function(){
                this.$confirm('确定提交?', '提示', {}).then(() => {
                    //调用服务端接口
                    evApi.addWarning(this.form).then((res) => {
                         if (res.success) {
                            this.$message.success('提交成功')
                            this.condition();
                        } else {
                            this.$message.error('提交失败')
                        }
                    })
                })
            },
            dateFormat:function(time) {
                let date=new Date(time);
                let year=date.getFullYear();
                /* 在日期格式中，月份是从0开始的，因此要加0
                 * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
                 * */
                let month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
                let day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
                // 拼接
                return year+"-"+month+"-"+day;
            },
            //综合查询
            condition: function () {
                evApi.getAllwarns(this.params.page, this.params.size).then((res) => {
                    //将res结果数据赋值给数据模型对象
                    this.list = res.queryResult.list;
                    this.total = res.queryResult.total;
                    this.loading=false;
                })

            },
            findByPsy: function () {
                evApi.findByPsy().then((res) => {
                    //将res结果数据赋值给数据模型对象
                    this.intervene=res;
                    this.loading=false;
                })

            },
            //新增干预记录表
            submitForm:function(){
                this.$confirm('确定提交?', '提示', {}).then(() => {
                    //调用服务端接口
                    evApi.addIntervene(this.intervene).then((res) => {
                        if(res.code==11113){
                            this.$message.error('该用户没有预警记录，无法添加干预表！')
                        }
                        else if(res.code==11114){
                            this.$message.error('该用户干预记录表已存在！')
                        }
                        else if (res.success) {
                            this.$message.success('提交成功')
                            //销毁元素
                            this.destroy=true;
                            //关闭模态框
                            this.dialogFormVisible=false;
                            //刷新页面
                            this.condition();
                        } else {
                            this.$message.error('提交失败')
                        }
                    })
                })
            },
            //宽度自适应
            setDialogWidth() {
                console.log(document.body.clientWidth)
                var val = document.body.clientWidth
                const def = 800 // 默认宽度
                if (val < def) {
                    this.dialogWidth = '100%'
                } else {
                    this.dialogWidth = def + 'px'
                }
            },
            changePage: function (page) {
                this.params.page = page;
                this.query();
            },
            //表格序号
            getIndex($index) {
                return (this.params.page - 1) * this.params.size + $index + 1
            },
            //选择框，取消多选
            toggleSelection() {
                this.$refs.list.clearSelection();
                this.multipleSelection=[]
            },
        },
        created() {

        },
        mounted() {
        this.condition();
        this.findByPsy();
        }
    }
</script>
<style>
  .scale_list {
    cursor: pointer;
    margin-top: 10px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .lunbotu {
    width: 100%;
    height: auto;
  }

  .lunbotu_card {
    width: 985px;
    margin: 0 auto;
    background-color: #eeeeee;
  }

  /*  .type_high {
      height: 1000px;
    }

    .type_high2 {
      height: 660px;
    }*/

  .activity_high {
    height: 300px;
  }

  .image {
    width: 12%;
    display: inline;
  }
</style>
<style scoped>

</style>
