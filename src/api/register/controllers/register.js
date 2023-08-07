"use strict";

/**
 * A set of functions called "actions" for `register`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      if (ctx.request.body.role == "owner") {
        const { data } = ctx.request.body;
        const response = await strapi.entityService.create("api::owner.owner", {
          data: data,
        });
        const { user } = ctx.request.body;
        const entry = await strapi.entityService.create(
          "plugin::users-permissions.user",
          {
            data: { ...user, owner: response.id },
            populate: "owner",
          }
        );
        return {
          message: "User is Successfully registered as owner",
          userId: entry.id,
        };
      } else if (ctx.request.body.role == "veterinarian") {
        const { data } = ctx.request.body;
        const response = await strapi.entityService.create(
          "api::veterinarian.veterinarian",
          {
            data: data,
          }
        );
        const { user } = ctx.request.body;
        const entry = await strapi.entityService.create(
          "plugin::users-permissions.user",
          {
            data: { ...user, veterinarian: response.id },
            populate: "veterinarian",
          }
        );
        return {
          message: "User is Successfully registered as veterinarian",
          userId: entry.id,
        };
      } else if (ctx.request.body.role == "breeder") {
        const { data } = ctx.request.body;
        const response = await strapi.entityService.create(
          "api::breeder.breeder",
          {
            data: data,
          }
        );
        const { user } = ctx.request.body;
        const entry = await strapi.entityService.create(
          "plugin::users-permissions.user",
          {
            data: { ...user, breeder: response.id },
            populate: "breeder",
          }
        );
        return {
          message: "User is Successfully registered as breeder",
          userId: entry.id,
        };
      } else if (ctx.request.body.role == "trainer") {
        const { data } = ctx.request.body;
        const response = await strapi.entityService.create(
          "api::trainer.trainer",
          {
            data: data,
          }
        );
        const { user } = ctx.request.body;
        const entry = await strapi.entityService.create(
          "plugin::users-permissions.user",
          {
            data: { ...user, trainer: response.id },
            populate: "trainer",
          }
        );
        return {
          message: "User is Successfully registered as trainer",
          userId: entry.id,
        };
      } else {
        return {
          message: "Please select a valid role",
        };
      }
    } catch (err) {
      ctx.body = err;
    }
  },
};
