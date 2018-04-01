<template lang="html">
  <aside class="service-wrapper">
    <div class="service-wrapper-content">
      <img class="service-wrapper-icon" src="./icon_online.png" alt="图标-咨询">
      <p class="service-wrapper-text">咨询·客服</p>
    </div>
    <p class="scrollTop" id="scrollTop" @click='scrollToTop' :class="{'scrollTop_active': isShowScrollToTop}">
      <img class="service-wrapper-icon" src="./icon_backtop.png" alt="图标-回到顶部">
      <span class="scrollTop-text">回到顶部</span>
    </p>
    <div class="contact-wrapper">
      <div class="contact-wrapper-tel">
        <img class="service-wrapper-icon" src="./icon_service_phone.svg" alt="图标-电话咨询">
        <div class="contact-wrapper-text">
          <p>咨询电话</p>
          <p>0755 6198 1789</p>
        </div>
      </div>
      <a href="https://xiaoe-tech.udesk.cn/im_client/?web_plugin_id=40511&group_id=60146&channel=PC%E5%AE%98%E7%BD%91&cur_title=%E5%B0%8F%E9%B9%85%E9%80%9A-%E4%B8%93%E6%B3%A8%E5%86%85%E5%AE%B9%E4%BB%98%E8%B4%B9%E7%9A%84%E6%8A%80%E6%9C%AF%E6%9C%8D%E5%8A%A1%E5%95%86&src_url=&cur_url=https%253A%252F%252Fwww.xiaoe-tech.com%252F&pre_url=https%3A%2F%2Fwww.xiaoe-tech.com%2F&group_id=60146&_INVITE_USER_KEY=869b70ba-d030-48c5-8ae6-460496f9d903" class="contact-wrapper-waiter" target="_blank">
        <img class="service-wrapper-icon" src="./icon_service_online.svg" alt="图标-在线咨询">
        <div class="contact-wrapper-text">
          <p>在线客服</p>
          <p>实时在线解答您的问题</p>
        </div>
      </a>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      isShowScrollToTop: false
    }
  },
  mounted () {
    this.$nextTick(() => this.showScrollToTop())
  },
  methods: {
    showScrollToTop () {
      window.onscroll = () => {
        let top = document.documentElement.scrollTop || document.body.scrollTop
        if (top >= (document.documentElement.clientHeight / 4) || top >= (document.body.clientHeight / 4)) {
          this.isShowScrollToTop = true
        } else {
          this.isShowScrollToTop = false
        }
      }
    },
    scrollToTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      let scrollSpeed = 50
      let scrollTimer = null

      if (top > 0) {
        scrollTimer = setInterval(() => {
          if (top <= 0) {
            clearInterval(scrollTimer)
          } else {
            top -= scrollSpeed
            window.scrollTo(0, top)
          }
        }, 0)
      }
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

.service-wrapper {
  position: fixed;
  right: 10px;
  bottom: 30px;
  width: 30px;
  background-color: $light-blue;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
}

.service-wrapper-content {
  cursor: pointer;
  text-align: center;
}

.service-wrapper-content:hover {
  background-color: $dark-blue;
}

.service-wrapper-content:hover~.contact-wrapper {
  visibility: visible;
  opacity: 1;
}

.service-wrapper-icon {
  width: 24px;
  height: 24px;
}

.service-wrapper-text {
  padding: 7px;
  text-align: center;
  color: #fff;
}

.scrollTop {
  width: 100%;
  text-align: center;
  position: relative;
  cursor: pointer;
  display: none;
}

.scrollTop_active {
  display: block;
}

.scrollTop:hover .scrollTop-text {
  opacity: 1;
}

.scrollTop-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 1.3;
  background-color: rgba(0,0,0,.8);
  opacity: 0;
  transition: .3s;
  color: #fff;
}

.contact-wrapper {
  position: absolute;
  top: 0;
  right: 110%;
  width: 260px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,.6);
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}

.contact-wrapper:hover {
  visibility: visible;
  opacity: 1;
}

.contact-wrapper-waiter:hover {
  color: $dark-blue;
}

.contact-wrapper-waiter,
.contact-wrapper-tel {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.contact-wrapper-icon {
  width: 24px;
}

.contact-wrapper-text,
.contact-wrapper-icon {
  margin: 16px;
}
</style>
