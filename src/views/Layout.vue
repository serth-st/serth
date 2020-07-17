<template>
 <div>
    <el-container>
  <el-header style="background: rgb(46, 94, 133);">
  <Title :obj='obj'></Title>
  </el-header>
  <el-container>
    <el-aside style="width:200px; background: rgb(52, 64, 85);height:100vh">
      <Aside></Aside>
    </el-aside>
    <el-main style="border:1px solid black">
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
 </div>
</template>

<script>
import Title from '../components/Layout/Title.vue'
import Aside from '../components/Layout/Aside.vue'
 export default {
   name: '',
   props: {
   },
   components: {
     Title,
     Aside
   },
   data () {
     return {
       obj:{}
     }
   },
   methods: {

   },
   mounted() {
     this. obj=JSON.parse(localStorage.getItem('user'))
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>