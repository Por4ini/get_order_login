<!-- src/App.vue -->
<template>
  <div>
    <select v-model="currentLocale" @change="changeLocale">
      <option value="en">English</option>
      <option value="ua">Українська</option>
      <option value="ru">Русский</option>
    </select>
    <router-view />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { locale } = useI18n();
    const currentLocale = locale.value;

    function changeLocale(event) {
      locale.value = event.target.value;
    }

    return {
      currentLocale,
      changeLocale,
    };
  },
};
</script>
