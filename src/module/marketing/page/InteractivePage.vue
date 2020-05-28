<template>
      <div class="container">
        <div class="xinli-xuyuan">
          <div class="main-title">
            <a target="_blank" class="common-a" href="https://m.xinli001.com/lesson/ttt?source=pc-home">
              <span class="xinli-answer">活动发现</span>
            </a>
            <span class="sub-title">人人都能学的心理学</span>
            <p class="send-content zixun-content">
              <a target="_blank" class="common-a" href="http://www.treehole.com/#/interactiveactivity/more">
                <span class="zixun-icon"></span>
                <!--页面最多只展示两条数据，如果超过两条则显示更多 -->

                <span class="margin-icon" v-if="size>2"> <el-button type="text" @click="toSeeMore">>>>更多活动</el-button> </span>
              </a>
            </p>

          </div>
          <div class="content" style="position: relative;" v-if="interactiveActivities != null">
            <div class="swiper-container xili-xueyuan-new swiper-container-horizontal">
              <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                <div class="swiper-slide swiper-slide-active" style="width: 980px; margin-right: 20px;">
                  <div class="top-fm slide-top" >
                    <div class="top-one top-margin"  v-for="(activity, index) in interactiveActivities" v-if="index<2" :key="index" >
                      <el-card  @click.native="toSeeDetail(activity.id)">
                        <div class="slide-top-img" style="background-image: url('http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg?x-oss-process=image/quality,Q_80')"></div>
                        <div class="info" :data="activity">
                          <p class="info-title" :title="activity.shortTitle">{{activity.shortTitle}}</p>
                          <p class="teacher-info">发布人：{{activity.originatorName}}</p>
                          <del v-text="formatTime(activity.beginTime)"></del>
                          <del>——</del>
                          <del v-text="formatTime(activity.endTime)"></del>
                          <span class="class-info">查看详情</span>
                        </div>
                      </el-card>
                    </div>
                    <div class="top-one "  v-if="size==1||size==0">
                      <a target="_blank" class="common-a" href="javascript:void(0);">
                        <div class="slide-top-img" style="background-image: url('http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg?x-oss-process=image/quality,Q_80')"></div>
                        <div class="info">
                          <p class="info-title" title="暂无活动介绍">暂无活动介绍</p>
                          <p class="teacher-info">敬请期待</p>
                          <!--<span class="pay">欢迎关注</span>-->
                          <del>欢迎关注</del>
                        <!--  <span class="class-info">课程介绍</span>-->
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
            <div id="new-xueyuan-prev" class="swiper-button-prev swiper-button-prev-change swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>
            <div id="new-xueyuan-next" class="swiper-button-next swiper-button-next-change" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
          </div>
        </div>
      </div>
</template>

<script>
    import * as marketingApi from '../api/marketing'
    import moment from 'moment';
    export default {
        name: "InteractivePage",
        data() {
            return {
                size: 0,
                interactiveActivities: [],

            }
        },
        methods: {

            //根据发布时间查询活动
            queryReleaseInteractiveActivity() {
                const today = new Date();
                marketingApi.queryReleaseInteractiveActivity(today).then((res) => {
                    if(res.success){
                        this.size = res.queryResult.list.length;
                        this.interactiveActivities = res.queryResult.list;
                    } else {
                        this.interactiveActivities = [];
                        this.size = 0;
                    }
                })
            },
            //查看活动详细内容
            toSeeDetail(id){
                this.$router.push({
                    path:'/interactiveactivity/info',
                    query: {
                        id:id
                    }
                })
            },
            //更多
            toSeeMore(){
                this.$router.push({
                    path:'/interactiveactivity/more',
                })
            },
            //格式化时间
            formatTime(date){
                return moment(date).format("YYYY-MM-DD");
            },
        },
        mounted() {
            this.queryReleaseInteractiveActivity();
        }
    }
</script>

<style scoped>
  .xinli-xuyuan {
    /* background:#f3f4f5; */
    padding:50px 300px 16px
  }
  .xinli-xuyuan .send-content {
    float:right;
    margin-right:30px;
    line-height:25px;
    font-size:14px;
    cursor:pointer
  }
  .xinli-xuyuan .send-content img {
    float:left;
    margin-right:14px
  }
  .xinli-xuyuan .my-content {
    margin-right:0
  }
  .xinli-xuyuan .main-title {
    margin-bottom:30px
  }
  .xinli-xuyuan .main-title .xinli-answer {
    font-family:PingFangSC-Medium;
    font-size:24px;
    color:#0b8bff;
    line-height:28px;
    margin-right:14px
  }
  .xinli-xuyuan .main-title .sub-title {
    font-size:16px;
    color:#999;
    line-height:18px
  }
  .xinli-xuyuan .content {
    width:980px;
    cursor:pointer;
    position:relative
  }
  .xinli-xuyuan .swiper-xueyuan {
    border:none;
    z-index:0
  }
  .xinli-xuyuan .swiper-xueyuan a {
    text-decoration:none;
    display:block
  }
  .xinli-xuyuan .swiper-slide {
    text-align:center;
    font-size:18px;
    background:#fff;
    display:-webkit-box;
    display:-ms-flexbox
  }
  .xinli-xuyuan .slide-top {
    width:480px;
    height:452px;
    background:#fff;
    border-radius:10px;
    position:relative
  }
  .xinli-xuyuan .slide-top .slide-top-img {
    height:326px;
    width:480px;
    position:absolute;
    top:0;
    left:0;
    background-repeat:no-repeat;
    border-radius:10px 10px 0 0
  }
  .xinli-xuyuan .slide-top .slide-top-img .play-icon {
    width:62px;
    height:62px;
    top:50%;
    left:50%;
    position:absolute;
    -webkit-transform:translate(-50%, -50%);
    -ms-transform:translate(-50%, -50%);
    transform:translate(-50%, -50%);
    z-index:1
  }
  .xinli-xuyuan .slide-top .zhezhao {
    height:326px;
    width:480px;
    position:absolute;
    top:0;
    left:0;
    background:#000;
    opacity:.3;
    border-radius:10px 10px 0 0
  }
  .xinli-xuyuan .slide-top .info {
    height:126px;
    width:450px;
    position:absolute;
    bottom:0;
    left:0;
    text-align:left;
    margin-left:20px
  }
  .xinli-xuyuan .slide-top .info .info-title {
    font-size:18px;
    color:#333;
    line-height:24px;
    height:24px;
    margin-top:15px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    margin-right:20px
  }
  .xinli-xuyuan .slide-top .info .teacher-info {
    font-size:16px;
    color:#666;
    line-height:16px;
    margin-top:10px
  }
  .xinli-xuyuan .slide-top .info .free {
    display:inline-block;
    height:24px;
    line-height:24px;
    padding:0 12px;
    background:#14cc76;
    border-radius:100px;
    margin-right:14px;
    margin-top:10px;
    color:#fff
  }
  .xinli-xuyuan .slide-top .info del {
    font-size:14px;
    color:#999;
    line-height:16px
  }
  .xinli-xuyuan .slide-top .info .class-info {
    width:80px;
    height:24px;
    line-height:24px;
    text-align:center;
    float:right;
    margin-right:10px;
    margin-top:6px;
    border:1px solid #666;
    border-radius:85px;
    color:#666;
    font-size:14px
  }
  .xinli-xuyuan .slide-top .info .pay {
    color:#ff5b5b;
    line-height:16px;
    display:inline-block;
    border-radius:100px;
    margin-right:14px;
    margin-top:14px;
    font-weight:700;
    font-size:14px
  }
  .xinli-xuyuan .slide-bottom {
    height:278px;
    /* background:#f3f4f5; */
    border-radius:10px
  }
  .xinli-xuyuan .slide-bottom .play-icon {
    width:48px!important;
    height:48px!important
  }
  .xinli-xuyuan .slide-bottom .left-info {
    width:230px;
    height:278px;
    position:relative;
    background:#fff;
    border-radius:10px
  }
  .xinli-xuyuan .slide-bottom .slide-top-img {
    width:230px;
    height:157px
  }
  .xinli-xuyuan .slide-bottom .margin-right {
    margin-right:20px
  }
  .xinli-xuyuan .slide-bottom .zhezhao {
    width:230px;
    height:157px
  }
  .xinli-xuyuan .slide-bottom .info {
    width:200px;
    height:120px
  }
  .xinli-xuyuan .slide-bottom .info .info-title {
    font-size:16px;
    color:#333;
    line-height:20px;
    height:38px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    margin-right:0
  }
  .xinli-xuyuan .slide-bottom .info .teacher-info {
    font-size:14px;
    color:#666;
    line-height:16px
  }
  .xinli-xuyuan .slide-bottom .info .class-info {
    width:72px;
    margin-right:0;
    margin-top:9px;
    font-size:12px;
    line-height:24px
  }
  .xili-xueyuan-new a {
    text-decoration:none;
    display:block
  }
  .xili-xueyuan-new .swiper-slide {
    font-size:18px;
    display:block;
    /* background:#f3f4f5; */
    text-align:left
  }
  .xili-xueyuan-new .bottom-fm, .xili-xueyuan-new .top-fm {
    width:100%;
    height:452px
  }
  .xili-xueyuan-new .bottom-one, .xili-xueyuan-new .top-one {
    width:480px;
    height:408px;
    display:inline-block;
    position:relative
  }
  .xili-xueyuan-new .top-margin {
    margin-right:18px
  }
  .xili-xueyuan-new .bottom-one {
    width:230px;
    height:259px;
    background:#fff;
    border-radius:10px;
    box-shadow: 0 2px 20px 0 #eaeaea;
  }
  .xili-xueyuan-new .bottom-margin {
    margin-right:11px
  }
  .xili-xueyuan-new .slide-top {
    width:1005px;
    height:408px;
    /* background:#f3f4f5; */
    border-radius:10px;
    position:relative
  }
  .xili-xueyuan-new .slide-top .top-one {
    background:#fff;
    box-shadow: 0 2px 20px 0 #eaeaea;
    border-radius:20px;
  }
  .xili-xueyuan-new .slide-top .slide-top-img {
    height:270px;
    width:480px;
    position:absolute;
    top:0;
    left:0;
    background-repeat:no-repeat;
    background-size:100% auto;
    border-radius:10px 10px 0 0
  }
  .xili-xueyuan-new .slide-top .slide-top-img .play-icon {
    width:62px;
    height:62px;
    top:50%;
    left:50%;
    position:absolute;
    -webkit-transform:translate(-50%, -50%);
    -ms-transform:translate(-50%, -50%);
    transform:translate(-50%, -50%);
    z-index:1
  }
  .xili-xueyuan-new .slide-top .zhezhao {
    height:326px;
    width:480px;
    position:absolute;
    top:0;
    left:0;
    background:#000;
    opacity:.3;
    border-radius:10px 10px 0 0
  }
  .xili-xueyuan-new .slide-top .info {
    height:126px;
    width:450px;
    position:absolute;
    bottom:0;
    left:0;
    text-align:left;
    margin-left:20px
  }
  .xili-xueyuan-new .slide-top .info .info-title {
    font-size:18px;
    color:#333;
    line-height:24px;
    margin-top:15px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
    margin-right:20px
  }
  .xili-xueyuan-new .slide-top .info .teacher-info {
    font-size:16px;
    color:#666;
    line-height:16px;
    margin-top:10px
  }
  .xili-xueyuan-new .slide-top .info .free {
    display:inline-block;
    height:24px;
    line-height:24px;
    padding:0 12px;
    background:#14cc76;
    border-radius:100px;
    margin-right:14px;
    margin-top:12px;
    color:#fff;
    font-size:14px
  }
  .xili-xueyuan-new .slide-top .info del {
    font-size:14px;
    color:#999;
    line-height:16px
  }
  .xili-xueyuan-new .slide-top .info .class-info {
    width:80px;
    height:24px;
    line-height:24px;
    text-align:center;
    float:right;
    margin-right:10px;
    margin-top:12px;
    border:1px solid #666;
    border-radius:85px;
    color:#666;
    font-size:14px
  }
  .xili-xueyuan-new .slide-top .info .pay {
    color:#ff5b5b;
    line-height:16px;
    display:inline-block;
    border-radius:100px;
    margin-right:14px;
    margin-top:14px;
    font-weight:700;
    font-size:14px
  }
  .xili-xueyuan-new .slide-bottom {
    height:278px;
    /* background:#f3f4f5; */
    border-radius:10px;
    position:relative;
    margin-top:20px
  }
  .xili-xueyuan-new .slide-bottom .play-icon {
    width:48px!important;
    height:48px!important;
    top:50%;
    left:50%;
    position:absolute;
    -webkit-transform:translate(-50%, -50%);
    -ms-transform:translate(-50%, -50%);
    transform:translate(-50%, -50%);
    z-index:1
  }
  .xili-xueyuan-new .slide-bottom .left-info {
    width:230px;
    height:278px;
    position:relative;
    background:#fff;
    border-radius:10px
  }
  .xili-xueyuan-new .slide-bottom .slide-top-img {
    width:230px;
    height:129px;
    position:absolute;
    top:0;
    left:0;
    background-repeat:no-repeat;
    border-radius:10px 10px 0 0;
    background-size:100% auto
  }
  .xili-xueyuan-new .slide-bottom .margin-right {
    margin-right:20px
  }
  .xili-xueyuan-new .slide-bottom .zhezhao {
    width:230px;
    height:157px;
    position:absolute;
    top:0;
    left:0;
    background:#000;
    opacity:.3;
    border-radius:10px 10px 0 0
  }
  .xili-xueyuan-new .slide-bottom .info {
    width:200px;
    height:130px;
    position:absolute;
    bottom:0;
    left:0;
    text-align:left;
    margin-left:20px
  }
  .xili-xueyuan-new .slide-bottom .info .info-title {
    font-size:16px;
    color:#333;
    line-height:20px;
    height:38px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    margin-right:0;
    margin-top:15px
  }
  .xili-xueyuan-new .slide-bottom .info .teacher-info {
    font-size:14px;
    color:#666;
    line-height:16px;
    margin-top:10px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1
  }
  .xili-xueyuan-new .slide-bottom .info .class-info {
    width:72px;
    margin-right:0;
    margin-top:10px;
    font-size:12px;
    line-height:24px;
    border:1px solid #666;
    border-radius:85px;
    color:#666;
    text-align:center;
    float:right;
    height:24px
  }
  .xili-xueyuan-new .slide-bottom .info .free {
    display:inline-block;
    height:22px;
    line-height:22px;
    padding:0 12px;
    background:#14cc76;
    border-radius:100px;
    margin-right:14px;
    margin-top:12px;
    color:#fff;
    font-size:12px
  }
  .xili-xueyuan-new .slide-bottom .info del {
    font-size:14px;
    color:#999;
    line-height:16px
  }
  .xili-xueyuan-new .slide-bottom .info .pay {
    color:#ff5b5b;
    line-height:16px;
    display:inline-block;
    border-radius:100px;
    margin-right:14px;
    margin-top:14px;
    font-weight:700;
    font-size:14px
  }
</style>
