<template>
  <div>
    <!-- <div><h2>Register</h2></div> -->
    <el-form :model="ruleForm" status-icon :rules="rules" label-width="120px" ref="ruleForm">
      <el-form-item label="Email" prop="email">
        <el-input type="Email" v-model="ruleForm.pass" autocomplete="off" autofocus>
        </el-input>
      </el-form-item>

      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" show-password>
        </el-input>
      </el-form-item>

      <el-form-item label="Confirm" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Enter the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('Passwords don\'t match!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        pass: [
          { validator: validatePass1, trigger: 'blur' },
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' },
        ],
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
