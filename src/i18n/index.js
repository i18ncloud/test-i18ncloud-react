
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PT from "./PT";
import EN from "./EN";
import FR from "./FR";



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      PT,EN,FR
    },
    lng: "PT",
    fallbackLng: "PT",
    keySeparator:false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
