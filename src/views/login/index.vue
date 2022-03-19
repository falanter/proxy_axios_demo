<template>
  <div id="login-container">
    <div id="login-form">
        <h2 id="form-title">信息管理系统</h2>
        <el-input v-model="username" placeholder="请输入用户名" @blur="checkName"></el-input>
        <span>{{nameMsg}}</span>
        <el-input placeholder="请输入密码" v-model="password" show-password @blur="checkpassword"></el-input>
        <span>{{passwordMsg}}</span>
        <el-button type="success" @click="formSubmit">登录</el-button>
    </div>
  </div>
</template>
<script>
import get from '@/api/get.js'
import post from '@/api/post.js'
export default {
  data() {
    return {
      username: "",
      password:"",
      nameMsg:'',
      passwordMsg:''
    };
  },
  methods:{
      formSubmit(){
          console.log(this.username,this.password)
        //   get().then(resp=>{
        //       console.log(resp.data)
        //   }).catch(err=>{
        //       console.log(err)
        //   })
        post().then(resp=>{
            console.log(resp.data)
        }).catch(err=>{
            console.log(err)
        })
      },
      checkName(){
          this.nameMsg=''
          if(this.username===''){
              this.nameMsg='请核实用户名'
          }
      },
      checkpassword(){
          this.passwordMsg=''
          if(this.password===''){
              this.passwordMsg='请核实密码'
          }
      }
  }
};
</script>
<style scoped>
#form-title{
    text-align: center;
}
#login-form {
  /* border: 1px solid #ccc; */
  background-color: #fff;
  width: 350px;
  height: 250px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
}
#login-container {
  background-color: #ccc;
  /* border: 1px solid #000; */
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>