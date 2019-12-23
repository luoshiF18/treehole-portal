<template>
  <div>
    <el-card style="width: 60%;margin-left: 40px;margin-right: 10px">
      <div :data="activity">
        <h2>{{activity.title}}</h2>

        <div style="color: gray; margin-top: 40px"><span>发布日期：</span><span v-text="formatTime(activity.releaseBeginTime)"></span></div>
        <div style="margin: 30px;"><span  v-html="activity.introduce"></span></div>
      </div>
    </el-card>
  </div>
</template>

<script>
    import * as marketingApi from '../../api/marketing'
    import moment from 'moment';
    export default {
        name: "InteractiveActivityDetail",
        data() {
            return {
                id: '',
                activity: {},
            }
        },
        methods: {
            queryInfo(id){
                marketingApi.queryReleaseInteractiveActivityInfo(this.id).then((res) =>{
                    this.activity = res;
                })
            },
            //格式化时间
            formatTime(date){
                return moment(date).format("YYYY-MM-DD");
            },
        },
        created() {
            this.id = this.$route.query.id;
        },
        mounted() {
            this.queryInfo();
        }
    }
</script>

<style scoped>

</style>
