// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from './en.json';
import ar from './ar.json';
const messages = {
  en,
  ar
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
