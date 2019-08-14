<template>
  <div id="home" >
    <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#/" @click="selected('0')">工作流</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li v-bind:class="{'active':this.active == '1'}"><a @click="selected('1')" href="#/process">流程定义 </a></li>
        <li v-bind:class="{'active':this.active == '2'}"><a @click="selected('2')" href="#/apply" >客户管理</a></li>
        <li v-bind:class="{'active':this.active == '3'}"><a @click="selected('3')" href="#/activate_task" >待办任务</a></li>
      </ul>
      
      <ul class="nav navbar-nav navbar-right">
      <router-link :to="{path:'/login'}" class="navbar-text" >{{login_msg}}</router-link>

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
  </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login_msg: '登录',
      id:'',
      active:''
    }
  },
  created () {
    this.id = sessionStorage.getItem('id')
    this.active = sessionStorage.getItem('selected')
    if(this.active == null){
      this.active = '0'
    }
    if(this.id == null){
      this.$router.push({name: 'login'})
    }
    console.log(this.$route)
    console.log(this.id)
    this.login_msg = '欢迎' + this.id  
  },
  methods: {
    selected: function(index){
      this.active = index
      sessionStorage.setItem('selected',index)
    }
  },
  name: 'App'
}
</script>
<style>
body { padding-top: 70px; }
</style>
