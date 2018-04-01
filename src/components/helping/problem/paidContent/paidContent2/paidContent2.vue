<template lang="html">
  <section>
    <h3 class="problem-title">音频</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent2x1', query: {routerTitleIndex: '2', routerContentIndex: '1'} }">创建音频商品</router-link>
      </li>
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent2x2', query: {routerTitleIndex: '2', routerContentIndex: '1'} }">如何一边听音频边聊微信</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
