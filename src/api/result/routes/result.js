"use strict";

/**
 * result router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::result.result");
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/results",
      handler: "result.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
