<template lang="html">
  <section>
    <h3 class="problem-title">访问用户</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'UserManagement1x1', query: {routerTitleIndex: '1', routerContentIndex: '0'} }">如何查看店铺访问用户</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
