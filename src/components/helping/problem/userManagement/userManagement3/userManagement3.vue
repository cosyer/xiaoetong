<template lang="html">
  <section>
    <h3 class="problem-title">消息推送</h3>
    <ul class="problem-list">
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'UserManagement3x1', query: {routerTitleIndex: '1', routerContentIndex: '2'} }">已认证服务号推送消息/通知</router-link>
      </li>
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'UserManagement3x2', query: {routerTitleIndex: '1', routerContentIndex: '2'} }">没有认证服务号如何给用户发通知/消息</router-link>
      </li>
      <li class="problem-item">
        <router-link class="problem-item-link" :to="{ name: 'UserManagement3x3', query: {routerTitleIndex: '1', routerContentIndex: '2'} }">如何发送管理员消息</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import '@/assets/css/problem-title.css'

export default {
}
</script>
