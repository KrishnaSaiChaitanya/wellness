'use strict';

/**
 * test-procedure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-procedure.test-procedure');
