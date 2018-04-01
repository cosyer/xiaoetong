<template lang="html">
  <div>
    <userTopNav>
      <slot>社群</slot>
    </userTopNav>
    <overDueWarning v-if='isShowOverDueWarning' @hideExplainContent='hideExplainContent'></overDueWarning>
    <section class="community">
      <div class="community-container">
        <h4 class="community-container-title">社群运营</h4>
        <p class="community-container-desc">为内容增值，和学员产生更多互动</p>
        <ul class="community-container-list">
          <li class="community-container-item" v-for='(item, index) of community' :key='item.id'>
            <router-link class="community-container-item-link" :to="{ name: item.name }" @click.native='linkToCommunity(index)'>
              <img class="community-container-item-img" :src="item.src" :alt="item.desc">
              <div class="community-container-item-wrapper">
                <p class="community-container-item-title">{{item.title}}</p>
                <p class="community-container-item-desc">{{item.desc}}</p>
              </div>
            </router-link>
            <span class="community-container-note">{{item.note}}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import userTopNav from 'index/userTopNav/userTopNav'
import overDueWarning from '@/components/common/overDueWarning/overDueWarning'

export default {
  components: {
    userTopNav,
    overDueWarning
  },
  data () {
    return {
      isShowOverDueWarning: false,
      community: [
        {
          id: 1,
          src: require('./c_community.png'),
          title: '小社群',
          desc: '圈层化交流互动',
          name: '',
          note: ''
        },
        {
          id: 2,
          src: require('./c_homework.png'),
          title: '作业本',
          desc: '课程作业管理',
          name: '',
          note: ''
        },
        {
          id: 3,
          src: require('./c_activity.png'),
          title: '活动管理',
          desc: '线上线下联动',
          name: '',
          note: ''
        },
        {
          id: 4,
          src: require('./c_question.png'),
          title: '付费问答',
          desc: '定向付费提问',
          name: '',
          note: ''
        },
        {
          id: 5,
          src: require('./icon-punchcard.png'),
          title: '评论互动',
          desc: '用户评论管理',
          name: '',
          note: ''
        },
        {
          id: 6,
          src: require('./c_comment.svg'),
          title: '打卡',
          desc: '运营制胜法宝',
          name: '',
          note: '最新'
        }
      ]
    }
  },
  computed: {
    isOverTime () {
      return this.$store.state.userInfo.isOverTime
    }
  },
  methods: {
    linkToCommunity (index) {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: this.community[index].name})
      }
    },
    hideExplainContent () {
      this.isShowOverDueWarning = false
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

.community {
  padding: 20px;
}

.community-container {
  padding: 20px 0 20px 20px;
  background-color: #fff;
  min-height: 640px;
}

.community-container-title,
.community-container-desc,
.community-container-item {
  display: inline-block;
}

.community-container-desc {
  font-size: 12px;
  color: $text-light-color;
  margin-left: 10px;
}

.community-container-item {
  width: 235px;
  margin: 20px 20px 0 0;
  position: relative;
}

.community-container-note {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  padding: 0 5px;
  font-size: 12px;
  color: #fff;
  background-color: $text-wraning;
}

.community-container-item-link {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  background-color: $background-color-4;
  transition: .3s;
}

.community-container-item-link:hover {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14),
              0 1px 18px 0 rgba(0, 0, 0, .12),
              0 3px 5px -1px rgba(0, 0, 0, .11)
}

.community-container-item-img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.community-container-item-desc {
  margin-top: 3px;
  font-size: 12px;
  color: $text-light-color;
}
</style>
