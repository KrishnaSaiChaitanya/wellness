// const config = {
//   locales: [
//     // 'ar',
//     // 'fr',
//     // 'cs',
//     // 'de',
//     // 'dk',
//     // 'es',
//     // 'he',
//     // 'id',
//     // 'it',
//     // 'ja',
//     // 'ko',
//     // 'ms',
//     // 'nl',
//     // 'no',
//     // 'pl',
//     // 'pt-BR',
//     // 'pt',
//     // 'ru',
//     // 'sk',
//     // 'sv',
//     // 'th',
//     // 'tr',
//     // 'uk',
//     // 'vi',
//     // 'zh-Hans',
//     // 'zh',
//   ],
// };

// const bootstrap = (app) => {
//   console.log(app);
// };

// export default {
//   config,
//   bootstrap,
// };

export default {
  config: {
    theme: {
      dark: {
        colors: {
          // primary100: "#c9ffeb",
          primary100: "#181826",
          primary200: "#5effc3",
          primary500: "#00f298",
          buttonPrimary500: "#ffe298",
          primary600: "#00bd77",
          buttonPrimary600: "#ffbd77",
          primary700: "#008755",
        },
      },
    },
    locales: ["pt-BR"],
    tutorials: false,
    notifications: {
      releases: false,
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Dashboard",
        "app.components.HomePage.welcome.again":
          "Welcome to Wellness Dashboard 👋",
        "Auth.form.welcome.title": "Welocome to Wellness!",
      },
      "pt-BR": {
        "app.components.LeftMenu.navbrand.title": "Painel",
      },
    },
  },
  bootstrap() {},
};
