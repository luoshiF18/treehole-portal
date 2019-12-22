<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top:10px">
    <el-col :span="12">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/member/user_center' }">用户中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的预约</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <div>树洞预约信息</div>
      用户名 咨询师
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "yuyue_order"
    }
</script>

<style scoped>

</style>
