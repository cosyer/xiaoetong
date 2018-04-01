<template lang="html">
  <nav>
    <section class="nav-container">
      <router-link class="nav-title" :to="{ name: 'guide' }">帮助首页</router-link>
      <router-link class="nav-title" :to="{ name: 'novice' }">新手专区</router-link>
      <router-link class="nav-title" :to="{ name: 'problem', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">问题汇总</router-link>
      <a class="nav-download" href="http://wechatapppro-1252524126.file.myqcloud.com/%E5%B0%8F%E9%B9%85%E9%80%9A%E4%BA%A7%E5%93%81%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C.pdf">下载《小鹅通产品使用手册》</a>
    </section>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: $background-color-3;
}

.nav-container {
  width: 1200px;
  margin: 0 auto;
}

.nav-title {
  position: relative;
  display: inline-block;
  margin-right: 40px;
  color: $text-dark-color;
}

.nav-title::after,
.nav-download::after {
  content: "";
  position: absolute;
  top: 95%;
  left: 50%;
  z-index: 9;
  transform: translate3d(-50%, 0, 0);
  width: 0;
  height: 2px;
  background-color: $light-blue;
  transition: .3s;
}

.nav-title:hover::after,
.nav-download:hover::after {
  width: 100%;
}

.router-link-active::after {
  width: 100%;
}

.nav-download {
  position: relative;
  float: right;
  color: $light-blue;
  display: inline-block;
}
</style>
