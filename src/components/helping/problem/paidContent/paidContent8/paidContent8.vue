<template lang="html">
  <section>
    <h3 class="problem-title">其他相关功能</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent8x1', query: {routerTitleIndex: '2', routerContentIndex: '7'} }">用户信息采集功能说明</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
