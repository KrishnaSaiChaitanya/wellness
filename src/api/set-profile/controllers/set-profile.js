"use strict";

/**
 * A set of functions called "actions" for `set-profile`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const response = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        ctx.request.body.user_id,
        {
          fields: ["profile"],
        }
      );
      const role = response.profile;
      if (role == "owner") {
        const entry = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          ctx.request.body.user_id,
          {
            fields: ["id", "email", "mobile_number"],
            populate: "owner",
          }
        );
        const { data } = ctx.request.body;
        const response = await strapi.entityService.update(
          "api::owner.owner",
          entry.owner.id,
          {
            data: data,
          }
        );
        return {
          message: "Successfully updated user details",
          userId: ctx.request.body.user_id,
          user_details: response,
        };
      } else if (role == "veterinarian") {
        const { data } = ctx.request.body;
        const entry = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          ctx.request.body.user_id,
          {
            fields: ["id", "email", "mobile_number"],
            populate: "veterinarian",
          }
        );
        const response = await strapi.entityService.update(
          "api::veterinarian.veterinarian",
          entry.veterinarian.id,
          {
            data: data,
          }
        );
        return {
          message: "Successfully updated user details",
          userId: ctx.request.body.user_id,
          user_details: response,
        };
      } else if (role == "breeder") {
        const { data } = ctx.request.body;
        const entry = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          ctx.request.body.user_id,
          {
            fields: ["id", "email", "mobile_number"],
            populate: "breeder",
          }
        );
        const response = await strapi.entityService.update(
          "api::breeder.breeder",
          entry.breeder.id,
          {
            data: data,
          }
        );
        return {
          response: "Successfully updated user details",
          userId: ctx.request.body.user_id,
          user_details: response,
        };
      } else if (role == "trainer") {
        const entry = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          ctx.request.body.user_id,
          {
            fields: ["id", "email", "mobile_number"],
            populate: "trainer",
          }
        );
        const { data } = ctx.request.body;
        const response = await strapi.entityService.update(
          "api::trainer.trainer",
          entry.trainer.id,
          {
            data: data,
          }
        );
        return {
          message: "Successfully updated user details",
          userId: ctx.request.body.user_id,
          user_details: response,
        };
      } else {
        return {
          response: "Error in selecting valid role",
        };
      }
    } catch (err) {
      ctx.body = err;
    }
  },
};
