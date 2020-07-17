<template>
 <div style="display:flex; width:85vw">
 <!-- 订单 -->
<el-card class="box-card" style="flex:1;">
  <div slot="header" class="clearfix">
    <span style="flex:4;" >Order_No</span>
    <span style="flex:2;">price</span>
    <span style="flex:1;">status</span>
  </div>
  <div v-for="(item) in arr" :key="item" class="text item" style="display:flex">
    <div style="flex:4;">{{item.num}}</div>   
    <div style="flex:2;">￥{{item.price}}</div>
    <div v-if="item.status" style="flex:1;">
      <button style="border:0.5px solid green; color:green">success</button>
    </div>
    <div v-else style="flex:1;">
      <button style="border:0.5px solid red; color:red">pending</button>
    </div>
  </div>
</el-card>
<!-- todolist -->
<el-card class="box-card" style="flex:1;margin:0 10px 0 10px">
<table>
      <thead>
        <div style='display:flex;justify-content:space-between;width:500px'>
          <div>
            <i class='el-icon-arrow-down'></i>
          </div>
          <div>todolist</div>          
        </div>
      </thead>
      <hr>
      <tbody>
        <div v-for="(item, index) in arb" :key="index" style='display:flex;justify-content:space-between;width:500px'>
          <div>
            <input type="checkbox" v-model="item.checked" @change="changeItem"> 
            {{item.name}}</div>
          <div>
            <button @click="del(item, index)">删除</button>
          </div>
        </div>
      </tbody>
      <hr>
      <tfoot>
        <div>{{length}}items left</div>
       <button @click="changeAll" >All</button>
       <button  @click="undone">active</button>
       <button  @click="off">completed</button>
      </tfoot>
    </table>
</el-card>
<!-- 进度条 -->
<el-card class="box-card" style="flex:1;">
  <div slot="header" class="clearfix">
<img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
  </div>
  <div  class="text item">
vue
<el-progress :percentage='this.are[0].progress*100'></el-progress>
Html
<el-progress :percentage="this.are[1].progress*100" status="success"></el-progress>
Css
<el-progress :percentage="this.are[2].progress*100" ></el-progress>
Java Script 
<el-progress :percentage="this.are[3].progress*100" ></el-progress>
  </div>
</el-card>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       arr:[],
       are:[],
      //  todolist
         arb:[], 
         checkAll: false,
         sum:[]
        
  
     }
   },
   methods: {
      del(item, index) {
      this.arb.splice(index, 1)
    },
      changeAll() {
      this.arb.map(item => {
        if(item.checked){
        }else{
           item.checked = !item.checked
        }
       
      })
    },
    undone(){
      this.arb.filter
    },
    off(){}
   },
   mounted() {
    //  订单
       axios.get('/api/orderData').then(res=>{
         if(res.data.code){
         }else{
            this.arr=res.data.data
         }    
          //  console.log(this.arr)
       }).catch(err=>{
         console.log(err)
       })
      //  进度条
       axios.get('/api/progress').then(res=>{
         if(res.data.code){
         }else{
            this.are=res.data.data
         }    
           console.log(this.are)
       }).catch(err=>{
         console.log(err)
       })
      //  todolist
      axios.get('/api/todolist').then(res=>{
         if(res.data.code){
         }else{
            this.arb=res.data.data
         }    
           console.log(this.arb)
       }).catch(err=>{
         console.log(err)
       })
       this.arb.filter(item=>{
          if(item.checked===false){
            this.num=item
         }return this.num
       })
       
        console.log(this.num)
     
            },
   watch: {

   },
   computed: {
     length(){
        let num = this.arb.filter(item=>{
         return item.checked===false
       })
         return num.length
     }
   }
 }
</script>

<style scoped lang='scss'>
 .text {
    font-size: 14px;
    
  }

  .item {
    margin-bottom: 18px;
  }
.clearfix{
  display: flex;


}
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>