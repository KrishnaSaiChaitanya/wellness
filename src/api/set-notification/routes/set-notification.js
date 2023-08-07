module.exports = {
  routes: [
    {
      method: "POST",
      path: "/set-notification",
      handler: "set-notification.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
