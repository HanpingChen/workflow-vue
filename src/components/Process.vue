<template>
    <div class="container">
        <h2>流程查询</h2>
        <div class="row">
            <div class="col-lg-6">
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">流程key</span>
                    <input type="text" class="form-control" placeholder="流程key（必填）" aria-describedby="basic-addon1">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button" v-on:click="queryProcess()">查询</button>
                    </span>
                </div>
            </div>
        </div>
        <h5 class="page-header"></h5>
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>流程id</th>
              <th>流程定义key</th>
              <th>流程名</th>
              <th>版本</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for='process in this.processJson.data' :key="process">
              <td>{{process.id}}</td>
              <td>{{process.key}}</td>
              <td>{{process.name}}</td>
              <td>{{process.version}}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      processJson: '这是开始的时候'
    }
  },
  created () {
    this.queryProcess()
  },
  methods: {
    queryProcess: function () {
      axios.get('/api/customer/query_process').then(response => (this.processJson = response.data))
    }
  }
}
</script>
