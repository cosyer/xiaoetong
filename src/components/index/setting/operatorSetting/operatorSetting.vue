<template lang="html">
  <article class="operatorSetting">
    <router-link class="operatorSetting-link" :to="{ name: 'addOperator' }" >添加运营者</router-link>
    <table class="operatorSetting-table">
      <thead>
        <tr class="operatorSetting-titleWrapper">
          <th class="operatorSetting-titleWrapper-account">帐号</th>
          <th class="operatorSetting-titleWrapper-name">联系人</th>
          <th class="operatorSetting-titleWrapper-operator">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="operatorSetting-descWrapper" v-for='item of operators' :key='item.id'>
          <td class="operatorSetting-descWrapper-account">{{item.account}}</td>
          <td class="operatorSetting-descWrapper-name">{{item.name}}</td>
          <td class="operatorSetting-descWrapper-operator">
            <router-link class="operatorSetting-descWrapper-operator-edif" :to="{ name: '' }">编辑</router-link>
            <router-link class="operatorSetting-descWrapper-operator-delete" :to="{ name: '' }">删除</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  data () {
    return {
      // operators: [
      //   {
      //     id: 1,
      //     account: '13715309863',
      //     name: '舒仔'
      //   }
      // ]
    }
  },
  computed: {
    operators () {
      return this.$store.state.userInfo.operators
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';
@import '../../../../assets/css/indexCommonStyle.css';

.operatorSetting {
  min-height: 320px;
}

.operatorSetting-link {
  @mixin button-link;
  margin-bottom: 20px;
}

.operatorSetting-table {
  @mixin table;
}

.operatorSetting-titleWrapper {
  @mixin thead;
}

.operatorSetting-descWrapper {
  border-top: 1px solid $border-maincolor;
  height: 50px;
  color: $text-dark-color;
}

.operatorSetting-descWrapper:hover {
  background-color: $background-color-1;
}

.operatorSetting-titleWrapper-account,
.operatorSetting-descWrapper-account {
  width: 30%;
  @mixin table-left;
}

.operatorSetting-titleWrapper-name,
.operatorSetting-descWrapper-name {
  width: 40%;
  text-align: center;
}

.operatorSetting-titleWrapper-operator,
.operatorSetting-descWrapper-operator {
  width: 30%;
  @mixin table-right;
}

.operatorSetting-descWrapper-operator-edif,
.operatorSetting-descWrapper-operator-delete {
  color: $light-blue;
}

.operatorSetting-descWrapper-operator-edif {
  padding-right: 10px;
  border-right: 1px solid $border-maincolor;
}

.operatorSetting-descWrapper-operator-delete {
  padding-left: 10px;
}
</style>
