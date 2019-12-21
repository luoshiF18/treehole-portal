<template>
  <!--<div style="margin-bottom: 15px; margin-left: 19%">修改个人信息</div>-->
  <el-row type="flex" class="row-bg" justify="center" style="margin-top: 80px">
    <el-col :span="18">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item>基本信息修改</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>

      <el-card class="card">
        <el-form   :model="userForm"
                   label-width="80px"
                   ref="userForm"
                   :rules="userFormRules">
        <el-form-item label="用户头像"  prop="user_image" >
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      <el-form-item label="昵称" prop="user_nickname">
        <el-input v-model="userForm.user_nickname" auto-complete="off" ></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="user_name">
        <el-input v-model="userForm.user_name" auto-complete="off" ></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="userForm.gender">
          <el-radio class="radio" label="男">男</el-radio>
          <el-radio class="radio" label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出生日期" prop="user_birth">
        <el-date-picker type="datetime" placeholder="出生日期" v-model="userForm.user_birth"></el-date-picker>
      </el-form-item>
      <el-form-item label="邮箱" prop="user_email">
        <el-input v-model="userForm.user_email" auto-complete="off" ></el-input>
      </el-form-item>
      <el-form-item label="QQ号" prop="user_qq">
        <el-input  v-model="userForm.user_qq" auto-complete="off" ></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="user_wechat">
        <el-input  v-model="userForm.user_wechat" auto-complete="off" ></el-input>
      </el-form-item>
      <el-form-item label="地区" prop="user_region">
        <el-input  v-model="userForm.user_region" auto-complete="off" ></el-input>
      </el-form-item>
      <el-form-item label="企业公司" prop="company_id">
        <el-input  v-model="userForm.company_id" auto-complete="off" ></el-input>
      </el-form-item>

    </el-form>
        <div class="dialog-footer">
          <el-button @click="go_back">返回</el-button>
          <el-button type="primary" @click.native="editSubmit" :loading="addLoading">提交</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
  import * as userApi from '../../api/member'
  import  utilApi from '../../../../common/utils'
  import moment from 'moment'
  export default{
    data(){
      return {
        //user_id:'',
        prepage: 1,
        addLoading: false,//加载效果标记
        //新增界面数据
        params: {  //  数据对象 这里和上面的查询表单做了双向绑定
          page: 1, //  当前页
          size: 6, //  每页显示数据的条数
          user_id: '',

        },
        userForm: {
          user_id:'',
          user_nickname:'',
          user_image:'',
          user_name:'',
          gender:'',
          user_birth:'',
          user_email:'',
          user_qq:'',
          user_wechat:'',
          user_region:'',
          company_id:'',
        },
        userFormRules: { // 添加界面必填选项+不填警告 rules
          user_nickname: [{required: true, message: '（必填）请输入用户昵称',   trigger: 'blur'}],
        },
      }
    },
    methods:{
      go_back(){
        this.$router.push({
          path: '/member/user_center'
        })
      },
      editSubmit(){
        this.$refs.userForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.addLoading = true;
              userApi.user_edit(this.userForm).then((res) => {
                console.log(res);
                if(res.success){
                  this.addLoading = false;
                  this.$message({
                    message: '提交成功',
                    type: 'success'
                  });
                  //返回
                  this.go_back();

                }else{
                  this.addLoading = false;
                  this.$message.error('提交失败!' + res.message);
                }
              });
            });
          }
        });
      },
      /*y用户头像*/
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    created: function () {
      //this.user_id=this.$route.params.user_id;
      //this.prepage = this.$route.query.page || '';
      this.userForm.user_id = utilApi.getActiveUser().userid;

      //根据主键查询页面信息
      userApi.user_get(this.userForm.user_id).then((res) => {
        console.log(res);
        //if(res){
          this.userForm = res;
          //alert(this.userForm)
      //  }
      });
    },
    mounted:function(){
    }
  }
</script>
<style>
  .card {
    width: 70%;
    margin-top: 10px;
    margin-left: 12%;
  }
  /*上传头像*/
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.dialog-footer {
  margin-left: 70%;


}
</style>
