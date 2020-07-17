<template>
<div class="body">
<el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>欢迎来到小爱后台管理系统</span>
    </div>
    <div style="width:500px;">
      <el-form
        :model="form"
        label-width="100px"
        status-icon
        :rules="rules"
        ref="form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <div style="display:flex">
          <el-form-item label="验证码" prop="code">
            <el-input
              v-model="form.code"
              placeholder="请输入验证码"
              style="width:100px"
            ></el-input>
          </el-form-item>
          <div v-html="this.code1" @click="changes"></div>
       </div>
       <div style="display:flex">
         <el-form-item>
          <el-button type="primary" style="padding:5px 10px" @click="login"
            >立即登录</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="padding:5px 10px" @click="logon"
            >没有账号？立即注册</el-button
          >
        </el-form-item>
       </div>
       
      </el-form>
    </div>
  </el-card>
</div>
</template>
<script>
import axios from "axios";
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
       let checkUsername = (rule, value, callback) => {
      if (typeof value !== "string") {
        callback(new Error("请输入字符"));
      }
      callback();
    };
    return {
      code1: "",
      form: {
        username: "",
        password: "",
        code: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 8, message: "用户名在2~8位", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "密码在6~15位", trigger: "blur" },
        ],
         Verification: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ]
      },
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          axios
            .post("/api/user/login", {
               username:this.form.username,
                password:this.form.password,
                code:this.form.code
            })
            .then((res) => {
              if (res.data.code === 200) {
                 localStorage.setItem("user", JSON.stringify(this.form));  
                 console.log(this.form);
               
                let nowtime= dayjs().format('YYYY年MM月DD日  HH时mm分ss秒')
                this.$message.success(res.data.message);
                  this.$router.push("/Homepage");   
              } else {
                this.$message.warning(res.data.message);
              }
              // console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.$message.error("验证错误");
        }
      });
    },
    logon() {
      this.$router.push("/Logon");
    },
    changes() {
      axios
        .get("/api/captcha")
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            this.code1 = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    axios
      .get("/api/captcha")
      .then((res) => {
        if (res.data) {
          // console.log(res.data);
          this.code1 = res.data;
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang="scss">
  .box-card {
    width: 600px;
    margin: 100px auto;
  }
  .body{
    width: 100vw;
    height: 100vh;
    background: url('http://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1594896809&t=8f19ce65d33cf5d921de298e51a57edb');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    margin: 0;
  }
</style>
