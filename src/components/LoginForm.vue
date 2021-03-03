<template>
  <div class="form-container">
    <el-form :model="loginForm" status-icon label-width="120px">
      <el-form-item label="Email" prop="email">
        <el-input type="Email" v-model="loginForm.email" autocomplete="off" autofocus>
        </el-input>
      </el-form-item>

      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="loginForm.pass" autocomplete="off" show-password>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(loginForm)">Login</el-button>
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
    submitForm(form) {
      console.log(form);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.form-container {
    margin-top: 100px;
    margin-left: 25%;
    margin-right: 25%;
    position: relative;
}
</style>
