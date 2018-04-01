<template lang="html">
  <section>
    <h3 class="problem-title">会员</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent6x1', query: {routerTitleIndex: '2', routerContentIndex: '5'} }">创建会员商品</router-link>
      </li>
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent6x2', query: {routerTitleIndex: '2', routerContentIndex: '5'} }">会员排序</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
