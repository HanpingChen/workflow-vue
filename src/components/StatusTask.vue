<template>
    <div class="container">
        <h2>流程进度</h2>
        <div class="row">
            <div class="col-md-6">
                <!-- <form> -->
                  <div class="input-group">
                    <span  class="input-group-addon" id="basic-addon1">申请单id</span>
                    <input v-model="applyId" type="text" class="form-control" aria-describedby="basic-addon1">
                    <span class="input-group-btn">
                      <button class="btn btn-default"  @click="queryStatusByApplyId()">查询</button>
                    </span>
                  </div><!-- /input-group -->
                <!-- </form> -->
            </div><!-- /.col-lg-6 -->
            <!-- 加一个输入文本框，用于获取applyId -->
             <div class="col-md-6">
                <!-- <form > -->
                    <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">用户id</span>
                    <input v-model="userId" type="text" class="form-control"  aria-describedby="basic-addon1">
                    <span class="input-group-btn">
                        <button class="btn btn-default"  @click="queryStatusByCustomerId()">查询</button>
                    </span>
                </div>
                <!-- </form>      -->
            </div>

        </div>
        <h5 class="page-header"></h5>
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr> 
              <th>用户id</th>            
              <th>申请单号</th>
              <th>流程名</th>
              <th>当前审批阶段</th>
              <th>任务状态</th>
              <th>所属分行</th>
              <th>所属部门</th>
              <th>提交时间</th>
              <th>更新时间</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody  >
            <!-- <div v-if="responseStr.data.task!=null"> -->
              <tr v-for='process in this.responseStr.data' :key="process">
                <td>{{process.userId}}</td>
                <td>{{process.applyId}}</td>
                <!-- 流程名字，也可能是process实例中的name属性，这里用的是task实例中的proceKey属性 -->
                <td>{{process.name}}</td>    
                <td v-if='process.task != null'>{{process.task.taskName}}</td>
                <td v-if='process.task == null'>无</td>        
                <td>{{statusDict[process.status]}}</td>
                <td v-if='process.task != null'>{{process.task.currentBranch}}</td>
                <td v-if='process.task == null'>无</td>
                <td v-if='process.task != null'>{{process.task.currentSubbranch}}</td>
                <td v-if='process.task == null'>无</td>
                <td>{{process.createTimeStr}}</td>
                <td v-if='process.task != null'>{{process.task.timeStr}}</td>
                <td v-if='process.task == null'>{{process.completeTimeStr}}</td>        
                <td>{{process.remark}}</td>        
              </tr>
            <!-- </div> -->
          </tbody>
        </table>
    </div>
</template>  

<script>
import axios from 'axios'
import qs  from 'qs'
export default {
  data(){
    return{
      userId:'A',
      applyId:'B',
      responseStr:'',
      statusDict:{
        '1': '正在进行',
        '-1':'申请失败',
        '3':'申请成功'
      }
    }
  },

  created(){
    //  console.log(this.$route.params),
    // this.queryStatus()
  },
  methods:{
    queryStatusByCustomerId :function(){
    axios.post('/api/customer/process_status',qs.stringify({"customerId":this.userId})).then(response=>{ 
      this.responseStr=response.data
      console.log(this.responseStr)
      console.log(response.data)
      // alert("获得id "+this.userId)

      } )   
      
    },
    queryStatusByApplyId :function(){
    axios.post('/api/customer/process_status_applyId',qs.stringify({"applyId":this.applyId})).then(response=>{
      this.responseStr= response.data
      // alert("获得id "+this.applyId)
      })
      
    }
  }

}
</script>