<template>
 <div>
 标题：<h1>{{ruleForm.title}}</h1>
摘要：<h5>{{ruleForm.abstract}}</h5>
发布时间：<h6>{{ruleForm.time}}</h6>
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
 id:'',
      ruleForm: {
        title: '',
        abstract: '',
        author: '',
        category: '',
        source: '',
        star: '',
        date: '',
       time:''
      },
     }
   },
   methods: {

   },
   mounted() {
 let msg=JSON.parse(this.$route.query.msg)
      console.log(msg)
      this.ruleForm.title=msg.title,
      this.ruleForm.abstract=msg.abstract,
      this.ruleForm.author=msg.author,
      this.ruleForm.category=msg.category
      this.ruleForm.source=msg.source
      this.ruleForm.star=msg.star
      this.ruleForm.date=msg.date
      this.text=msg.text
      this.id=msg._id
      this.ruleForm.time=msg.time
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>