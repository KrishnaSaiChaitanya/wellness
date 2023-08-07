"use strict";

/**
 * ownership-log controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::ownership-log.ownership-log",
  ({ strapi }) => ({
    async get(ctx) {
      const response = await strapi.entityService.findMany(
        "api::ownership-log.ownership-log",
        {
          fields: ["time_stamp", "edited_by"],
          sort: { time_stamp: "DESC" },
          populate: {
            current_owner: true,
            previous_owner: true,
            horse_info: true,
          },
        }
      );

      return { message: "Successfully fetched data", data: response };
    },
  })
);

module.exports = {
  exampleAction: async (ctx, next) => {
    const response = await strapi.entityService.findMany(
      "api::ownership-log.ownership-log",
      {
        fields: ["time_stamp", "edited_by"],
        sort: { time_stamp: "DESC" },
        populate: {
          current_owner: true,
          previous_owner: true,
          horse_info: true,
        },
      }
    );

    return { message: "Successfully fetched data", data: response };
  },
};
