// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import { fetchTranslations } from "./locales/fetchTranslations";

const i18n = createI18n({
    locale: "en", 
    messages: {},
});

async function loadTranslations() {
    const translations = await fetchTranslations();


    i18n.global.setLocaleMessage("en", translations.en);
    i18n.global.setLocaleMessage("ru", translations.ru);
    i18n.global.setLocaleMessage("ua", translations.ua);
}

loadTranslations();
import 'normalize.css';
import '@/assets/css/_variables.css';
const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");
