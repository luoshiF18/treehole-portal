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
                  <span>{{this.userName}}</span>
                </el-form-item>
                <el-form-item label="医生姓名：">
                  <span>{{this.form.cltName}}</span>
                </el-form-item>
                <el-form-item label="咨询类型：">
                  <span>{{this.form.appMode}}</span>
                </el-form-item>
                <el-form-item label="订单编号：">
                  <span>{{this.form.id}}</span>
                </el-form-item>
                <el-form-item label="咨询时间：">
                  <span>{{this.form.appDate}}</span>
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
  import utilApi from '@/common/utils';
  export default {
    data() {
      return {
      };
    },
    methods: {
    },

    created: function () {
      this.form = this.$route.query.form

      //取出用户姓名
      this.userName = utilApi.getActiveUser().username
    },
    mounted(){
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
