<template>
    <div class="container">
        <h2>申请单</h2>
        <h5 class="page-header"></h5>
        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">* 客户id</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control"  placeholder="客户id">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">客户姓名</label>
                <div class="col-sm-10">
                <input type="password" class="form-control"  placeholder="客户姓名">
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">* 办理人</label>
                <div class="col-sm-10">
                    <input v-model="apply_data.starter" class="form-control"  placeholder="办理人员工号">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">* 减免类型</label>
                <div class="col-sm-10">
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">* 减免金额</label>
                <div class="col-sm-10">
                <input type="password" class="form-control"  placeholder="减免金额">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">合作前景</label>
                <div class="col-sm-10">
                <textarea class="form-control" rows="3" placeholder="合作前景"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">有无不良贷款</label>
                <div class="col-sm-10">
                <textarea class="form-control" rows="3" placeholder=""></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">本年度减免记录</label>
                <div class="col-sm-10">
                <textarea class="form-control" rows="3" placeholder=""></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">* 办理机构代码</label>
                <div class="col-sm-10">
                <textarea class="form-control" rows="3" placeholder="0552"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">备注</label>
                <div class="col-sm-10">
                <textarea class="form-control" rows="3" placeholder=""></textarea>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-4"></div>
                <button class="btn btn-primary col-sm-4" v-on:click="applyAmt()">申请</button>
            </div>
        </form> 
        <ul class="nav nav-list"><li class="divider"></li></ul>
        <ul class="nav nav-list"><li class="divider"></li></ul>
        <h5 class="page-header"></h5>
        <label class="control-label col-sm-4"></label>
        <label class="control-label col-sm-6"></label>
        <label class="control-label col-sm-2">招商银行合肥分行</label>

        <p>{{results}}</p>
        <p>{{apply_data.starter}}</p>
        <h5 class="page-header"></h5>

    </div>
</template>
<script>
import axios from 'axios'
import 'jquery'
export default {
  data () {
      return {
        apply_data: {
          key:'test',
          xmtype: '1',
          amt: 10,
          userId:'10',
          starter: 'A',
          branch: '0552'
        },
        results: '还没有结果'
      }
  },
  methods: {
    
    applyAmt: function () {
        this.results = '正在请求'
      axios.post('/api/customer/start_process_by_key',this.apply_data).then(response => (
        this.results = response.data
      ))
     
    }
  }
}
</script>
