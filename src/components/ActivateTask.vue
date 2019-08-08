<template>
    <div class="container">
        <h2>待办任务</h2>
        <div class="row">
            <div class="col-md-6">
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">员工id</span>
                    <input v-model="employId" type="text" class="form-control" placeholder="员工id" aria-describedby="basic-addon1">
                    <span class="input-group-btn">
                        <button class="btn btn-default"  v-on:click="queryTask()">查询</button>
                    </span>
                </div>
            </div>
        </div>
        <h5 class="page-header"></h5>
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>任务id</th>
              <th>任务处理人</th>
              <th>任务名称</th>
              <th>任务所属组</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for='task in this.responseStr.data'>
              <td>{{task.taskId}}</td>
              <td>{{task.assignee}}</td>
              <td>{{task.taskName}}</td>
              <td>{{task.groupId}}</td>
              <td><button class="btn btn-link btn-block">处理</button></td>
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
      responseStr: '暂无'
    }
  },
  methods: {
    queryTask: function () {
      this.responseStr = '正在查询'
      axios.post('/api/employ/query_task_by_assignee',qs.stringify({"assignee":this.employId})).then(response => (this.responseStr = response.data))
    }
  }
}
</script>
