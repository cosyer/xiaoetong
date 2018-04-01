<template lang="html">
  <footer>
    <section class="footer-content flex">
      <article class="footer-wrapper flex">
        <ul class="footer-list flex">
          <li class="footer-item-title">产品</li>
          <li><a class="footer-item-desc footer-item-link" href="#" target="_blank">功能</a></li>
          <li><a class="footer-item-desc footer-item-link" href="#" target="_blank">价格</a></li>
          <li><a class="footer-item-desc footer-item-link" href="#" target="_blank">案例</a></li>
        </ul>
        <ul class="footer-list flex">
          <li class="footer-item-title">公司</li>
          <li><a class="footer-item-desc footer-item-link" href="#" target="_blank">加入我们</a></li>
          <li><a class="footer-item-desc footer-item-link" href="#" target="_blank">关于我们</a></li>
          <li><a class="footer-item-desc footer-item-link" href="#" target="_blank">媒体报道</a></li>
          <li><a class="footer-item-desc footer-item-link" href="#" target="_blank">服务条款</a></li>
        </ul>
        <ul class="footer-list flex">
          <li class="footer-item-title">服务</li>
          <li><a class="footer-item-desc footer-item-link" href="#" target="_blank">帮助中心</a></li>
          <li><a class="footer-item-desc footer-item-link" href="#" target="_blank">大客户服务</a></li>
        </ul>
        <ul class="footer-list-last flex">
          <li class="footer-item-title">联系我们</li>
          <li class="footer-item-desc">0755 - 6198 1789 或 0755 - 3290 4057</li>
          <li class="footer-item-desc">客服支持：xiaoekf@xiaoe-tech.com</li>
          <li class="footer-item-desc">商务合作：support@xiaoe-tech.com</li>
          <li class="footer-item-desc">客服办公时间：周一到周日 9:00-21:30</li>
          <li class="footer-item-desc footer-icon-wrapper">
            <img class="footer-icon footer-icon-weixin" src="./icon-wechat.png" alt="微信图标">
            <img class="footer-icon" src="./icon-weibo.png" alt="微博图标">
            <div class="weixin-wrapper">
              <p class="weixin-desc">关注小鹅通</p>
              <p class="weixin-desc">微信公众号</p>
              <img class="weixin-img" src="./weixin.jpg" alt="小鹅通微信公众号二维码">
            </div>
          </li>
        </ul>
      </article>
    </section>
    <section class="footer-cpr">
      <p>Copyright © 2015-2017 深圳小鹅网络技术有限公司 ALL Rights Reserved. 粤ICP备15020529号-1</p>
    </section>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

footer {
  width: 100%;
  min-width: 1200px;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-content {
  height: 320px;
  background-color: $footer-bgc-1;
}

.footer-wrapper {
  align-items: flex-start;
}

.footer-list,
.footer-list-last {
  flex-direction: column;
  align-items: flex-start;
  line-height: 30px;
}

.footer-list {
  width: 150px;
}

.footer-list-last {
  width: 320px;
}

.footer-item-title {
  color: $footer-title-color;
}

.footer-item-desc {
  color: #fff;
}

.footer-item-link:hover {
  color: $light-blue;
}

.footer-icon {
  width: 30px;
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
}

.footer-icon-wrapper {
  position: relative;
}

.footer-icon-weixin:hover~.weixin-wrapper {
  transform: scale(1);
}

.weixin-wrapper {
  width: 160px;
  height: 200px;
  position: absolute;
  left: -60%;
  top: -360%;
  background-color: #fff;
  color: $main-color;
  text-align: center;
  border-radius: 5px;
  transform: scale(0);
  transition: .5s;
}

.weixin-wrapper::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate3d(-50%,0,0);
  border: 10px solid transparent;
  border-top-color: #fff;
}

.weixin-img {
  width: 124px;
  height: 124px;
}

.footer-cpr {
  line-height: 50px;
  text-align: center;
  background-color: $footer-bgc-2;
  color: $footer-cpr-color;
}
</style>
