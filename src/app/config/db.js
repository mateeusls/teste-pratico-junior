const { Pool } = require("pg");
require("dotenv").config()

 module.exports = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE
})