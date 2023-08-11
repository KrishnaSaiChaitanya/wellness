"use strict";

/**
 * result controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::result.result");

module.exports = createCoreController("api::result.result", ({ strapi }) => ({
  async get(ctx) {
    const response = await strapi.entityService.findMany("api::result.result", {
      //   fields: ["time_stamp", "edited_by"],
      //   sort: { time_stamp: "DESC" },
      populate: {
        // current_owner: true,
        // previous_owner: true,
        horse_info: { populate: "*" },
      },
    });

    return { message: "Successfully fetched data", data: response };
  },
}));

module.exports = {
  exampleAction: async (ctx, next) => {
    const response = await strapi.entityService.findMany("api::result.result", {
      //   fields: ["time_stamp", "edited_by"],
      //   sort: { time_stamp: "DESC" },
      populate: {
        // current_owner: true,
        // previous_owner: true,
        horse_info: { populate: "*" },
      },
    });

    return { message: "Successfully fetched data", data: response };
  },
};
