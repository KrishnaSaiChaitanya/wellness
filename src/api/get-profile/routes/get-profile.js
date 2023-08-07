module.exports = {
  routes: [
    {
      method: "GET",
      path: "/get-profile/:id",
      handler: "get-profile.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
