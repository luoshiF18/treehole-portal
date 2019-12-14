<template>

  <el-row>
    <!--总共三份，第一份-->
    <el-col :span="16">
      <div class="grid-content bg-purple">
        <el-card>
          <!--      轮播图-->
          <el-card class="lunbotu_card">
            <div class="lunbo-box">
              <el-carousel height="220px">
                <el-carousel-item
                  class="lunbo-box-item"
                  v-for="(item,index) in img_lunbotu"
                  :key="index"
                >
                  <img :src="item.src" class="lunbotu" alt="轮播图">
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-card>
          <!--      轮播图结束-->
          <!--     心理分类 -->
          <!--                <el-card class="type_high">-->
          <el-card>
            <el-tabs type="card" :tab-position="tabPosition" @tab-click="findTypeScale" value="1">
              <el-tab-pane
                :key="item.id"
                v-for="(item, index) in scale_type"
                :label="item.scaleType"
                :name="item.id">
                <!--<span v-text="item.id"></span>-->
                <!--量表列表展示-->
                <!--                <el-card class="type_high2">-->
                <el-card v-loading="loading">
                  <div v-for="(scale, index) in scale_By_typeId" :key="scale.id">
                    <router-link tag="span" :to="{path:'/scale/page/scale_test',query:{
                         scaleId: scale.id
                         }}">
                      <el-card class="scale_list">
                        <h3 v-text="scale.scaleName" type="text"></h3><br>
                        创建时间： <span v-text="scale.createTime" style="margin-right: 150px"></span>
                        价格： <span v-text="scale.price"></span>元
                      </el-card>
                    </router-link>
                  </div>
                </el-card>

                <!-- 量表列表展示结束-->
              </el-tab-pane>
            </el-tabs>
          </el-card>
          <!--     心理分类结束 -->
        </el-card>
      </div>
    </el-col>
    <!--总共三份，第二份-->
    <el-col :span="4">
      <div class="grid-content bg-purple-light">
        <el-card style="margin-left: 20px;margin-top: 100px">
          <el-card class="activity_high">
            友情链接：<br><br>
            <a href="http://localhost:40200/swagger-ui.html" target="_blank">YH的swagger-ui</a><br><br>
            <a href="https://www.baidu.com" target="_blank">百度一下，你就知道</a><br><br>
            <a href="https://element.eleme.cn/2.0/#/zh-CN/component/installation" target="_blank">element-ui文档</a>
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
      <div class="grid-content bg-purple">第三份</div>
    </el-col>

  </el-row>
</template>

<script>
  import * as evApi from '../api/evApi'

  export default {
    name: "scale_list",
    data() {
      return {
        loading: true,
        //根据分类查询出来的量表列表
        scale_By_typeId: [{}],
        //所有分类
        scale_type: [{scaleName: '暂无'}],
        //分类位置，在左面
        tabPosition: 'left',
        //轮播图图片
        img_lunbotu: [
          {src: require("../images/1.jpg")},
          {src: require("../images/2.jpg")},
          {src: require("../images/3.jpg")},
          {src: require("../images/4.jpg")},
        ]
      }
    },
    methods: {
      //查询所有类型
      queryAllType: function () {
        evApi.type_list().then((res) => {
          this.scale_type = res.queryResult.list;
        });
      },
      //根据分类id查询类型
      findTypeScale(tab) {
        // console.log(tab.name);
        evApi.type_scale_list(tab.name).then((res) => {
          // console.log(res.queryResult);
          this.scale_By_typeId = res.queryResult.list;
          this.loading = false;
        });
      },
      //根据分类id查询类型,初始化使用
      findTypeScaleFirst(id) {
        // console.log(tab.name);
        evApi.type_scale_list(id).then((res) => {
          // console.log(res.queryResult);
          this.scale_By_typeId = res.queryResult.list;
          this.loading = false;
          // console.log(this.scale_By_typeId);
        });
      },
    },
    created() {

    },
    mounted() {
      //初始化查询类型
      this.queryAllType();
      //初始化查询类型为1的信息
      this.findTypeScaleFirst(1);

    }
  }
</script>
<style>
  .scale_list {
    cursor: pointer;
    margin-top: 10px;
    background-color: #DBDBDB;
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
