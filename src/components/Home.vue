<template>
  <div class="vux-demo">
    <img class="logo" src="../assets/vux_logo.png">
    <h1>{{ username }}</h1>
  </div>
  <ol v-link="{path:'/blog'}">
    <li v-for="news in list">
      <p class="title">{{ news.title }}</p>
      <p class="content">{{news.content}}</p>
      <p class="date">{{news.date}}</p>
      <p class="author">By: {{ news.author }}</p>
    </li>
  </ol>
  <!--<group title="cell demo">-->
    <!--<cell title="Vux" value="Cool" is-link v-link="{path:'/blog'}"></cell>-->
  <!--</group>-->
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import store from '../../vuex/store'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      username: 'shadow!',
      list:[{
          'title':'亲爱的你在哪边',
          'content':'不知道你在哪边？不知道未来的我在哪边，哪怕是能跟我指引个方向也好。不想被拖住后腿，可是自己却裹足不前。不知道你在哪边？不知道未来的我在哪边，哪怕是能跟我指引个方向也好。不想被拖住后腿，可是自己却裹足不前。不知道你在哪边？不知道未来的我在哪边，哪怕是能跟我指引个方向也好。不想被拖住后腿，可是自己却裹足不前。',
          'date':'1992-04-10',
          'author':'admin'
        },{
        'title':'遇见就是一种缘分',
        'content':'不知道你在哪边？不知道未来的我在哪边，哪怕是能跟我指引个方向也好。不想被拖住后腿，可是自己却裹足不前。不知道你在哪边？不知道未来的我在哪边，哪怕是能跟我指引个方向也好。不想被拖住后腿，可是自己却裹足不前。不知道你在哪边？不知道未来的我在哪边，哪怕是能跟我指引个方向也好。不想被拖住后腿，可是自己却裹足不前。',
        'date':'2010-10-16',
        'author':'admin'
      }]
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}

ol {
  margin-left: 2rem;
  list-style-type: disc
}

li{
  line-height:1.5;
  padding:1rem;
  border-bottom: 1px solid #b6b6b6;
}

.title{
  font-weight: bold;
  font-size: 1.3rem;
}
.content{
  margin-top: 1rem;
}

.date{
  font-size: .8rem;
  color: #d6d6d6;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
