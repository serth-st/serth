<template>
  <div style="width:500px;">
    <el-form :model="form" label-width="100px" status-icon :rules="rules" ref="form">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" style="width:100%" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: "",
        // email: "",
        checkPass: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 8, message: "用户名在2~8位", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
          { min: 6, max: 15, message: "密码在6~15位", trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "两次输入密码不一致", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ],
        // email: [
        //   { required: true, message: "邮箱不能为空", trigger: "blur" },
        //   { type: "email", message: "请输入正确邮箱", trigger: "blur" }
        // ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
             let user = {
              username:this.form.username,
              password:this.form.password
          }
          console.log(this.form.username)
          localStorage.setItem('user',JSON.stringify(user))
          this.$message({
          showClose: true,
          message: '恭喜你，登录成功',
          type: 'success'
        });
        } else {
          this.$message.error("验证错误");
        }
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>