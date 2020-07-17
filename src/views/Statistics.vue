<template>
  <div style="overflow:hidden;">
    <el-col :span="6">
      <el-card shadow="always" style="background:rgb(124,202,191)">
        今日发布({{num}})
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always" style="background:rgb(232,138,135)">
        原创文章({{nus}})
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always" style="background:rgb(131,117,163)">
        新留言(0)
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always" style="background:rgb(159,206,193)">
        新消息(0)
      </el-card>
    </el-col>
    <div class="zbc">
      <div style="flex:1">
        <template>
          <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
        </template>
      </div>
      <div style="flex:1">
        <template>
<ve-pie :data="chartData1" :settings="chartSettings1"></ve-pie>
       </template>
      </div>
    </div>
    <div>
        <template>
           <ve-waterfall :data="chartData2" :settings="chartSettings2"></ve-waterfall>
        </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import lodash from 'lodash';
import VCharts from "v-charts";
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {
    VCharts,
  },
  data() {
       this.chartSettings ={
  
       }
    //   图二
       this.chartSettings1 = {
        roseType: 'radius'
      }
    // 图三
      this.chartSettings2= {
        dimension: '发布时间',
        metrics: '数量'
      }
    return {
        num:0,
        nus:0,
        // 图一
      chartData: {
        columns: ['分类','数量'],
        rows: [],

      },
    //   图二
    chartData1: {
          columns: ['来源','数量'],
          rows: []
  
        
        },
    // 图三
         chartData2: {
          columns: ['发布时间','数量' ],
          rows: []
         
        }
    };
  },
  methods: {},
  mounted() {
      axios
      .get("/api/article/allArticle")
      .then((res) => {
          let category = lodash.groupBy(res.data.data,'category')
          for(let i in category){
              let obj = {}
              obj['分类']=i
              obj['数量']=category[i].length
              this.chartData.rows.push(obj)
          }
        //   console.log(category)
          let source = lodash.groupBy(res.data.data,'source')
          for(let i in source){
              let obj = {}
              obj['来源']=i
              obj['数量']=source[i].length
              this.chartData1.rows.push(obj)
          }
        //   console.log(source)
          let news = dayjs().format('YYYY年MM月DD日')
         console.log(news)
          res.data.data.map((item)=>{
              if(item.source==='原创'){
                  this.nus++
              }
              item.date=dayjs(item.date).format('YYYY年MM月DD日')
              
              if(news===item.date){
                  this.num++
              }
            //   console.log(item.date)
          })
            let date1 = lodash.groupBy(res.data.data,'date')
            console.log('hfhh', date1)
          for(let i in date1){
             
              let obj = {}
              obj['发布时间']=i
              obj['数量']=date1[i].length
              this.chartData2.rows.push(obj)
          }
          })
      .catch((err) => {
        console.log(err);
      });
     
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.zbc{
    margin-top:200px;
    display: flex;
}
</style>
