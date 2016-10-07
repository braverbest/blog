<template>
  <div class="vux-demo">
    <img class="logo" src="../assets/vux_logo.png">
    <h1>{{ msg }}</h1>
  </div>
  <group title="cell demo">
    <cell title="Vux" value="Cool" is-link v-link="{path:'/blog'}"></cell>
  </group>
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
      msg: 'Hello World2!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
