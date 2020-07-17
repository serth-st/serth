<template>
 <div>
     <div style="display:flex;">
<el-card class="box-card" style='flex:1;margin:10px;display:flex;justify-content: space-between;'>
  <div class="text item" style="display:flex; justify-content: space-between;width: 300px;">

    <div>
     <i class="el-icon-s-custom" style="color:#44C8C5"></i>
    </div>
    <div>
      <div>New Visits</div>
       <countTo :startVal='startVal' :endVal='num.messages' :duration='3000'></countTo>
    </div>
  </div>
</el-card>
    <el-card class="box-card" style='flex:1;margin:10px;display:flex;justify-content: space-between;'>
  <div class="text item" style="display:flex; justify-content: space-between;width: 300px;">
    <i class="el-icon-s-comment" style="color:#6BB9F6"></i>
    <div>
      <div>Messages</div>
       <countTo :startVal='startVal' :endVal='num.purchases' :duration='3000'></countTo>
    </div>
  </div>
</el-card>
    <el-card class="box-card" style='flex:1;margin:10px;display:flex;justify-content: space-between;'>
  <div class="text item" style="display:flex; justify-content: space-between;width: 300px;">
    <div style="color:#F2556F;font-size:50px" >￥</div>
    <div>
    <div>Purchases</div>
    <countTo :startVal='startVal' :endVal='num.shopping' :duration='3000'></countTo> 
    </div>
  </div>
</el-card>
    <el-card class="box-card" style='flex:1;margin:10px;display:flex;justify-content: space-between;'>
  <div class="text item" style="display:flex; justify-content: space-between;width: 300px;">
    <i class="el-icon-shopping-cart-1" style="color:#FECEA3"></i>
    <div>
    <div>Shoppings</div>
    <countTo :startVal='startVal' :endVal='num.visits' :duration='3000'></countTo>
    </div>
  </div>
</el-card>
 </div>
 <div>
    <template>
 <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>
 </div>
 </div>
</template>

<script>
import countTo from 'vue-count-to';
import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line.common'
 export default {
   name: '',
   props: {
       num:{
           type:Object
       },
       num1:{
         type:Array
       }
   },
   components: {
       countTo,
       VCharts,
       VeLine
   },
   data () {
      this.chartSettings = {
        metrics: ['expected', 'actual'],
        dimension: ['date']
      }
      return {
        startVal: 0,
        chartData: {
          columns: ['date', 'expected', 'actual'],
          rows: []
        }
        
      }
   },
   methods: {

   },
   mounted() {
       this.chartData.rows=this.num1
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.text item{
  display:flex;
  justify-content: space-between;
  
}
i{
  font-size:40px;
}
</style>