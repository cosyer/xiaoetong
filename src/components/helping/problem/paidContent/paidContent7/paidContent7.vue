<template lang="html">
  <section>
    <h3 class="problem-title">回收站</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'paidContent7x1', query: {routerTitleIndex: '2', routerContentIndex: '6'} }">回收站功能说明</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
