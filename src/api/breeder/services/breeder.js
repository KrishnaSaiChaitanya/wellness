'use strict';

/**
 * breeder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::breeder.breeder');
