<template>
 <div style='display:flex;justify-content:space-between'>
    <div>欢迎{{obj.username}}来到小爱后台管理系统</div>
    <div v-if='this.houres>=6&&this.houres<12'>亲爱的{{obj.username}}上午好， 上次登录时间:{{obj.time}}</div>
    <div v-else-if='this.houres>=12&&this.houres<14'>亲爱的{{obj.username}}中午好， 上次登录时间:{{obj.time}}</div>
    <div v-else-if='this.houres>=14&&this.houres<18'>亲爱的{{obj.username}}下午好， 上次登录时间:{{obj.time}}</div>
    <div v-else-if='this.houres>=18&&this.houres<24'>亲爱的{{obj.username}}晚午好， 上次登录时间:{{obj.time}}</div>
    <div v-else-if='this.houres>=0&&this.houres<6'>亲爱的{{obj.username}}夜深了， 上次登录时间:{{obj.time}}</div>
 </div>
</template>

<script>
import dayjs from 'dayjs'
 export default {
   name: '',
   props: {
     obj:{
       type:Object
     }
   },
   components: {

   },
   data () {
     return {
       houres:''
     }
   },
   methods: {

   },
   mounted() {
     this.houres=dayjs().hour()
    //  console.log(this.houres)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>