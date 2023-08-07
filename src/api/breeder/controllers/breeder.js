"use strict";

/**
 * breeder controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::breeder.breeder", ({ strapi }) => ({
  async create(ctx) {
    const { data } = ctx.request.body;
    console.log(ctx.request.body);
    const response = await strapi.entityService.create("api::breeder.breeder", {
      data: data,
    });

    return { sucussfull: "hello my name is chaitanya" };
  },
}));
//  ({ strapi }) => ({
//    async create(ctx) {
//      const { data } = ctx.request.body;
//      console.log(ctx);
//      const response = await strapi.entityService.create(
//        "api::breeder.breeder",
//        {
//          data: data,
//        }
//      );

//      return { response };
//    },
//  });
