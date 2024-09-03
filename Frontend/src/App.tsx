import React, { Suspense } from "react";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import Footer from "./features/layout/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "./store/hooks";
import { GetProducts } from "./features/products/utils/GetProducts";
import { GetCategories } from "./features/categories/utils/GetCategories";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enTranslations from "../locales/locales/en.json";
import heTranslations from "../locales/locales/he.json";

// Initialize i18next
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      he: {
        translation: heTranslations,
      },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

const themeDark = createTheme({
  palette: {
    mode: "dark",
  },
});

const themeLight = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);

  // Fetch products and categories
  GetProducts();
  GetCategories();

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={themeMode ? themeDark : themeLight}>
          <Suspense fallback={<div>Loading translations...</div>}>
            <Header />
            <RouterDOM />
            <Footer />
          </Suspense>
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
};

export default App;
