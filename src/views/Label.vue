<template>
 <div>
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane :label='a' name="first">
        <div v-for="(item,index) in arr" :key="index">
            {{item.title}}
            {{item.time}}
            <button @click="read(item,index)">标为已读</button>
        </div>
        <div>
          <button @click="allred">全部已读</button>
        </div>
    </el-tab-pane>
    <el-tab-pane :label="b" name="second">  
    <div v-for="(item,index) in ers" :key="index">
            {{item.title}}
            {{item.time}}
            <button @click="del(item,index)">删除</button>
        </div>
          <div>
          <button @click="alldel">删除全部</button>
        </div>
        </el-tab-pane>
    <el-tab-pane :label="c" name="third">
      <div v-for="(item,index) in err" :key="index">
            {{item.title}}
            {{item.time}}
            <button style='background:yellow' @click="recover(item,index)">恢复</button>
        </div>
          <div>
          <button @click="allrecover">清空回收站</button>
        </div>
    </el-tab-pane>
  </el-tabs>
</template>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

activeName: 'first',
arr:[{
    title:'[紧急通知]',
    time:'2018-4-10 10:00'
},{
       title:'发大红包',
    time:'2018-4-10 10:00'
}],
ers:[{
    title:'[系统通知]',
     time:'2018-4-10 10:00'
}],
err:[{
    title:'[系统通知]您的优惠券已过期',
     time:'2018-4-10 10:00'
}]
     }
   },
   methods: {
 handleClick(tab, event) {
        // console.log(tab, event);
      },
      read(item, index){
        this.arr.splice(index, 1);
        this.ers.push(item);
      },
      del(item, index){
        this.ers.splice(index, 1);
        this.err.push(item);
      },
      recover(item, index){
        this.err.splice(index, 1);
        this.ers.push(item);
      },
      allred(){  
        this.ers=this.arr.concat(this.ers)
        this.arr=[]
      },
      alldel(){
         this.err=this.ers.concat(this.err)
        this.ers=[]
      },
      allrecover(){
         this.ers=this.err.concat(this.ers)
        this.err=[]
      }
   },
   mounted() {

   },
   watch: {

   },
   computed: {
      a(){
        return `未读信息(${this.arr.length})`
      },
      b(){
        return `已读信息(${this.ers.length})`
      },
      c(){
        return `回收站(${this.err.length})`
      },
   }
 }
</script>

<style scoped lang='scss'>

</style>