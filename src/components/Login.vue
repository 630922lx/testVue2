
<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系統</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用戶名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
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
/* eslint-disable */
import { setLocal } from "../../plugins/toolCon";
import { nameRule, passRule } from "../utils/validate.js";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: nameRule, trigger: "blur" }],
        password: [{ validator: passRule, trigger: "blur" }],
      },
    };
  },
  methods: {
    async login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          setLocal("username", this.form.username);
          setLocal("password", this.form.password);
          this.service.post("/login", this.form)
          .then(res=>{
            if(res.status ===200){
              this.$router.push('/home')
            }
          })
          .catch(err=>{
            console.log(err);
          })
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