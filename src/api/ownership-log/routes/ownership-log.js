"use strict";

/**
 * ownership-log router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::ownership-log.ownership-log");
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ownership-log",
      handler: "ownership-log.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
