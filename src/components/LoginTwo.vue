<template>
    <div class="login">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>通用后台管理系統</span>
        </div>
        <el-form label-width="80px" :model="form" ref="form" :rules="rules">
          <el-form-item
            label="用戶名"
            prop="username"
          >
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
          >
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
    <script>
  import toolCon from "../../plugins/toolCon";
  export default {
    data() {
      const validataName =  (rule,value,callback) => {
          // 请输入4-10位昵称
          let reg = /(^[a-zA-Z0-9]{4,10}$)/
          if(value == ''){
              callback(new Error('请输入用户名'))
              
          }else if(!reg.test(value)){
              callback(new Error('请输入4-10位用户名'))
          }else{
              callback()
          }
      }
      const validataPass =  (rule,value,callback) => {
          // 6-12位密码需要包含大小写字母和数组以及特殊符号
          let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
          if(value == ''){
              callback(new Error('请输入密码'))
              
          }else if(!pass.test(value)){
              callback(new Error('12位密码需要包含大小写字母和数组以及特殊符号'))
          }else{
              callback()
          }
      }
      return {
        form: {
          username: "",
          password: "",
        },
        rules:{
          username:[{validator:validataName,trigger:'blur'}],
          password:[{validator:validataPass,trigger:'blur'}],
        }
      };
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.toolCon.setLocal("username", this.username);
            //  this.axios.post('https://rapserver.sunmi.com/app/mock/340/login',this.form)
            //  .then(res=>{
            //     if(res.data.status === 200){
  
            //     }
            //  })
          } else {
            console.error(this.from);
          }
        });
      },
    },
  };
  </script>
    <style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409eef;
    .box-card {
      width: 450px;
      margin: 200px auto;
      div {
        text-align: center;
        font-size: 30px;
      }
      .el-button {
        width: 100%;
      }
    }
  }
  </style>