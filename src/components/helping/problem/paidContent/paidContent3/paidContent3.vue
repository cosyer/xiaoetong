<template lang="html">
  <section>
    <h3 class="problem-title">视频</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent3x1', query: {routerTitleIndex: '2', routerContentIndex: '2'} }">创建视频商品</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
