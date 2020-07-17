<template>
 <div style="display:flex">
 <el-card class="box-card" style="flex:1">
  <template>
  <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
    </template>
</el-card>
<el-card class="box-card" style="flex:1;margin:0 10px 0 10px">
     <template>
  <ve-pie :data="chartData1" :settings="chartSettings1"></ve-pie>
    </template>
</el-card>
<el-card class="box-card" style="flex:1">
 <template>
  <ve-histogram :data="chartData2" :settings="chartSettings2"></ve-histogram>
</template>
</el-card>
 </div>
</template>

<script>
import VeRadar from 'v-charts/lib/radar.common.js'
import VePie from 'v-charts/lib/pie.common.js'
import VeHistogram from 'v-charts/lib/histogram.common.js'
 export default {
   name: '',
   props: {
       num2:{
           type:Array
       },
       num3:{
           type:Array
       },
       num1:{
           type:Array
       }
   },
   components: {
     VeRadar,
     VePie,
     VeHistogram
   },
    data () {
        // 雷达图
      this.chartSettings = {
        dimension: ['name'],
        metrics: ['sales', 'ministration', 'techology','marketing','delelopmer'],
       
      }
    //   饼图
        this.chartSettings1 = {
        roseType: 'radius'
      }
    //   柱状图
       this.chartSettings2 = {
        metrics: ['expected', 'actual'],
        dimension: ['date']
      }
      return {
        //   雷达图
        chartData: {
          columns: ['sales', 'ministration', 'techology','marketing','delelopmer'],
          rows: [  
          ]
        },
        // 饼图
            chartData1: {
          columns: ['name', 'data'],
          rows: [
        
          ]},
        //   柱状图
            chartData2: {
          columns: ['expected', 'actual'],
          rows: [
          ]
        }
      }
    },
   methods: {

   },
   mounted() {
       this.chartData.rows=this.num2
       this.chartData1.rows=this.num3
       this.chartData2.rows=this.num1
       
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>