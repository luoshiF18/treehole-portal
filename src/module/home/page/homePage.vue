<template>
  <div>
    <div class="dv-homePage">
      <el-row class="el-row-1">
        <el-col class="el-col-1" :span="24">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,index) in img_pic" :key="index">
              <img :src="item.src" class="medium" alt="轮播图">
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <div class="xinli-test">
        <div class="main-title">
          <a target="_blank" class="common-a" href="https://www.xinli001.com/ceshi/?source=pc-home">
            <span class="xinli-answer">心理测试</span>
          </a>
          <span class="sub-title">认识自己·了解他人</span>
          <div class="num">
            <a target="_blank" class="common-a" href="https://www.xinli001.com/ceshi?source=pc-home">
              <span class="number">1600+</span>
              <span style="margin-right: 10px">趣味测试</span>
              <span class="number">140+</span>
              <span>专业测评</span>
            </a>
            <span class="tringle"></span>
          </div>
        </div>
        <div class="content">
          <div class="swiper-container swiper-test swiper-container-horizontal swiper-container-free-mode swiper-container-multirow">
            <div class="swiper-wrapper" style="width: 1200px; transform: translate3d(0px, 0px, 0px);">
              <div class="swiper-slide swiper-slide-active" data-swiper-column="0" data-swiper-row="0" style="order: 0; width: 230px; margin-right: 20px;">
                <div class="test-topic">
                  <a target="_blank" class="common-a" href="https://m.xinli001.com/ceshi/99897751?source=pc-home">
                    <div class="go-test">去测试</div>
                    <img src="https://ossimg.xinli001.com/20171225/16544aa48c890dd77ee4f8d8cadd0cb7.jpg?x-oss-process=image/quality,Q_80" alt="">
                    <p title="性格优势评估">性格优势评估 </p>
                    <div class="two-tip">
                      <span class="no-free">￥9.90</span>
                      <span style="width: 70px"></span>
                      <span class="test">1918人测试过</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-active" data-swiper-column="0" data-swiper-row="0" style="order: 0; width: 230px; margin-right: 20px;">
                <div class="test-topic">
                  <a target="_blank" class="common-a" href="https://m.xinli001.com/ceshi/99897751?source=pc-home">
                    <div class="go-test">去测试</div>
                    <img src="https://ossimg.xinli001.com/20171225/16544aa48c890dd77ee4f8d8cadd0cb7.jpg?x-oss-process=image/quality,Q_80" alt="">
                    <p title="性格优势评估">性格优势评估 </p>
                    <div class="two-tip">
                      <span class="no-free">￥9.90</span>
                      <span style="width: 70px"></span>
                      <span class="test">1918人测试过</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-active" data-swiper-column="0" data-swiper-row="0" style="order: 0; width: 230px; margin-right: 20px;">
                <div class="test-topic">
                  <a target="_blank" class="common-a" href="https://m.xinli001.com/ceshi/99897751?source=pc-home">
                    <div class="go-test">去测试</div>
                    <img src="https://ossimg.xinli001.com/20171225/16544aa48c890dd77ee4f8d8cadd0cb7.jpg?x-oss-process=image/quality,Q_80" alt="">
                    <p title="性格优势评估">性格优势评估 </p>
                    <div class="two-tip">
                      <span class="no-free">￥9.90</span>
                      <span style="width: 70px"></span>
                      <span class="test">1918人测试过</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-active" data-swiper-column="0" data-swiper-row="0" style="order: 0; width: 230px; margin-right: 20px;">
                <div class="test-topic">
                  <a target="_blank" class="common-a" href="https://m.xinli001.com/ceshi/99897751?source=pc-home">
                    <div class="go-test">去测试</div>
                    <img src="https://ossimg.xinli001.com/20171225/16544aa48c890dd77ee4f8d8cadd0cb7.jpg?x-oss-process=image/quality,Q_80" alt="">
                    <p title="性格优势评估">性格优势评估 </p>
                    <div class="two-tip">
                      <span class="no-free">￥9.90</span>
                      <span style="width: 70px"></span>
                      <span class="test">1918人测试过</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-active" data-swiper-column="0" data-swiper-row="0" style="order: 0; width: 230px; margin-right: 20px;">
                <div class="test-topic">
                  <a target="_blank" class="common-a" href="https://m.xinli001.com/ceshi/99897751?source=pc-home">
                    <div class="go-test">去测试</div>
                    <img src="https://ossimg.xinli001.com/20171225/16544aa48c890dd77ee4f8d8cadd0cb7.jpg?x-oss-process=image/quality,Q_80" alt="">
                    <p title="性格优势评估">性格优势评估 </p>
                    <div class="two-tip">
                      <span class="no-free">￥9.90</span>
                      <span style="width: 70px"></span>
                      <span class="test">1918人测试过</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-active" data-swiper-column="0" data-swiper-row="0" style="order: 0; width: 230px; margin-right: 20px;">
                <div class="test-topic">
                  <a target="_blank" class="common-a" href="https://m.xinli001.com/ceshi/99897751?source=pc-home">
                    <div class="go-test">去测试</div>
                    <img src="https://ossimg.xinli001.com/20171225/16544aa48c890dd77ee4f8d8cadd0cb7.jpg?x-oss-process=image/quality,Q_80" alt="">
                    <p title="性格优势评估">性格优势评估 </p>
                    <div class="two-tip">
                      <span class="no-free">￥9.90</span>
                      <span style="width: 70px"></span>
                      <span class="test">1918人测试过</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-active" data-swiper-column="0" data-swiper-row="0" style="order: 0; width: 230px; margin-right: 20px;">
                <div class="test-topic">
                  <a target="_blank" class="common-a" href="https://m.xinli001.com/ceshi/99897751?source=pc-home">
                    <div class="go-test">去测试</div>
                    <img src="https://ossimg.xinli001.com/20171225/16544aa48c890dd77ee4f8d8cadd0cb7.jpg?x-oss-process=image/quality,Q_80" alt="">
                    <p title="性格优势评估">性格优势评估 </p>
                    <div class="two-tip">
                      <span class="no-free">￥9.90</span>
                      <span style="width: 70px"></span>
                      <span class="test">1918人测试过</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-active" data-swiper-column="0" data-swiper-row="0" style="order: 0; width: 230px; margin-right: 20px;">
                <div class="test-topic">
                  <a target="_blank" class="common-a" href="https://m.xinli001.com/ceshi/99897751?source=pc-home">
                    <div class="go-test">去测试</div>
                    <img src="https://ossimg.xinli001.com/20171225/16544aa48c890dd77ee4f8d8cadd0cb7.jpg?x-oss-process=image/quality,Q_80" alt="">
                    <p title="性格优势评估">性格优势评估 </p>
                    <div class="two-tip">
                      <span class="no-free">￥9.90</span>
                      <span style="width: 70px"></span>
                      <span class="test">1918人测试过</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
          <div id="test-prev" class="swiper-button-prev swiper-button-prev-change swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>
          <div id="test-next" class="swiper-button-next swiper-button-next-change" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
        </div>
      </div>
    </div>
    <div class="container  container-gray">
      <div class="xinli-consult">
        <div class="main-title">
          <a target="_blank" class="common-a" href="https://www.xinli001.com/zx?source=pc-home">
            <span class="xinli-answer">心理咨询</span>
          </a>
          <span class="sub-title">没有人是一座孤岛，每个人都需要心理咨询</span>
          <p class="send-content my-content">
            <a href="https://www.xinli001.com/zx?source=pc-home">
              <span style="color:#0B8BFF">600+</span>
              <span>精选咨询师</span>
              <span class="tringle"></span>
            </a>
          </p>
          <p class="send-content">
            <a target="_blank" class="common-a" href="https://www.xinli001.com/zx/apply-new">
              <span class="yxl-icon yxl-font-agree"></span>
              <span class="margin-icon">咨询师入驻</span>
            </a>
          </p>
        </div>
        <div class="content">
          <div class="swiper-container swiper-consult swiper-container-horizontal swiper-container-free-mode">
            <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
              <div class="swiper-slide swiper-slide-active" style="width: 230px; margin-right: 15px;">
                <div class="user-img">
                  <div class="hidden-img">
                    <img src="https://ossimg.xinli001.com/20180514/c4c90b834c37569c31ff4b32c1cb99b5.png!120x120" alt="">
                  </div>
                  <div class="zhezhao"></div>
                  <span class="consult-name">广梅芳</span>
                  <img class="user-radius-img" src="https://ossimg.xinli001.com/20180514/c4c90b834c37569c31ff4b32c1cb99b5.png!120x120" alt="">
                  <p class="show-user-tip">累计帮助了148人</p>
                  <ul class="user-introudct">
                    <li data-title="日本临床心理士（日本临床心理士资格认定协会认定）">日本临床心理士（日本临床心理士资格认定协会认定）</li>
                    <li data-title="台湾临床心理师（台湾考试院高考通过证明）">台湾临床心理师（台湾考试院高考通过证明）</li>
                  </ul>
                  <p class="aera-info" title="个人成长、职场心理、性心理">擅长：个人成长、职场心理、性心理 </p>
                  <p class="prew-metting">
                    <a target="_blank" class="common-a" href="https://www.xinli001.com/expert/1005374361?source=pc-home">预约</a>
                  </p>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-active" style="width: 230px; margin-right: 15px;">
                <div class="user-img">
                  <div class="hidden-img">
                    <img src="https://ossimg.xinli001.com/20180514/c4c90b834c37569c31ff4b32c1cb99b5.png!120x120" alt="">
                  </div>
                  <div class="zhezhao"></div>
                  <span class="consult-name">广梅芳</span>
                  <img class="user-radius-img" src="https://ossimg.xinli001.com/20180514/c4c90b834c37569c31ff4b32c1cb99b5.png!120x120" alt="">
                  <p class="show-user-tip">累计帮助了148人</p>
                  <ul class="user-introudct">
                    <li data-title="日本临床心理士（日本临床心理士资格认定协会认定）">日本临床心理士（日本临床心理士资格认定协会认定）</li>
                    <li data-title="台湾临床心理师（台湾考试院高考通过证明）">台湾临床心理师（台湾考试院高考通过证明）</li>
                  </ul>
                  <p class="aera-info" title="个人成长、职场心理、性心理">擅长：个人成长、职场心理、性心理 </p>
                  <p class="prew-metting">
                    <a target="_blank" class="common-a" href="https://www.xinli001.com/expert/1005374361?source=pc-home">预约</a>
                  </p>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-active" style="width: 230px; margin-right: 15px;">
                <div class="user-img">
                  <div class="hidden-img">
                    <img src="https://ossimg.xinli001.com/20180514/c4c90b834c37569c31ff4b32c1cb99b5.png!120x120" alt="">
                  </div>
                  <div class="zhezhao"></div>
                  <span class="consult-name">广梅芳</span>
                  <img class="user-radius-img" src="https://ossimg.xinli001.com/20180514/c4c90b834c37569c31ff4b32c1cb99b5.png!120x120" alt="">
                  <p class="show-user-tip">累计帮助了148人</p>
                  <ul class="user-introudct">
                    <li data-title="日本临床心理士（日本临床心理士资格认定协会认定）">日本临床心理士（日本临床心理士资格认定协会认定）</li>
                    <li data-title="台湾临床心理师（台湾考试院高考通过证明）">台湾临床心理师（台湾考试院高考通过证明）</li>
                  </ul>
                  <p class="aera-info" title="个人成长、职场心理、性心理">擅长：个人成长、职场心理、性心理 </p>
                  <p class="prew-metting">
                    <a target="_blank" class="common-a" href="https://www.xinli001.com/expert/1005374361?source=pc-home">预约</a>
                  </p>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-active" style="width: 230px; margin-right: 15px;">
                <div class="user-img">
                  <div class="hidden-img">
                    <img src="https://ossimg.xinli001.com/20180514/c4c90b834c37569c31ff4b32c1cb99b5.png!120x120" alt="">
                  </div>
                  <div class="zhezhao"></div>
                  <span class="consult-name">广梅芳</span>
                  <img class="user-radius-img" src="https://ossimg.xinli001.com/20180514/c4c90b834c37569c31ff4b32c1cb99b5.png!120x120" alt="">
                  <p class="show-user-tip">累计帮助了148人</p>
                  <ul class="user-introudct">
                    <li data-title="日本临床心理士（日本临床心理士资格认定协会认定）">日本临床心理士（日本临床心理士资格认定协会认定）</li>
                    <li data-title="台湾临床心理师（台湾考试院高考通过证明）">台湾临床心理师（台湾考试院高考通过证明）</li>
                  </ul>
                  <p class="aera-info" title="个人成长、职场心理、性心理">擅长：个人成长、职场心理、性心理 </p>
                  <p class="prew-metting">
                    <a target="_blank" class="common-a" href="https://www.xinli001.com/expert/1005374361?source=pc-home">预约</a>
                  </p>
                </div>
              </div>
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </div>
          <div id="consult-prev" class="swiper-button-prev swiper-button-prev-change swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>
          <div id="consult-next" class="swiper-button-next swiper-button-next-change" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="xinli-xuyuan">
        <div class="main-title">
          <a target="_blank" class="common-a" href="https://m.xinli001.com/lesson/ttt?source=pc-home">
            <span class="xinli-answer">心理学院</span>
          </a>
          <span class="sub-title">人人都能学的心理学</span>
          <p class="send-content my-content">
            <a target="_blank" class="common-a" href="https://m.xinli001.com/lesson/userCenter">
              <span class="yxl-icon yxl-font-听课程"></span>
              <span class="margin-icon">我的课程</span>
            </a>
          </p>
          <p class="send-content zixun-content">
            <a target="_blank" class="common-a" href="https://pro.xinli001.com/lesson/proIndex">
              <span class="zixun-icon"></span>
              <span class="margin-icon">咨询师课程</span>
            </a>
          </p>
        </div>
        <div class="content" style="position: relative;">
          <div class="swiper-container xili-xueyuan-new swiper-container-horizontal">
            <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
              <div class="swiper-slide swiper-slide-active" style="width: 980px; margin-right: 20px;">
                <div class="top-fm slide-top">
                  <div class="top-one top-margin">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/308?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190601/b413701eaceddac63f70b63a6beee391.jpg?x-oss-process=image/quality,Q_80')"></div>
                      <div class="info">
                        <p class="info-title" title="李松蔚认知思维16讲">李松蔚认知思维16讲</p>
                        <p class="teacher-info">教师介绍：李松蔚</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
                      </div>
                    </a>
                  </div>
                  <div class="top-one ">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/248?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190912/2740b50af2b1f314255105f672712430.jpg?x-oss-process=image/quality,Q_80')"></div>
                      <div class="info">
                        <p class="info-title" title="北大张昕：人人都用得上的心理学课">北大张昕：人人都用得上的心理学课</p>
                        <p class="teacher-info">教师介绍：张昕</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="bottom-fm slide-bottom">
                  <div class="bottom-one bottom-margin">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/293?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190601/6c82181baf8ede9744a7cb8ddf5461c6.jpg!300')"></div>
                      <div class="info">
                        <p class="info-title" title="爱人先爱己，女性自爱力36堂心理提升课">爱人先爱己，女性自爱力36堂心理提升课</p>
                        <p class="teacher-info">教师介绍：周梵</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
                      </div>
                    </a>
                  </div>
                  <div class="bottom-one bottom-margin">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/293?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190601/6c82181baf8ede9744a7cb8ddf5461c6.jpg!300')"></div>
                      <div class="info">
                        <p class="info-title" title="爱人先爱己，女性自爱力36堂心理提升课">爱人先爱己，女性自爱力36堂心理提升课</p>
                        <p class="teacher-info">教师介绍：周梵</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
                      </div>
                    </a>
                  </div>
                  <div class="bottom-one bottom-margin">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/293?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190601/6c82181baf8ede9744a7cb8ddf5461c6.jpg!300')"></div>
                      <div class="info">
                        <p class="info-title" title="爱人先爱己，女性自爱力36堂心理提升课">爱人先爱己，女性自爱力36堂心理提升课</p>
                        <p class="teacher-info">教师介绍：周梵</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
                      </div>
                    </a>
                  </div>
                  <div class="bottom-one bottom-margin">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/293?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190601/6c82181baf8ede9744a7cb8ddf5461c6.jpg!300')"></div>
                      <div class="info">
                        <p class="info-title" title="爱人先爱己，女性自爱力36堂心理提升课">爱人先爱己，女性自爱力36堂心理提升课</p>
                        <p class="teacher-info">教师介绍：周梵</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
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
    <div class="container">
      <div class="xinli-xuyuan">
        <div class="main-title">
          <a target="_blank" class="common-a" href="https://m.xinli001.com/lesson/ttt?source=pc-home">
            <span class="xinli-answer">活动发现</span>
          </a>
          <span class="sub-title">人人都能学的心理学</span>
          <p class="send-content my-content">
            <a target="_blank" class="common-a" href="https://m.xinli001.com/lesson/userCenter">
              <span class="yxl-icon yxl-font-听课程"></span>
              <span class="margin-icon">我的课程</span>
            </a>
          </p>
          <p class="send-content zixun-content">
            <a target="_blank" class="common-a" href="https://pro.xinli001.com/lesson/proIndex">
              <span class="zixun-icon"></span>
              <span class="margin-icon">咨询师课程</span>
            </a>
          </p>

        </div>
        <div class="content" style="position: relative;">
          <div class="swiper-container xili-xueyuan-new swiper-container-horizontal">
            <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
              <div class="swiper-slide swiper-slide-active" style="width: 980px; margin-right: 20px;">
                <div class="top-fm slide-top">
                  <div class="top-one top-margin">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/308?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190601/b413701eaceddac63f70b63a6beee391.jpg?x-oss-process=image/quality,Q_80')"></div>
                      <div class="info">
                        <p class="info-title" title="李松蔚认知思维16讲">李松蔚认知思维16讲</p>
                        <p class="teacher-info">教师介绍：李松蔚</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
                      </div>
                    </a>
                  </div>
                  <div class="top-one ">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/248?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190912/2740b50af2b1f314255105f672712430.jpg?x-oss-process=image/quality,Q_80')"></div>
                      <div class="info">
                        <p class="info-title" title="北大张昕：人人都用得上的心理学课">北大张昕：人人都用得上的心理学课</p>
                        <p class="teacher-info">教师介绍：张昕</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="bottom-fm slide-bottom">
                  <div class="bottom-one bottom-margin">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/293?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190601/6c82181baf8ede9744a7cb8ddf5461c6.jpg!300')"></div>
                      <div class="info">
                        <p class="info-title" title="爱人先爱己，女性自爱力36堂心理提升课">爱人先爱己，女性自爱力36堂心理提升课</p>
                        <p class="teacher-info">教师介绍：周梵</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
                      </div>
                    </a>
                  </div>
                  <div class="bottom-one bottom-margin">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/293?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190601/6c82181baf8ede9744a7cb8ddf5461c6.jpg!300')"></div>
                      <div class="info">
                        <p class="info-title" title="爱人先爱己，女性自爱力36堂心理提升课">爱人先爱己，女性自爱力36堂心理提升课</p>
                        <p class="teacher-info">教师介绍：周梵</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
                      </div>
                    </a>
                  </div>
                  <div class="bottom-one bottom-margin">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/293?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190601/6c82181baf8ede9744a7cb8ddf5461c6.jpg!300')"></div>
                      <div class="info">
                        <p class="info-title" title="爱人先爱己，女性自爱力36堂心理提升课">爱人先爱己，女性自爱力36堂心理提升课</p>
                        <p class="teacher-info">教师介绍：周梵</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
                      </div>
                    </a>
                  </div>
                  <div class="bottom-one bottom-margin">
                    <a target="_blank" class="common-a" href="//m.xinli001.com/lesson/293?source=pc-home&amp;tongji_sign=www-index->xktj">
                      <div class="slide-top-img" style="background-image: url('https://ossimg.xinli001.com/20190601/6c82181baf8ede9744a7cb8ddf5461c6.jpg!300')"></div>
                      <div class="info">
                        <p class="info-title" title="爱人先爱己，女性自爱力36堂心理提升课">爱人先爱己，女性自爱力36堂心理提升课</p>
                        <p class="teacher-info">教师介绍：周梵</p>
                        <span class="pay">129元</span>
                        <del>199元</del>
                        <span class="class-info">课程介绍</span>
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
    <div>
      <el-row class="el-row-5" :gutter="20">
        <el-col :span="24">
          <div class="el-row-1-dv-4">
            <h1>活动发现</h1>
            <InteractiveList></InteractiveList>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="footer">
      <ul>
        <li><a href="javascript:;">首页</a> </li>
        <li><a href="javascript:;">树洞网页版</a> </li>
        <li><a href="javascript:;">文章</a> </li>
        <li><a href="javascript:;">关于我们</a> </li>
      </ul>
    </div>
  </div>

</template>

<script>
    import InteractiveList from '../../marketing/page/InteractiveList';
  export default {
    name: "index",
      data() {
          return {
              //轮播图图片
              img_pic: [
                  {src: require("../../../statics/image/1.jpg")},
                  {src: require("../../../statics/image/2.jpg")},
                  {src: require("../../../statics/image/3.jpg")},
                  {src: require("../../../statics/image/4.jpg")},
              ],
              components: {
                  InteractiveList
              }
          }
      },
  }
</script>
<style>
  .el-row-5{
    width: 80vw;
    margin-bottom: 5vh;
    margin-left: 8vw!important;
  }
  .dv-homePage .el-row-1 {
    margin-bottom: 20px;
  }
  .dv-homePage .el-row-1 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .dv-homePage .el-row-1 .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .dv-homePage .el-row-1 .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  .xinli-test {
    height: 600px;
    background: #fff;
    margin-bottom: 35px;
    margin-top: 50px;
    cursor: pointer
  }

  .xinli-test .swiper-container {
    margin: 0 0 0 -10px;
    padding: 0 10px 10px;
    width: 1200px;
  }

  .xinli-test .swiper-test {
    height: 562px;
    border: none;
    z-index: 0
  }

  .xinli-test .main-title {
    margin-bottom: 20px
  }

  .xinli-test .main-title .xinli-answer {
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #0b8bff;
    line-height: 28px;
    margin-right: 14px
  }

  .xinli-test .main-title .sub-title {
    font-size: 16px;
    color: #999;
    line-height: 18px
  }

  .xinli-test .main-title .num {
    float: right;
    margin-top: 12px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    line-height: 16px
  }

  .xinli-test .main-title .num .number {
    color: #0b8bff
  }

  .xinli-test .content {
    height: 540px;
    width: 980px;
    /* position: relative */
  }

  .xinli-test .top-content {
    width: 100%;
    height: 260px;
    margin-bottom: 20px
  }

  .xinli-test .bottom-content {
    width: 100%;
    height: 260px
  }

  .xinli-test .test-topic {
    width: 230px;
    height: 250px;
    display: inline-block;
    background: #fff;
    box-shadow: 0 2px 20px 0 #eaeaea;
    border-radius: 10px;
    position: relative
  }

  .xinli-test .test-topic .go-test {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70px;
    height: 36px;
    line-height: 36px;
    background: rgba(0, 0, 0, .5);
    border-radius: 8px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #fff;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
  }

  .xinli-test .test-topic img {
    width: 100%;
    height: 158px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
    object-position: center
  }

  .xinli-test .test-topic p {
    text-align: left;
    font-size: 16px;
    color: #333;
    line-height: 20px;
    margin: 20px 20px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 20px
  }

  .xinli-test .test-topic .two-tip {
    text-align: left
  }

  .xinli-test .test-topic .free,
  .xinli-test .test-topic .no-free {
    display: inline-block;
    background: #5ed49d;
    border-radius: 100px;
    padding: 0 12px;
    margin-top: 14px;
    text-align: left;
    color: #fff;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    margin-left: 20px
  }

  .xinli-test .test-topic .no-free {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #ff5b5b;
    line-height: 18px;
    padding: 0;
    background-color: transparent
  }

  .xinli-test .test-topic .test {
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #999;
    line-height: 14px;
    float: right;
    margin-top: 17px;
    margin-right: 20px
  }

  .xinli-test .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 280px;
    margin-top: 0!important;
    float: left;
    /* display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center */
  }

  .xinli-consult {
    height: 440px;
    background: #f3f4f5;
    padding: 50px 300px 0
  }

  .xinli-consult .send-content {
    float: right;
    margin-right: 30px;
    line-height: 25px;
    margin-top: 5px;
    font-size: 14px
  }

  .xinli-consult .send-content img {
    float: left;
    margin-right: 14px
  }

  .xinli-consult .my-content {
    margin-right: 0
  }

  .xinli-consult .my-content a {
    color: #666
  }

  .xinli-consult .swiper-consult {
    height: 340px;
    border: none;
    z-index: 0
  }

  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .container-gray {
    background-color: #f3f4f5;
  }

  .xinli-consult {
    height:440px;
    background:#f3f4f5;
    padding:50px 300px 0
  }
  .xinli-consult .send-content {
    float:right;
    margin-right:30px;
    line-height:25px;
    margin-top:5px;
    font-size:14px
  }
  .xinli-consult .send-content img {
    float:left;
    margin-right:14px
  }
  .xinli-consult .my-content {
    margin-right:0
  }
  .xinli-consult .my-content a {
    color:#666
  }
  .xinli-consult .swiper-consult {
    height:340px;
    border:none;
    z-index:0
  }
  .xinli-consult .swiper-consult .swiper-slide {
    height:340px;
    border-radius:10px
  }
  .xinli-consult .main-title {
    margin-bottom:30px
  }
  .xinli-consult .main-title .xinli-answer {
    font-family:PingFangSC-Medium;
    font-size:24px;
    color:#0b8bff;
    line-height:28px;
    margin-right:14px
  }
  .xinli-consult .main-title .sub-title {
    font-size:16px;
    color:#999;
    line-height:18px
  }
  .xinli-consult .content {
    height:365px;
    width:980px;
    cursor:pointer;
    position:relative
  }
  .xinli-consult .content .user-img {
    width:230px;
    height:340px;
    position:relative;
    border-radius:10px 10px 0 0;
    float: left;
  }
  .xinli-consult .content .user-img .zhezhao {
    width:230px;
    height:84px;
    position:absolute;
    background:#000;
    opacity:.3;
    top:0;
    left:0;
    border-radius:10px 10px 0 0
  }
  .xinli-consult .content .user-img .hidden-img {
    width:230px;
    height:84px;
    overflow:hidden;
    border-radius:10px 10px 0 0
  }
  .xinli-consult .content .user-img .hidden-img img {
    width:230px;
    height:100%;
    -webkit-filter:blur(8px);
    filter:blur(8px);
    object-fit:cover;
    object-position:center
  }
  .xinli-consult .content .user-img span {
    font-family:PingFangSC-Medium;
    font-size:18px;
    color:#fff;
    line-height:20px;
    position:absolute;
    bottom:0;
    margin-bottom:10px;
    left:100px
  }
  .xinli-consult .content .user-img .user-radius-img {
    width:68px;
    height:68px;
    border-radius:50%;
    top:45px;
    left:15px;
    position:absolute;
    -webkit-filter:blur(0);
    filter:blur(0)
  }
  .xinli-consult .content .show-user-tip {
    font-family:PingFangSC-Regular;
    font-size:14px;
    color:#666;
    line-height:14px;
    margin-top:10px;
    position:absolute;
    left:100px
  }
  .xinli-consult .content .user-introudct {
    margin-top:45px;
    text-align:left;
    list-style:none;
    padding-left:20px;
    height:42px
  }
  .xinli-consult .content .user-introudct li {
    font-family:PingFangSC-Regular;
    font-size:14px;
    color:#333;
    line-height:14px;
    margin-bottom:14px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-right:20px
  }
  .xinli-consult .content .user-introudct li:before {
    content:"\25CF";
    color:#0b8bff;
    font-size:12px;
    margin-right:10px
  }
  .xinli-consult .content .aera-info {
    font-family:PingFangSC-Regular;
    font-size:14px;
    color:#999;
    line-height:18px;
    margin:30px 20px;
    text-align:left;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    height:36px
  }
  .xinli-consult .content .prew-metting {
    width:90px;
    height:36px;
    line-height:36px;
    text-align:center;
    background:#0b8bff;
    border-radius:8px;
    margin:0 30%;
    margin-top:28px;
    color:#fff;
    font-size:14px
  }
  .xinli-consult .content .prew-metting a {
    color:#fff!important;
    text-decoration:none!important
  }
  .xinli-consult .swiper-slide {
    text-align:center;
    font-size:18px;
    background:#fff;
    float: left;
  }
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
  #footer{
    width: 100%;
    height: 150px;
    background: #222;
    position: relative;
  }
  #footer ul{
    width: 440px;
    height: 22px;
    margin: 0 auto;
  }
  #footer ul li{
    float: left;
    padding:68px 23px 0 23px;
  }
  #footer ul li a{
    font-size: 18px;
    color: #fff;
  }
</style>
