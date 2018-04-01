<template lang="html">
  <section>
    <h3 class="problem-title">图文</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent4x1', query: {routerTitleIndex: '2', routerContentIndex: '3'} }">创建图文商品</router-link>
      </li>
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent4x2', query: {routerTitleIndex: '2', routerContentIndex: '3'} }">在描述中插入视频</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
