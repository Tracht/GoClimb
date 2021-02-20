const validateInputMixin = {
    methods: {
      validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = re.test(String(email).toLowerCase());
        return isValidEmail;
      },
      validatePassword(password) {
        const re = /[a-zA-Z0-9.!@#$%^&*()_+-=\-]{8,64}/g;
        const isValidPassword = re.test(String(password));
        return isValidPassword;
      },
    },
  };
  