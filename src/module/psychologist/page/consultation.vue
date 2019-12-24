<template>
  <div>
    <div>
      <div class="dv">
        <el-row :gutter="20">
          <el-col :span="4">
            <div>
              <span><img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                         class="avatar"></span>
            </div>
          </el-col>
          <el-col :span="9">
            <div>
              <el-form label-width="15%">
                <el-form-item label="用户姓名：">
                  <span>张三{{detailForm.name}}</span>
                </el-form-item>
                <el-form-item label="医生姓名：">
                  <span>李四{{detailForm.sex}}</span>
                </el-form-item>
                <el-form-item label="咨询类型：">
                  <span>视频{{detailForm.phone}}</span>
                </el-form-item>
                <el-form-item label="订单编号：">
                  <span>11111111111111{{detailForm.phone}}</span>
                </el-form-item>
                <el-form-item label="咨询时长：">
                  <span>约3小时{{detailForm.phone}}</span>
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
            <el-button type="success" style="margin-left:50%" disabled>正在咨询......</el-button>
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
      appointment() {
        this.$router.push({
          path: '/appointment/write/' + this.detailForm.id,
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
    border: 5px solid #fdf5e6;
  }

</style>
