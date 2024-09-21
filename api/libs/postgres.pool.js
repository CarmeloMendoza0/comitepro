const { Pool } = require('pg');

const { config } = require('./../config/config');

const options = { connectionString: config.dbUrl };

if (config.isProd) {
  options.dialectModule = require('pg');
}

const pool = new Pool(options);

module.exports = pool;
