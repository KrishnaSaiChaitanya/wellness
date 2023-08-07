const state = {
  id: 1,
};

module.exports = {
  async beforeUpdate(event) {
    const { result, params } = event;
    console.log(params);
    // console.log("new owner is : -", result.owner);
    const entry = await strapi.entityService.findOne(
      "api::horse-info.horse-info",
      params.data.id,
      {
        fields: ["id", "barn_name"],
        populate: "owner",
      }
    );
    const res = await strapi.entityService.create(
      "api::ownership-log.ownership-log",
      {
        data: {
          time_stamp: params.data.updatedAt,
          horse_info: entry.id,
          previous_owner: entry.owner.id,
        },
      }
    );
    state.id = res.id;
    console.log("response id :--", res);
  },
  async afterUpdate(event) {
    const { result, params } = event;
    console.log(result);
    const entry = await strapi.entityService.findOne(
      "api::horse-info.horse-info",
      result.id,
      {
        fields: ["id", "barn_name"],
        populate: "owner",
      }
    );
    console.log("id in after update", state.id);
    strapi.entityService.update("api::ownership-log.ownership-log", state.id, {
      data: {
        time_stamp: params.data.updatedAt,
        edited_by: result.updatedBy,
        author: result.createdBy,
        horse_info: entry.id,
        current_owner: entry.owner.id,
      },
    });
    console.log("reslut is ", result.updatedBy);
  },
};
