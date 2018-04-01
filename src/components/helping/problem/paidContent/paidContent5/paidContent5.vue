<template lang="html">
  <section>
    <h3 class="problem-title">专栏</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent5x1', query: {routerTitleIndex: '2', routerContentIndex: '4'} }">创建专栏商品</router-link>
      </li>
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent5x2', query: {routerTitleIndex: '2', routerContentIndex: '4'} }">专栏排序</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
