<template>
    <div class="container">
        <h2>申请单</h2>
        <h5 class="page-header"></h5>
        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">* 客户id</label>
                <div class="col-sm-10">
                    <input v-model="apply_data.userId" class="form-control"  placeholder="客户id">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">客户姓名</label>
                <div class="col-sm-10">
                <input  v-model="apply_data.username" class="form-control"  placeholder="客户姓名">
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
                <select class="form-control" v-model="apply_data.discountType">
                    <option>一次性减免</option>
                    <option>分期减免</option>
                </select>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">* 减免金额</label>
                <div class="col-sm-10">
                <input v-model="apply_data.amt"  class="form-control"  placeholder="减免金额">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">合作前景</label>
                <div class="col-sm-10">
                <textarea v-model="apply_data.cor" class="form-control" rows="3" placeholder="合作前景"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">客户规模、效益、有无不良贷款</label>
                <div class="col-sm-10">
                <textarea v-model="apply_data.situation" class="form-control" rows="3" placeholder=""></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">效益评估与分析</label>
                <div class="col-sm-10">
                <textarea v-model="apply_data.analyse" class="form-control" rows="3" placeholder=""></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">本年度减免记录</label>
                <div class="col-sm-10">
                <textarea v-model="apply_data.record" class="form-control" rows="3" placeholder=""></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">* 业务类型</label>
                <div class="col-sm-10">
                    <select name="" class="form-control" v-on:change="selectType">
                        <option>对公</option>
                        <option>零售</option>
                        <option>其它</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">备注</label>
                <div class="col-sm-10">
                <textarea class="form-control" v-model="apply_data.msg" rows="3" placeholder=""></textarea>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-4"></div>
                <button class="btn btn-primary col-sm-4" @click.prevent="applyAmt()">申请</button>
            </div>
        </form> 
        <p>{{apply_data.xmtype}}</p>
        <ul class="nav nav-list"><li class="divider"></li></ul>
        <ul class="nav nav-list"><li class="divider"></li></ul>
        <h5 class="page-header"></h5>
        <label class="control-label col-sm-4"></label>
        <label class="control-label col-sm-6"></label>
        <label class="control-label col-sm-2">招商银行合肥分行</label>
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
          xmtype: '0',
          amt: 0,
          userId:'10',
          starter: 'A',
          discountType:'一次性减免',
          cor:'',
          username: '',
          processKey:'bankcheck',
          record:'',
          analyse:'',
          situation: '',
          msg:''
        },
        results: '还没有结果',
        employId:''
      }
  },
  created () {
    this.employId = this.$route.params.id
    this.apply_data.starter = this.employId
  },
  methods: {
    selectType: function (e) {
      this.apply_data.xmtype = e.target.options.selectedIndex + ""
    },
    applyAmt: function () {
        this.results = '正在请求'
      axios.post('/api/customer/start_process_by_key',this.apply_data).then(response => {
        this.results = response.data
        alert('提交成功')
        this.$router.push({name:'home'})
    })
     
    }
  }
}
</script>
