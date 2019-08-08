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
      <a class="navbar-brand" href="#/">工作流</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class=""><a href="#/process">流程定义 <span class="sr-only">(current)</span></a></li>
        <li><a href="#/apply">客户管理</a></li>
        <li><a href="#/activate_task">待办任务</a></li>
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
      login_msg: '登录'
    }
  },
  name: 'App'
}
</script>
<style>
body { padding-top: 70px; }
</style>
