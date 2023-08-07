module.exports = {
  routes: [
    {
      method: "POST",
      path: "/register",
      handler: "register.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
