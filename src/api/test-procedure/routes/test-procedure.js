'use strict';

/**
 * test-procedure router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-procedure.test-procedure');
