<template>
  <div class="container">
    <div class="form-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Register" name="first">
        <RegisterForm />
      </el-tab-pane>
      <el-tab-pane label="Login" name="second">
        <LoginForm />
      </el-tab-pane>
    </el-tabs>
    </div>
   </div>

</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/Forms/LoginForm.vue';
import RegisterForm from '@/components/Forms/RegisterForm.vue';

export default {
  name: 'Login',
  components: { LoginForm, RegisterForm },
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
.container {
  padding-top: 100px;
}

/*fix this*/
.form-container {
    margin-top: 50px;
    margin-left: 20%;
    margin-right: 20%;
    position: relative;
}
</style>
