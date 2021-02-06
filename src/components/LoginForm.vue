<template>
  <div>
    <!-- <div><h2>Login</h2></div> -->
    <el-form :model="ruleForm" status-icon :rules="rules" label-width="120px" ref="loginForm">
      <el-form-item label="Email" prop="email">
        <el-input type="Email" v-model="loginForm.email" autocomplete="off" autofocus>
        </el-input>
      </el-form-item>

      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="loginForm.pass" autocomplete="off" show-password>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        pass: '',
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
        return null;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
