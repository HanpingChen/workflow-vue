<template>
    <div class="container">
        <h2>登录页</h2>
        <div class="col-md-4"></div>
        <div class="col-md-4">
        <form class="">
        <h2 class="form-signin-heading">登录</h2>
        <label for="inputEmail" class="sr-only">员工号</label>
        <input type="text" v-model="id" class="form-control" placeholder="员工号" required autofocus>
        <label for="inputPassword" class="sr-only"  >密码</label>
        <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="密码" required>
        <div class="checkbox">
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="login()">登录</button>
      </form>
        </div>
        <p>{{id}}</p>
        <p>{{password}}</p>
        <p>{{msg}}</p>
        <p>zmhs</p>
    </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data :{
    return: {
      id:'1',
      password:'2',
      msg:'3'
    }
  },
  methods: {
    login: function () {
      axios.post('/api/employ/login',qs.stringify({"id":this.id,"password":this.password})).then(response =>{
        this.msg = response.data
        sessionStorage.setItem('id',this.id)
        this.$router.push({
        name: 'home',
        params:{
          id: this.id
        }
      })
      })
    }
  }
}
</script>

