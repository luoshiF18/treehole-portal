<template>
  <div>
    <div>
      <div class="dv">
        <el-row :gutter="20">
          <el-col :span="4">
            <div>
              <span><img :src=detailForm.image class="avatar"></span>
            </div>
          </el-col>
          <el-col :span="9">
            <div>
              <el-form label-width="90px">
                <el-form-item label="姓名：">
                  <span>{{detailForm.name}}</span>
                </el-form-item>
                <el-form-item label="性别：">
                  <span>{{detailForm.sex}}</span>
                </el-form-item>
                <el-form-item label="联系方式：">
                  <span>{{detailForm.phone}}</span>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :span="9">
            <div>
              <el-form label-width="90px">
                <el-form-item label="资格认证：">
                  <span>{{detailForm.qualification}}</span>
                </el-form-item>
                <el-form-item label="详细地址：">
                  <span>{{detailForm.address}}</span>
                </el-form-item>
                <el-form-item label="服务价格：">
                  <span>{{detailForm.price}}</span>/小时
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="2">
            <div class="font-two">自我介绍</div>
          </el-col>
          <el-col :span="20">
            <div>
              <el-form label-width="90px">
                <el-form-item>
                  <el-input v-model="detailForm.introduction"
                            :disabled="true"
                            type="textarea"
                            placeholder="暂无"
                            resize="none"
                            :autosize="{ minRows: 8, maxRows: 16}">
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="2">
            <div class="font-two">擅长领域</div>
          </el-col>
          <el-col :span="20">
            <div>
              <el-form label-width="90px">
                <el-form-item>
                  <el-input v-model="detailForm.proficiency"
                            :disabled="true"
                            type="textarea"
                            placeholder="暂无"
                            resize="none"
                            :autosize="{ minRows: 8, maxRows: 16}">
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-form>
      <el-row>
        <el-col :span="8">
          <el-form-item>
            <el-button type="danger" icon="el-icon-back" style="margin-left:77vw" @click="go_back">返回</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button type="success" style="margin-left:51vw" @click="appointment">立即预约</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
  import * as psychologistApi from '../api/psychologist'


  export default {
    data() {
      return {
        detailForm: {
          id: '',
          name: '',
          sex: '',
          image: '',
          phone: '',
          introduction: '',
          qualification: '',
          proficiency: '',
          address: '',
          price: ''
        }
      };
    },
    methods: {
      //返回咨询师列表
      go_back: function () {
        this.$router.push({
          path: '/psychologist_list',
          //取出当前url中的参数
          query: {
            page: this.$route.query.page,
            region: this.$route.query.region,
            sex: this.$route.query.sex
          }
        })
      },
      appointment(){
        this.$router.push({
          path: '/appointment/write/'+ this.detailForm.id ,
        })
      }
    },
    //钩子函数
    created: function () {
      //页面参数通过路由传入，这里通过this.$route.params来获取
      this.id = this.$route.params.id;
      //根据主键查询简介信息
      psychologistApi.detail_get(this.id).then((res) => {
        if (res) {
          this.detailForm = res;
        }
      });
    }
  }
</script>
<style scoped>

  .avatar {
    width: 10vw;
    height: 10vw;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid #fdf5e6;
  }

  .font-two {
    width: 15px;
    margin: 40px auto;
    line-height: 28px;
    font-size: 20px;
  }
</style>
