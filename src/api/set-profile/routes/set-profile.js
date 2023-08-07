module.exports = {
  routes: [
    {
      method: "POST",
      path: "/set-profile",
      handler: "set-profile.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
