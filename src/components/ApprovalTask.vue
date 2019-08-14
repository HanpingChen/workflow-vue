<template>
    <div class="container">
        <h2>处理单</h2>
        
   
    
    <form class="form-horizontal">
        <table class="table  table-hover table-striped table-bordered">
        <tbody>
            <tr v-for='(v,k,i) of this.apply.data[0]' :key="k">
                <td>{{colunmn_dict[k]}}</td>
                <td>{{v}}</td>
            </tr>
        </tbody>
        </table>
    <div class="form-group">
            <label class="col-md-2 control-label">审批意见</label>
            <div class="col-sm-10">
                <textarea  class="form-control" rows="3" placeholder="审批意见" v-model="remark"></textarea>
            </div>
        </div>
     <div class="col-md-4"></div>
        <div class="col-md-2">
                <button class="btn btn-primary btn-block" v-on:click="pass()">通过</button>
            </div>
            <div class="col-md-2">
                 <button class="btn btn-primary btn-block" v-on:click="reject()">驳回</button>
            </div>
        <div class="col-md-4"></div>
    </form>
     <ul class="nav nav-list"><li class="divider"></li></ul>
        <ul class="nav nav-list"><li class="divider"></li></ul>
        <h5 class="page-header"></h5>
    <div class="container">
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import qs  from 'qs'
export default {
  data () {
    return {
      task : 'task',
      apply: 'apply',
      colunmn_dict:'dict',
      judgement:'yes',
      remark:'无',
      responseStr:'暂无',
      employId :''
    }
  },

  created () {
    console.log(this.$route)
    this.task = JSON.parse(sessionStorage.getItem('task'))
    console.log(this.task)
    this.employId = sessionStorage.getItem('id')
    console.log(this.task)
    // 查找apply实体类
    axios.post('/api/apply/query_apply',qs.stringify({"applyId":this.task.processInstanceId})).then(response =>(
        this.apply = response.data
    ))
    // 查找字段表
    axios.get('/api/apply/query_dict').then(response =>(
        this.colunmn_dict = response.data.data[0]
    ))
  },
  methods: {
    pass: function () {
      this.judgement = 'yes'
      this.approval()
    },
    reject: function () {
      this.judgement = 'no'
      this.approval
    },
    approval: function () {
      axios.post('/api/employ/start_task',qs.stringify(
            {
              "taskId":this.task.taskId,
              "judgement": this.judgement,
              "assignee": this.employId,
              "remark":this.remark
            }
          )
        ).then(response =>{
            alert(response.data.msg)
            this.responseStr = response.data
            // 跳转到待办任务界面
            this.$router.push({
              name: 'activateTask',
              params:{
                id: this.employId
              }
          })
        })
    }
  }
}
</script>
