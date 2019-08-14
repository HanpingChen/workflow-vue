<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login_msg: '未登录'
    }
  },
  name: 'App'
}
</script>
<style>
body { padding-top: 70px; }
</style>
