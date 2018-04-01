<template lang="html">
  <section>
    <h3 class="problem-title">售卖形式</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent1x1', query: {routerTitleIndex: '2', routerContentIndex: '0'} }">内容商品售卖形式</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
