'use strict';

/**
 * horse-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::horse-info.horse-info');
