<template>
  <div class="home">

  <div class="form-container">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-tabs v-model="activeName" @tab-click="handleClick">

      <el-tab-pane label="Register" name="first">
        <el-row :gutter="40">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="6">
              <div><RegisterForm /></div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="6"></el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="Login" name="second">
        <el-row :gutter="40">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="6">
            <div><LoginForm /></div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="6"></el-col>
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
  name: 'Home',
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
    margin-left: 20%;
    margin-right: 20%;
    /* position: absolute;
    top: 50%;
    left: 50%;
    margin-right: 0%;
    transform: translate(-50%, -50%) */
}
</style>
