<template>
  <el-menu
    :default-active="this.$route.meta.prentpath"
    router="router"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/Homepage" >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">首页</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/Havepublished">
      <i class="el-icon-menu"></i>
      <span slot="title" >已发布</span>
    </el-menu-item>
    <el-menu-item index='/Statistics' >
      <i class="el-icon-menu"></i>
      <span slot="title" >统计</span>
    </el-menu-item>
    <el-menu-item index="/Publish" >
      <i class="el-icon-check"></i>
      <span slot="title">发表文章</span>
    </el-menu-item>
    <el-menu-item index="/Label" >
      <i class="el-icon-setting"></i>
      <span slot="title">标签页</span>
    </el-menu-item>
    <el-menu-item index="/Excle" >
      <i class="el-icon-setting"></i>
      <span slot="title">导出excle</span>
    </el-menu-item>
    <el-menu-item index="/Upload" >
      <i class="el-icon-setting"></i>
      <span slot="title">图片上传</span>
    </el-menu-item>
    <el-menu-item index="/Exit" >
      <i class="el-icon-delete"></i>
      <span slot="title">退出系统</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {}
  },
  methods: {
    
    
  },
  mounted() {},
  watch: {},
  computed: {},
}
</script>

<style scoped lang="scss"></style>
