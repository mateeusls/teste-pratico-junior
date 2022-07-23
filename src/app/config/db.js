const { Pool } = require("pg");

module.exports = new Pool({
  user: "mateeusls",
  host: "localhost",
  port: 5432,
  database: "mateuscompany"
})