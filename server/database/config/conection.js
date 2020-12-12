const { Pool } = require('pg');
require('dotenv').config('./config.env');

let dbUrl = "";


if (process.env.NODE_ENV === "test") {
  dbUrl = process.env.TEST_DB_URL;
} else {
  dbUrl = process.env.DB_URL;
}

const options = {
    connectionString: dbUrl,
    ssl: true
  };
  
  module.exports = new Pool(options);
