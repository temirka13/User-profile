<template>
  <v-layout class="d-flex  align-center h-100vh">
    <v-form
      v-model="valid"
      class="login__form content-center"
      @submit.prevent="submitUser"
    >
      <v-text-field
        v-model="login"
        label="Login"
        :rules="loginRules"
        outlined
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="showPassword ? 'text' : 'password'"
        label="Password"
        outlined
        required
        @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-btn
        type="submit"
        :disabled="!valid"
        color="success"
      >
        Login
      </v-btn>
      <p v-if="error">
        {{ error }}
      </p>
    </v-form>
  </v-layout>
</template>

<script>
export default {
  layout: 'empty',
  data: () => ({
    valid: true,
    showPassword: false,
    login: '',
    password: '',
    error: '',
    loginRules: [
      v => !!v,
      v => (v && v.length > 0)
    ],
    passwordRules: [
      v => !!v,
      v => (v && v.length > 0)
    ]
  }),
  methods: {
    submitUser () {
      const { login, password } = this
      const user = {
        login,
        password
      }
      this.$store.dispatch('authRequest', user)
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {
          this.login = ''
          this.password = ''
        })
    }
  }
}
</script>

<style scoped>
.h-100vh {
  height: 100vh;
}
.content-center {
  margin: 0 auto;
  text-align: center;
}
.login__form {
  width: 300px;
}
</style>
