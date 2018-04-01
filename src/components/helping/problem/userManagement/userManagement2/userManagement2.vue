<template lang="html">
  <section>
    <h3 class="problem-title">客户消息</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'UserManagement2x1', query: {routerTitleIndex: '1', routerContentIndex: '1'} }">查看客户消息</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
