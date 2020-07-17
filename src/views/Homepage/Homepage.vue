<template>
 <div>
<Card :num='num' v-if="num1.length>0" :num1='num1'></Card>
<Cardpicth v-if="num2.length>0&&num3.length>0&&num1.length>0" :num2='num2' :num1='num1' :num3='num3'></Cardpicth>
 <Cardbutton></Cardbutton>
 </div>
</template> 
<script>
import Card from '../../components/Homepage/Card.vue'
import Cardpicth from '../../components/Homepage/Cardpicth.vue'
import Cardbutton from '../../components/Homepage/Cardbutton.vue'
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {
     Card,
     Cardpicth,
     Cardbutton
   },
   data () {
     return {
       num:{},
       num1:[],
       num2:[],
       num3:[],
       num4:[]
     }
   },
   methods: {

   },
   mounted() {
     axios.get('/api/homeData').then(res=>{
// console.log(res.data)
      if(res.data.code){    
      }else{
        this.num=res.data.data
      }
      // console.log(this.num)
     }).catch(err=>{
       console.log(err)
     }),
     axios.get('/api/homeChat').then(red=>{
       
           if(red.data.code){    
      }else{
        this.num1=red.data.data}
      console.log(this.num1)
      
     }).catch(err=>{
       console.log(err)
     }),
     axios.get('/api/radarChat').then(ref=>{
       if(ref.data.code){    
      }else{
        this.num2=ref.data.data
      }
      //  console.log(this.num2)
     }).catch(err=>{
       console.log(err)
     }),
     axios.get('/api/ringChat').then(reg=>{
       if(reg.data.code){    
      }else{
        this.num3=reg.data.data
      }
      //  console.log(this.num3)
     }).catch(err=>{
       console.log(err)
     })

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
  Cardpicth{
    margin-top:10px ;
    margin-bottom:10px ;
  }
  Cardbutton{
     margin-top:10px ;
  }
</style>