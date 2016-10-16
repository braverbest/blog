<template>
  <div class="vux-demo">
    <img class="logo" src="../assets/vux_logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ msg }}</h2>
  </div>
  <!--<group title="cell demo">-->
    <!--<cell title="Vux" value="Cool" is-link></cell>-->
  <!--</group>-->
  <tabbar class="vux-demo-tabbar" icon-class="vux-center"  slot="bottom">
    <tabbar-item v-link="{path:'/'}" :selected="$route.path === '/'">
      <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon">&#xe637;</span>
      <span slot="label">Home</span>
    </tabbar-item>
    <tabbar-item v-link="{path:'/personalinfo'}" :selected="isPersonal" badge="9">
      <span class="demo-icon-22" slot="icon">&#xe633;</span>
      <span slot="label"><span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span><span v-else>Demos</span></span>
    </tabbar-item>
    <tabbar-item v-link="{path:'/'}" :selected="$route.path === '/'" show-dot>
      <span class="demo-icon-22" slot="icon">&#xe630;</span>
      <span slot="label">Donate2</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import Group from 'vux/src/components/group'
  import Cell from 'vux/src/components/cell'
  import {Tabbar,TabbarItem} from 'vux/src/components'

  export default {
    components: {
      Group,
      Cell,
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        msg: 'Hello World!'
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
