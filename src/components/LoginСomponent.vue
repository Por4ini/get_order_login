<template>
  <div class="login-container">
    <div class="header">
      <div class="block-logo">
        <img src="@/assets/img/logo/logo.svg" alt="logo">
      </div>

      <span class="header-text">👋🏻{{ $t("PS.GREETINGS_FROM_UKRAINE")}}🇺🇦</span>
    </div>
    <h3 class="login-title">
      {{ $t("PS.SIGN_IN") }}
    </h3>
    <form @submit.prevent="login" class="login-form">
      <div class="fields">
        <div class="field">
          <label>{{ $t("U_EMAIL") }}</label>
          <input v-model="username" type="text"  placeholder="email@company.com"/>
        </div>
        <div class="field">
          <label>{{ $t("PS.INPUT_PASSWORD") }}</label>
          <input v-model="password" type="password" placeholder="Введіть ваш пароль"/>
        </div>
      </div>
      <div class="form-buttons">
        <div class="form-links">
          <a href="#">Забули пароль?</a>
        </div>
        <button type="submit">
          {{ $t("PS.SIGN_IN") }}
        </button>
      </div>
    </form>
    <div class="login-bottom">
      Немає облікового запису?
      <a href="#">Зареєструватись</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "https://api.getorder.biz/api/v2/token/get",
          {
            username: this.username,
            password: this.password,
          }
        );
        console.log(response);
        localStorage.setItem("token", response.data.data.token);
        this.error = null;
        console.log(response.data);
      } catch (error) {
        this.error = this.$t("login.error");
        console.error("Login error:", error);
      }
    },
  },
};
</script>
