'use strict';

/**
 * ownership-log service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ownership-log.ownership-log');
