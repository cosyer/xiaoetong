<template lang="html">
  <transition name='fade'>
    <div class="welldone">
      <h4 class="welldone-title">他们做得不错</h4>
      <p class="welldone-desc" @click='hideWelldone'>不再显示</p>
      <ul class="welldone-list">
        <li class="welldone-item" v-for='item of welldone' :key='item.id'>
          <img class="welldone-item-img" v-lazy="item.imgsrc" :alt="item.desc">
          <p class="welldone-item-desc">{{item.desc}}</p>
          <div class="welldone-wxContainer">
            <img class="welldone-wxContainer-img" :src="item.wxsrc" alt="微信二维码">
            <p class="welldone-wxContainer-desc">微信扫一扫访问</p>
          </div>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      welldone: [
        {
          id: 1,
          imgsrc: require('./1.jpg'),
          wxsrc: require('./c1.png'),
          desc: '吴晓波频道'
        },
        {
          id: 2,
          imgsrc: require('./2.jpg'),
          wxsrc: require('./c2.png'),
          desc: '十点读书'
        },
        {
          id: 3,
          imgsrc: require('./3.jpg'),
          wxsrc: require('./c3.png'),
          desc: '宋鸿兵'
        },
        {
          id: 4,
          imgsrc: require('./4.jpg'),
          wxsrc: require('./c4.png'),
          desc: '张德芬空间'
        },
        {
          id: 5,
          imgsrc: require('./5.jpg'),
          wxsrc: require('./c5.png'),
          desc: '许岑'
        },
        {
          id: 6,
          imgsrc: require('./6.jpg'),
          wxsrc: require('./c6.png'),
          desc: '青音约'
        },
        {
          id: 7,
          imgsrc: require('./7.jpg'),
          wxsrc: require('./c7.png'),
          desc: '局座召忠'
        },
        {
          id: 8,
          imgsrc: require('./8.jpg'),
          wxsrc: require('./c8.png'),
          desc: '简书'
        }
      ]
    }
  },
  methods: {
    hideWelldone () {
      this.$emit('hideWelldone')
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

.welldone-list {
  margin-top: 10px;
  margin-bottom: 140px;
  padding: 20px;
}

.welldone-desc {
  color: $light-blue;
  cursor: pointer;
  font-size: 12px;
  margin-left: 10px;
}

.welldone-title,
.welldone-desc {
  display: inline-block;
}

.welldone-item {
  width: 9%;
  height: 90px;
  margin-right: 3.5%;
  text-align: center;
  display: inline-block;
  position: relative;
}

.welldone-item-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.welldone-item-desc {
  font-size: 12px;
  margin: 10px 0;
}

.welldone-wxContainer {
  position: absolute;
  top: 110%;
  left: 56%;
  transform: translateX(-56%);
  width: 150px;
  height: 180px;
  padding: 15px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  border: solid 1px $border-maincolor;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}

.welldone-item:hover .welldone-wxContainer {
  visibility: visible;
  opacity: 1;
}

.welldone-wxContainer-img {
  width: 120px;
  height: 120px;
}

.welldone-wxContainer-desc {
  margin-top: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
