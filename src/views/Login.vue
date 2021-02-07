<template>
  <div class="about">
    <h1>Get started</h1>
    <div class="form-container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <el-tabs v-model="activeName" @tab-click="handleClick">

      <el-tab-pane label="Register" name="first">
        <el-row>
          <el-col :xs="24">
              <RegisterForm />
          </el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="Login" name="second">
        <el-row>
          <el-col :xs="24">
            <LoginForm />
          </el-col>
        </el-row>
      </el-tab-pane>

    </el-tabs>

  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      activeName: 'first',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style>
.form-container {
    margin-top: 50px;
    margin-left: 25%;
    margin-right: 25%;
    position: relative;
}
</style>
