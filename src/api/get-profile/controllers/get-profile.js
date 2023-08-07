"use strict";

/**
 * A set of functions called "actions" for `get-profile`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const entry = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        ctx.params.id,
        {
          fields: ["id", "email", "mobile_number", "profile"],
        }
      );
      const role = entry.profile;
      if (role == "owner") {
        const entry = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          ctx.params.id,
          {
            fields: [
              "id",
              "email",
              "mobile_number",
              "notifications",
              "is_social",
            ],
            populate: "owner",
          }
        );

        return {
          response: "Successfully fetched user details",

          user_details: entry,
        };
      } else if (role == "veterinarian") {
        const entry = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          ctx.params.id,
          {
            fields: [
              "id",
              "email",
              "mobile_number",
              "notifications",
              "is_social",
            ],
            populate: "veterinarian",
          }
        );

        return {
          response: "Successfully updated user details",

          entry: entry,
        };
      } else if (role == "breeder") {
        const entry = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          ctx.params.id,
          {
            fields: [
              "id",
              "email",
              "mobile_number",
              "notifications",
              "is_social",
            ],
            populate: "breeder",
          }
        );

        return {
          response: "Successfully updated user details",

          entry: entry,
        };
      } else if (role == "trainer") {
        const entry = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          ctx.params.id,
          {
            fields: [
              "id",
              "email",
              "mobile_number",
              "notifications",
              "is_social",
            ],
            populate: "trainer",
          }
        );

        return {
          response: "Successfully fetched user details",

          user_details: entry,
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
