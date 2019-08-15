<template>
    <div class="container">
        <h2>待办任务</h2>
        <div class="row">
            <div class="col-md-6">
                <form >
                    <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">员工id</span>
                    <input v-model="employId" type="text" class="form-control"  aria-describedby="basic-addon1">
                    <span class="input-group-btn">
                        <button class="btn btn-default"  @click.prevent="queryTask()">查询</button>
                    </span>
                </div>
                </form>
                
            </div>
        </div>
        <h5 class="page-header"></h5>
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>任务id</th>
              <th>流程id</th>
              <th>流程代码</th>
              <th>处理人</th>
              <th>任务名称</th>
              <th>所属分行</th>
              <th>所属部门</th>
              <th>处理候选人</th>
              <th>更新时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for='task in this.responseStr.data' :key="task">
              <td>{{task.taskId}}</td>
              <td>{{task.processInstanceId}}</td>
              <td>{{task.processKey}}</td>
              <td>{{task.assignee}}</td>
              <td>{{task.taskName}}</td>
              <td>{{task.currentBranch}}</td>
              <td>{{task.currentSubbranch}}</td>
              <td>{{task.candidates}}</td>
              <td>{{task.timeStr}}</td>
    
              <td>
                <button class="btn btn-link" v-on:click="handleTask(task)">处理</button>
                </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
import qs  from 'qs'
export default {
  data () {
    return {
      employId: 'B',
      responseStr: '暂无',
      currentTask:'暂无'
    }
  },
  created () {
    console.log(this.$route.params)
    this.employId = sessionStorage.getItem('id')
    // 查询当前员工的待办任务
    this.queryTask()
  },
  methods: {
    clainTask: function () {
      axios.post('/api/employ/acquire_task',qs.stringify(
        {
          "taskId":this.currentTask.taskId,"assignee":this.employId
        })
        ).then(response => {
          // alert("拾取任务成功，即将进入任务处理页面")
      })
    },
    queryTask: function () {
      this.responseStr = '正在查询'
      axios.post('/api/employ/query_task_by_assignee',qs.stringify({"assignee":this.employId})).then(response => (this.responseStr = response.data))
    },
    handleTask: function (task) {
      this.currentTask = '被点击了'
      this.currentTask = task
      // 请求后端接口，拾取当前任务
      if( this.currentTask.assignee == null){
        this.clainTask()
      }
      // 把当前点击的任务json转化为字符串存储在session中
      sessionStorage.setItem('task', JSON.stringify(this.currentTask))
      console.log(this.currentTask)
      console.log(sessionStorage)
      this.$router.push({
        name: 'approvalTask',
        params:{
          task: this.currentTask,
          id:this.employId
        }
      })
    }
  }
}
</script>
