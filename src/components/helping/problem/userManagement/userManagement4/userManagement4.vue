<template lang="html">
  <section>
    <h3 class="problem-title">信息收集</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'UserManagement4x1', query: {routerTitleIndex: '1', routerContentIndex: '3'} }">开启资料填写</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
