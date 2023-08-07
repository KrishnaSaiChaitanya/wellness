"use strict";

/**
 * A set of functions called "actions" for `set-notification`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const response = await strapi.entityService.update(
        "plugin::users-permissions.user",
        ctx.request.body.user_id,
        {
          data: { notifications: ctx.request.body.notifications },
        }
      );
      return {
        message: "Successfully Updated notifications permissions for the user",
      };
    } catch (err) {
      ctx.body = err;
    }
  },
};
